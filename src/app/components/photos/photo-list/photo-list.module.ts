import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { DarkenOnHoverDirective } from './../../../directives/darken-on-hover.directive';
import { SearchComponent } from './search/search.component';
import { LoadButoonComponent } from './load-button/load-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';

import { FilterByDescriptionPipe } from './filter-by-description.pipe';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButoonComponent,
    FilterByDescriptionPipe,
    SearchComponent,
    DarkenOnHoverDirective,
  ],
  imports: [CommonModule, PhotoModule, RouterModule],
})
export class PhotoListModule {}
