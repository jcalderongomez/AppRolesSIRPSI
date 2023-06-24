import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterioListarComponent } from './ministerio-listar.component';

describe('MinisterioListarComponent', () => {
  let component: MinisterioListarComponent;
  let fixture: ComponentFixture<MinisterioListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinisterioListarComponent]
    });
    fixture = TestBed.createComponent(MinisterioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
