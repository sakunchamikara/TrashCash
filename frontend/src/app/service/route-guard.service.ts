import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  // canactivate is a interface

  constructor(
    private authservice: AuthserviceService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authservice.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['system/login']);
    return false;
  }
}
