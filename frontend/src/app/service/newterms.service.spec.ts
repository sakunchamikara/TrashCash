import { TestBed } from '@angular/core/testing';

import { NewtermsService } from './newterms.service';

describe('NewtermsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewtermsService = TestBed.get(NewtermsService);
    expect(service).toBeTruthy();
  });
});
