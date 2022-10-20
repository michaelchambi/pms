import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePermissionsFormComponent } from './module-permissions-form.component';

describe('ModulePermissionsFormComponent', () => {
  let component: ModulePermissionsFormComponent;
  let fixture: ComponentFixture<ModulePermissionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulePermissionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePermissionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
