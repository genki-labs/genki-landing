import { Component, OnInit } from '@angular/core';
import { DataPipelineService } from 'src/app/Service/data-pipeline.service';

@Component({
  selector: 'app-about-genki',
  templateUrl: './about-genki.component.html',
  styles: [
  ]
})
export class AboutGenkiComponent implements OnInit {

  public Data:any;
  public mobileToggle: boolean = false;
  constructor(public abstractData: DataPipelineService) { 
    this.Data = abstractData.data.Feature4;
  }
  ngOnInit(): void {
  }

}
