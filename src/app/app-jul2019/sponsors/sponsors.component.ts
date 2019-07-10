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
          'logo': 'assets/mcafee.png',
          'link': 'https://www.mcafee.com'
        }
      ],
      'gold': [
      ],
      'silver': [
        {
          'name': 'Cintelink',
          'logo': 'assets/cintelink.png',
          'link': 'https://cintelink.com.ar'
        },
        {
          'name': 'Acamica',
          'logo': 'assets/acamica.png',
          'link': 'https://www.acamica.com/'
        }
      ]
    }
  }

}
