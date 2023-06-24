import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloHomeComponent } from './modulo-home.component';

describe('ModuloHomeComponent', () => {
  let component: ModuloHomeComponent;
  let fixture: ComponentFixture<ModuloHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloHomeComponent]
    });
    fixture = TestBed.createComponent(ModuloHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
