import { Component, Input, OnInit} from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
@Component({
  selector: 'app-object-tree-renderer',
  templateUrl: './object-tree-renderer.component.html',
  styleUrls: ['./object-tree-renderer.component.scss']
})
export class ObjectTreeRendererComponent implements OnInit {

  @Input() data: any;
  @Input() parent: any;

  constructor(private globalData: GlobalDataService) { }

  ngOnInit(): void {
    // this.parent = Object.keys(this.data).reduce((prev, curr) => {
    //   return curr + "%%" + prev;
    // })
    // console.log(this.data, this.parent);
  }    

  getType(obj: string){
    const jsonObj = JSON.parse(obj);
    return typeof(jsonObj); 
  }

  getCompositeName(parent: any, currName: any){
    return `${parent}%%${currName}`
  }

  handleValueChange(signature: any, value: any){
    this.reflectChangeGlobally(signature, value); 
  }

  addNewProperty(name: any){
    if(Array.isArray(this.data[name])){
      this.data[name].push(JSON.parse(JSON.stringify(this.data[name][0])));
    } 
    else this.data[name].placeholder = "";
  }

  reflectChangeGlobally(compositeName: any, newVal: any){
    const tokens = compositeName.split("%%");
    let currObj = this.globalData.data;
    let i;

    for(i = 1; i < tokens.length - 1; i++){
      currObj = (currObj as any)[tokens[i]];
    }

    currObj[tokens[i]] = newVal;
    console.log(this.globalData.data);
  }
}
