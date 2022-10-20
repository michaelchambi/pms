import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubModuleActionComponent } from './add-sub-module-action.component';

describe('AddSubModuleActionComponent', () => {
  let component: AddSubModuleActionComponent;
  let fixture: ComponentFixture<AddSubModuleActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubModuleActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubModuleActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
