import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProject } from '@models';
import { ProjectService } from '@services/entities.service';
import { AeDynamicForm, AeDynamicFormComponent, AeFormBuilder } from 'ae-dynamic-form';

@Component({
  selector: 'app-create-new-project',
  templateUrl: './create-new-project.component.html',
  styleUrls: ['./create-new-project.component.scss']
})
export class CreateNewProjectComponent implements OnInit {

  @ViewChild(AeDynamicFormComponent) formComponent: AeDynamicFormComponent;

  form: AeDynamicForm = new AeFormBuilder()
    .title('Project Form')
    .newControl('name')
    .autocomplete('off').required()
    .placeholder('Type Project Name').label('Project Name')
    .buildFormControl()

    .newControl('description')
    .autocomplete('off').required().minLength(10).maxLength(100)
    .placeholder('Type description').label('Description')
    .buildFormControl()

    .submitButtonLabel('Create Project')
    .buildForm();

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
  }

  submitForm(form: IProject): void {
    this.projectService.add(form);
    this.projectService.addOneToCache({ id: this.generateId(), ...form });
  }


  generateId(): number {
    return Math.floor(Math.random() * 1000000 + 1000000);
  }

}
