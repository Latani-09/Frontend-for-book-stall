import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
//import { MoviesComponent } from './movies/movies.component';
import { AddBookStoreComponent } from './add-book-store/add-book-store.component';
import { AuthGuardService } from './_services/auth-guard.service.service';
import { RegisterComponent } from './register/register.component';
import { edituserComponent } from './edit-user/edit-user.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { BooksGalleryComponent } from './books-gallery/books-gallery.component';
import { adminGuardGuard } from './_guards/admin-guard.guard';
import { AdminGuardService } from './_services/admin-guard.service';
import { CartviewComponent } from './cartview/cartview.component';


//import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  {path: 'login',    component: LoginComponent},
  {path:'',canActivate:[AuthGuardService],
  children:[
  {path: 'users',    component: UsersComponent },
  {path: 'add-book', component: AddBookStoreComponent},
  {path: 'edit-user',component:edituserComponent},
  {path: 'cart',     component: CartviewComponent},
  { path: 'edit-user/:id', component: edituserComponent },
  ]},
  {path:'Home',      component:HomeComponent },
  {path:'admin',     component:AdminPanelComponent, canActivate:[AdminGuardService]},
  {path:'book-gallery', component:BooksGalleryComponent},
  {path:'register',  component:RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
