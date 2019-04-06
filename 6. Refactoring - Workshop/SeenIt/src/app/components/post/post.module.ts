import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentInfoComponent } from '../comment/comment-info/comment-info.component';
import { CommentCreateComponent } from '../comment/comment-create/comment-create.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
    declarations: [ // модулите, които използвам в post
        CommentInfoComponent, // иначе гърми използвам ги вътре
        CommentCreateComponent, // иначе гърми използвам ги вътре
        PostCreateComponent,
        PostEditComponent,
        PostDetailsComponent,
        PostInfoComponent,
        PostListComponent
    ],
    imports: [
        CommonModule, // за директиви kato ngFor ngIf
        FormsModule,
        PostRoutingModule
    ]
})
export class PostModule {

}