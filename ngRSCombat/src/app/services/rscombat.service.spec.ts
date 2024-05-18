import { TestBed } from '@angular/core/testing';

import { RSCombatService } from './rscombat.service';

describe('RSCombatService', () => {
  let service: RSCombatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RSCombatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
