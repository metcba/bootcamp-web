import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  program: any;

  constructor() { }

  ngOnInit() {
    this.program = [
      {day: "Actividad previa", desc: "Te proponemos que ...."},
      {day: "Lunes 18", desc: "Intro a diseño y experiencia de usuario. Actividad de diseño de solución colaborativa."},
      {day: "Martes 19", desc: "Programación del front-end. Maquetación con html y frameworks css. Intro a JavaScript."},
      {day: "Miércoles 20", desc: "Frameworks web: Angujar. Organización del'proyecto con componentes y módulos."},
      {day: "Jueves 21", desc: "Programación de un backend básico con node.js. Hostings y dominios. GitHub Pages"},
      {day: "Viernes 22", desc: "¡Puesta en común con la organización y despliegue final!"},
    ]
  }

}
