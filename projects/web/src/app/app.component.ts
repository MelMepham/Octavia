import {Component, HostListener, OnChanges} from '@angular/core';
import * as sketch from 'p5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  private _sketch;

  title = 'octavia';

  public canvasSize = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.canvasSize = window.innerWidth;
  }

  ngOnChanges(): void {
  }

}
