import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contacts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datepricker',
  templateUrl: './datepricker.component.html',
  styleUrls: ['./datepricker.component.css']
})
export class DateprickerComponent {
  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];

  addContact(newContact: Contact): void {
    this.contacts.push(newContact);
  }


}
