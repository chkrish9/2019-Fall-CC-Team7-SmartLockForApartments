import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { JwtModule, JwtHelperService } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
// import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

export function getToken() {
  return localStorage.getItem("id_token");
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    //BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken
      }
    }),
    IonicModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // TimepickerModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JwtHelperService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
