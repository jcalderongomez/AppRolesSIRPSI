import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroEditarComponent } from './centro-editar.component';

describe('CentroEditarComponent', () => {
  let component: CentroEditarComponent;
  let fixture: ComponentFixture<CentroEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroEditarComponent]
    });
    fixture = TestBed.createComponent(CentroEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
