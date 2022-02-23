import { Injectable } from '@angular/core';
import data from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataPipelineService {
  public data:any;
  constructor() {
    this.data = data;
   }
}
