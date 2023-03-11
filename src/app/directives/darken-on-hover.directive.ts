import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]',
})
export class DarkenOnHoverDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseover', ['$event'])
  darkenOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(70%');
    this.render.setStyle(
      this.el.nativeElement,
      'transition',
      'all 0.3s ease-in-out'
    );
  }

  @HostListener('mouseleave', ['$event'])
  darkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%');
    this.render.setStyle(
      this.el.nativeElement,
      'transition',
      'all 0.3s ease-in-out'
    );
  }
}
