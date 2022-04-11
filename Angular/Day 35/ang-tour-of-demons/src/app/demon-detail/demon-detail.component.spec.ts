import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonDetailComponent } from './demon-detail.component';

describe('DemonDetailComponent', () => {
  let component: DemonDetailComponent;
  let fixture: ComponentFixture<DemonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
