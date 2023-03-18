import { VmessageModule } from './../../../home/signin/vmessage/vmessage.module';
import { PhotoModule } from './../photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photo-form.component';
import { ImmediateClickModule } from 'src/app/directives/immediate-click/immediate-click.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VmessageModule,
    RouterModule,
    ImmediateClickModule,
    PhotoModule,
  ],
})
export class PhotoFormModule {}
