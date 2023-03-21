import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandler } from './gobal-error-handler/global-error-handler';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorComponent } from './global-error/global-error.component';

@NgModule({
  declarations: [NotFoundComponent, GlobalErrorComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
})
export class ErrosModule {}
