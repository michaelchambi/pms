import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImplementationPlanComponent } from './add-implementation-plan.component';

describe('AddImplementationPlanComponent', () => {
  let component: AddImplementationPlanComponent;
  let fixture: ComponentFixture<AddImplementationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImplementationPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImplementationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
