import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StalkandstemcropComponent } from './stalkandstemcrop.component';

describe('StalkandstemcropComponent', () => {
  let component: StalkandstemcropComponent;
  let fixture: ComponentFixture<StalkandstemcropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StalkandstemcropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StalkandstemcropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
