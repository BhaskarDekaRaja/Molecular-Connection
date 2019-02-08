import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutsandseedsComponent } from './nutsandseeds.component';

describe('NutsandseedsComponent', () => {
  let component: NutsandseedsComponent;
  let fixture: ComponentFixture<NutsandseedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutsandseedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutsandseedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
