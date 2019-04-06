import { Component, OnInit, Input } from '@angular/core';
import { PostInfo } from '../../shared/model/IPost-Info';
import { PostService } from 'src/app/core/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  @Input() postInfo: PostInfo; // получавам от parent-a нов модел с име от html-a в [] скоби
  @Input() rank: number; // от parent към childindex на всеки пост в post.list.html в [rank] като index и в post.info html
  @Input() desc: string; // description

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  isAuthor(post: Object) {
    return post['_acl']['creator'] === localStorage.getItem('userId');
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      });
  }
}
