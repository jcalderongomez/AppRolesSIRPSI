import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoCrearComponent } from './permiso-crear.component';

describe('PermisoCrearComponent', () => {
  let component: PermisoCrearComponent;
  let fixture: ComponentFixture<PermisoCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermisoCrearComponent]
    });
    fixture = TestBed.createComponent(PermisoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
