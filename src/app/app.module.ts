import { PhotoDetailsComponent } from './components/photos/photo-details/photo-details.component';
import { PhotoFormModule } from './components/photos/photo-form/photo-form.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { LoadButoonComponent } from './components/photos/photo-list/load-button/load-button.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photos/photo/photo.component';
import { PhotosComponent } from './components/photos/photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './components/photos/photo-list/filter-by-description.pipe';
import { SearchComponent } from './components/photos/photo-list/search/search.component';
import { CoreModule } from './core/core.module';
import { DarkenOnHoverDirective } from './directives/darken-on-hover.directive';
import { PhotoDetailsModule } from './components/photos/photo-details/photo-details.module';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    PhotoListComponent,
    PhotosComponent,
    FilterByDescriptionPipe,
    LoadButoonComponent,
    PhotosComponent,
    SearchComponent,
    DarkenOnHoverDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    PhotoDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PhotoComponent],
})
export class AppModule {}
