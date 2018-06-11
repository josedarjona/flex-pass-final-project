import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusygraphComponent } from './busygraph.component';

describe('BusygraphComponent', () => {
  let component: BusygraphComponent;
  let fixture: ComponentFixture<BusygraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusygraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusygraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
