import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { immediateClickDirective } from './immediate-click.directive';
@NgModule({
  declarations: [immediateClickDirective],
  imports: [CommonModule],
  exports: [immediateClickDirective],
})
export class ImmediateClickModule {}
