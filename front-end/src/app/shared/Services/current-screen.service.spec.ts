import { TestBed } from '@angular/core/testing';

import { CurrentScreenService } from '../../current-screen.service';

describe('CurrentScreenService', () => {
  let service: CurrentScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
