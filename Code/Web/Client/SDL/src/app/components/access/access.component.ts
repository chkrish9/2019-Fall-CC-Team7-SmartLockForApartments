import { Component, OnInit } from "@angular/core";
import { ToasterService, Toast } from "angular2-toaster";
import { TimepickerConfig } from "ngx-bootstrap/timepicker";
import { AccessService } from "../../services/access/access.service";

// such override allows to keep some initial values

export function getTimepickerConfig(): TimepickerConfig {
  return Object.assign(new TimepickerConfig(), {
    showMeridian: false,
    readonlyInput: false,
    mousewheel: true,
    showMinutes: true,
    showSeconds: false
  });
}
@Component({
  selector: "app-access",
  templateUrl: "./access.component.html",
  styleUrls: ["./access.component.css"],
  providers: [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]
})
export class AccessComponent implements OnInit {
  accesses: any;
  access: any = {
    roomnumber: "",
    type: "",
    code: "",
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
  constructor(private toasterService: ToasterService, private accessService: AccessService) {
    this.minDate = new Date("12-2-2019");
    this.access.roomnumber = localStorage.getItem("roomnumber");
    //this.getAccessCode();
  }

  ngOnInit() { }

  getAccessCode() {
    this.accessService.getAllByRommno(this.access.roomnumber).subscribe((data) => {
      this.accesses = data;
    });
  }
  choose(value) {
    let type = value;
    let roomnumber = localStorage.getItem("roomnumber");
    this.access.code = "";
    this.getAccessByTypeAndRoom(type, roomnumber);
  }

  getAccessByTypeAndRoom(type, roomnumber) {
    this.accessService.getByTypeAndRoomno(type, roomnumber).subscribe((data) => {
      if (data["length"] > 0) {
        if (type === "code" || type === "otcode") {
          if (data["length"] > 0) {
            this.access = data[0];
            this.isNew = false;
          }

        }
        else {
          this.access = {
            roomnumber: "",
            type: "",
            code: "",
            dateOfEntry: "",
            startTime: "",
            endTime: "",
            active: false
          };
          this.access.type = "scode"
          this.accesses = data;
        }
      } else {
        this.isNew = true;
        this.access.type = type;
      }
    });
  }
  showInput() {
    this.showcode = true;
  }
  generateCode() {
    this.accessService.generateCode().subscribe((data) => {
      this.access.code = data.toString();
    });
  }
  dateChanged($event) {
    this.access.dateOfEntry = $event;
    this.access = this.getCode();
    if (this.access.startTime === "") this.access.startTime = 0;
    if (this.access.endTime === "") this.access.endTime = 0;
    this.access.dateOfEntry = $event;
  }

  save() {
    this.access.active = true;
    this.access.roomnumber = localStorage.getItem("roomnumber");
    this.access.dateOfEntry = this.access.dateOfEntry !== "" ? this.formateDate(this.access.dateOfEntry) : "";
    this.access.startTime = this.access.startTime !== "" ? this.getTime(this.access.startTime) : "";
    this.access.endTime = this.access.endTime !== "" ? this.getTime(this.access.endTime) : "";
    this.accessService.addAccess(this.access).subscribe((data) => {
      //this.access = data;
      if (this.access.type === 'scode') {
        this.getAccessByTypeAndRoom(this.access.type, this.access.roomnumber);
      }
      var toast: Toast = {
        type: "success",
        title: "Success",
        body: "Code saved successfully.",
        showCloseButton: true
      };
      this.toasterService.pop(toast);
    });
  }

  update() {
    this.access.active = true;
    this.access.roomnumber = localStorage.getItem("roomnumber");
    this.access.dateOfEntry = this.access.dateOfEntry !== "" ? this.formateDate(this.access.dateOfEntry) : "";
    this.access.startTime = this.access.startTime !== "" ? this.getTime(this.access.startTime) : "";
    this.access.endTime = this.access.endTime !== "" ? this.getTime(this.access.endTime) : "";
    this.accessService.updateAccess(this.access).subscribe((data) => {
      if (this.access.type === 'scode') {
        this.getAccessByTypeAndRoom(this.access.type, this.access.roomnumber);
      }
      var toast: Toast = {
        type: "success",
        title: "Success",
        body: "Code updated successfully.",
        showCloseButton: true
      };
      this.toasterService.pop(toast);
    });
  }
  cancel() { }

  getCode() {
    let codes = this.accesses;
    let code = {
      roomnumber: "",
      type: "",
      code: "",
      dateOfEntry: "",
      startTime: "",
      endTime: "",
      active: false
    };
    for (let i = 0; i < codes.length; i++) {
      if (
        codes[i].type === "scode" &&
        this.formateDate(new Date(this.access.dateOfEntry)) ===
        this.formateDate(new Date(codes[i].dateOfEntry))
      ) {
        code.code = codes[i].code;
        code.type = codes[i].type;
        code.dateOfEntry = this.access.dateOfEntry;
        code["_id"] = codes[i]._id;
        code.startTime = this.setDate(codes[i].startTime).toString();
        code.endTime = this.setDate(codes[i].endTime).toString();
        this.isNew = false;
      }
    }
    if (code.type === "") {
      code.type = 'scode';
      code.startTime = this.setDate("0:0").toString();
      code.endTime = this.setDate("0:0").toString();
      this.isNew = true;
    }
    return code;
  }

  formateDate(dateObj) {
    return (
      dateObj.getFullYear() +
      "/" +
      ("0" + (dateObj.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + dateObj.getDate()).slice(-2)
    );
  }

  setDate(time) {
    var d = new Date();
    d.setHours(time.split(':')[0]);
    d.setMinutes(time.split(':')[1]);
    return d;
  }
  getTime(dateObj) {
    return (
      dateObj.getHours() + ":" + dateObj.getMinutes()
    );
  }
}
