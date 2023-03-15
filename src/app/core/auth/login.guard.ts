import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../user/user.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginGuard {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.userService.islogged()) {
      this.router.navigate(['user', this.userService.getUserName()]);
      return false;
    }
    return true;
  }
}
