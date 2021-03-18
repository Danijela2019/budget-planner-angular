import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemListCardComponent } from './components/item-list-card/item-list-card.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ItemListComponent,
    ItemListCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
