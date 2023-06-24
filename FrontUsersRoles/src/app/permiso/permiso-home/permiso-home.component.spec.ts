import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoHomeComponent } from './permiso-home.component';

describe('PermisoHomeComponent', () => {
  let component: PermisoHomeComponent;
  let fixture: ComponentFixture<PermisoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermisoHomeComponent]
    });
    fixture = TestBed.createComponent(PermisoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
