import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GantChartProjectProgressComponent } from './gant-chart-project-progress.component';

describe('GantChartProjectProgressComponent', () => {
  let component: GantChartProjectProgressComponent;
  let fixture: ComponentFixture<GantChartProjectProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GantChartProjectProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GantChartProjectProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
