import { TestBed } from '@angular/core/testing';

import { CustomerAuthService } from './customer-auth.service';

describe('CustomerAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerAuthService = TestBed.get(CustomerAuthService);
    expect(service).toBeTruthy();
  });
});
