import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent {
  @ViewChild('f') createCommentForm: NgForm;
  @Input() postId: string; // ще дойде от post.details.html [postId]
  @Output() postCommentEmitter = new EventEmitter<Object>(); // child component(този) има Event Emitter, който искам да изпратя на parent (post-details), че съм създал нов коментар и да извика postComments() в post-details.html

  postComment() {
    const body = this.createCommentForm.value;
    body['postId'] = this.postId;
    body['author'] = localStorage.getItem('username');

    // Sent Event Emitter to details component за да известя details component, че съм създал коментар и да извика postComments()
    this.postCommentEmitter.emit(body); // пращам обекта, който той очаква на postComment() в post-details.ts
    this.createCommentForm.reset(); // да изчистя textarea-ta
  }
}
