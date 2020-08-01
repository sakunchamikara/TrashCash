import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeedbackComponent } from './customer-feedback.component';

describe('CustomerFeedbackComponent', () => {
  let component: CustomerFeedbackComponent;
  let fixture: ComponentFixture<CustomerFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
