import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoEliminarComponent } from './permiso-eliminar.component';

describe('PermisoEliminarComponent', () => {
  let component: PermisoEliminarComponent;
  let fixture: ComponentFixture<PermisoEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermisoEliminarComponent]
    });
    fixture = TestBed.createComponent(PermisoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
