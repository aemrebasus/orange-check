import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '@models/index';

@Component({
  selector: 'app-view-one-comment',
  templateUrl: './view-one-comment.component.html',
  styleUrls: ['./view-one-comment.component.scss']
})
export class ViewOneCommentComponent {
  @Input() input: IComment = {
    id: 1,
    from: 'Ahmet Emrebas',
    text: 'Some comment from Ahmet Emrebas',
    created_at: '12:25 PM - 10/10/2020'
  };
}
