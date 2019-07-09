import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  open: boolean;

  constructor() { }

  ngOnInit() {
    this.open = false;
  }

  toggleNavbar(): void {
    this.open = !this.open;
  }

}
