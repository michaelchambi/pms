import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectProgressComponent } from './list-project-progress.component';

describe('ListProjectProgressComponent', () => {
  let component: ListProjectProgressComponent;
  let fixture: ComponentFixture<ListProjectProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjectProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
