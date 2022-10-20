import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubModuleActionFormComponent } from './edit-sub-module-action-form.component';

describe('EditSubModuleActionFormComponent', () => {
  let component: EditSubModuleActionFormComponent;
  let fixture: ComponentFixture<EditSubModuleActionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubModuleActionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubModuleActionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
