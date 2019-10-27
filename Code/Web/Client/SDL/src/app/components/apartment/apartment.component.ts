import { Component, OnInit } from '@angular/core';
import { Toast, ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/common/auth.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  constructor(
    private toasterService: ToasterService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  user = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "phone": "",
    "username": "",
    "password": "",
    "dateOfJoin": "",
    "cnfpassword": ""
  };
  users: any;
  isList: boolean = true;
  isNew: boolean = true;
  new() {
    this.isList = false;
    this.isNew = true;
    this.user = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "phone": "",
      "username": "",
      "password": "",
      "dateOfJoin": "",
      "cnfpassword": ""
    };
  }
  back() {
    this.router.navigate(['home']);
  }

  getAllUsers() {
    // this.userService.getUsers().subscribe(data => {
    //   this.users = data;
    // });
  }

  save() {
    if (this.user.firstName !== "" &&
      this.user.lastName !== "" &&
      this.user.email !== "" &&
      this.user.phone !== "" &&
      this.user.username !== "" &&
      this.user.password !== "" &&
      this.user.dateOfJoin !== "" &&
      this.user.cnfpassword !== "") {
      // if (this.user.password === this.user.cnfpassword) {
      //   this.userService.addUser(this.user).subscribe(data => {
      //     var toast: Toast = {
      //       type: 'success',
      //       title: 'Success',
      //       body: 'User saved successfully.',
      //       showCloseButton: true
      //     };
      //     this.toasterService.pop(toast);
      //     this.isList = true;
      //     this.getAllUsers();
      //   });
      // }else{
      //   var toast: Toast = {
      //     type: 'error',
      //     title: 'Error',
      //     body: 'Password mismatch.',
      //     showCloseButton: true
      //   };
      //   this.toasterService.pop(toast);
      // }
    } else {
      var toast: Toast = {
        type: 'error',
        title: 'Error',
        body: 'Please fill the all the details.',
        showCloseButton: true
      };
      this.toasterService.pop(toast);
    }
  }
  delete() {
    // this.userService.deleteUser(this.user["_id"]).subscribe(data => {
    //   var toast: Toast = {
    //     type: 'success',
    //     title: 'Success',
    //     body: 'User deleted successfully.',
    //     showCloseButton: true
    //   };
    //   this.toasterService.pop(toast);
    //   this.isList = true;
    //   this.getAllUsers();
    // });
  }
  update() {
    // this.userService.updateUser(this.user).subscribe(data => {
    //   var toast: Toast = {
    //     type: 'success',
    //     title: 'Success',
    //     body: 'User updated successfully.',
    //     showCloseButton: true
    //   };
    //   this.toasterService.pop(toast);
    //   this.isList = true;
    //   this.getAllUsers();
    // });
  }
  cancel() {
    // this.isList = true;
  }
}
