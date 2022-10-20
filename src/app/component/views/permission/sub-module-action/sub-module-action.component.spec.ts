import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubModuleActionComponent } from './sub-module-action.component';

describe('SubModuleActionComponent', () => {
  let component: SubModuleActionComponent;
  let fixture: ComponentFixture<SubModuleActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubModuleActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubModuleActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
