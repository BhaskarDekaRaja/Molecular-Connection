import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtChildComponent } from './bt-child.component';

describe('BtChildComponent', () => {
  let component: BtChildComponent;
  let fixture: ComponentFixture<BtChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
