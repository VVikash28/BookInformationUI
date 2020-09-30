import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component'
import { AddbookComponent } from './addbook/addbook.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { HomePageComponent } from './home-page/home-page.component';



const routes: Routes = [
  {path:'home-page',component: HomePageComponent},
  {path:'',component: BookListComponent},
  {path:'addBook',component: AddbookComponent},
  {path:'updateBook/:bookId',component:UpdateBookComponent },
  {path:'updateBook',component:UpdateBookComponent },
  {path:'viewBook/:bookId',component: ViewBookComponent},
  {path:'viewBook',component: ViewBookComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
