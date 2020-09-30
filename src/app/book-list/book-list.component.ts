import { Component, OnInit } from '@angular/core';
import{BookService} from '../service/book.service'
import{BookModel} from '../model/BookModel'

import {  Router } from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  

  constructor(private _service:BookService, private router: Router) { }
_book: BookModel[];

  ngOnInit() {
this._service.getAllBook().subscribe(
  data=> {console.log("response received");
  this._book=data;
},
  error=> console.log("exception occurred")
)
  }
  goToAddBook(){
    this.router.navigate(['/addBook']);
  }
  goToEditBook(bookId: String)
  {
    console.log("Book Id"+bookId);
    this.router.navigate(['/updateBook',bookId]);
  }
  goToviewBook(bookId: String)
  {
    console.log("Book Id"+bookId);
    this.router.navigate(['/viewBook',bookId]);
  }
  deleteBook(bookId: String){ 
    alert('Do you want to delete');
    this._service.deleteBookById(bookId).subscribe(
      data => {
      console.debug("deleted successfully");
      window.location.reload();

      },
error => console.log("exception occurred")
    )
  }
}
