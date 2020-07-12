import { TestBed } from '@angular/core/testing';

import { CollectedWasteServiceService } from './collected-waste-service.service';

describe('CollectedWasteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollectedWasteServiceService = TestBed.get(CollectedWasteServiceService);
    expect(service).toBeTruthy();
  });
});
