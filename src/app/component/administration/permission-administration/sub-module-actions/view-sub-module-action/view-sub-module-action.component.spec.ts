import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubModuleActionComponent } from './view-sub-module-action.component';

describe('ViewSubModuleActionComponent', () => {
  let component: ViewSubModuleActionComponent;
  let fixture: ComponentFixture<ViewSubModuleActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubModuleActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubModuleActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
