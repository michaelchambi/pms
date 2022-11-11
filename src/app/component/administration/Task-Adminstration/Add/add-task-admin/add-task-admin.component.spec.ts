import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskAdminComponent } from './add-task-admin.component';

describe('AddTaskAdminComponent', () => {
  let component: AddTaskAdminComponent;
  let fixture: ComponentFixture<AddTaskAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
