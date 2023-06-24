import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloListarComponent } from './modulo-listar.component';

describe('ModuloListarComponent', () => {
  let component: ModuloListarComponent;
  let fixture: ComponentFixture<ModuloListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloListarComponent]
    });
    fixture = TestBed.createComponent(ModuloListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
