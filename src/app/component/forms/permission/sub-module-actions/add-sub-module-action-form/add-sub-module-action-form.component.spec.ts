import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubModuleActionFormComponent } from './add-sub-module-action-form.component';

describe('AddSubModuleActionFormComponent', () => {
  let component: AddSubModuleActionFormComponent;
  let fixture: ComponentFixture<AddSubModuleActionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubModuleActionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubModuleActionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
