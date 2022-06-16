import { Injectable } from '@angular/core';
import mockData from '../mockData';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  _data: any = mockData;

  constructor() { }

  get data(){
    return this._data;
  }

  set data(data: any){
    this._data = data;
  }
}
