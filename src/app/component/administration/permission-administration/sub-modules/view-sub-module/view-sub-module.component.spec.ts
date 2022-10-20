import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubModuleComponent } from './view-sub-module.component';

describe('ViewSubModuleComponent', () => {
  let component: ViewSubModuleComponent;
  let fixture: ComponentFixture<ViewSubModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
