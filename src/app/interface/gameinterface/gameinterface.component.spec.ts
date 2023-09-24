import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameinterfaceComponent } from './gameinterface.component';

describe('GameinterfaceComponent', () => {
  let component: GameinterfaceComponent;
  let fixture: ComponentFixture<GameinterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GameinterfaceComponent]
    });
    fixture = TestBed.createComponent(GameinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
