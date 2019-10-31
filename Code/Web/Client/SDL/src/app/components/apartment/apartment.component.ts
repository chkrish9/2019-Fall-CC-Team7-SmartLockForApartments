import { Component, OnInit } from '@angular/core';
import { Toast, ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/common/auth.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  constructor(
    private toasterService: ToasterService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {
    if (localStorage.getItem("userId") !== null && localStorage.getItem("userId") !== "null") {
      this.getUserById(localStorage.getItem("userId"));
      this.isNew = false;
    }
  }

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
  isNew: boolean = true;
  new() {
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

  save() {
    if (this.user.firstName !== "" &&
      this.user.lastName !== "" &&
      this.user.email !== "" &&
      this.user.phone !== "" &&
      this.user.username !== "" &&
      this.user.password !== "" &&
      this.user.dateOfJoin !== "" &&
      this.user.cnfpassword !== "") {
      if (this.user.password === this.user.cnfpassword) {
        this.user["type"] = "tenant";
        this.user["roomId"] = localStorage.getItem("roomnumber");
        this.userService.addUser(this.user).subscribe(data => {
          if (data["success"]) {
            var toast: Toast = {
              type: 'success',
              title: 'Success',
              body: 'User saved successfully.',
              showCloseButton: true
            };
            this.toasterService.pop(toast);
            this.isNew = false;
            this.getUserById(data["id"])
          } else {
            var toast: Toast = {
              type: "error",
              title: "Error",
              body: "User failed to added.",
              showCloseButton: true
            };
            this.toasterService.pop(toast);
          }
        });
      } else {
        var toast: Toast = {
          type: 'error',
          title: 'Error',
          body: 'Password mismatch.',
          showCloseButton: true
        };
        this.toasterService.pop(toast);
      }
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

  getUserById(id) {
    this.userService.getUserById(id).subscribe(data => {
      if (data !== null) {
        this.user.firstName = data["firstName"];
        this.user.lastName = data["lastName"];
        this.user.email = data["email"];
        this.user.phone = data["phone"];
        this.user.username = data["username"];
        this.user.password = data["password"];
        this.user.dateOfJoin = data["dateOfJoin"];
      } else {
        var toast: Toast = {
          type: 'error',
          title: 'Error',
          body: 'There is some issue please contact admin.',
          showCloseButton: true
        };
        this.toasterService.pop(toast);
      }
    });
  }
  delete() {
    this.userService.deleteUser(localStorage.getItem("userId") ).subscribe(data => {
      if (data["success"]) {
        var toast: Toast = {
          type: 'success',
          title: 'Success',
          body: 'User deleted successfully.',
          showCloseButton: true
        };
        this.toasterService.pop(toast);
        localStorage.removeItem("userId");
        this.new()
      } else {
        var toast: Toast = {
          type: 'error',
          title: 'Error',
          body: 'There is some issue please contact admin.',
          showCloseButton: true
        };
        this.toasterService.pop(toast);
      }
    });
  }
  update() {
    this.userService.updateUser(this.user).subscribe(data => {
      if (data["success"]) {
        var toast: Toast = {
          type: 'success',
          title: 'Success',
          body: 'User updated successfully.',
          showCloseButton: true
        };
        this.toasterService.pop(toast);
        this.getUserById(data["id"])
      } else {
        var toast: Toast = {
          type: 'error',
          title: 'Error',
          body: 'There is some issue please contact admin.',
          showCloseButton: true
        };
        this.toasterService.pop(toast);
      }
    });
  }
}
