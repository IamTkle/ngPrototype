import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString'
})
export class ToStringPipe implements PipeTransform {

  transform(value: any, ): string{
    if(typeof value === 'object') return value.toString();
    else return value + "";
  }

}
