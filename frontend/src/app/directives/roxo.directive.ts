import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRoxo]'
})
export class RoxoDirective {

  constructor(private el: ElementRef) {
    
    el.nativeElement.style.color = '#a4a4df'
   }

}
