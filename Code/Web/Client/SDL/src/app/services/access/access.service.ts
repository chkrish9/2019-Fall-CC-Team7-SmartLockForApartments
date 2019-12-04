import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { AuthService } from "../common/auth.service";

@Injectable({
  providedIn: "root"
})
export class AccessService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  addAccess(access) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("access/create");
    return this.http.post(url, access, { headers: headers });
  }

  updateAccess(access) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("access/update/");
    url = url + access._id;
    return this.http.put(url, access, { headers: headers });
  }

  deleteAccess(id) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("access/delete/");
    return this.http.delete(url + id, { headers: headers });
  }

  getAccess() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("access/all/");
    return this.http.get(url, { headers: headers });
  }

  generateCode() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("access/generatecode/");
    return this.http.get(url, { headers: headers });
  }

  getAllByRommno(roomno) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("access/allbyrommno/");
    return this.http.get(url + roomno, { headers: headers });
  }

  getAccessByCode(code) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("access/get/");
    return this.http.get(url + code, { headers: headers });
  }

  getByTypeAndRoomno(type, roomno) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("access/gettyperoomno/");
    return this.http.get(url + type + roomno, { headers: headers });
  }
}
