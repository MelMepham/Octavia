import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'button[octButton]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  // get transparent(): boolean {return this._transparent;}
// public transparent: boolean;

  // @Input('transparent')
  // set setTransparent(value: boolean) {
    // this.transparent = !value ? true : value;
  // }

  // @HostBinding('class.oct-button__transparent')
  // get setTransparent(): boolean {return this.transparent;}
  // public transparent: boolean;

  @HostBinding('class.oct-button') public isPureButton = true;

  constructor() { }

  ngOnInit() {
  }

}
