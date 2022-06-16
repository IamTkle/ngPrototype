import { Component } from '@angular/core';
import { DataFetcherService } from './services/data-fetcher.service';
import { GlobalDataService } from './services/global-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestDataRead';
  data: any; 

  constructor(private fetcher: DataFetcherService, private globalData: GlobalDataService){
    globalData.data = this.fetcher.fetchMockAPI();
    this.data = globalData.data;
  }
  
  printObject(){
    console.log(this.globalData);
  }

}
