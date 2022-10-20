import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubModuleActionComponent } from './edit-sub-module-action.component';

describe('EditSubModuleActionComponent', () => {
  let component: EditSubModuleActionComponent;
  let fixture: ComponentFixture<EditSubModuleActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubModuleActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubModuleActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
