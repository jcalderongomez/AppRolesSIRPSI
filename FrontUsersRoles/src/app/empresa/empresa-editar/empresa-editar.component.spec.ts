import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaEditarComponent } from './empresa-editar.component';

describe('EmpresaEditarComponent', () => {
  let component: EmpresaEditarComponent;
  let fixture: ComponentFixture<EmpresaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaEditarComponent]
    });
    fixture = TestBed.createComponent(EmpresaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
