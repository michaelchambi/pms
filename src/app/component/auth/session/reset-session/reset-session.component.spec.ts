import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSessionComponent } from './reset-session.component';

describe('ResetSessionComponent', () => {
  let component: ResetSessionComponent;
  let fixture: ComponentFixture<ResetSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
