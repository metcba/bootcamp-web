import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

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

  constructor(public _MessageService: MessageService) { }

  ngOnInit() { }

  processForm() {
    this._MessageService.sendMessage(
      {name: this.name, email: this.email, message: this.message}
    ).subscribe(() => {
      // TODO propagate error from backend
      console.log('Formulario enviado')
    });
  }
}
