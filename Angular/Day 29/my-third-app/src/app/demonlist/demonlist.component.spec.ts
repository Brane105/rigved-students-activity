import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonlistComponent } from './demonlist.component';

describe('DemonlistComponent', () => {
  let component: DemonlistComponent;
  let fixture: ComponentFixture<DemonlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
