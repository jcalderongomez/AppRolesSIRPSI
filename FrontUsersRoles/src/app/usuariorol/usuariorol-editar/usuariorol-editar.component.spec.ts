import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariorolEditarComponent } from './usuariorol-editar.component';

describe('UsuariorolEditarComponent', () => {
  let component: UsuariorolEditarComponent;
  let fixture: ComponentFixture<UsuariorolEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariorolEditarComponent]
    });
    fixture = TestBed.createComponent(UsuariorolEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
