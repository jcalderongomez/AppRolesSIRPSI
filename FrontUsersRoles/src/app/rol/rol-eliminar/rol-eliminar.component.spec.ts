import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolEliminarComponent } from './rol-eliminar.component';

describe('RolEliminarComponent', () => {
  let component: RolEliminarComponent;
  let fixture: ComponentFixture<RolEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolEliminarComponent]
    });
    fixture = TestBed.createComponent(RolEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
