import { TestBed } from '@angular/core/testing';

import { ProductCatService } from './product-cat.service';

describe('ProductCatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCatService = TestBed.get(ProductCatService);
    expect(service).toBeTruthy();
  });
});
