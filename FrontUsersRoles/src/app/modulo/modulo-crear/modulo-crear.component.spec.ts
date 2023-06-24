import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCrearComponent } from './modulo-crear.component';

describe('ModuloCrearComponent', () => {
  let component: ModuloCrearComponent;
  let fixture: ComponentFixture<ModuloCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloCrearComponent]
    });
    fixture = TestBed.createComponent(ModuloCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
