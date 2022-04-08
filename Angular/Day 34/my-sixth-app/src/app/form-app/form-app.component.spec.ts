import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppComponent } from './form-app.component';

describe('FormAppComponent', () => {
  let component: FormAppComponent;
  let fixture: ComponentFixture<FormAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
