import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  constructor(private router:Router, private userService:UserService) { }
}
