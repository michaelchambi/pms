import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubModuleComponent } from './edit-sub-module.component';

describe('EditSubModuleComponent', () => {
  let component: EditSubModuleComponent;
  let fixture: ComponentFixture<EditSubModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
