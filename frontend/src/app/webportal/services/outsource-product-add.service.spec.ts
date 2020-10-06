import { TestBed } from '@angular/core/testing';

import { OutsourceProductAddService } from './outsource-product-add.service';

describe('OutsourceProductAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutsourceProductAddService = TestBed.get(OutsourceProductAddService);
    expect(service).toBeTruthy();
  });
});
