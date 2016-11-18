
import { RouterModule  }     from '@angular/router';

import { HomeComponent }     from './home/components/home.component';
import { NotFoundComponent } from './errors/components/not-found.component';

import { Routes } from '@angular/router';

export const routing = RouterModule.forRoot([
	{ path: '', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
	{ path: '**',   redirectTo: 'not-found' }
]);
