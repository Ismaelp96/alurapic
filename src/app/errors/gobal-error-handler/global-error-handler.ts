import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as StackTrace from 'stacktrace-js';
import { Observable } from 'rxjs';

import { ServerLogService } from './server-log.service';
import { UserService } from './../../core/user/user.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    console.log('passei pelo handler');

    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const serverLogService = this.injector.get(ServerLogService);

    const url = location instanceof PathLocationStrategy ? location.path() : '';

    const message = error.message ? error.message : error.toString();
    StackTrace.fromError(error).then((stackFrames) => {
      const stackAsString = stackFrames.map((sf) => sf.toString()).join('\n');

      console.log(message);
      console.log(stackAsString);
      console.log('Abaixo é o que vai ser enviado para o servidor');
      serverLogService.log({
        message,
        url,
        userName: userService.getUserName(),
        stack: stackAsString,
      });
      // .subscribe(
      //   () => console.log('Error Logged on server'),
      //   (err) => {
      //     console.log(err);
      //     console.log('Fail to send error Log to server');
      //   }
      // );
    });
  }
}
