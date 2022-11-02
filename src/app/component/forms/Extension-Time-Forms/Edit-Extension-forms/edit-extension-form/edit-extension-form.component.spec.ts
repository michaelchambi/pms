import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExtensionFormComponent } from './edit-extension-form.component';

describe('EditExtensionFormComponent', () => {
  let component: EditExtensionFormComponent;
  let fixture: ComponentFixture<EditExtensionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExtensionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExtensionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
