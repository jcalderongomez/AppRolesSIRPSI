import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariorolListarComponent } from './usuariorol-listar.component';

describe('UsuariorolListarComponent', () => {
  let component: UsuariorolListarComponent;
  let fixture: ComponentFixture<UsuariorolListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariorolListarComponent]
    });
    fixture = TestBed.createComponent(UsuariorolListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
