import {Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {BehaviorSubject, Subject} from 'rxjs';
import * as sketch from 'p5';

import * as COLOR_DATA from "../../../assets/colors.json";


@Component({
  selector: 'Oct-mandala-flower-six',
  templateUrl: './mandala-flower-six.component.html',
  styleUrls: ['./mandala-flower-six.component.scss']
})
export class MandalaFlowerSixComponent implements OnInit, OnDestroy, OnChanges {

  private _canvasObservable;
  private _canvasObservable$ = new BehaviorSubject(this._canvasObservable);
  private _destroyed$ = new Subject<void>();
  private _sketch;
  private _p;
  private _s;
  private _h;

  public canvasDocument;
  public canvas;

  get canvasSize() {
    return this._canvasObservable$.asObservable() }

  @Input()
  set canvasSize(val) {
    this._canvasObservable = val;
    this._canvasObservable$.next(this._canvasObservable);

    this._canvasObservable$.pipe(
        debounceTime(100),
        takeUntil(this._destroyed$)
    ).subscribe(val => {
      this.canvasDocument.style.setProperty('--width', val + "px");
      this.canvasDocument.style.setProperty('--height', val + "px");
      }
    )
  }

  @Input() isAnimated = true;

  @Input() primaryColor = "green";
  @Input() secondaryColor = "blue";
  @Input() highlightColor = "pink";

  public ngOnInit(): void {
    this.createCanvas();
    this._getColors(COLOR_DATA, this.primaryColor, this.secondaryColor, this.highlightColor)
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.isAnimated) {
      const animationStatus: SimpleChange = changes.isAnimated;
      this.checkIsAnimated(animationStatus.currentValue);
    }
  }

  public ngOnDestroy(): void {
    this.destroyCanvas();
    this._destroyed$.next();
  }

  private createCanvas(): void {
    this._sketch = new sketch(this.mandala.bind(this));
    this.canvasDocument = document.querySelector("canvas")
        ? document.querySelector("canvas")
        : document.querySelector("div");
    // this.checkIsAnimated();
  }

  private destroyCanvas(): void {
    this._sketch.noCanvas();
  }

  private checkIsAnimated(val: boolean = this.isAnimated) {
    if (!this._sketch) {
      return
    }
    val ? this._sketch.loop() : this._sketch.noLoop();
  }

  private _getColors(obj, primary, secondary, highlight) {
    this._p = obj.default[primary][0];
    this._s = obj.default[secondary][0];
    this._h = obj.default[highlight][0];
  }

  public mandala = function (p: any) {
    let canvasSize = this.canvas;

    if(canvasSize === undefined) {
      let newSize = window.innerWidth;
      canvasSize = newSize;
    }

    // mandala objects
    let petal;
    let flowerX1, flowerY1, flowerY2, flowerCircle;
    let Atrianglex1, Atriangley1, Atriangley2, Btriangley1;
    let Ctrianglex1, Ctriangley1, Ctriangley2;
    let AcircleSize, AcircleX;
    let BcircleX, BcircleSize;
    let CCircleWH, CCircleY, DCircleWH;
    let ECircleHW;
    let outerTripleCirclesBigX, outerTripleCirclesBigC, outerTripleCirlcesMidC, outerTripleCirclesMidSmlX, outerTripleCirclesSmlC;
    let bigCircleC;
    let trianglex1, triangley1, trianglex3;
    var waterDropletY2, waterDropletY1, waterDropletX2;
    var waterDropletCircleC,  waterDropletCircleY;
    var waterDropletLittleY2, waterDropletLittleY1, waterDropletLittleX2;
    let curve, curvePointX, curvePointY;
    let biggestCircle, nearlyBiggestCircle;
    let circleInCurvedTriangles, smallCurvedTriangleStartPoint, smallCurvedTrianglesmallestControlPoint, smallCurvedTriangleHeight, smallCurvedTriangleHighestHeight;

    // setup vars
    function calculateSizes() {

      petal = canvasSize / 16;
      Atrianglex1 = canvasSize / 33;
      Atriangley1 = canvasSize / 18;
      Atriangley2 = canvasSize / 9;
      Btriangley1 = canvasSize / 11;
      AcircleSize = canvasSize / 63;
      AcircleX = BcircleX = petal;
      BcircleSize = AcircleSize * 6;
      flowerX1 = canvasSize / 15.1;
      flowerY1 = canvasSize / 9;
      flowerY2 = canvasSize / 5.5;
      flowerCircle = canvasSize / 3.8;
      CCircleY = canvasSize / 10;
      CCircleWH = canvasSize / 20;
      DCircleWH = canvasSize / 15;
      ECircleHW = canvasSize / 2.8;

      Ctrianglex1 = Atrianglex1 * 2.8;
      Ctriangley1 = Atriangley1 * 2.8;
      Ctriangley2 = canvasSize / 4.5;
      outerTripleCirclesBigX = canvasSize / 4.9;
      outerTripleCirclesBigC = canvasSize / 25;
      outerTripleCirclesMidSmlX  = canvasSize / 5.6;
      outerTripleCirlcesMidC = canvasSize / 26;
      outerTripleCirclesSmlC = canvasSize / 40;
      bigCircleC = canvasSize / 3.5;

      trianglex1 = canvasSize / 3;
      triangley1 = canvasSize / 20;
      trianglex3 = canvasSize / 10;

      waterDropletY2 = canvasSize / 3;
      waterDropletY1 = canvasSize / 4;
      waterDropletX2 = canvasSize / 12;
      waterDropletCircleC = canvasSize / 120;
      waterDropletCircleY = canvasSize / 3.45;
      waterDropletLittleY2 = canvasSize / 4.5;
      waterDropletLittleY1 = canvasSize / 3.8;
      waterDropletLittleX2 = canvasSize / 29;

      curve = canvasSize / 5;
      curvePointX = canvasSize / 2.4;
      curvePointY = canvasSize / 8;
      biggestCircle = canvasSize / 2.25;
      nearlyBiggestCircle = canvasSize / 2.8;

      circleInCurvedTriangles = canvasSize / 40
      smallCurvedTriangleStartPoint = canvasSize / 20;
      smallCurvedTrianglesmallestControlPoint = canvasSize / 29;
      smallCurvedTriangleHeight = canvasSize / 2.8;
      smallCurvedTriangleHighestHeight = canvasSize / 2.26;


    }

    // setup
    p.setup = () => {
      p.createCanvas(canvasSize, canvasSize).parent('forest-mandala');
      p.angleMode(p.DEGREES);
      calculateSizes();
    };
    p.center = { x: 0, y: 0 };

    // lets actually draw something now.
    p.draw = () => {
      p.background(255, 255, 255);
      p.center.x = p.width / 2;
      p.center.y = p.height / 2;

      // Outer flower shape
      p.push();
        p.translate(p.center.x, p.center.y);
        p.fill(p.color(this._p['600']));
        p.stroke(p.color(this._p['600']));
        p.rotate(p.radians(p.frameCount * 60) / -3);
      for (let i = 0; i < 12; i++) {
          p.beginShape();
          p.curve(curve, curve, -curvePointY, -curvePointX, curvePointY, -curvePointX, -curve, curve);
          p.rotate(30)
          p.endShape();
        }
      p.pop();

      p.push();
        p.noStroke();
        p.fill(p.color(this._p["100"]));
        p.translate(p.center.x, p.center.y);
        p.scale((p.sin(p.frameCount / 5) * 1) + .2);
        p.rotate(p.radians(p.frameCount * 60) / 3);
        p.circle(0, 0, biggestCircle);
      p.pop();

      // Curved triangles
      p.push();
        p.translate(p.center.x, p.center.y);

        p.noStroke();
        for (let i = 0; i < 24; i++) {
          p.beginShape();
          p.fill(this._p["500"]);
          p.scale((p.sin(p.frameCount / 5) * 1) + .2);
          p.rotate(p.radians(p.frameCount * 60) / 3);
          p.vertex(-smallCurvedTriangleStartPoint, -smallCurvedTriangleHeight);
          p.bezierVertex(-smallCurvedTriangleStartPoint, -smallCurvedTriangleHeight, -smallCurvedTrianglesmallestControlPoint, -smallCurvedTriangleHeight, 0, -smallCurvedTriangleHighestHeight);
          p.bezierVertex(0, -smallCurvedTriangleHighestHeight, smallCurvedTrianglesmallestControlPoint, -smallCurvedTriangleHeight, smallCurvedTriangleStartPoint, -smallCurvedTriangleHeight);
          p.vertex(smallCurvedTriangleStartPoint, -smallCurvedTriangleHeight);
          p.endShape(p.CLOSE);
          p.rotate(15);
        }
      p.pop();

      // The circles in the triangles
      p.push();
        p.noStroke();
        p.translate(p.center.x, p.center.y);
        p.fill(this._h["100"]);
        p.scale((p.sin(p.frameCount) * 1) + .5);
        p.rotate(p.radians(p.frameCount * 40));
        for (let i = 0; i < 24; i++) {
          p.circle(0, -smallCurvedTriangleHeight, circleInCurvedTriangles);
          p.rotate(15);
        }
      p.pop();

      // big blue circle
      p.push();
        p.translate(p.center.x, p.center.y);
        p.noStroke();
        p.fill(p.color(this._s["500"]));
        p.scale((p.sin(p.frameCount) * 1) + .2);
        p.circle(0, 0, nearlyBiggestCircle);
      p.pop();

      // big blue circle
      p.push();
        p.translate(p.center.x, p.center.y);
        p.noStroke();
      p.fill(p.color(this._s["300"]));
      p.scale((p.sin(p.frameCount) * 1) + .2);
      p.circle(0, 0, bigCircleC);
      p.pop();

      // long skinny lots of  triangles
      p.push();
        p.translate(p.center.x, p.center.y);
        p.noStroke();
        p.fill(this._h["200"]);
        p.rotate(p.radians(p.frameCount * 30));
        p.scale((p.sin(p.frameCount / 2) * 1.6) + .2);
          for (let i = 0; i < 12; i++) {
            p.triangle(-trianglex1, triangley1, -trianglex1, -triangley1, -trianglex3, 0);
            p.rotate(30);
          }
        // water droplets
        p.noStroke();
        p.beginShape();
          for (let i = 0; i < 12; i++) {
            p.fill(this._s["600"]);
            p.bezier(0, -waterDropletY1, -waterDropletX2, -waterDropletY2, waterDropletX2, -waterDropletY2, 0, -waterDropletY1);
            p.fill(this._s["200"]);
            p.circle(0, -waterDropletCircleY, waterDropletCircleC);
            p.rotate(30);
          };
        p.endShape();
      p.pop();

      p.push();
        p.translate(p.center.x, p.center.y);
        p.fill(this._p["200"]);
        p.noStroke();
        p.push();
        p.scale((p.sin(p.frameCount / 5) * 1.6) + .2);
        p.beginShape();
        p.rotate(p.radians(p.frameCount * -40));
        for (let i = 0; i < 6; i++) {
          p.rotate(60);
          p.bezier(0, -waterDropletLittleY2, -waterDropletLittleX2, -waterDropletLittleY1, waterDropletLittleX2, -waterDropletLittleY1, 0, -waterDropletLittleY2);
        };
          p.endShape();
        p.pop();

        p.push();
          p.beginShape();
          p.rotate(p.radians(p.frameCount * 40));
          for (let i = 0; i < 6; i++) {
            p.rotate(60);
            p.bezier(0, -waterDropletLittleY2, -waterDropletLittleX2, -waterDropletLittleY1, waterDropletLittleX2, -waterDropletLittleY1, 0, -waterDropletLittleY2);
          };
          p.endShape();
        p.pop();
      p.pop();

      // outer triple circles
      p.push();
        p.translate(p.center.x, p.center.y);
        p.noStroke();
        p.rotate(p.radians(p.frameCount * -20));
        for (let i = 0; i < 12; i++) {
            p.fill(this._p["500"]);
            p.circle(outerTripleCirclesBigX, 0, outerTripleCirclesBigC);
            p.fill(this._p["300"]);
            p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirlcesMidC);
            p.fill(this._p["100"]);
            p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirclesSmlC);
            p.rotate(30);
          };
      p.pop();

      // Ctriangle
      p.push();
        p.translate(p.center.x, p.center.y);
        p.noStroke();
        p.fill(this._p["400"]);
        p.rotate(p.radians(p.frameCount / 4) * 50);
        for (let i = 0; i < 6; i++) {
          p.triangle(Ctrianglex1, -Ctriangley1, -Ctrianglex1, -Ctriangley1, 0, -Ctriangley2)
          p.rotate(60);
        }
      p.pop();

      // flowerA
      p.push();
      p.translate(p.center.x, p.center.y);
      p.fill(p.color(this._s["700"]));
      p.push();
          p.noStroke();
          p.ellipse(0, 0, flowerCircle, flowerCircle);
        p.pop();
        p.push();
          p.scale((p.sin(p.frameCount / 2) * 1.6) + .2);
          p.rotate(p.radians(p.frameCount * -50));
          p.noStroke();
          for (let i = 0; i < 6; i++) {
            p.beginShape();
            p.vertex(-flowerX1, -flowerY1);
            p.bezierVertex(-flowerX1, -flowerY2, 0, -flowerY1, 0, -flowerY2);
            p.bezierVertex(0, -flowerY1, flowerX1, -flowerY2, flowerX1, -flowerY1);
            p.endShape();
            p.rotate(60);
          }
        p.pop();
      p.pop();

      // outer triple circles
      p.push();
        p.translate(p.center.x, p.center.y);
        p.noStroke();
        p.scale((p.sin(p.frameCount / 2) * .5) + 1);
        p.rotate(p.radians(p.frameCount / 4) * -50);
        p.push();
        p.scale((p.sin(p.frameCount / 5) * 1.5) + 1);
        for (let i = 0; i < 12; i++) {
          p.fill(this._p["400"]);
          p.circle(outerTripleCirclesBigX, 0, outerTripleCirclesBigC / 4);
          p.rotate(30);
        };
      p.pop();
      p.push();
        for (let i = 0; i < 12; i++) {
          p.fill(this._p["500"]);
          p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirlcesMidC / 4);
          p.fill(this._p["300"]);
          p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirclesSmlC / 4);
          p.rotate(30);
        };
        p.pop();
      p.pop();

      // Ctriangle
      p.push();
      p.translate(p.center.x, p.center.y);
      p.noStroke();
      p.fill(this._p["600"]);
      p.rotate(p.radians(p.frameCount / 4) * 50);
      for (let i = 0; i < 6; i++) {
        p.triangle(Ctrianglex1, -Ctriangley1, -Ctrianglex1, -Ctriangley1, 0, -Ctriangley2)
        p.rotate(60);
      }
      p.pop();

      // ECircle
      p.push();
        p.translate(p.center.x, p.center.y);
        p.noStroke();
        p.fill(p.color(this._p["200"]));
        p.ellipse(0, 0, ECircleHW, ECircleHW);
      p.pop();

      // CCircle
      p.push();
        p.translate(p.center.x, p.center.y);
        p.scale((p.sin(p.frameCount / 2) * 1.3) + .2);
        for (let i = 0; i < 6; i++) {
            p.noStroke();
            p.fill(p.color(this._s["400"]));
            p.ellipse(0, -CCircleY, DCircleWH, DCircleWH);
            p.fill(p.color(this._s["300"]));
            p.ellipse(0, -CCircleY, CCircleWH, CCircleWH);
            p.rotate(60);
        }
      p.pop();

      // Bcircles
      p.push();
        p.translate(p.center.x, p.center.y);
        p.noStroke();
        p.push();
        p.fill(this._p["500"]);
        p.scale(1.2);
        p.rotate(p.radians(p.frameCount * -50));
        for (let i = 0; i < 6; i++) {
            p.ellipse(-BcircleX, 0, BcircleSize, BcircleSize);
            p.rotate(60);
          }
      p.pop();
      p.push();
      p.rotate(p.radians(p.frameCount / 3) * 50);
      p.fill(this._p["200"]);
        for (let i = 0; i < 6; i++) {
          p.ellipse(-BcircleX, 0, BcircleSize, BcircleSize);
          p.rotate(60);
        }
        p.pop();
      p.pop();

      // Atriange
      p.push();
        p.translate(p.center.x, p.center.y);
        p.noStroke();
        p.fill(this._s["200"]);
        p.rotate(p.radians(p.frameCount / 4) * 50);
        p.scale((p.sin(p.frameCount / 1) * 1.3) + .5);
        for (let i = 0; i < 6; i++) {
            p.triangle(Atrianglex1, -Atriangley1, -Atrianglex1, -Atriangley1, 0, -Atriangley2)
            p.rotate(60);
        }
        p.fill(this._s["400"]);
        for (let i = 0; i < 6; i++) {
          p.triangle(Atrianglex1, -Atriangley1, -Atrianglex1, -Atriangley1, 0, -Btriangley1)
          p.rotate(60);
        }
      p.pop();

      // Acircles
      p.push();
        p.translate(p.center.x, p.center.y);
        p.noStroke();
        p.fill(this._h["300"]);
        p.rotate(p.radians(p.frameCount / 1) * -50);
        p.scale((p.sin(p.frameCount / 2) * 1.3) + .5);
        for (let i = 0; i < 6; i++) {
          p.ellipse(-AcircleX, 0, AcircleSize, AcircleSize);
          p.rotate(60);
        }
      p.pop();

      // circle framing the flower of life
      p.push();
        p.translate(p.center.x, p.center.y);
        p.noStroke();
        p.fill(this._p["200"]);
        p.scale((p.sin(p.frameCount / 3) * 1.3) + .5);
        p.ellipse(0, 0, petal * 2 , petal * 2);
      p.pop();

      // flower of life
      p.push();
        p.translate(p.center.x, p.center.y);
        p.strokeWeight(0.1);
        p.stroke(255, 255, 255, 0);
        p.fill(p.color(this._p["600"]));
        p.scale((p.sin(p.frameCount / 4) * .5) + .5);
        p.rotate(p.radians(p.frameCount / 4) * -50);
        for (let i = 0; i < 6; i++) {
          p.curve(petal, 0, 0, 0, 0, petal, petal, petal);
          p.curve(-petal, 0, 0, 0, 0, petal, -petal, petal);
          p.rotate(60);
        }
        p.rotate(p.radians(p.frameCount / 4) * -50);
      p.pop();

    };
  };
}
