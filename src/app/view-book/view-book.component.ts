import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { BookModel } from '../model/BookModel';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
book= new BookModel();
  constructor(private router: Router, private bookservice: BookService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('bookId');
    this.bookservice.getBookbyId(id).subscribe(
      data=> {
        console.log("data received");
        this.book=data;
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
