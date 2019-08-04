import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedMessageComponent } from './animated-message.component';

describe('AnimatedMessageComponent', () => {
  let component: AnimatedMessageComponent;
  let fixture: ComponentFixture<AnimatedMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
