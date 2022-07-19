import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'formateador'
})
export class FormateadorPipe implements PipeTransform {

  constructor(
    private domSanitizer: DomSanitizer,
  ) { }
  transform(value: string, color: string = "", negrita: string = "", transform: string = ""): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(`<span style="color: ${color}; font-weigth: ${negrita}; text-transform: ${transform}">${value}</span>`);
  }

}
