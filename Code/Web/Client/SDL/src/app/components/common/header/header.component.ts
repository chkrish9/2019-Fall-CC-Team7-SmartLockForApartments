import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/common/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  public name:string;
  constructor(
    private authService:AuthService,
    private router:Router
  ) {
   }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    console.log("Logout");
    this.router.navigate(['/']);
    this.isCollapsed = !this.isCollapsed
    return false;
  }

  getUsername(){
    let user= JSON.parse(localStorage.getItem('user'));
    if(user)
    return user.username;
  }

}
