import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'amFromUnix'
})
export class AmFromUnixPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let date = new Date(value * 1000);
    let hours = date.getHours();
    let minutes = '0' + date.getMinutes();
    let seconds = '0' + date.getSeconds();
    return  hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  }
}
