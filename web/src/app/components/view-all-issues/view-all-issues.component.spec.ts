import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllIssuesComponent } from './view-all-issues.component';

describe('ViewAllIssuesComponent', () => {
  let component: ViewAllIssuesComponent;
  let fixture: ComponentFixture<ViewAllIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
