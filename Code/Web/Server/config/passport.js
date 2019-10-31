const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user/user');
const config = require('../config/database');
const jwt = require('jsonwebtoken');

module.exports.configStrategy = function (app, passport) {
    let opts = {};

    //Local
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload);
        User.getUserById(jwt_payload._id, (err, user) => {
            if (err) {
                return done(err, false);
            } else if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}

module.exports.checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');
        let token = bearer[2];
        token = (token === undefined) ? bearer[1] : token;
        req.token = token;

        //verify the JWT token generated for the user
        jwt.verify(req.token, config.secret, (err, authorizedData) => {
            if (err) {
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data 
                next();
            }
        })
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}