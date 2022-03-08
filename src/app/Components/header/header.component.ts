import { Component, OnInit } from '@angular/core';
import { DataPipelineService } from 'src/app/Service/data-pipeline.service';
import { PopupStatusService } from 'src/app/Service/popup-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  public Header:any;
  public mobileToggle: boolean = false;
  constructor(public abstractData: DataPipelineService, public togglePopup: PopupStatusService) { 
    this.Header = abstractData.data
  }

  ngOnInit(): void {
  }

  toggleItems(){
    this.mobileToggle = !this.mobileToggle;
  }

}
