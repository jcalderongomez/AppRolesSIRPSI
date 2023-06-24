import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEliminarComponent } from './usuario-eliminar.component';

describe('UsuarioEliminarComponent', () => {
  let component: UsuarioEliminarComponent;
  let fixture: ComponentFixture<UsuarioEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioEliminarComponent]
    });
    fixture = TestBed.createComponent(UsuarioEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
