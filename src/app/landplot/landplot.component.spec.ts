import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandplotComponent } from './landplot.component';

describe('LandplotComponent', () => {
  let component: LandplotComponent;
  let fixture: ComponentFixture<LandplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandplotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
