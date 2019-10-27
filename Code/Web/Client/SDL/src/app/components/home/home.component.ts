import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthService } from 'src/app/services/common/auth.service';

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
    private modalService: BsModalService,
    private router: Router,
    private authService: AuthService
  ) {
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
  goToApartment(roomno){
    this.router.navigate(['apartment']);
  }
  closeModal() {
    this.modalRef.hide();
  }
}
