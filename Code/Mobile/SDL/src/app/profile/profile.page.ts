import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = {
    "firstName": "Murali",
    "lastName": "C",
    "email": "mcmc5@mail.umkc.edu",
    "phone": "123456789",
    "username": "mcmc5",
    "password": "1234",
    "dateOfJoin": "10-07-2019",
    "cnfpassword": ""
  };
  constructor() { }

  ngOnInit() {
  }
  back() {
    //this.router.navigate(['home']);
  }

  save() {
    // if (this.user.firstName !== "" &&
    //   this.user.lastName !== "" &&
    //   this.user.email !== "" &&
    //   this.user.phone !== "" &&
    //   this.user.username !== "" &&
    //   this.user.password !== "" &&
    //   this.user.dateOfJoin !== "" &&
    //   this.user.cnfpassword !== "") {
    //   if (this.user.password === this.user.cnfpassword) {
    //     this.user["type"] = "tenant";
    //     this.user["roomId"] = localStorage.getItem("roomnumber");
    //     this.userService.addUser(this.user).subscribe(data => {
    //       if (data["success"]) {
    //         var toast: Toast = {
    //           type: 'success',
    //           title: 'Success',
    //           body: 'User saved successfully.',
    //           showCloseButton: true
    //         };
    //         this.toasterService.pop(toast);
    //         this.isNew = false;
    //         this.getUserById(data["id"])
    //       } else {
    //         var toast: Toast = {
    //           type: "error",
    //           title: "Error",
    //           body: "User failed to added.",
    //           showCloseButton: true
    //         };
    //         this.toasterService.pop(toast);
    //       }
    //     });
    //   } else {
    //     var toast: Toast = {
    //       type: 'error',
    //       title: 'Error',
    //       body: 'Password mismatch.',
    //       showCloseButton: true
    //     };
    //     this.toasterService.pop(toast);
    //   }
    // } else {
    //   var toast: Toast = {
    //     type: 'error',
    //     title: 'Error',
    //     body: 'Please fill the all the details.',
    //     showCloseButton: true
    //   };
    //   this.toasterService.pop(toast);
    // }
  }

  getUserById(id) {
    // this.userService.getUserById(id).subscribe(data => {
    //   if (data !== null) {
    //     this.user.firstName = data["firstName"];
    //     this.user.lastName = data["lastName"];
    //     this.user.email = data["email"];
    //     this.user.phone = data["phone"];
    //     this.user.username = data["username"];
    //     this.user.password = data["password"];
    //     this.user.dateOfJoin = data["dateOfJoin"];
    //   } else {
    //     var toast: Toast = {
    //       type: 'error',
    //       title: 'Error',
    //       body: 'There is some issue please contact admin.',
    //       showCloseButton: true
    //     };
    //     this.toasterService.pop(toast);
    //   }
    // });
  }
  delete() {
    // this.userService.deleteUser(localStorage.getItem("userId") ).subscribe(data => {
    //   if (data["success"]) {
    //     var toast: Toast = {
    //       type: 'success',
    //       title: 'Success',
    //       body: 'User deleted successfully.',
    //       showCloseButton: true
    //     };
    //     this.toasterService.pop(toast);
    //     localStorage.removeItem("userId");
    //     this.new()
    //   } else {
    //     var toast: Toast = {
    //       type: 'error',
    //       title: 'Error',
    //       body: 'There is some issue please contact admin.',
    //       showCloseButton: true
    //     };
    //     this.toasterService.pop(toast);
    //   }
    // });
  }
  update() {
    // this.userService.updateUser(this.user).subscribe(data => {
    //   if (data["success"]) {
    //     var toast: Toast = {
    //       type: 'success',
    //       title: 'Success',
    //       body: 'User updated successfully.',
    //       showCloseButton: true
    //     };
    //     this.toasterService.pop(toast);
    //     this.getUserById(data["id"])
    //   } else {
    //     var toast: Toast = {
    //       type: 'error',
    //       title: 'Error',
    //       body: 'There is some issue please contact admin.',
    //       showCloseButton: true
    //     };
    //     this.toasterService.pop(toast);
    //   }
    // });
  }
}
