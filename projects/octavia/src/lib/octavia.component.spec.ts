import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctaviaComponent } from './octavia.component';

describe('OctaviaComponent', () => {
  let component: OctaviaComponent;
  let fixture: ComponentFixture<OctaviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctaviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctaviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
