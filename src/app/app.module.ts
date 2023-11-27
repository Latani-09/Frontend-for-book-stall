import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TokenInterceptor } from './_services/token.interceptor';
import { fileuploadComponent } from './file-upload/file-upload.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AddBookStoreComponent } from './add-book-store/add-book-store.component';
import { RegisterComponent } from './register/register.component';
import { edituserComponent } from './edit-user/edit-user.component';

import { BooksGalleryComponent } from './books-gallery/books-gallery.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { adminGuardGuard } from './_guards/admin-guard.guard';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartviewComponent } from './cartview/cartview.component';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}


@NgModule({

  declarations: [
    AppComponent, NavComponent,
    fileuploadComponent, UsersComponent,
    LoginComponent, BooksGalleryComponent,
    AddBookStoreComponent, RegisterComponent,
    edituserComponent, CartviewComponent,
    AdminPanelComponent,    HomeComponent

  ],
  imports: [
    ToastrModule.forRoot(),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
  ],
  exports: [BooksGalleryComponent, CartviewComponent,HomeComponent

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
