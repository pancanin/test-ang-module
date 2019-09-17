import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-component-using-shared-service2',
  templateUrl: './component-using-shared-service2.component.html',
  styleUrls: ['./component-using-shared-service2.component.scss']
})
export class ComponentUsingSharedService2Component implements OnInit {

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    console.log('setting different value to name variable in shared service');
    this._sharedService.name = 'shared service 2 set this value';
  }

}
