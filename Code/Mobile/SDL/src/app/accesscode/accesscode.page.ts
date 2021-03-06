import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesscode',
  templateUrl: './accesscode.page.html',
  styleUrls: ['./accesscode.page.scss'],
})
export class AccesscodePage implements OnInit {
  access: any = {
    type: "",
    code: "",
    otcode: "",
    scode: "",
    dateOfEntry: "",
    startTime: "",
    endTime: "",
    active: false
  };
  minDate: Date;
  showcode: boolean = false;
  showotcode: boolean = false;
  showscode: boolean = false;
  isNew: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  choose(value) {
    this.access.type = value;
    this.access = this.getCode();
    if (this.access.type === "scode") {
      this.access.dateOfEntry = "";
      this.access.scode = "";
    }
  }
  showInput() {
    this.showcode = true;
  }
  generateCode() {
    let code = Math.floor(100000 + Math.random() * 900000);
    if (this.access.type === "otcode") {
      this.access.otcode = code.toString();
      this.showotcode = true;
    }
    if (this.access.type === "scode") {
      this.access.scode = code.toString();
      this.showscode = true;
    }
  }
  dateChanged($event) {
    this.access.dateOfEntry = $event;
    this.access = this.getCode();
    if (this.access.startTime === "")
      this.access.startTime = 0;
    if (this.access.endTime === "")
      this.access.endTime = 0;
  }

  save() {
    let codes = [];
    if (localStorage.getItem("codes") !== undefined && localStorage.getItem("codes") !== null)
      codes = JSON.parse(localStorage.getItem("codes"));
    codes.push(this.access);
    localStorage.setItem("codes", JSON.stringify(codes));
    // var toast: Toast = {
    //   type: 'success',
    //   title: 'Success',
    //   body: 'Code saved successfully.',
    //   showCloseButton: true
    // };
   // this.toasterService.pop(toast);
  }

  update() {
    let codes = JSON.parse(localStorage.getItem("codes"));
    for (let i = 0; i < codes.length; i++) {
      if (this.access.type === codes[i].type) {
        if (codes[i].type === 'scode' && this.access.dateOfEntry === codes[i].dateOfEntry) {
          codes[i] = this.access;
        } else {
          codes[i] = this.access;
        }
      }
    }
    localStorage.setItem("codes", JSON.stringify(codes));
    // var toast: Toast = {
    //   type: 'success',
    //   title: 'Success',
    //   body: 'Code updated successfully.',
    //   showCloseButton: true
    // };
    // this.toasterService.pop(toast);
  }
  cancel() {

  }

  getCode() {
    let codes = JSON.parse(localStorage.getItem("codes"));
    let code = {
      type: "",
      code: "",
      otcode: "",
      scode: "",
      dateOfEntry: "",
      startTime: "",
      endTime: "",
      active: false
    };
    for (let i = 0; i < codes.length; i++) {
      if (this.access.type === codes[i].type) {
        if (codes[i].type === 'scode' && this.formateDate(new Date(this.access.dateOfEntry)) === this.formateDate(new Date(codes[i].dateOfEntry))) {
          code.scode = codes[i].scode;
          code.type = codes[i].type;
          code.dateOfEntry = this.access.dateOfEntry;
          code.startTime = codes[i].startTime;
          code.endTime = codes[i].endTime;

          this.access.startTime = new Date(codes[i].startTime);
          this.access.endTime = new Date(codes[i].endTime);
          this.isNew = false;
        } else if (codes[i].type !== 'scode') {
          code = codes[i];
          this.isNew = false;
        } else if (codes[i].type === 'scode') {
          code.type = 'scode';
          code.dateOfEntry = this.access.dateOfEntry;

          this.access.startTime = 0;
          this.access.endTime = 0;
          this.isNew = true;
        }
      } else {
        this.access.scode = "";
        this.access.otcode = "";
        this.access.code = "";

        this.access.startTime = 0;
        this.access.endTime = 0;
      }
    }
    return code;
  }

  formateDate(dateObj) {
    return dateObj.getFullYear() + '-' +
      ('0' + (dateObj.getMonth() + 1)).slice(-2) + '-' +
      ('0' + dateObj.getDate()).slice(-2);
  }
}
