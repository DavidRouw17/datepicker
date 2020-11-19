import {Component} from '@angular/core';
import {Contact} from 'src/app/models/contacts';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {
  contacts$ = this.cs.getAll();

  constructor(private cs: ContactService) {
  }
}
