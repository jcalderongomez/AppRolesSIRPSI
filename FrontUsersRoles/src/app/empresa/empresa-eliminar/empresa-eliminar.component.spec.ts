import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaEliminarComponent } from './empresa-eliminar.component';

describe('EmpresaEliminarComponent', () => {
  let component: EmpresaEliminarComponent;
  let fixture: ComponentFixture<EmpresaEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaEliminarComponent]
    });
    fixture = TestBed.createComponent(EmpresaEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
