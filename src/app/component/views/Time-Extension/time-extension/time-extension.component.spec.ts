import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeExtensionComponent } from './time-extension.component';

describe('TimeExtensionComponent', () => {
  let component: TimeExtensionComponent;
  let fixture: ComponentFixture<TimeExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeExtensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
