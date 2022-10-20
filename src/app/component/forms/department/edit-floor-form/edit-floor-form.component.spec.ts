import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFloorFormComponent } from './edit-floor-form.component';

describe('EditFloorFormComponent', () => {
  let component: EditFloorFormComponent;
  let fixture: ComponentFixture<EditFloorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFloorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFloorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
