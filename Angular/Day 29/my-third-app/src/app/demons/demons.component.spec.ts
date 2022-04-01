import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonsComponent } from './demons.component';

describe('DemonsComponent', () => {
  let component: DemonsComponent;
  let fixture: ComponentFixture<DemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
