import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddbookComponent } from './addbook/addbook.component';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { HomePageComponent } from './home-page/home-page.component';





@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    BookListComponent,
    UpdateBookComponent,
    ViewBookComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
