import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastnameComponent } from './lastname.component';

describe('LastnameComponent', () => {
  let component: LastnameComponent;
  let fixture: ComponentFixture<LastnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
