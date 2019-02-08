import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesprimarilyComponent } from './vegetablesprimarily.component';

describe('VegetablesprimarilyComponent', () => {
  let component: VegetablesprimarilyComponent;
  let fixture: ComponentFixture<VegetablesprimarilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablesprimarilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetablesprimarilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
