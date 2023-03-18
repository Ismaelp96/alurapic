import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoOwnerOnlyDirective } from './p-owner-only.directive';

@NgModule({
  declarations: [PhotoOwnerOnlyDirective],
  imports: [CommonModule],
  exports: [PhotoOwnerOnlyDirective],
})
export class POwnerOnlyModule {}
