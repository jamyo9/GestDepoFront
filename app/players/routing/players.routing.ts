
import { RouterModule  }    		  		from '@angular/router';

import { PlayerFormComponent } 		  	from '../components/player-form.component';
import { PlayersComponent }    			from '../components/players.component';
import { PreventUnsavedChangesGuard } 		from '../../prevent-unsaved-changes-guard.service';
import { AuthGuard }					 	from '../../auth/services/auth-guard.service';

export const playersRouting = RouterModule.forChild([
	{
		path: 'players',
		component: PlayersComponent,
		canActivate: [ AuthGuard ] 
	},
	{ 
		path: 'players/:id', 
		component: PlayerFormComponent,
		canActivate: [ AuthGuard ],
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
	{ 
		path: 'players/new', 
		component: PlayerFormComponent,
		canActivate: [ AuthGuard ],
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	}
]);