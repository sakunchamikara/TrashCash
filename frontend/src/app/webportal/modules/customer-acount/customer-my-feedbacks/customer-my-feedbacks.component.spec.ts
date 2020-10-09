import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMyFeedbacksComponent } from './customer-my-feedbacks.component';

describe('CustomerMyFeedbacksComponent', () => {
  let component: CustomerMyFeedbacksComponent;
  let fixture: ComponentFixture<CustomerMyFeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMyFeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMyFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
