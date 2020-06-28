import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './loginService.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuardService implements CanActivate{

    constructor(private loginService: LoginService,
                private router: Router
        ){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.loginService.isAuthenticated()){
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }
    }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    //     throw new Error("Method not implemented.");
    // }
    
}