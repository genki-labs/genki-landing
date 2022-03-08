import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupStatusService {
  public toggleStatus : boolean = false;
  constructor() { }
  toggle(){
    this.toggleStatus = !this.toggleStatus;
  }
}
