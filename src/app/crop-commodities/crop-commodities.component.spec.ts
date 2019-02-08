import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropCommoditiesComponent } from './crop-commodities.component';

describe('CropCommoditiesComponent', () => {
  let component: CropCommoditiesComponent;
  let fixture: ComponentFixture<CropCommoditiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropCommoditiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropCommoditiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
