import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableswithoutsauceComponent } from './vegetableswithoutsauce.component';

describe('VegetableswithoutsauceComponent', () => {
  let component: VegetableswithoutsauceComponent;
  let fixture: ComponentFixture<VegetableswithoutsauceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableswithoutsauceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableswithoutsauceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
