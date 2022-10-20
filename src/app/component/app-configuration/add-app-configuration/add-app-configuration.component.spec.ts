import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppConfigurationComponent } from './add-app-configuration.component';

describe('AddAppConfigurationComponent', () => {
  let component: AddAppConfigurationComponent;
  let fixture: ComponentFixture<AddAppConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
