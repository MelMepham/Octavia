import {Component, HostBinding, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'button[octButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  private _transparent: any;
  @Input()
  public get transparent (): boolean {
    return this._transparent;
  }
  public set transparent (_) {
    this.transparentStyle = true;
  }

  @HostBinding('class.oct-button__transparent')
  public transparentStyle: Boolean = false;


  @HostBinding('class.oct-button') public isPureButton = true;

  constructor() { }

  ngOnInit() {
  }

}
