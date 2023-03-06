import { debounceTime, Subject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
