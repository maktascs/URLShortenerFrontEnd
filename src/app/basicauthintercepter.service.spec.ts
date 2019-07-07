import { TestBed } from '@angular/core/testing';

import { BasicauthintercepterService } from './basicauthintercepter.service';

describe('BasicauthintercepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicauthintercepterService = TestBed.get(BasicauthintercepterService);
    expect(service).toBeTruthy();
  });
});
