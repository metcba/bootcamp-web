import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  // Variables for the form
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() { }

  processForm() {
    console.log("Enviamos el formulario!");
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
  }

}
