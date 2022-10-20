import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppConfigurationComponent } from './edit-app-configuration.component';

describe('EditAppConfigurationComponent', () => {
  let component: EditAppConfigurationComponent;
  let fixture: ComponentFixture<EditAppConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAppConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
