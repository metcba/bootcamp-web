import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations:[
    trigger('fade',
    [
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  ngOnInit() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let navbar = document.getElementById('bc-navbar');
    let offset = window.pageYOffset;

    if (offset > 150 && !navbar.classList.contains('scrolled')) {
      navbar.classList.add('scrolled');
    }

    if (offset < 150 && navbar.classList.contains('scrolled')) {
      navbar.classList.remove('scrolled', 'sleep');
    }
    if (offset > 350 && !navbar.classList.contains('awake')) {
      navbar.classList.add('awake');
    }
    if (offset < 350 && navbar.classList.contains('awake')) {
      navbar.classList.remove('awake');
      navbar.classList.add('sleep');
    }
  }
}
