import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";
  constructor(
    private router: Router,
    public toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }
  login() {

    //login using local storage
    if (this.username !== "" && this.password !== "") {

      const user = {
        username: this.username,
        password: this.password
      }
      if ((user.username === 'admin' && user.password === 'admin') || (user.username === 'rama' && user.password === '1234')) {
        if (this.username == 'admin') {
          let loggedUser = {
            username: this.username,
            type: 'admin'
          }
          localStorage.setItem('user', JSON.stringify(loggedUser));
        } else {
          let loggedUser = {
            username: this.username,
            type: 'tenant'
          }
          localStorage.setItem('user', JSON.stringify(loggedUser));
        }
        localStorage.setItem('isloggedin', 'true');
        this.router.navigate(['/home']);
      }

      // this.authService.authenticateUser(user).subscribe(data => {
      //   console.log("hi");
      //   console.log(JSON.stringify(data));
      //   if (data["success"]) {
      //     this.authService.storeUserData(data["token"], data["user"], data["privillages"]);
      //     console.log("Logged In");
      //     this.navCtrl.setRoot(HomePage);
      //   } else {
      //     this.presentToast("Invalid UserName/Password");
      //   }
      // });
    } else {
      this.presentToast("Please fill all the details and login.");
    }
  }
  /*
    This method will show the Toast messages.
  */
  //  presentToast(msg) {
  //   let toast = this.toastCtrl.create({
  //     message: msg,
  //     duration: 3000,
  //     position: 'top'
  //   });

  //   toast.onDidDismiss(() => {
  //     console.log('Dismissed toast');
  //   });

  //   toast.present();
  // }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 3000,
    });
    toast.present();
  }
}
