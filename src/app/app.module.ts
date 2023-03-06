import { LoadButoonComponent } from './components/photos/photo-list/load-button/load-button.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photos/photo/photo.component';
import { PhotosComponent } from './components/photos/photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './components/photos/photo-list/filter-by-description.pipe';
import { SearchComponent } from './components/photos/photo-list/search/search.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
