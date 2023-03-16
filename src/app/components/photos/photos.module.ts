import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoFormModule,
    PhotoDetailsModule,
    PhotoListModule,
    RouterModule,
    PhotoModule,
  ],
})
export class PhotosModule {}
