import {Component, OnDestroy, OnInit} from '@angular/core';
import * as sketch from 'p5';

@Component({
  selector: 'Oct-animated-message',
  templateUrl: './animated-message.component.html',
  styleUrls: ['./animated-message.component.scss']
})
export class AnimatedMessageComponent implements OnInit, OnDestroy {

  private _sketch;

  constructor() { }

  public ngOnInit() {
    this.createCanvas();
  }

  public ngOnDestroy(): void {
    this.destroyCanvas();
  }

  private createCanvas(): void {
    this._sketch = new sketch(this.animatedMessage);
  }

  private destroyCanvas(): void {
    this._sketch.noCanvas();
  }

  public animatedMessage = (p: any) => {

    let canvasWidth = window.innerWidth / 1.5;
    let canvasHeight = window.innerWidth / 3;

    // setup vars
    function calculateSizes() {
    }

    // setup
    p.setup = () => {
      p.frameRate(4);

      p.createCanvas(canvasWidth, canvasHeight).parent('animated-message');
      calculateSizes();
      p.background(233, 43, 233)

    };
    p.center = { x: 0, y: 0 };

    const stars = [1,2,3].map(_ => {
        return this.getRandomXY(p, canvasWidth, canvasHeight);
    });

    p.draw = () => {

      p.background(233, 43, 233);

      stars.forEach(star => starA(star.x, star.y));

    };

    function starA(starX, starY) {
      p.push();
      p.noStroke();
      p.fill(p.color('#ffff00'));
      var choice = Math.round(p.random(4));
      if(choice == 0) {
        starX = starX  + 2;
      } else if (choice == 1) {
        starX = starX - 2;
      } else if (choice == 2) {
        starY = starY + 2;
      } else {
        starY = starY - 2;
      }
      star(starX, starY, 5, 10, 5);
      star(starX, starY, 5, 10, 5);

      p.pop();
    }

    function star(x, y, radius1, radius2, npoints) {
      let angle = p.TWO_PI / npoints;
      let halfAngle = angle / 2.0;
      p.beginShape();
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
    var x = Math.round(p.random(0, canvasWidth));
    var y = Math.round(p.random(0, canvasHeight));
    return { x, y };
  }
}
