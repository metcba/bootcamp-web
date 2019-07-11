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
            photo: 'naho.jpg',
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
        {
            name: 'Coti Uanini',
            photo: 'constanza.jpg',
            type: 'Mentora',
            description: 'Ingeniera en Sistemas de Información. Front End Ssr Engineer @ Mercado Libre.',
            linkedin: 'https://www.linkedin.com/in/constanza-uanini-40b3b172'
        },
        {
            name: 'Joel Villarreal Bertoldi',
            photo: 'joel.jpg',
            type: 'Speaker y Mentor',
            description: 'Software Engineer, Graphic Designer @ Prototypal.',
            linkedin: 'https://www.linkedin.com/in/joelvillarrealbertoldi'
        },
        {
            name: 'Andre Laluf',
            photo: 'andre.jpg',
            type: 'Speaker y Mentora',
            description: 'Backend developer @ Mercado Libre',
            linkedin: 'https://www.linkedin.com/in/andrea-laluf-b9925b10b/'
        },
        {
            name: 'Lau Mercado',
            photo: 'lau-mer.jpg',
            type: 'Mentora',
            description: 'Estudiante de Computación @ FaMAF. Programadora',
            linkedin: 'https://www.linkedin.com/in/gladys-laura-mercado'
        },
        {
            name: 'Nati Caceres Meyer',
            photo: 'nati.jpg',
            type: 'Mentora',
            description: 'Sr. Integration Engineer @ Olapic, y apasionada por UX/UI.',
            linkedin: 'https://www.linkedin.com/in/natachacaceresmeyer/'
        },
        {
            name: 'Marce Sosa Palacios',
            photo: 'marce.jpg',
            type: 'Speaker',
            description: 'Lic. en Diseño Gráfico. Ssr. Diseñadora UX/UI @ Mercado Libre',
            linkedin: 'https://www.linkedin.com/in/marcela-sosa-palacios-5b4a5041'
        },
        {
            name: 'Hernán Garzón de la Roza',
            photo: 'hernan.jpg',
            type: 'Mentor',
            description: 'Desarrollador de Software Frontend, ex-UX, ex-Marketing',
            linkedin: 'https://ar.linkedin.com/in/hernan-garzon-de-la-roza'
        },
        {
            name: 'Facu Gaumet',
            photo: 'facu.jpg',
            type: 'Mentor',
            description: 'Licenciado en Ciencias de la Computación. Frontender @ Mercado Libre en el equipo de Feedback & Reputation',
            linkedin: 'https://www.linkedin.com/in/facundogaumet/'
        }
    ];

    this.shuffle(this.participants);
  }

  shuffle(array: Array<any>): void {
    array.sort(() => Math.random()-0.5);
  }
}
