import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubModuleFormComponent } from './add-sub-module-form.component';

describe('AddSubModuleFormComponent', () => {
  let component: AddSubModuleFormComponent;
  let fixture: ComponentFixture<AddSubModuleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubModuleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubModuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
