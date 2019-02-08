import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodscropsComponent } from './foodscrops.component';

describe('FoodscropsComponent', () => {
  let component: FoodscropsComponent;
  let fixture: ComponentFixture<FoodscropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodscropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodscropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
