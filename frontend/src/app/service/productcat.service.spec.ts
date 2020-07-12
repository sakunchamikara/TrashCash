import { TestBed } from '@angular/core/testing';

import { ProductcatService } from './productcat.service';

describe('ProductcatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductcatService = TestBed.get(ProductcatService);
    expect(service).toBeTruthy();
  });
});
