import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rooms: any=[];
  modalRef: BsModalRef;
  roomnumber:number;
  constructor(
    private modalService: BsModalService
  ) {
    // this.rooms = [
    //   {
    //     "roomno":1,
    //     "vacant":true,
    //   },
    //   {
    //     "roomno":2,
    //     "vacant":false,
    //   },
    //   {
    //     "roomno":3,
    //     "vacant":true,
    //   }
    // ]
   }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }
  createRooms() {
    for(let ind=0;ind<this.roomnumber;ind++){
      var room = {
        "roomno":ind+1,
        "vacant":true,
      }
      this.rooms.push(room);
    }
    this.modalRef.hide();
  }

  closeModal() {
    this.modalRef.hide();
  }
}
