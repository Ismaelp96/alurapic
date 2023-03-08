import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { LoadButoonComponent } from './components/photos/photo-list/load-button/load-button.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photos/photo/photo.component';
import { PhotosComponent } from './components/photos/photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './components/photos/photo-list/filter-by-description.pipe';
import { SearchComponent } from './components/photos/photo-list/search/search.component';
import { DarkenOnHoverDirective } from './darken-on-hover.directive';
import { CoreModule } from './core/core.module';

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
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
