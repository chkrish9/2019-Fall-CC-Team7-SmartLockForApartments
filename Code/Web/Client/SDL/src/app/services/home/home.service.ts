import { Injectable } from '@angular/core';
import { AuthService } from '../common/auth.service';
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private authService: AuthService) {}
  getAllByRommno(roomno) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("home/all/");
    return this.http.get(url + roomno, { headers: headers });
  }
}
