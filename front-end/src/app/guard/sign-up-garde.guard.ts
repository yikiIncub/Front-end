import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../shared/Services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpGardeGuard implements CanActivate {

  constructor(public authService:AuthServiceService,public router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if(this.authService.type==""){
        this.router.navigate(['/choix'])
      }
      return true;
  }
  
}
