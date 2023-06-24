import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCrearComponent } from './usuario-crear.component';

describe('UsuarioCrearComponent', () => {
  let component: UsuarioCrearComponent;
  let fixture: ComponentFixture<UsuarioCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioCrearComponent]
    });
    fixture = TestBed.createComponent(UsuarioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
