import { Injectable } from '@angular/core'
import { 
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot } from '@angular/router'

import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(
        private _authService: AuthService,
        private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /*
        if ( this._authService.isLoggedIn())
            return true;

        this._router.navigate(['login']);
        return false
        */
        let url: string = state.url;

        return this.checkLogin(url);

    }

    checkLogin(url: string): boolean {
        if (this._authService.isLoggedIn()) {
            return true;
        }

        // Store the attempted URL for redirecting
        this._authService.redirectUrl = url;

        // Navigate to the login page with extras
        this._router.navigate(['/']);
        //location.reload();
        return false;
    }
}