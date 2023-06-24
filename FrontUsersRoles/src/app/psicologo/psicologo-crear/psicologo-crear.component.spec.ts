import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologoCrearComponent } from './psicologo-crear.component';

describe('PsicologoCrearComponent', () => {
  let component: PsicologoCrearComponent;
  let fixture: ComponentFixture<PsicologoCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsicologoCrearComponent]
    });
    fixture = TestBed.createComponent(PsicologoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
