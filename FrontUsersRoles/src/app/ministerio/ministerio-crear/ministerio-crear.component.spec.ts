import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterioCrearComponent } from './ministerio-crear.component';

describe('MinisterioCrearComponent', () => {
  let component: MinisterioCrearComponent;
  let fixture: ComponentFixture<MinisterioCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinisterioCrearComponent]
    });
    fixture = TestBed.createComponent(MinisterioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
