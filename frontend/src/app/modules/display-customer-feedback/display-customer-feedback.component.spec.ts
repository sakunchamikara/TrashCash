import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCustomerFeedbackComponent } from './display-customer-feedback.component';

describe('DisplayCustomerFeedbackComponent', () => {
  let component: DisplayCustomerFeedbackComponent;
  let fixture: ComponentFixture<DisplayCustomerFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCustomerFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCustomerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
