import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoListarComponent } from './permiso-listar.component';

describe('PermisoListarComponent', () => {
  let component: PermisoListarComponent;
  let fixture: ComponentFixture<PermisoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermisoListarComponent]
    });
    fixture = TestBed.createComponent(PermisoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
