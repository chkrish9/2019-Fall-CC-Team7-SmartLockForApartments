import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "src/services/common/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public adminPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    }
  ];
  public userPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    },
    {
      title: "Profile",
      url: "/profile"
    },
    {
      title: "AccessCode",
      url: "/accesscode"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logoutClicked() {
    console.log("Logout");
    this.router.navigate(["/"]);
  }
}
