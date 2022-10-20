import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubModuleFormComponent } from './edit-sub-module-form.component';

describe('EditSubModuleFormComponent', () => {
  let component: EditSubModuleFormComponent;
  let fixture: ComponentFixture<EditSubModuleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubModuleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubModuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
