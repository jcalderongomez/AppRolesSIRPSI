import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologoHomeComponent } from './psicologo-home.component';

describe('PsicologoHomeComponent', () => {
  let component: PsicologoHomeComponent;
  let fixture: ComponentFixture<PsicologoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsicologoHomeComponent]
    });
    fixture = TestBed.createComponent(PsicologoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
