import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {DateprickerComponent} from './components/datepricker/datepricker.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {Route, RouterModule} from '@angular/router';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactRowComponent} from './components/contact-row/contact-row.component';
import {ContactNamePipe} from './pipes/contact-name.pipe';

let routes: Route[] = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'datepricker', component: DateprickerComponent}
];

@NgModule({
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule, HttpClientModule
  ],
  declarations: [
    AppComponent,
    DateprickerComponent,
    HomepageComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactRowComponent,
    ContactNamePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
