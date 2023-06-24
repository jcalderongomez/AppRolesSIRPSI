import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroEliminarComponent } from './centro-eliminar.component';

describe('CentroEliminarComponent', () => {
  let component: CentroEliminarComponent;
  let fixture: ComponentFixture<CentroEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroEliminarComponent]
    });
    fixture = TestBed.createComponent(CentroEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
