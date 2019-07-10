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
    this.sponsors = {
      'platinum': [
        {
          'name': 'McAfee',
          'logo': 'assets/mcafee.png'
        }
      ],
      'gold': [
      ],
      'silver': [
        {
          'name': 'Cintelink',
          'logo': 'assets/cintelink.png'
        },
        {
          'name': 'Acamica',
          'logo': 'assets/acamica.png'
        }
      ]
    }
  }

}
