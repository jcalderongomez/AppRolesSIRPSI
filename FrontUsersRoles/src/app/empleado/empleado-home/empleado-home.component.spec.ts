import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHomeComponent } from './empleado-home.component';

describe('EmpleadoHomeComponent', () => {
  let component: EmpleadoHomeComponent;
  let fixture: ComponentFixture<EmpleadoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoHomeComponent]
    });
    fixture = TestBed.createComponent(EmpleadoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
