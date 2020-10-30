import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispacherComponent } from './dispacher.component';

describe('DispacherComponent', () => {
  let component: DispacherComponent;
  let fixture: ComponentFixture<DispacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
