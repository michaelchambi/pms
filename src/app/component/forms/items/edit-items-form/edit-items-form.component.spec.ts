import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemsFormComponent } from './edit-items-form.component';

describe('EditItemsFormComponent', () => {
  let component: EditItemsFormComponent;
  let fixture: ComponentFixture<EditItemsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditItemsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
