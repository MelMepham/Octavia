import { Component, OnDestroy, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import * as sketch from 'p5';
import { ColorsEnum } from "../../styles/colors.enum";

@Component({
  selector: 'Oct-animated-message',
  templateUrl: './animated-message.component.html',
  styleUrls: ['./animated-message.component.scss']
})
export class AnimatedMessageComponent implements OnInit, OnDestroy, OnChanges {

  private _sketch;
  private _star;
  private _background;

  @Input() isAnimated = true;
  @Input() starColor = "yellow";
  @Input() backgroundColor = "pink";

  @Input() height = window.innerHeight / 5;
  @Input() width = window.innerWidth / 5;
  @Input() starSizes = window.innerWidth / 300;

  constructor() { }

  public isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }

  public ngOnInit() {
    this._getColors(ColorsEnum, this.starColor, this.backgroundColor);
    this.createCanvas();

  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.isAnimated) {
      this.checkIsAnimated(this.isAnimated);
    }
  }

  public ngOnDestroy(): void {
    this.destroyCanvas();
  }

  private createCanvas(): void {
    this._sketch = new sketch(this.animatedMessage);
    if (this.isAnimated) {
      return
    }
    this.checkIsAnimated(this.isAnimated);
  }

  private destroyCanvas(): void {
    this._sketch.noCanvas();
  }

  private checkIsAnimated(val: boolean) {
    if (this._sketch) {
      val ? this._sketch.loop() : this._sketch.noLoop();
    }
    return;
  }

  private _getColors(obj, star, background) {
    this._star = obj[star][0];
    this._background = obj[background][0];
  }

  public animatedMessage = (p: any) => {

    let canvasWidth = this.width;
    let canvasHeight = this.height;

    // setup
    p.setup = () => {

      p.createCanvas(canvasWidth, canvasHeight).parent('animated-message');
      p.background(233, 43, 233)
    };

    const starsArray = Array.from(Array(200).keys());
    const stars = starsArray.map(_ => {
        return this.getRandomXY(p, canvasWidth, canvasHeight);
    });

    p.draw = () => {
      p.background(this._background['500']);
      p.translate(canvasWidth / 2, canvasHeight / 2)

      stars.forEach(position => starShape(position.x, position.y, this.starSizes, this.starSizes / 2, 5, this._star['400']))

    };

    function starShape(x, y, radius1, radius2, npoints, color) {
      p.rotate(p.radians(p.frameCount / 200) / - 1);
      let angle = p.TWO_PI / npoints;
      let halfAngle = angle / 2.0;

      var choice = Math.round(p.random(8));

      if(choice == (0 | 1) ) {
        x = x + .2;
      } else if (choice == (1 | 2)) {
        x = x - .2;
      } else if (choice == (3 | 4 | 5)) {
        y = y - .2;
      } else {
        y = y + .2;
      }
      p.beginShape();
      p.noStroke();
      p.fill(p.color(color));
      for (let a = 0; a < p.TWO_PI; a += angle) {
        let sx = x + p.cos(a) * radius2;
        let sy = y + p.sin(a) * radius2;
        p.vertex(sx, sy);
        sx = x + p.cos(a + halfAngle) * radius1;
        sy = y + p.sin(a + halfAngle) * radius1;
        p.vertex(sx, sy);
      }
      p.endShape(p.CLOSE);

    }
  };

  private getRandomXY (p: any, canvasWidth, canvasHeight) {
    var x = Math.round(p.random(-canvasWidth, canvasWidth));
    var y = Math.round(p.random(-canvasHeight, canvasHeight));
    return { x, y };
  }
}
