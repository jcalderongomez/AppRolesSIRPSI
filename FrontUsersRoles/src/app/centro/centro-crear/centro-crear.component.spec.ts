import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroCrearComponent } from './centro-crear.component';

describe('CentroCrearComponent', () => {
  let component: CentroCrearComponent;
  let fixture: ComponentFixture<CentroCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroCrearComponent]
    });
    fixture = TestBed.createComponent(CentroCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
