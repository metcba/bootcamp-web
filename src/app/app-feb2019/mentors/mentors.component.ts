import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {
  speakers: any;
  mentors: any;

  constructor() { }

  ngOnInit() {
    this.speakers = [
      {name: 'Pipi Márquez', photo: 'assets/pipi.jpg',
       desc: 'Diseñadora UX en Naranja. Cofundadora en Moles'},
      {name: 'Vicky Zárate', photo: 'assets/vicky.jpg',
       desc: 'Diseñadora UX en Naranja. Cofundadora en Moles'},
      {name: 'Mili Teruel', photo: 'assets/mili.png',
       desc: 'Doctorando en Machine Learning. Cofundadora en MeTCba.'},
      {name: 'Eugenia Revol', photo: 'assets/euge.jpg',
       desc: 'Web UI Developer Semisenior en Globant'},
    ]
    this.mentors = [
      {name: 'Dani Bosch', photo: 'assets/dani2.jpg',
       desc: 'UX Developer Jr. en Cintelink'},
      {name: 'Karen Haag', photo: 'assets/karen.jpg',
       desc: 'Software Engineer. Data Scientist en BITLOGIC.io'},
      {name: 'Male Morales', photo: 'assets/male.jpg',
       desc: '(Casi) Licenciada en Computación. Amante de la lógica y de los métodos formales. Futura doctorando.'},
      {name: 'Antonella Sgarlatta', photo: 'assets/anto.jpg',
       desc: 'Ingeniera Biomédica. Software Developer. Data Scientist'},
      {name: 'Virginia Dal Lago', photo: 'assets/vir.jpg',
       desc: 'Machine Learning Developer en Mercado Libre. Doctora en Física y Licenciada en  Química.'},
      {name: 'Laura Alonso', photo: 'assets/lau.jpg',
       desc: 'Doctora en Lingüística Computacional. Profesora en la UNC.'},
    ]
  }

}
