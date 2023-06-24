import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoEliminarComponent } from './empleado-eliminar.component';

describe('EmpleadoEliminarComponent', () => {
  let component: EmpleadoEliminarComponent;
  let fixture: ComponentFixture<EmpleadoEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoEliminarComponent]
    });
    fixture = TestBed.createComponent(EmpleadoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
