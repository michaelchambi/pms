import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConfigurationFormComponent } from './add-configuration-form.component';

describe('AddConfigurationFormComponent', () => {
  let component: AddConfigurationFormComponent;
  let fixture: ComponentFixture<AddConfigurationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConfigurationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConfigurationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
