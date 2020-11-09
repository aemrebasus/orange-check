import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IProject } from '@models/IProject';
import { ProjectService } from '@services/project.service';
import { AeDynamicForm, AeFormBuilder } from 'ae-dynamic-form';

@Component({
  selector: 'app-create-new-project',
  templateUrl: './create-new-project.component.html',
  styleUrls: ['./create-new-project.component.scss']
})
export class CreateNewProjectComponent implements OnInit {

  @Output() submitted = new EventEmitter<IProject>();

  form: AeDynamicForm = new AeFormBuilder()

    .title('Project Form')

    .newControl('name').autocomplete('off').required()
    .icon('edit').placeholder('Type Project Name').label('Project Name').buildFormControl()


    .newControl('description').autocomplete('off').required().minLength(10).maxLength(100)
    .icon('description').placeholder('Type description').label('Description')
    .buildFormControl()

    .submitButtonLabel('Create Project')
    .buildForm();

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
  }

  submitForm(form: IProject): void {
    this.projectService.upsert({ id: -1, ...form });
    this.submitted.emit(form);
  }

}
