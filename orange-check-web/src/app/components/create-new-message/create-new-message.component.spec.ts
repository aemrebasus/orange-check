import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewMessageComponent } from './create-new-message.component';

describe('CreateNewMessageComponent', () => {
  let component: CreateNewMessageComponent;
  let fixture: ComponentFixture<CreateNewMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
