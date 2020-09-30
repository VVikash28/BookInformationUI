import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BookModel } from '../model/BookModel';
import { Router } from '@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
book= new BookModel();
  constructor(private router: Router, private bookservice: BookService) { }

  ngOnInit(): void {
  }
  addbookTosubmit()
  {
   
this.bookservice.addbook(this.book).subscribe
(
  data =>
  {
    console.log("data added successfully");
    
    this.router.navigate(['']);
  },
  error=> console.log("error")
)
  }
  gotoList()
  {
    alert('Do yo want to leave this page');
    console.log("go back");
    this.router.navigate(['']);
  }
}
