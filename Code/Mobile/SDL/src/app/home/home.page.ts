import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rooms: any=[];
  constructor(
    public authService:AuthService,
    public alertController: AlertController
  ) {}
  createRooms() {
    // for(let ind=0;ind<this.roomnumber;ind++){
    //   var room = {
    //     "roomno":ind+1,
    //     "vacant":true,
    //   }
    //   this.rooms.push(room);
    // }
  }
  goToApartment(roomno){
    //this.router.navigate(['apartment']);
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Create Rooms',
      inputs: [
        {
          name: 'room',
          type: 'text',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
            let roomnumb=parseInt(data.room);
            for(let ind=0;ind<roomnumb;ind++){
              var room = {
                "roomno":ind+1,
                "vacant":true,
              }
              this.rooms.push(room);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
