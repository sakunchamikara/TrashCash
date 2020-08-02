import { TestBed } from '@angular/core/testing';

import { OutsourceWasteRequsetService } from './outsource-waste-requset.service';

describe('OutsourceWasteRequsetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutsourceWasteRequsetService = TestBed.get(OutsourceWasteRequsetService);
    expect(service).toBeTruthy();
  });
});
