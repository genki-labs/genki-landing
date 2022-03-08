import { Component, OnInit } from '@angular/core';
import { PopupStatusService } from 'src/app/Service/popup-status.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styles: [
  ]
})
export class PopupComponent implements OnInit {

  constructor(public togglePopup: PopupStatusService) { }
  
  ngOnInit(): void {
  }
  noPopup(e:any){
   e.stopPropagation()
  }

}
