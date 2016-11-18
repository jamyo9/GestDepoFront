
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { User }                from '../objects/user.object';
import { UserFormComponent }   from './components/user-form.component';
import { UsersComponent }      from './components/users.component';
import { UserService }         from './services/user.service';
import { PreventUnsavedChangesGuard } from '../prevent-unsaved-changes-guard.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        UserFormComponent, 
        UsersComponent
    ],
    exports: [
        UserFormComponent, 
        UsersComponent
    ],
    providers: [
        UserService,
        PreventUnsavedChangesGuard
    ]
})
export class UsersModule { 
}