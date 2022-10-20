import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModuleFormComponent } from './add-module-form.component';

describe('AddModuleFormComponent', () => {
  let component: AddModuleFormComponent;
  let fixture: ComponentFixture<AddModuleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModuleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
