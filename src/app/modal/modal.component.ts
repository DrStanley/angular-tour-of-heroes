import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { faSmile, faSadCry, faMeh } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  title = 'ng-bootstrap-modal-demo';
  closeResult?: string;
  modalOptions?: NgbModalOptions;
  smileface = faSmile;
  sadface = faSadCry;
  neutralface = faMeh;
  pos = 0;
  questions = ['How was your exam?', 'How is webtest?'];
  question?: string;
  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    }
  }

  ngOnInit(): void {
    this.pos=0;
    this.question = this.questions[this.pos];
    console.log(this.question);
  }

  open(content: any) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log('lkgnvcb '+this.closeResult);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // open() {
  //   const modalRef = this.modalService.open(MymodalComponent);
  //   modalRef.componentInstance.my_modal_title = 'I your title';
  //   modalRef.componentInstance.my_modal_content = 'I am your content';
  // }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  facecliked(face: string) {
    this.pos++;
    if (this.pos <= 1) {
      this.question = this.questions[this.pos];
    }
    console.log(face);
  }
}
