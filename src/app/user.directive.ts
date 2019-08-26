import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUser]'
})
export class UserDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover('#C46D5E');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover('#DAA588');
  }

  private hover(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }


}

