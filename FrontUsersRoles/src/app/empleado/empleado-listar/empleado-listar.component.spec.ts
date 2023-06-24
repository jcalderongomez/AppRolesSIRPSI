import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoListarComponent } from './empleado-listar.component';

describe('EmpleadoListarComponent', () => {
  let component: EmpleadoListarComponent;
  let fixture: ComponentFixture<EmpleadoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoListarComponent]
    });
    fixture = TestBed.createComponent(EmpleadoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
