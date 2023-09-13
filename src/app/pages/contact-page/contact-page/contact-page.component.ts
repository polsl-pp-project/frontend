import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  email: string = '';
  phone: string = '';
  message: string = '';

  submitForm() {
    // Tutaj możesz dodać logikę przesyłania wiadomości, np. do serwera lub poprzez e-mail
    console.log('Email:', this.email);
    console.log('Telefon:', this.phone);
    console.log('Wiadomość:', this.message);
    
    // Po wysłaniu wiadomości możesz wyczyścić pola formularza
    this.email = '';
    this.phone = '';
    this.message = '';
  }

}
