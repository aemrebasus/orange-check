import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneProjectComponent } from './view-one-project.component';

describe('ViewOneProjectComponent', () => {
  let component: ViewOneProjectComponent;
  let fixture: ComponentFixture<ViewOneProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
