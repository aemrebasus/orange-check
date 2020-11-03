import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneCommentComponent } from './view-one-comment.component';

describe('ViewOneCommentComponent', () => {
  let component: ViewOneCommentComponent;
  let fixture: ComponentFixture<ViewOneCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
