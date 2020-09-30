import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../service/book.service';
import { BookModel } from '../model/BookModel';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
    book=new BookModel();

  constructor(private router:Router, private bookservice: BookService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id= this._activatedRoute.snapshot.paramMap.get('bookId');
    this.bookservice.getBookbyId(id).subscribe(
      data=> {
        console.log("data received");
        this.book=data;
      },
      error=> console.log("error")
    )

  }



   updatebookformsubmit(){

   alert('Thank you for updating ');
   this.bookservice.addbook(this.book).subscribe(
   
   data =>
   {
     console.log("data added successfully");
     this.router.navigate(['/']);
   },
   error=> console.log("error")
)
   }
  gotoList()
  {
    alert('Do you want to leave this page');
    console.log("go back");
    this.router.navigate(['']);
  }
}
