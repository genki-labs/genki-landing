import { Component, OnInit } from '@angular/core';
import { DataPipelineService } from 'src/app/Service/data-pipeline.service';
import { PopupStatusService } from 'src/app/Service/popup-status.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  public Hero:any;
  public mobileToggle: boolean = false;
  constructor(public abstractData: DataPipelineService, public togglePopup: PopupStatusService) { 
    this.Hero = abstractData.data.Hero
  }
  ngOnInit(): void {
  }

}
