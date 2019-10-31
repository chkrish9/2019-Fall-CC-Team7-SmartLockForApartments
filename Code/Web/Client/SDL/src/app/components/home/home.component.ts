import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { AuthService } from "src/app/services/common/auth.service";
import { RoomService } from "../../services/room/room.service";
import { Toast, ToasterService } from "angular2-toaster";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  rooms: any = [];
  modalRef: BsModalRef;
  roomscount: number;
  floornumber: number;
  constructor(
    private modalService: BsModalService,
    private router: Router,
    public authService: AuthService,
    private roomService: RoomService,
    private toasterService: ToasterService
  ) {
    this.getAllRooms();
  }

  getAllRooms() {
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }
  ngOnInit() { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-md" });
  }
  createRooms() {
    let newRooms = [];
    for (let ind = 0; ind < this.roomscount; ind++) {
      var room = {
        roomnumber: this.floornumber + "-" + (ind + 1),
        floor: this.floornumber,
        isVacant: true,
        user: null
      };
      newRooms.push(room);
    }
    this.roomService.addRooms(newRooms).subscribe(data => {
      if (data["success"]) {
        var toast: Toast = {
          type: "success",
          title: "Success",
          body: "Rooms added successfully.",
          showCloseButton: true
        };
        this.toasterService.pop(toast);
        this.floornumber = null;
        this.roomscount = null;
        this.getAllRooms();
      } else {
        var toast: Toast = {
          type: "error",
          title: "Error",
          body: "Rooms failed to added.",
          showCloseButton: true
        };
        this.toasterService.pop(toast);
      }
    });
    this.modalRef.hide();
  }
  filter() {

  }
  goToApartment(roomno, userid) {
    localStorage.setItem("roomnumber", roomno);
    localStorage.setItem("userId", userid);
    this.router.navigate(["apartment"]);
  }
  closeModal() {
    this.modalRef.hide();
  }
}
