import { Component, OnInit } from '@angular/core';
import { IComment } from '@models/index';
import { Observable } from 'rxjs';
import { CommentService } from '@services/entities.data.service';
@Component({
  selector: 'app-view-all-comments',
  templateUrl: './view-all-comments.component.html',
  styleUrls: ['./view-all-comments.component.scss'],
})
export class ViewAllCommentsComponent {

  comments: Observable<IComment[]> = this.service.entities$;
  loading: Observable<boolean> = this.service.loading$;

  constructor(private service: CommentService) {
    this.service.getAll();
  }

}
