import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditedItemDetailsComponent } from './view-edited-item-details.component';

describe('ViewEditedItemDetailsComponent', () => {
  let component: ViewEditedItemDetailsComponent;
  let fixture: ComponentFixture<ViewEditedItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditedItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditedItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
