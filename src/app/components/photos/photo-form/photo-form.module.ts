import { RouterModule } from '@angular/router';
import { HomeModule } from './../../../home/home.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule,
    RouterModule,
  ],
})
export class PhotoFormModule {}
