import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amTimeAgo'
})
export class AmTimeAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
