import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppModule } from './../../../app.module';
import { PhotoFormComponent } from './photo-form.component';
import { HomeModule } from './../../../home/home.module';
import { ImmediateClickModule } from 'src/app/directives/immediate-click/immediate-click.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule,
    RouterModule,
    AppModule,
    ImmediateClickModule,
  ],
})
export class PhotoFormModule {}
