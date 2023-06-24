import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaListarComponent } from './empresa-listar.component';

describe('EmpresaListarComponent', () => {
  let component: EmpresaListarComponent;
  let fixture: ComponentFixture<EmpresaListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaListarComponent]
    });
    fixture = TestBed.createComponent(EmpresaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
