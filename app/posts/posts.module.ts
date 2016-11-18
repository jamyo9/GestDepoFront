
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { HttpModule }          from '@angular/http';

import { SharedModule }        from '../shared/shared.module';

import { PostsComponent }      from './components/posts.component';
import { PostService }         from './services/post.service';
import { UserService }         from '../users/services/user.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HttpModule
    ],
    declarations: [
        PostsComponent 
    ],
    exports: [
        PostsComponent 
    ],
    providers: [
        PostService,
        UserService
    ]
})
export class PostsModule { 
}