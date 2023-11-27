import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  constructor(public auth: AccountService, public router: Router , public toastr:ToastrService) { }

  canActivate(): Observable<boolean> {
    return this.auth.currentUser$.pipe(
      map((user: { roles: string | string[]; } | null) => {
        if (!(user==null)){
        if (user.roles.includes('Admin') || user.roles.includes('Moderator')) {
          this.toastr.success("You can enter this area")
          return true;
        }
        this.toastr.error('You cannot enter this area');
        return false;
      }
      return false;
    }
      )
    )
}}

