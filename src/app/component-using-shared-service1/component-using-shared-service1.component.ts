import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service.js';

@Component({
  selector: 'app-component-using-shared-service1',
  templateUrl: './component-using-shared-service1.component.html',
  styleUrls: ['./component-using-shared-service1.component.scss']
})
export class ComponentUsingSharedService1Component implements OnInit {

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    setInterval(() => {
      console.log(this._sharedService.name);
    }, 1000);
  }

}
