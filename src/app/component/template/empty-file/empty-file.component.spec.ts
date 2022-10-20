import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyFileComponent } from './empty-file.component';

describe('EmptyFileComponent', () => {
  let component: EmptyFileComponent;
  let fixture: ComponentFixture<EmptyFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
