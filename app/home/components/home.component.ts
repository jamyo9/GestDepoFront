import { Component, OnInit, ElementRef, AfterContentInit } from '@angular/core';


@Component({
    templateUrl: 'app/home/components/html/home.template.html'
})
export class HomeComponent implements AfterContentInit {

    constructor(private elementRef: ElementRef) {

    }

    ngAfterContentInit() {
        this.addScript('assets/AdminLTE/plugins/datepicker/bootstrap-datepicker.js');
        this.addScript('app/home/components/js/home.js');
    }

    addScript( src: string ) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = src;
        this.elementRef.nativeElement.appendChild(s);
    }
}