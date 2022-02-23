import { Component, OnInit } from '@angular/core';
import { DataPipelineService } from 'src/app/Service/data-pipeline.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  public Header:any;
  constructor(public data: DataPipelineService) { 
    this.Header = data.data.Header
  }

  ngOnInit(): void {
  }

}
