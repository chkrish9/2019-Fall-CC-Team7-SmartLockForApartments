import { Injectable } from "@angular/core";
import { AuthService } from "../common/auth.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  addRooms(rooms) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("room/createrooms");
    return this.http.post(url, rooms, { headers: headers });
  }

  addRoom(room) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("room/create");
    return this.http.post(url, room, { headers: headers });
  }

  updateRoom(room) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("room/update/");
    url = url + `${room._id}`;
    return this.http.put(url, room, { headers: headers });
  }

  deleteRoom(id) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("room/delete/");
    return this.http.delete(url + id, { headers: headers });
  }

  getRooms() {
    // let headers = new HttpHeaders().set(
    //   "Authorization",
    //   this.authService.getToken()
    // );
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authService.getToken()
    });
    let url = this.authService.prepEndpoint("room/all/");
    return this.http.get(url, { headers: headers });
  }
}
