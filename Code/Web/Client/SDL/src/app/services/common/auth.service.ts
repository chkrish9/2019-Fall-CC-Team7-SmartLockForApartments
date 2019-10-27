import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  isDev: boolean;
  user: any;
  privillages: any;
  constructor(
    private http: HttpClient,
    //public jwtHelper: JwtHelperService
  ) { 
    this.isDev = true;
  }

  authenticateUser(user) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = this.prepEndpoint('login/authenticate');
    return this.http.post(url, user, { headers: headers });
  }

  storeUserData(token, user, privillages) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', (typeof (user) === "string") ? user : JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    this.privillages = privillages;
  }

  loggedIn() {
    this.loadToken();
    if('true' == localStorage.getItem('isloggedin'))
    return true;
    // return this.jwtHelper.isTokenExpired(null, this.authToken);
    return false;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // checkPrivilege(routename) {
  //   if (this.privillages.indexOf(routename) > -1)
  //     return true;
  // }

  // getUserPrivillages() {
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': this.getToken()
  //   });
  //   let url = this.prepEndpoint('login/privillages/' + this.getUser().id);
  //   return this.http.get(url, { headers: headers });
  // }

  forgotPassword(username) {
    var user = {
      "username":username
    }
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = this.prepEndpoint('login/forgotPassword');
    return this.http.post(url, user, { headers: headers });
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  storeRoute(route) {
    localStorage.setItem('current_route', route);
  }

  isRouteDisplay(route) {
    if (route === localStorage.getItem('current_route')) {
      return true;
    } else {
      return false;
    }
  }

  prepEndpoint(ep) {
    if (!this.isDev) {
      return ep;
    } else {
      return 'https://fms-2018.herokuapp.com/' + ep;
    }
  }

}
