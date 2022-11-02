import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeExtensionDetailedViewComponent } from './time-extension-detailed-view.component';

describe('TimeExtensionDetailedViewComponent', () => {
  let component: TimeExtensionDetailedViewComponent;
  let fixture: ComponentFixture<TimeExtensionDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeExtensionDetailedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeExtensionDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
