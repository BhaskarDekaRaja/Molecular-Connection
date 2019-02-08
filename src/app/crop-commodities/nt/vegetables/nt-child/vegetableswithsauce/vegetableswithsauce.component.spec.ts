import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableswithsauceComponent } from './vegetableswithsauce.component';

describe('VegetableswithsauceComponent', () => {
  let component: VegetableswithsauceComponent;
  let fixture: ComponentFixture<VegetableswithsauceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableswithsauceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableswithsauceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
