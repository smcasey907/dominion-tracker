import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGenerationComponent } from './game-generation.component';

describe('GameGenerationComponent', () => {
  let component: GameGenerationComponent;
  let fixture: ComponentFixture<GameGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
