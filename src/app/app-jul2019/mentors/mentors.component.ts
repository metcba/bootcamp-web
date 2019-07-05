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
        {
            name: 'Nombre Apellido', 
            photo: 'assets/foto.jpg',
            description: 'UX Developer @ Empresa'
        },
    ]
    this.mentors = [
        {
            name: 'Nombre Apellido', 
            photo: 'assets/foto.jpg',
            description: 'UX Developer @ Empresa'
        },
        
    ]
  }
}
