import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Oct-octavia',
  template: `
    <button>
    <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class OctaviaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
