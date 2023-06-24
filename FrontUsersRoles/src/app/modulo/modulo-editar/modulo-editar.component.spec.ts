import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloEditarComponent } from './modulo-editar.component';

describe('ModuloEditarComponent', () => {
  let component: ModuloEditarComponent;
  let fixture: ComponentFixture<ModuloEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloEditarComponent]
    });
    fixture = TestBed.createComponent(ModuloEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
