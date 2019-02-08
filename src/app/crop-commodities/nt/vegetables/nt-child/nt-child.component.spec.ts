import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtChildComponent } from './nt-child.component';

describe('NtChildComponent', () => {
  let component: NtChildComponent;
  let fixture: ComponentFixture<NtChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
