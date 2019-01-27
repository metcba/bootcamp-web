import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors: any;

  constructor() { }

  ngOnInit() {
    this.sponsors = [
      {name: 'McAfee', img: 'assets/mcafee.png', site: 'https://home.mcafee.com/'},
      {name: 'MeTCba', img: 'assets/metcba.png', site: 'https://metcba.org'},
      {name: 'Globant', img: 'assets/globant.jpg', site: 'https://www.globant.com'},
      //{name: 'Women Tech Makers', img: 'assets/wtm.png', site: 'https://www.womentechmakers.com/'},
    ]
  }

}
