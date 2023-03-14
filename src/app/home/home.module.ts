import { SignupService } from './signup/signup.service';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { VmessageComponent } from './signin/vmessage/vmessage.component';
import { SignupComponent } from './signup/signup.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    SigninComponent,
    VmessageComponent,
    SignupComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule,
  ],
  providers: [SignupService],
  exports: [VmessageComponent],
})
export class HomeModule {}
