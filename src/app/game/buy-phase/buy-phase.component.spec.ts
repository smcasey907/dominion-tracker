import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPhaseComponent } from './buy-phase.component';

describe('BuyPhaseComponent', () => {
  let component: BuyPhaseComponent;
  let fixture: ComponentFixture<BuyPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
