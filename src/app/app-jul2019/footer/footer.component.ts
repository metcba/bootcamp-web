import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  social: any;

  constructor() { }

  ngOnInit() {
    this.social = [
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/MetCbaOK/',
        icon: 'facebook-square'
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/met_CBA',
        icon: 'twitter'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/metcba/',
        icon: 'instagram'
      },
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/company/met-cba/',
        icon: 'linkedin'
      }
    ]
  }

}
