import { Component, OnInit } from '@angular/core';
import { DataPipelineService } from 'src/app/Service/data-pipeline.service';

@Component({
  selector: 'app-channel-feature',
  templateUrl: './channel-feature.component.html',
  styles: [
  ]
})
export class ChannelFeatureComponent implements OnInit {

  public Data:any;
  public mobileToggle: boolean = false;
  constructor(public abstractData: DataPipelineService) { 
    this.Data = abstractData.data.Feature3;
  }
  ngOnInit(): void {
  }

}
