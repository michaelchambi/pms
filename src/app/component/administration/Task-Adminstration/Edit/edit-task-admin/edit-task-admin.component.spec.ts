import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskAdminComponent } from './edit-task-admin.component';

describe('EditTaskAdminComponent', () => {
  let component: EditTaskAdminComponent;
  let fixture: ComponentFixture<EditTaskAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTaskAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
