import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contact} from 'src/app/models/contacts';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contacts: Contact[];
  dateprickerForm: FormGroup;

  constructor(private cs: ContactService) {
    this.dateprickerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    });
    this.contacts = cs.getContacts();
  }

  addContact(): void {
    this.contacts.push(this.dateprickerForm.value);
    this.dateprickerForm.reset();
  }
}
