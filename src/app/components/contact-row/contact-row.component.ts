import {Component, Input} from '@angular/core';
import {Contact} from 'src/app/models/contacts';
import {ContactService} from '../../services/contact.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-contact-row]',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent {
  @Input() contact: Contact;

  constructor(private cs: ContactService) {
  }

  editContact(c: Contact): void {
    c.edit = true;
  }

  saveContact(c: Contact): void {
    c.edit = false;
    this.cs.updateContact(c);
  }

  deleteContact(c: Contact): void {
    this.cs.deleteContact(c);
  }
}

