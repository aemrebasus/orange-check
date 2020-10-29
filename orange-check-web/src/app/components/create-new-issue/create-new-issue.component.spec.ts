import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewIssueComponent } from './create-new-issue.component';

describe('CreateNewIssueComponent', () => {
  let component: CreateNewIssueComponent;
  let fixture: ComponentFixture<CreateNewIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
