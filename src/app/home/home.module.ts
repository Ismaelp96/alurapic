import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VmessageModule } from './signin/vmessage/vmessage.module';
import { SignupService } from './signup/signup.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [SigninComponent, SignupComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule,
    VmessageModule,
  ],
  providers: [SignupService],
})
export class HomeModule {}
