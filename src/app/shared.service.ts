import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _name = 'default value';
  constructor() { }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }
}
