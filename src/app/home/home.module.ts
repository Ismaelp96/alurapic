import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { VmessageComponent } from './signin/vmessage/vmessage.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SigninComponent, VmessageComponent, SignupComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
})
export class HomeModule {}
