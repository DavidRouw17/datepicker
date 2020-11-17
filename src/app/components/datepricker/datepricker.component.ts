import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contacts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datepricker',
  templateUrl: './datepricker.component.html',
  styleUrls: ['./datepricker.component.css']
})
export class DateprickerComponent implements OnInit {
  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];
  
  newContact = {} as Contact;
  
  dateprickerForm: FormGroup;

  constructor(){
      this.dateprickerForm = new FormGroup({
        voornaam: new FormControl('', [Validators.required]),
        achternaam: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      });
  }


  ngOnInit(): void {
  }

  

  addContact() {
    this.contacts.push(this.newContact);
    this.newContact = {} as Contact;
  
  }

  deleteContact(c: Contact) {
    const index = this.contacts.indexOf(c, 0);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }

  editContact(c: Contact) {
    c.edit = true;
  }

  saveContact(c: Contact) {
    c.edit = false;
  }
  

}
