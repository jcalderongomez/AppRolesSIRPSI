import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariorolHomeComponent } from './usuariorol-home.component';

describe('UsuariorolHomeComponent', () => {
  let component: UsuariorolHomeComponent;
  let fixture: ComponentFixture<UsuariorolHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariorolHomeComponent]
    });
    fixture = TestBed.createComponent(UsuariorolHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
