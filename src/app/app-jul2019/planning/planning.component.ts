import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  planning: any;

  constructor() { }

  ngOnInit() {
    this.planning = [
      {
        date: '29 de julio',
        title: 'Introducción al diseño UX / UI',
        description: 'Charla y presentación de prototipos. Intro al diseño de solución.'
      },
      {
        date: '30 de julio',
        title: 'Maquetación con HTML',
        description: 'Usos de etiquetas y atributos para armar y modificar la estructura de tu página.'
      },
      {
        date: '31 de julio',
        title: 'Estilos con CSS',
        description: 'Uso de selectores, herramientas externas como frameworks CSS y fuentes para darle forma a tu página.'
      },
      {
        date: '1 de agosto',
        title: 'Introducción a JavaScript',
        description: 'Herramientas de desarrollador, uso de objetos y clases en JavaScript, para definir el comportamiento de tu página.'
      },
      {
        date: '2 de agosto',
        title: '¡Puesta en común!',
        description: 'Día taller de programación para avanzar con nuestro sitio web. Luego presentamos lo que logramos esta semana.'
      }
    ]
  }

}
