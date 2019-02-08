import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingcropComponent } from './processingcrop.component';

describe('ProcessingcropComponent', () => {
  let component: ProcessingcropComponent;
  let fixture: ComponentFixture<ProcessingcropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingcropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingcropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
