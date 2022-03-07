import { Component, OnInit } from '@angular/core';
import { DataPipelineService } from 'src/app/Service/data-pipeline.service';

@Component({
  selector: 'app-project-feature',
  templateUrl: './project-feature.component.html',
  styles: [
  ]
})
export class ProjectFeatureComponent implements OnInit {

  public Data:any;
  public mobileToggle: boolean = false;
  constructor(public abstractData: DataPipelineService) { 
    this.Data = abstractData.data.Feature2;
  }
  ngOnInit(): void {
  }

}
