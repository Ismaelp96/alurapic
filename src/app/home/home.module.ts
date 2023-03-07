import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { VmessageComponent } from './signin/vmessage/vmessage.component';

@NgModule({
  declarations: [SigninComponent, VmessageComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class HomeModule {}
