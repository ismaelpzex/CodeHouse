import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarString'
})
export class RecortarStringPipe implements PipeTransform {

  transform(value: string, ...arg: any[]): string {
    return value.split(" ").slice(0, (arg[0] !== undefined) ? arg[0] : 20).join(" ").concat(` ${(arg[1] !== undefined) ? arg[1] : '...'}`);
  }

}
