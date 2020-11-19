import {Component, OnInit} from '@angular/core';
import {Contact} from 'src/app/models/contacts';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private cs: ContactService) {
  }

  ngOnInit(): void {
    this.contacts = this.cs.getContacts();
  }

  deleteContact(c: Contact): void {
    const index = this.contacts.indexOf(c, 0);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }

}
