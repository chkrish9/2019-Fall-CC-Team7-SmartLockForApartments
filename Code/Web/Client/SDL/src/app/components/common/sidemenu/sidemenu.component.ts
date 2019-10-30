import { Component, OnInit, HostListener } from "@angular/core";
import { AuthService } from "../../../services/common/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.css"]
})
export class SidemenuComponent implements OnInit {
  headerHeight: number;
  windowHeight: number;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.resizeSideMenu();
  }

  ngAfterViewInit() {
    this.resizeSideMenu();
  }
  onLogoutClick() {
    this.authService.logout();
    console.log("Logout");
    this.router.navigate(["/"]);
  }
  resizeSideMenu() {
    this.headerHeight = document.getElementsByClassName("navbar-color")[0][
      "offsetHeight"
    ];
    this.windowHeight = window.innerHeight;
    document.getElementsByClassName("side-navbar")[0]["style"]["height"] =
      this.windowHeight - this.headerHeight + "px";
  }
}
