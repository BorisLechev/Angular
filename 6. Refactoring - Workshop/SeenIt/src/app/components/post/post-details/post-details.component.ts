import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostService } from '../../../core/services/post.service';
import { CommentService } from '../../../core/services/comment.service';
import { PostInfo } from '../../shared/model/IPost-Info';
import { CommentInfo } from '../../shared/model/IComment-Info';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: PostInfo; // заради async pipe в този html
  comments$: Observable<CommentInfo[]>; // заради async pipe в този html
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.post = this.route.snapshot.data['post']; // от resolver i махаме asyn pipe ot <app-post-info> i ot <app-post-comment>
    this.comments$ = this.commentService.getAllForPost(this.id); // така нямаме subscribe в loadComments
  }

  loadComments() {
    this.comments$ = this.commentService.getAllForPost(this.id);
  }

  postComment(body: Object) { // от comment-create.ts
    this.commentService
      .postComment(body)
      .subscribe(() => {
        this.loadComments(); // да зареди всички коментари + новия
      });
  }

  deleteComment(id: string) { // от comment-info.ts
    this.commentService
      .deleteComment(id)
      .subscribe((data) => {
        this.loadComments(); // да зареди всички коментари
      });
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      });
  }
}
