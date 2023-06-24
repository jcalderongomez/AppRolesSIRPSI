import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroHomeComponent } from './centro-home.component';

describe('CentroHomeComponent', () => {
  let component: CentroHomeComponent;
  let fixture: ComponentFixture<CentroHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroHomeComponent]
    });
    fixture = TestBed.createComponent(CentroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
