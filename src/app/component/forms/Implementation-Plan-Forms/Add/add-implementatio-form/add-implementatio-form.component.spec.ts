import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImplementatioFormComponent } from './add-implementatio-form.component';

describe('AddImplementatioFormComponent', () => {
  let component: AddImplementatioFormComponent;
  let fixture: ComponentFixture<AddImplementatioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImplementatioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImplementatioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
