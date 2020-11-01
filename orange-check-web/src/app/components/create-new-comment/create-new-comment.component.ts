import { Component, OnInit } from '@angular/core';
import { IComment } from '@models';
import { CommentService, UserService } from '@services/entities.service';
import { AeDynamicForm, AeFormBuilder, InputOption } from 'ae-dynamic-form';

@Component({
  selector: 'app-create-new-comment',
  templateUrl: './create-new-comment.component.html',
  styleUrls: ['./create-new-comment.component.scss']
})
export class CreateNewCommentComponent {

  form: AeDynamicForm = new AeFormBuilder()
    .title('Comment Form')
    .newControl('text').type('text-area').required().minLength(1).maxLength(50)
    .icon('comment').placeholder('Type Comment').label('Comment').buildFormControl()

    .submitButtonLabel('Comment')
    .buildForm();

  constructor(private commentService: CommentService) { }

  submitForm(form: IComment): void {
    this.commentService.add(form);
    this.commentService.addOneToCache(form);
  }

}
