import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariorolCrearComponent } from './usuariorol-crear.component';

describe('UsuariorolCrearComponent', () => {
  let component: UsuariorolCrearComponent;
  let fixture: ComponentFixture<UsuariorolCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariorolCrearComponent]
    });
    fixture = TestBed.createComponent(UsuariorolCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
