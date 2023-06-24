import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioHomeComponent } from './usuario-home.component';

describe('UsuarioHomeComponent', () => {
  let component: UsuarioHomeComponent;
  let fixture: ComponentFixture<UsuarioHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioHomeComponent]
    });
    fixture = TestBed.createComponent(UsuarioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
