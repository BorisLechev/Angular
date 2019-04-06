import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommentInfo } from '../../shared/model/IComment-Info';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent {
  @Input() commentInfo: CommentInfo; // ще дойде от post.details.html от [commentInfo]
  @Output() deleteCommentEmitter = new EventEmitter<string>(); // string e защото id е string child component(този) има Event Emitter, който искам да изпратя idна коментара на parent (post-details), че съм създал нов коментар и да извика postComments() в post-details.html

  deleteComment(id: string) {
    this.deleteCommentEmitter.emit(id); // пращам id, който той очаква на deleteComment() в post-details.ts
  }

  isAuthor(commentInfo: Object) {
    return commentInfo['_acl']['creator'] === localStorage.getItem('userId');
  }
}
