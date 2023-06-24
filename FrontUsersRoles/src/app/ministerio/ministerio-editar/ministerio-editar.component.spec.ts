import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterioEditarComponent } from './ministerio-editar.component';

describe('MinisterioEditarComponent', () => {
  let component: MinisterioEditarComponent;
  let fixture: ComponentFixture<MinisterioEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinisterioEditarComponent]
    });
    fixture = TestBed.createComponent(MinisterioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
