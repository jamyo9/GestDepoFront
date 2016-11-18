
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';
import { ExercisesModule }   from '../exercises/exercises.module';
//import { CalendarModule }       from 'angular-calendar';

import { Exercise }                from '../objects/exercise.object';
import { SeasonComponent }      from './components/season.component';
import { SeasonFormComponent }      from './components/season-form.component';
import { SeasonService }         from './services/season.service';

import { PreventUnsavedChangesGuard } from '../prevent-unsaved-changes-guard.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
        //,CalendarModule.forRoot()
    ],
    declarations: [
        SeasonFormComponent, 
        SeasonComponent
    ],
    exports: [
        SeasonFormComponent, 
        SeasonComponent
    ],
    providers: [
        SeasonService,
        PreventUnsavedChangesGuard
    ]
})
export class SeasonModule { 
}