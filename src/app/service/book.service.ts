import { Injectable } from '@angular/core';
import { BookModel } from '../model/BookModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  addbook(book: BookModel): Observable<Object> {
    return this.http.post<any>("  http://localhost:9009/bookmanagement/addBook", book);
  }
  getAllBook(): Observable<any> {
      return this.http.get<any>("  http://localhost:9009/bookmanagement/getallbooks");
  }
  updateBook(book: BookModel): Observable<any>
  {
    return this.http.post<any> ("   http://localhost:9009/bookmanagement/updateBookById/",book);
  }
  getBookbyId(bookId: String): Observable<any>
  {
    return this.http.get<any> ("  http://localhost:9009/bookmanagement/getBookbyId/"+bookId );
  }
  deleteBookById(bookId: String): Observable<any>
  {
    return this.http.delete<any> ("   http://localhost:9009/bookmanagement/deleteBookById/"+bookId);
  }
}
