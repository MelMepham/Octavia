import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'oct-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class OctaviaButtonComponent implements OnInit {

  @Input() public content: String;
  constructor() { }

  ngOnInit() {
  }

}
