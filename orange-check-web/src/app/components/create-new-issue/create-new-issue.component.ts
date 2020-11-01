import { Component, OnInit } from '@angular/core';
import { Issue } from '@models';
import { IssueService } from '@services/entities.service';
import { AeDynamicForm, AeFormBuilder } from 'ae-dynamic-form';

@Component({
  selector: 'app-create-new-issue',
  templateUrl: './create-new-issue.component.html',
  styleUrls: ['./create-new-issue.component.scss']
})
export class CreateNewIssueComponent implements OnInit {

  form: AeDynamicForm = new AeFormBuilder().title('Issue Form')
    .newControl('title').required().maxLength(20)
    .placeholder('Type Title').label('Title').buildFormControl()

    .newControl('description').required().maxLength(400).minLength(10)
    .placeholder('Type Description').label('Description').buildFormControl()

    .newControl('due').type('date').required()
    .placeholder('Type Due Date').label('Due').buildFormControl()

    .submitButtonLabel('Create')
    .buildForm();

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
  }

  submitForm(form: Issue): void {
    // Temporary --- Monitor the application state and store selected users, project, issues.
    // So additional data can be attached to the form here.

    this.issueService.add(form);
    this.issueService.addOneToCache(form);
  }

}
