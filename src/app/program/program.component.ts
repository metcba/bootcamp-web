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
      {day: "Actividad previa", desc: "Te enviaremos material complementario para que te familiarices con nociones de programación y puedas configurar el entorno de trabajo."},
      {day: "Lunes 18", desc: "Intro a diseño y experiencia de usuario. Actividad de diseño de solución colaborativa sobre casos reales."},
      {day: "Martes 19", desc: "Programación del front-end. Evaluación de plantillas y maquetación en pocos pasos con html y frameworks css. Intro a JavaScript."},
      {day: "Miércoles 20", desc: "Frameworks web: Angujar5. Organización del proyecto con componentes y módulos."},
      {day: "Jueves 21", desc: "Programación de un backend básico con node.js. Hostings y dominios. GitHub Pages"},
      {day: "Viernes 22", desc: "¡Puesta en común con la organización y despliegue final!"},
    ]
  }

}
