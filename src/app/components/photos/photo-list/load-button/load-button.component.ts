import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load-butoon',
  templateUrl: './load-butoon.component.html',
  styleUrls: ['./load-button.component.css'],
})
export class LoadButoonComponent {
  @Input() hasMore: boolean = true;
}
