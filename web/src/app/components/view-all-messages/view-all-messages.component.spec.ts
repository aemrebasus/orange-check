import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMessagesComponent } from './view-all-messages.component';

describe('ViewAllMessagesComponent', () => {
  let component: ViewAllMessagesComponent;
  let fixture: ComponentFixture<ViewAllMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
