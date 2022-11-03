import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImplementatioFormComponent } from './edit-implementatio-form.component';

describe('EditImplementatioFormComponent', () => {
  let component: EditImplementatioFormComponent;
  let fixture: ComponentFixture<EditImplementatioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditImplementatioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImplementatioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
