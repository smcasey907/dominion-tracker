import { TestBed } from '@angular/core/testing';

import { GameEffectsService } from './game-effects.service';

describe('GameEffectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameEffectsService = TestBed.get(GameEffectsService);
    expect(service).toBeTruthy();
  });
});
