import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterioHomeComponent } from './ministerio-home.component';

describe('MinisterioHomeComponent', () => {
  let component: MinisterioHomeComponent;
  let fixture: ComponentFixture<MinisterioHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinisterioHomeComponent]
    });
    fixture = TestBed.createComponent(MinisterioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
