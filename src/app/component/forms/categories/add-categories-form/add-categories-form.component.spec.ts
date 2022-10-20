import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoriesFormComponent } from './add-categories-form.component';

describe('AddCategoriesFormComponent', () => {
  let component: AddCategoriesFormComponent;
  let fixture: ComponentFixture<AddCategoriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoriesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
