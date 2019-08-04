import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'button[octButton]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  get transparent(): boolean {return this._transparent;}


  @Input('transparent')
  set transparent(value: boolean) {
    this._transparent = value;
    this._transparent = !value ? true : value;
  }

  @HostBinding('class.oct-button__transparent') private _transparent: boolean;

  @HostBinding('class.oct-button') public isPureButton = true;

  constructor() { }

  ngOnInit() {
  }

}
