import { Injectable } from '@angular/core';
import { startWith, Subject } from 'rxjs';

import { LoadingType } from './loading-type';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingSubject = new Subject<LoadingType>();
  constructor() {}

  getLoading() {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(LoadingType.STOPPED));
  }

  start(): void {
    this.loadingSubject.next(LoadingType.LOADING);
  }

  stop(): void {
    this.loadingSubject.next(LoadingType.STOPPED);
  }
}
