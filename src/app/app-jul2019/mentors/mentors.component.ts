import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {
  participants: any;

  constructor() { }

  ngOnInit() {
    this.participants = [
        {
            name: 'Adri Calero',
            photo: 'adri.jpg',
            description: 'UX Lead @ Naranja',
            type: 'Speaker',
            linkedin: 'https://www.linkedin.com/in/adricalero'
        },
        {
            name: 'Agus Demaldé',
            photo: 'agus.jpg',
            type: 'Speaker y Mentora',
            description: 'Ingeniera en Sistemas de Información. Web UI Developer @ Mercado Libre',
            linkedin: 'https://www.linkedin.com/in/agustina-demald%C3%A9-6969ba114/'
        },
        {
            name: 'Dani Bosch',
            photo: 'dani.jpg',
            type: 'Mentora',
            description: 'Estudiante de la Lic. en Cs. de la Computación. UX Developer @ Cintelink',
            linkedin: 'https://www.linkedin.com/in/danielabosch/'
        },
        {
            name: 'Naho Puente',
            photo: 'naho.jpeg',
            type: 'Mentora',
            description: 'Estudiante de la Lic. en Cs. de la Computación. Developer @ Bitlogic',
            linkedin: 'https://www.linkedin.com/in/nahomy-puentec/'
        },
        {
            name: 'Juli Pereyra Sarry',
            photo: 'juli.jpg',
            type: 'Speaker',
            description: 'UX designer @ Mercado Libre',
            linkedin: 'https://www.linkedin.com/in/julia-pereyra-sarry-010384131/'
        },
    ];

    this.shuffle(this.participants);
  }

  shuffle(array: Array<any>): void {
    array.sort(() => Math.random()-0.5);
  }
}