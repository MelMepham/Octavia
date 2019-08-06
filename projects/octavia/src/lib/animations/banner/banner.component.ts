import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'Oct-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})


export class BannerComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    console.log(this.ctx)
  }

  animate(): void {

  }
}
