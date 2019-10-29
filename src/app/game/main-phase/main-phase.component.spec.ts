import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPhaseComponent } from './main-phase.component';

describe('MainPhaseComponent', () => {
  let component: MainPhaseComponent;
  let fixture: ComponentFixture<MainPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
