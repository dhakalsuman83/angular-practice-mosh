import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @HostListener('focus') onFocus() {
  //   console.log("on focus")
  // }
  @Input('format') format?: string;
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase()
      
    } else {
      this.el.nativeElement.value = value.toUpperCase()
    }

  }


}
