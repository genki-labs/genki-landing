import { Component, OnInit } from '@angular/core';
import { DataPipelineService } from 'src/app/Service/data-pipeline.service';

@Component({
  selector: 'app-users-feature',
  templateUrl: './users-feature.component.html',
  styles: [
  ]
})
export class UsersFeatureComponent implements OnInit {

  public Data:any;
  public mobileToggle: boolean = false;
  constructor(public abstractData: DataPipelineService) { 
    this.Data = abstractData.data.Feature1;
  }
  ngOnInit(): void {
  }

}
