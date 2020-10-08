import { TestBed } from '@angular/core/testing';

import { NewcontactService } from './newcontact.service';

describe('NewcontactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewcontactService = TestBed.get(NewcontactService);
    expect(service).toBeTruthy();
  });
});
