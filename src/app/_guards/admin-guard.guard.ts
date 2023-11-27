import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class adminGuardGuard  {
  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  canActivate(): Observable<boolean> {
    
    return this.accountService.currentUser$.pipe(
      map(user => {
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
  }

}