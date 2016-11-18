import { Component, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

import { AuthService } from '../services/auth.service'

@Component({
    selector: 'login',
    templateUrl: 'app/auth/components/html/login.template.html'
})
export class LoginComponent {
    
    constructor(
        private _router: Router,
        private _authService: AuthService,
        private _applicationRef: ApplicationRef
        ) {
    }

    login(event, username, password) {
        event.preventDefault();

        var result = this._authService.login(username, password);
        /*
		result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['/']);
        });
        */
        if (result) {
            console.log(this._router);
            if (this._authService.redirectUrl) {
                this._router.navigate([this._authService.redirectUrl]);
                this._authService.redirectUrl = null;
            }
            //this._router.navigate(['']);
            location.reload();
            //this._applicationRef.tick() 
        } else {
            console.log("Login failed, display error to user");
            alert("Could not login.");
        }
    }

    signup(event) {
        event.preventDefault();
        this._router.navigate(['/users/new']);
    }
}