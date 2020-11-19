import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from 'src/app/models/contacts';

@Component({
  selector: '[app-contact-row]',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent {
  @Input() contact: Contact;
  @Output() remove = new EventEmitter<Contact>();

  editContact(c: Contact): void {
    c.edit = true;
  }

  saveContact(c: Contact): void {
    c.edit = false;
  }

  deleteContact(c: Contact): void {
    this.remove.emit(c);
  }
}

