import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  isShow = false;
  constructor() {}

  toggle() {
    console.log('cliquei');
    this.isShow = !this.isShow;
  }
}
