
import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';

import { SharedModule }      from './shared/shared.module';
import { UsersModule }       from './users/users.module';
import { ExercisesModule }   from './exercises/exercises.module';
import { SeasonModule }      from './season/season.module';
import { PostsModule }       from './posts/posts.module';
import { PlayersModule }       from './players/players.module';

import { AuthService }       from './auth/services/auth.service'
import { AuthGuard }         from './auth/services/auth-guard.service'

import { AppComponent }      from './app.component';
import { HomeComponent }     from './home/components/home.component';
import { NavBarComponent }   from './navbar/components/navbar.component';
import { NotFoundComponent } from './errors/components/not-found.component';

import { usersRouting }      from './users/routing/users.routing';
import { exercisesRouting }  from './exercises/routing/exercises.routing';
import { seasonRouting }     from './season/routing/season.routing';
import { postsRouting }      from './posts/routings/posts.routing';
import { playersRouting }    from './players/routing/players.routing';
import { routing }           from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        UsersModule,
        ExercisesModule,
        SeasonModule,
        PostsModule,
        PlayersModule,
        usersRouting,
        exercisesRouting,
        seasonRouting,
        postsRouting,
        playersRouting,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        NotFoundComponent
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { 
}