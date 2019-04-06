import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SinglePostResolver } from 'src/app/core/resolvers/single-post.resolver';

const postRoutes: Route[] = [
    { path: '', component: PostListComponent },
    { path: 'user', component: PostListComponent },
    { path: 'create', component: PostCreateComponent },
    { path: 'edit/:id', component: PostEditComponent },
    { path: 'details/:id', component: PostDetailsComponent, resolve: { post: SinglePostResolver } } // resolve ot single.post.resolver
];

@NgModule({
    imports: [
        RouterModule.forChild(postRoutes) // всички child-ве
    ],
    exports: [
        RouterModule
    ]
})
export class PostRoutingModule {

}