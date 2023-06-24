import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariorolEliminarComponent } from './usuariorol-eliminar.component';

describe('UsuariorolEliminarComponent', () => {
  let component: UsuariorolEliminarComponent;
  let fixture: ComponentFixture<UsuariorolEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariorolEliminarComponent]
    });
    fixture = TestBed.createComponent(UsuariorolEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
