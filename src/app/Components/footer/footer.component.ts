import { Component, OnInit } from '@angular/core';
import { DataPipelineService } from 'src/app/Service/data-pipeline.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  public Data:any;
  public mobileToggle: boolean = false;
  constructor(public abstractData: DataPipelineService) { 
    this.Data = abstractData.data.Footer;
  }
  ngOnInit(): void {
  }

}
