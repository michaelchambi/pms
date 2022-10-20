import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoriesFormComponent } from './edit-categories-form.component';

describe('EditCategoriesFormComponent', () => {
  let component: EditCategoriesFormComponent;
  let fixture: ComponentFixture<EditCategoriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoriesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
