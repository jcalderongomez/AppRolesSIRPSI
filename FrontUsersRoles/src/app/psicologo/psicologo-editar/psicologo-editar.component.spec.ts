import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologoEditarComponent } from './psicologo-editar.component';

describe('PsicologoEditarComponent', () => {
  let component: PsicologoEditarComponent;
  let fixture: ComponentFixture<PsicologoEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsicologoEditarComponent]
    });
    fixture = TestBed.createComponent(PsicologoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
