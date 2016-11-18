import { Directive, ElementRef, Input, HostBinding } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { AuthService } from '../../auth/services/auth.service'

@Directive({
    selector: '[no-auth]'
})
export class NoAuthDirective {

    @HostBinding('hidden')
    hideRouterLink:boolean;

    constructor(
            private _router:Router,
            private _elementRef: ElementRef,
            private _authService: AuthService
        ) {

    }

    ngAfterViewInit() {
        if(this._authService.isLoggedIn()) {
            let el: HTMLElement = this._elementRef.nativeElement;
            el.parentNode.removeChild(el);
        }
    }
}