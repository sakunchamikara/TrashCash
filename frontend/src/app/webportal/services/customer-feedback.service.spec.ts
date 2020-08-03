import { TestBed } from '@angular/core/testing';

import { CustomerFeedbackService } from './customer-feedback.service';

describe('CustomerFeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerFeedbackService = TestBed.get(CustomerFeedbackService);
    expect(service).toBeTruthy();
  });
});
