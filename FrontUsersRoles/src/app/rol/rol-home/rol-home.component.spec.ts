import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolHomeComponent } from './rol-home.component';

describe('RolHomeComponent', () => {
  let component: RolHomeComponent;
  let fixture: ComponentFixture<RolHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolHomeComponent]
    });
    fixture = TestBed.createComponent(RolHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
