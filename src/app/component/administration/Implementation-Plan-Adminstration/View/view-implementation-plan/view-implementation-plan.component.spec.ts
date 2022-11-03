import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImplementationPlanComponent } from './view-implementation-plan.component';

describe('ViewImplementationPlanComponent', () => {
  let component: ViewImplementationPlanComponent;
  let fixture: ComponentFixture<ViewImplementationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewImplementationPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewImplementationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
