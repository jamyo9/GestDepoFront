
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { Exercise }                     from '../objects/exercise.object';

import { ExerciseFormComponent }        from './components/exercise-form.component';
import { ExercisesComponent }           from './components/exercises.component';
import { ExerciseDetailComponent }      from './components/detail.component'

import { ExercisesService }             from './services/exercises.service';

import { PreventUnsavedChangesGuard }   from '../prevent-unsaved-changes-guard.service';
import { SharedModule }                 from '../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        SharedModule
    ],
    declarations: [
        ExerciseFormComponent, 
        ExercisesComponent,
        ExerciseDetailComponent
    ],
    exports: [
        ExerciseFormComponent, 
        ExercisesComponent,
        ExerciseDetailComponent
    ],
    providers: [
        ExercisesService,
        PreventUnsavedChangesGuard
    ]
})
export class ExercisesModule { 
}