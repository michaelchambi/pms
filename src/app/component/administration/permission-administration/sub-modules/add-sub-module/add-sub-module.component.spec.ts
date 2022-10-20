import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubModuleComponent } from './add-sub-module.component';

describe('AddSubModuleComponent', () => {
  let component: AddSubModuleComponent;
  let fixture: ComponentFixture<AddSubModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
