import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ErrosModule } from './errors/erros.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PhotosModule } from './components/photos/photos.module';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    ErrosModule,
    PhotosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
