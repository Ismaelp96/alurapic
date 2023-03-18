import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShowIfLoggedModule } from './../../../directives/show-if-logged/show-if-logged.module';
import { POwnerOnlyModule } from './../../../directives/p-owner-only/p-owner-only.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailsComponent } from './photo-details.component';
import { VmessageModule } from './../../../home/signin/vmessage/vmessage.module';

@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
    POwnerOnlyModule,
    ShowIfLoggedModule,
  ],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent],
})
export class PhotoDetailsModule {}
