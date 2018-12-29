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
      {name: 'Pipi Márquez', photo: 'assets/karen.jpg',
       desc: 'Who are in extremely love with eco friendly system.'},
      {name: 'Vicky Zárate', photo: 'assets/karen.jpg',
       desc: 'Who are in extremely love with eco friendly system.'},
    ]
    this.mentors = [
      {name: 'Dani Bosch', photo: 'assets/dani2.jpg',
       desc: 'Who are in extremely love with eco friendly system.'},
      {name: 'Karen Haag', photo: 'assets/karen.jpg',
       desc: 'Who are in extremely love with eco friendly system.'},
      {name: 'Male Morales', photo: 'assets/karen.jpg',
       desc: 'Who are in extremely love with eco friendly system.'},
      {name: 'Mili Teruel', photo: 'assets/karen.jpg',
       desc: 'Who are in extremely love with eco friendly system.'},
    ]
  }

}
