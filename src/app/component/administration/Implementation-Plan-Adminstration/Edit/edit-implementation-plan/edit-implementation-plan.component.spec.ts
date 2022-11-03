import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImplementationPlanComponent } from './edit-implementation-plan.component';

describe('EditImplementationPlanComponent', () => {
  let component: EditImplementationPlanComponent;
  let fixture: ComponentFixture<EditImplementationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditImplementationPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImplementationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
