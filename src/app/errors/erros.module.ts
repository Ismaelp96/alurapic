import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandler } from './gobal-error-handler/global-error-handler';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
})
export class ErrosModule {}
