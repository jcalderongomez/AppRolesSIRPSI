import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterioEliminarComponent } from './ministerio-eliminar.component';

describe('MinisterioEliminarComponent', () => {
  let component: MinisterioEliminarComponent;
  let fixture: ComponentFixture<MinisterioEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinisterioEliminarComponent]
    });
    fixture = TestBed.createComponent(MinisterioEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
