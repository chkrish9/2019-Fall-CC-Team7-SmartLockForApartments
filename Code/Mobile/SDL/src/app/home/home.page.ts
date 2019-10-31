import { Component } from "@angular/core";
import { AuthService } from "../../services/common/auth.service";
import { AlertController, ToastController } from "@ionic/angular";
import { RoomService } from "src/services/room/room.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  rooms: any = [];
  constructor(
    public authService: AuthService,
    private roomService: RoomService,
    public toastCtrl: ToastController,
    public alertController: AlertController
  ) {
    this.getAllRooms();
  }

  getAllRooms() {
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }
  createRooms(floornumber, roomscount) {
    let newRooms = [];
    for (let ind = 0; ind < roomscount; ind++) {
      var room = {
        roomnumber: floornumber + "-" + (ind + 1),
        floor: floornumber,
        isVacant: true,
        user: null
      };
      newRooms.push(room);
    }
    this.roomService.addRooms(newRooms).subscribe(data => {
      if (data["success"]) {
        this.presentToast("Rooms added successfully.");
        this.getAllRooms();
      } else {
        this.presentToast("Rooms failed to added.");
      }
    });
  }
  goToApartment(roomno) {
    //this.router.navigate(['apartment']);
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: "Create Rooms",
      inputs: [
        {
          name: "floor",
          type: "text"
        },
        {
          name: "roomcount",
          type: "text"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: data => {
            console.log(data);
            let floor = parseInt(data.floor);
            let roomcount = parseInt(data.roomcount);
            this.createRooms(floor, roomcount);
          }
        }
      ]
    });

    await alert.present();
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
