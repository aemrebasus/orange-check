import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCommentsComponent } from './view-all-comments.component';

describe('ViewAllCommentsComponent', () => {
  let component: ViewAllCommentsComponent;
  let fixture: ComponentFixture<ViewAllCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
