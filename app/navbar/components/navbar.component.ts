import { Component } from '@angular/core';

import { LoginComponent } from '../../auth/components/login.component'
import { AuthDirective } from '../../auth/directives/auth.directive'
import { NoAuthDirective } from '../../auth/directives/no-auth.directive'
import { AuthService } from '../../auth/services/auth.service'

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/components/html/navbar.component.html',
    directives: [
        LoginComponent,
        AuthDirective,
        NoAuthDirective
    ],
    providers: [
        AuthService
    ]
})
export class NavBarComponent {

    constructor (private _authService: AuthService) {}

    logout() {
        this._authService.logout();
    }
}