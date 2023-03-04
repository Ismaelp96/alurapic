import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photos/photo/photo.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';

@NgModule({
  declarations: [AppComponent, PhotoComponent, PhotoListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
