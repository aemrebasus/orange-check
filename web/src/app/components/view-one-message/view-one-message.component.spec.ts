import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneMessageComponent } from './view-one-message.component';

describe('ViewOneMessageComponent', () => {
  let component: ViewOneMessageComponent;
  let fixture: ComponentFixture<ViewOneMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
