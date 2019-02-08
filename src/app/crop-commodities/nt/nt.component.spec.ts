import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NTComponent } from './nt.component';

describe('NTComponent', () => {
  let component: NTComponent;
  let fixture: ComponentFixture<NTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
