import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandalaFlowerSixComponent } from './mandala-flower-six.component';

describe('MandalaFlowerSixComponent', () => {
  let component: MandalaFlowerSixComponent;
  let fixture: ComponentFixture<MandalaFlowerSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandalaFlowerSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandalaFlowerSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
