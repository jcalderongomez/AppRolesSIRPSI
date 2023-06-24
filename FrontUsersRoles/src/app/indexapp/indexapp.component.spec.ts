import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexappComponent } from './indexapp.component';

describe('IndexappComponent', () => {
  let component: IndexappComponent;
  let fixture: ComponentFixture<IndexappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexappComponent]
    });
    fixture = TestBed.createComponent(IndexappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
