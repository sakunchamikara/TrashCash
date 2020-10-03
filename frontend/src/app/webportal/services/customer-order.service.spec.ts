import { TestBed } from '@angular/core/testing';

import { CustomerOrderService } from './customer-order.service';

describe('CustomerOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerOrderService = TestBed.get(CustomerOrderService);
    expect(service).toBeTruthy();
  });
});
