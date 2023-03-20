import { UserService } from './../../core/user/user.service';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    console.log('passei pelo handler');

    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const url = location instanceof PathLocationStrategy ? location.path() : '';

    const message = error.message ? error.message : error.toString();
    StackTrace.fromError(error).then((stackFrames) => {
      const stackAsString = stackFrames.map((sf) => sf.toString()).join('\n');

      console.log(message);
      console.log(stackAsString);
      console.log('Abaixo é o que vai ser enviado para o servidor');
      console.log({
        message,
        url,
        userName: userService.getUserName(),
        stack: stackAsString,
      });
    });
  }
}
