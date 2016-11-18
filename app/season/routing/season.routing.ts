
import { RouterModule  }    		  		from '@angular/router';

import { SeasonFormComponent }	 		  	from '../components/season-form.component';
import { SeasonComponent }    				from '../components/season.component';
import { PreventUnsavedChangesGuard } 		from '../../prevent-unsaved-changes-guard.service';
import { AuthGuard }					 	from '../../auth/services/auth-guard.service';

export const seasonRouting = RouterModule.forChild([
	{
		path: 'season',
		component: SeasonComponent,
		canActivate: [ AuthGuard ]
	},
	{ 
		path: 'season/:id', 
		component: SeasonComponent,
		canActivate: [ AuthGuard ],
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
	{ 
		path: 'season/new', 
		component: SeasonComponent,
		canActivate: [ AuthGuard ],
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	}
]);