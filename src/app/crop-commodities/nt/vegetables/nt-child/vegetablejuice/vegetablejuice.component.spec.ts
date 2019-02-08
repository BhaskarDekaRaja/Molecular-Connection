import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablejuiceComponent } from './vegetablejuice.component';

describe('VegetablejuiceComponent', () => {
  let component: VegetablejuiceComponent;
  let fixture: ComponentFixture<VegetablejuiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablejuiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetablejuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
