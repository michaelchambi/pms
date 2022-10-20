import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedItemDetailsComponent } from './edited-item-details.component';

describe('EditedItemDetailsComponent', () => {
  let component: EditedItemDetailsComponent;
  let fixture: ComponentFixture<EditedItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditedItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditedItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
