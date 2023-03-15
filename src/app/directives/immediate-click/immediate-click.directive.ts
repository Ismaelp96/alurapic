import { PlataformDetectorService } from 'src/app/core/plataform-detect/plataform-detector.service';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[immediateClick]',
})
export class immediateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private plataformDetectorService: PlataformDetectorService
  ) {}
  ngOnInit(): void {
    this.plataformDetectorService.isPlatformBrower() &&
      this.element.nativeElement.click();
  }
}
