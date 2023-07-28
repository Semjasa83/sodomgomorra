import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacebuttonComponent } from './interfacebutton.component';

describe('InterfacebuttonComponent', () => {
  let component: InterfacebuttonComponent;
  let fixture: ComponentFixture<InterfacebuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfacebuttonComponent]
    });
    fixture = TestBed.createComponent(InterfacebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
