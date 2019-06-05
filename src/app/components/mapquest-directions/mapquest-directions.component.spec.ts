import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapquestDirectionsComponent } from './mapquest-directions.component';

describe('MapquestDirectionsComponent', () => {
  let component: MapquestDirectionsComponent;
  let fixture: ComponentFixture<MapquestDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapquestDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapquestDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
