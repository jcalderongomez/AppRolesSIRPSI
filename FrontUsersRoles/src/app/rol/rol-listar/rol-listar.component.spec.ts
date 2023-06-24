import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolListarComponent } from './rol-listar.component';

describe('RolListarComponent', () => {
  let component: RolListarComponent;
  let fixture: ComponentFixture<RolListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolListarComponent]
    });
    fixture = TestBed.createComponent(RolListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
