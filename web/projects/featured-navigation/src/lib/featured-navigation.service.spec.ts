import { TestBed } from '@angular/core/testing';

import { FeaturedNavigationService } from './featured-navigation.service';

describe('FeaturedNavigationService', () => {
  let service: FeaturedNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
