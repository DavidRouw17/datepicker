import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contacts';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Output() add = new EventEmitter<Contact>();
  newContact = {} as Contact;

  dateprickerForm: FormGroup;

  constructor(){
      this.dateprickerForm = new FormGroup({
        voornaam: new FormControl('', [Validators.required]),
        achternaam: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      });
  }

  addContact(): void {
    this.add.emit(this.newContact);
    this.newContact = {} as Contact;
  }
}
