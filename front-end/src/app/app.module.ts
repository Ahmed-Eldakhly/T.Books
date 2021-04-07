import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IndexComponent } from './modules/admin layout/author/index/index.component';
import { SidebarComponent } from './modules/admin layout/shared/sidebar/sidebar.component';
import { StoreComponent } from './modules/admin layout/author/store/store.component';
import { DeleteComponent } from './modules/admin layout/author/delete/delete.component';
import { UpdateComponent } from './modules/admin layout/author/update/update.component';
import { NavbarAdminComponent } from './modules/admin layout/shared/navbar-admin/navbar-admin.component';
import { SettingComponent } from './modules/admin layout/setting/setting.component';
import { ShowAuthorComponent } from './modules/user layout/shared/author/show/show-author/show-author.component';
import { AuthorCardComponent } from './modules/user layout/shared/author/show/author-card/author-card.component';
import { AuthorBookslistComponent } from './modules/user layout/shared/author/show/author-bookslist/author-bookslist.component';
import { AuthorBookComponent } from './modules/user layout/shared/author/show/author-book/author-book.component';
import { UserAuthorIndexComponent } from './modules/user layout/author/user-author-index/user-author-index.component';
import { BookIndexComponent } from './modules/admin layout/book/index/book-index.component';
import { BookDeleteComponent } from './modules/admin layout/book/delete/book-delete.component';
import { BookUpdateComponent } from './modules/admin layout/book/update/book-update.component';
import { BookStoreComponent } from './modules/admin layout/book/store/book-store.component';
import { HomeAllComponent } from './modules/user layout/home/home-all/home-all.component';
import { HomeHeaderComponent } from './modules/user layout/home/header/home-header.component';
import { HomePopularBookComponent } from './modules/user layout/home/popular-book/home-popular-book.component';
import { HomeSubscribeComponent } from './modules/user layout/home/subscribe/home-subscribe.component';
import { HomeAuthorComponent } from './modules/user layout/home/author/home-author.component';
import { HomeTopCategoryComponent } from './modules/user layout/home/top-category/home-top-category.component';
import { HomeFooterComponent } from './modules/user layout/home/footer/home-footer.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthorsListForAdminComponent } from './modules/admin layout/author/authors-list-for-admin/authors-list-for-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';


const routes:Routes = [
  //{path:"",redirectTo:"author",pathMatch:"full"},
  {path:'admin/author',component:IndexComponent},
  {path:'admin/author/store',component:StoreComponent},

]
import { NavUserComponent } from './modules/user layout/shared/nav-user/nav-user.component';
import { BookDetComponent } from './modules/user layout/book/book-det/book-det.component';
import { DashboardComponent } from './modules/admin layout/dashboard/dashboard.component'
import { from } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './modules/user layout/shared/footer/footer.component';
import { LoginRegisterComponent } from './modules/user layout/login-register/login-register.component';
import { TermsComponent } from './modules/user layout/terms/terms.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidebarComponent,
    StoreComponent,
    DeleteComponent,
    UpdateComponent,
    NavbarAdminComponent,
    SettingComponent,
    ShowAuthorComponent,
    AuthorCardComponent,
    AuthorBookslistComponent,
    AuthorBookComponent,
    UserAuthorIndexComponent,
    BookIndexComponent,
    BookDeleteComponent,
    BookUpdateComponent,
    BookStoreComponent,
    HomeAllComponent,
    HomeHeaderComponent,
    HomePopularBookComponent,
    HomeSubscribeComponent,
    HomeAuthorComponent,
    HomeTopCategoryComponent,
    HomeFooterComponent,
    AuthorsListForAdminComponent,
    NavUserComponent,
    BookDetComponent,
    DashboardComponent,
    FooterComponent,
    LoginRegisterComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
