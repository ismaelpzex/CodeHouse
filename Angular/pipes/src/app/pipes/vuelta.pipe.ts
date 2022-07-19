import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreDelPipe'
})
export class VueltaPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
