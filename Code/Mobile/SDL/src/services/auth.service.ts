import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loggedIn() {
    //this.loadToken();
    if('true' == localStorage.getItem('isloggedin'))
    return true;
    // return this.jwtHelper.isTokenExpired(null, this.authToken);
    return false;
  }

  getUserType(){
    let user= JSON.parse(localStorage.getItem('user'));
    if(user)
    return user.type;
  }
}
