import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'oct-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OctaviaButtonComponent implements OnInit {

  @Input() public content: String;
  constructor() { }

  ngOnInit() {
  }

}
