import { VmessageModule } from './../../../home/signin/vmessage/vmessage.module';
import { HomeModule } from './../../../home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';

@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
  ],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent],
})
export class PhotoDetailsModule {}
