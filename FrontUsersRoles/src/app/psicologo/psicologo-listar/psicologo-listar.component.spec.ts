import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologoListarComponent } from './psicologo-listar.component';

describe('PsicologoListarComponent', () => {
  let component: PsicologoListarComponent;
  let fixture: ComponentFixture<PsicologoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsicologoListarComponent]
    });
    fixture = TestBed.createComponent(PsicologoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
