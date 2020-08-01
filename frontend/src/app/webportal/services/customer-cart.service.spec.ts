import { TestBed } from '@angular/core/testing';

import { CustomerCartService } from './customer-cart.service';

describe('CustomerCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerCartService = TestBed.get(CustomerCartService);
    expect(service).toBeTruthy();
  });
});
