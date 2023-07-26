import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialbuttonComponent } from './specialbutton.component';

describe('SpecialbuttonComponent', () => {
  let component: SpecialbuttonComponent;
  let fixture: ComponentFixture<SpecialbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialbuttonComponent]
    });
    fixture = TestBed.createComponent(SpecialbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
