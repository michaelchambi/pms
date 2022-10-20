import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppConfigurationComponent } from './view-app-configuration.component';

describe('ViewAppConfigurationComponent', () => {
  let component: ViewAppConfigurationComponent;
  let fixture: ComponentFixture<ViewAppConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
