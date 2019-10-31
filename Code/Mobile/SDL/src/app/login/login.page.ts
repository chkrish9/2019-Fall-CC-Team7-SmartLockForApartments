import { Component, OnInit } from "@angular/core";
import { ToastController, AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { AuthService } from "src/services/common/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";
  constructor(
    private router: Router,
    private authService: AuthService,
    public toastCtrl: ToastController,
    public alertController: AlertController
  ) {}

  ngOnInit() {}
  login() {
    //login using local storage
    if (this.username !== "" && this.password !== "") {
      const user = {
        username: this.username,
        password: this.password
      };
      this.authService.authenticateUser(user).subscribe(data => {
        console.log(JSON.stringify(data));
        if (data["success"]) {
          this.authService.storeUserData(data["token"], data["user"]);
          console.log("Logged In");
          if (data["user"].type !== "admin")
            localStorage.setItem("userId", data["user"].id);
          this.router.navigate(["/home"]);
        } else {
          this.presentToast("Invalid UserName/Password");
        }
      });
    } else {
      this.presentToast("Please fill all the details and login.");
    }
  }

  sendMail(username) {
    if (username != "") {
      this.authService.forgotPassword(username).subscribe(data => {
        username = "";
        this.presentToast(
          "An email has been sent. please check your email for temporary password."
        );
      });
    } else {
      this.presentToast("Please fill the username.");
    }
  }

  async presentForgotPasswordPrompt() {
    const alert = await this.alertController.create({
      header: "Forgot Password",
      inputs: [
        {
          name: "username",
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
          text: "Send",
          handler: data => {
            console.log(data);
            let username = data.username;
            this.sendMail(username);
          }
        }
      ]
    });
    await alert.present();
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
      position: "top",
      duration: 3000
    });
    toast.present();
  }
}
