import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ToasterModule } from "angular2-toaster";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { JwtModule, JwtHelperService } from "@auth0/angular-jwt";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";

import { AuthService } from "./services/common/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { HeaderComponent } from "./components/common/header/header.component";
import { SidemenuComponent } from "./components/common/sidemenu/sidemenu.component";
import { ApartmentComponent } from "./components/apartment/apartment.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "apartment", component: ApartmentComponent, canActivate: [AuthGuard] }
];

export function getToken() {
  return localStorage.getItem("id_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidemenuComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken
      }
    }),
    ModalModule.forRoot(),
    ToasterModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule {}
