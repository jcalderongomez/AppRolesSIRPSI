import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologoEliminarComponent } from './psicologo-eliminar.component';

describe('PsicologoEliminarComponent', () => {
  let component: PsicologoEliminarComponent;
  let fixture: ComponentFixture<PsicologoEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsicologoEliminarComponent]
    });
    fixture = TestBed.createComponent(PsicologoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
