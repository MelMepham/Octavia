import {Component, HostListener, OnChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {

  public canvasSize = window.innerWidth / 1.5;
  public animated = false;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.canvasSize = window.innerWidth / 1.5;
    this.animated = !this.animated;
  }

  ngOnChanges(): void {
  }

}
