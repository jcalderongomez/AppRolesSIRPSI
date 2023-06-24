import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoEditarComponent } from './permiso-editar.component';

describe('PermisoEditarComponent', () => {
  let component: PermisoEditarComponent;
  let fixture: ComponentFixture<PermisoEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermisoEditarComponent]
    });
    fixture = TestBed.createComponent(PermisoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
