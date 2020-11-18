import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  @Input() contacts: Contact[];

  deleteContact(c: Contact): void {
    const index = this.contacts.indexOf(c, 0);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }

  editContact(c: Contact): void {
    c.edit = true;
  }

  saveContact(c: Contact): void {
    c.edit = false;
  }

}
