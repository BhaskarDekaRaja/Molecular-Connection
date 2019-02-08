import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbsandspicesComponent } from './herbsandspices.component';

describe('HerbsandspicesComponent', () => {
  let component: HerbsandspicesComponent;
  let fixture: ComponentFixture<HerbsandspicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbsandspicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbsandspicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
