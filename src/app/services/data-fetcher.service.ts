import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {mockDataWithValues as mockData}from "../mockData"

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {

  constructor(private http: HttpClient) { }

  fetchMockAPI(){
    return mockData;
  }
}
