
import { RouterModule  }    		  		from '@angular/router';

import { ExerciseFormComponent } 		  	from '../components/exercise-form.component';
import { ExercisesComponent }    			from '../components/exercises.component';
import { ExerciseDetailComponent }			from '../components/detail.component';

import { PreventUnsavedChangesGuard } 		from '../../prevent-unsaved-changes-guard.service';
import { AuthGuard }					 	from '../../auth/services/auth-guard.service';

export const exercisesRouting = RouterModule.forChild([
	{
		path: 'exercises',
		component: ExercisesComponent,
		canActivate: [ AuthGuard ] 
	},
	{ 
		path: 'exercises/:id', 
		component: ExerciseFormComponent,
		canActivate: [ AuthGuard ],
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
	{ 
		path: 'exercises/new', 
		component: ExerciseFormComponent,
		canActivate: [ AuthGuard ],
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
	{ 
		path: 'exercises/view/:id', 
		component: ExerciseDetailComponent,
		canActivate: [ AuthGuard ]  
	}
]);