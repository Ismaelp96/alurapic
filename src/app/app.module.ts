import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ErrosModule } from './errors/erros.module';
import { PhotosModule } from './components/photos/photos.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    PhotosModule,
    AppRoutingModule,
    ErrosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
