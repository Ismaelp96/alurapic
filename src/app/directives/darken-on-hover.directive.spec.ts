import { ElementRef, Renderer2 } from '@angular/core';
import { DarkenOnHoverDirective } from './darken-on-hover.directive';

describe('DarkenOnHoverDirective', () => {
  it('should create an instance', () => {
    const directive = new DarkenOnHoverDirective();
    expect(directive).toBeTruthy();
  });
});
