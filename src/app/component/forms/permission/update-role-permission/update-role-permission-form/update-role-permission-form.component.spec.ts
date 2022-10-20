import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRolePermissionFormComponent } from './update-role-permission-form.component';

describe('UpdateRolePermissionFormComponent', () => {
  let component: UpdateRolePermissionFormComponent;
  let fixture: ComponentFixture<UpdateRolePermissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRolePermissionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRolePermissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
