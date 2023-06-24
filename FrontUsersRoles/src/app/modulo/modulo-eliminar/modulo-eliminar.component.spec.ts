import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloEliminarComponent } from './modulo-eliminar.component';

describe('ModuloEliminarComponent', () => {
  let component: ModuloEliminarComponent;
  let fixture: ComponentFixture<ModuloEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloEliminarComponent]
    });
    fixture = TestBed.createComponent(ModuloEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
