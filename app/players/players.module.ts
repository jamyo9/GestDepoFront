
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { Player }                from '../objects/player.object';
import { PlayersComponent }      from './components/players.component';
import { PlayerFormComponent }      from './components/player-form.component';
import { PlayersService }         from './services/players.service';
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
        PlayerFormComponent, 
        PlayersComponent
    ],
    exports: [
        PlayerFormComponent, 
        PlayersComponent
    ],
    providers: [
        PlayersService,
        PreventUnsavedChangesGuard
    ]
})
export class PlayersModule { 
}