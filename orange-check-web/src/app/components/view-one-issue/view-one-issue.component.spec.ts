import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneIssueComponent } from './view-one-issue.component';

describe('ViewOneIssueComponent', () => {
  let component: ViewOneIssueComponent;
  let fixture: ComponentFixture<ViewOneIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
