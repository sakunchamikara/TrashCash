import { TestBed } from '@angular/core/testing';

import { SummaryStockService } from './summary-stock.service';

describe('SummaryStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummaryStockService = TestBed.get(SummaryStockService);
    expect(service).toBeTruthy();
  });
});
