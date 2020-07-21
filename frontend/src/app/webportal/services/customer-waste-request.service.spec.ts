import { TestBed } from '@angular/core/testing';

import { CustomerWasteRequestService } from './customer-waste-request.service';

describe('CustomerWasteRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerWasteRequestService = TestBed.get(CustomerWasteRequestService);
    expect(service).toBeTruthy();
  });
});
