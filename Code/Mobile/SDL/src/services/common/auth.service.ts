import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastController } from "@ionic/angular";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  isDev: boolean;
  user: any;
  privillages: any;
  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    public toastCtrl: ToastController
  ) {
    this.isDev = true;
  }

  authenticateUser(user) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = this.prepEndpoint("login/authenticate");
    return this.http.post(url, user, { headers: headers });
  }

  storeUserData(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem(
      "user",
      typeof user === "string" ? user : JSON.stringify(user)
    );
    this.authToken = token;
    this.user = user;
  }

  loggedIn() {
    this.loadToken();
    return this.authToken !== null && !this.jwtHelper.isTokenExpired();
  }

  getUserType() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) return user.type;
  }
  loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  forgotPassword(username) {
    var user = {
      username: username
    };
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    let url = this.prepEndpoint("login/forgotPassword");
    return this.http.post(url, user, { headers: headers });
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  storeRoute(route) {
    localStorage.setItem("current_route", route);
  }

  isRouteDisplay(route) {
    if (route === localStorage.getItem("current_route")) {
      return true;
    } else {
      return false;
    }
  }

  prepEndpoint(ep) {
    if (!this.isDev) {
      return ep;
    } else {
      return "https://peaceful-springs-95779.herokuapp.com/" + ep;
      //return "http://localhost:3000/" + ep;
    }
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      position: "top",
      duration: 3000
    });
    toast.present();
  }
}
