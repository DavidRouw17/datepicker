import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DateprickerComponent } from './components/datepricker/datepricker.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Route, RouterModule } from '@angular/router';

let routes: Route[] = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'datepricker', component: DateprickerComponent }
]

@NgModule({
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    DateprickerComponent,
    HomepageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
