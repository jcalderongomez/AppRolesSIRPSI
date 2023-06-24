import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroListarComponent } from './centro-listar.component';

describe('CentroListarComponent', () => {
  let component: CentroListarComponent;
  let fixture: ComponentFixture<CentroListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroListarComponent]
    });
    fixture = TestBed.createComponent(CentroListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
