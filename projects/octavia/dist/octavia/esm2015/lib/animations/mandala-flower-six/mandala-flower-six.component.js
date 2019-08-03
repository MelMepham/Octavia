/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import * as sketch from 'p5';
import { ColorsEnum } from "../../../assets/colors.enum";
export class MandalaFlowerSixComponent {
    constructor() {
        this.isAnimated = true;
        this.primaryColor = "green";
        this.secondaryColor = "blue";
        this.highlightColor = "pink";
        this.mandala = (/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            /** @type {?} */
            let canvasSize = window.innerWidth;
            // mandala objects
            /** @type {?} */
            let petal;
            /** @type {?} */
            let flowerX1;
            /** @type {?} */
            let flowerY1;
            /** @type {?} */
            let flowerY2;
            /** @type {?} */
            let flowerCircle;
            /** @type {?} */
            let Atrianglex1;
            /** @type {?} */
            let Atriangley1;
            /** @type {?} */
            let Atriangley2;
            /** @type {?} */
            let Btriangley1;
            /** @type {?} */
            let Ctrianglex1;
            /** @type {?} */
            let Ctriangley1;
            /** @type {?} */
            let Ctriangley2;
            /** @type {?} */
            let AcircleSize;
            /** @type {?} */
            let AcircleX;
            /** @type {?} */
            let BcircleX;
            /** @type {?} */
            let BcircleSize;
            /** @type {?} */
            let CCircleWH;
            /** @type {?} */
            let CCircleY;
            /** @type {?} */
            let DCircleWH;
            /** @type {?} */
            let ECircleHW;
            /** @type {?} */
            let outerTripleCirclesBigX;
            /** @type {?} */
            let outerTripleCirclesBigC;
            /** @type {?} */
            let outerTripleCirlcesMidC;
            /** @type {?} */
            let outerTripleCirclesMidSmlX;
            /** @type {?} */
            let outerTripleCirclesSmlC;
            /** @type {?} */
            let bigCircleC;
            /** @type {?} */
            let trianglex1;
            /** @type {?} */
            let triangley1;
            /** @type {?} */
            let trianglex3;
            /** @type {?} */
            var waterDropletY2;
            /** @type {?} */
            var waterDropletY1;
            /** @type {?} */
            var waterDropletX2;
            /** @type {?} */
            var waterDropletCircleC;
            /** @type {?} */
            var waterDropletCircleY;
            /** @type {?} */
            var waterDropletLittleY2;
            /** @type {?} */
            var waterDropletLittleY1;
            /** @type {?} */
            var waterDropletLittleX2;
            /** @type {?} */
            let curve;
            /** @type {?} */
            let curvePointX;
            /** @type {?} */
            let curvePointY;
            /** @type {?} */
            let biggestCircle;
            /** @type {?} */
            let nearlyBiggestCircle;
            /** @type {?} */
            let circleInCurvedTriangles;
            /** @type {?} */
            let smallCurvedTriangleStartPoint;
            /** @type {?} */
            let smallCurvedTrianglesmallestControlPoint;
            /** @type {?} */
            let smallCurvedTriangleHeight;
            /** @type {?} */
            let smallCurvedTriangleHighestHeight;
            // setup vars
            /**
             * @return {?}
             */
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
                outerTripleCirclesMidSmlX = canvasSize / 5.6;
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
                circleInCurvedTriangles = canvasSize / 40;
                smallCurvedTriangleStartPoint = canvasSize / 20;
                smallCurvedTrianglesmallestControlPoint = canvasSize / 29;
                smallCurvedTriangleHeight = canvasSize / 2.8;
                smallCurvedTriangleHighestHeight = canvasSize / 2.26;
            }
            // setup
            p.setup = (/**
             * @return {?}
             */
            () => {
                p.createCanvas(canvasSize, canvasSize).parent('forest-mandala');
                console.log('setup', canvasSize);
                p.angleMode(p.DEGREES);
                calculateSizes();
            });
            p.center = { x: 0, y: 0 };
            // lets actually draw something now.
            p.draw = (/**
             * @return {?}
             */
            () => {
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
                    p.rotate(30);
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
                }
                ;
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
                }
                ;
                p.endShape();
                p.pop();
                p.push();
                p.beginShape();
                p.rotate(p.radians(p.frameCount * 40));
                for (let i = 0; i < 6; i++) {
                    p.rotate(60);
                    p.bezier(0, -waterDropletLittleY2, -waterDropletLittleX2, -waterDropletLittleY1, waterDropletLittleX2, -waterDropletLittleY1, 0, -waterDropletLittleY2);
                }
                ;
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
                }
                ;
                p.pop();
                // Ctriangle
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                p.fill(this._p["400"]);
                p.rotate(p.radians(p.frameCount / 4) * 50);
                for (let i = 0; i < 6; i++) {
                    p.triangle(Ctrianglex1, -Ctriangley1, -Ctrianglex1, -Ctriangley1, 0, -Ctriangley2);
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
                }
                ;
                p.pop();
                p.push();
                for (let i = 0; i < 12; i++) {
                    p.fill(this._p["500"]);
                    p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirlcesMidC / 4);
                    p.fill(this._p["300"]);
                    p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirclesSmlC / 4);
                    p.rotate(30);
                }
                ;
                p.pop();
                p.pop();
                // Ctriangle
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                p.fill(this._p["600"]);
                p.rotate(p.radians(p.frameCount / 4) * 50);
                for (let i = 0; i < 6; i++) {
                    p.triangle(Ctrianglex1, -Ctriangley1, -Ctrianglex1, -Ctriangley1, 0, -Ctriangley2);
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
                    p.triangle(Atrianglex1, -Atriangley1, -Atrianglex1, -Atriangley1, 0, -Atriangley2);
                    p.rotate(60);
                }
                p.fill(this._s["400"]);
                for (let i = 0; i < 6; i++) {
                    p.triangle(Atrianglex1, -Atriangley1, -Atrianglex1, -Atriangley1, 0, -Btriangley1);
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
                p.ellipse(0, 0, petal * 2, petal * 2);
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
            });
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //TODO can not build this color info up from the json - wont do an npm build
        this._getColors(ColorsEnum, this.primaryColor, this.secondaryColor, this.highlightColor);
        this.createCanvas();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.isAnimated) {
            this.checkIsAnimated(this.isAnimated);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyCanvas();
    }
    /**
     * @private
     * @return {?}
     */
    createCanvas() {
        this._sketch = new sketch(this.mandala.bind(this));
        if (this.isAnimated) {
            return;
        }
        this.checkIsAnimated(this.isAnimated);
    }
    /**
     * @private
     * @return {?}
     */
    destroyCanvas() {
        this._sketch.noCanvas();
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    checkIsAnimated(val) {
        if (this._sketch) {
            val ? this._sketch.loop() : this._sketch.noLoop();
        }
        return;
    }
    /**
     * @private
     * @param {?} obj
     * @param {?} primary
     * @param {?} secondary
     * @param {?} highlight
     * @return {?}
     */
    _getColors(obj, primary, secondary, highlight) {
        this._p = obj[primary][0];
        this._s = obj[secondary][0];
        this._h = obj[highlight][0];
    }
}
MandalaFlowerSixComponent.decorators = [
    { type: Component, args: [{
                selector: 'Oct-mandala-flower-six',
                template: "<div\n    class=\"Oct-mandala-flower-six__animation-container\">\n    <div id=\"forest-mandala\"></div>\n</div>\n",
                styles: ["Oct-mandala-flower-six:host{display:block}.Oct-mandala-flower-six__animation-container ::ng-deep .p5Canvas{border-radius:100%;width:100%!important;height:100%!important;display:block;margin-left:auto;margin-right:auto}"]
            }] }
];
MandalaFlowerSixComponent.propDecorators = {
    isAnimated: [{ type: Input }],
    primaryColor: [{ type: Input }],
    secondaryColor: [{ type: Input }],
    highlightColor: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    MandalaFlowerSixComponent.prototype._sketch;
    /**
     * @type {?}
     * @private
     */
    MandalaFlowerSixComponent.prototype._p;
    /**
     * @type {?}
     * @private
     */
    MandalaFlowerSixComponent.prototype._s;
    /**
     * @type {?}
     * @private
     */
    MandalaFlowerSixComponent.prototype._h;
    /** @type {?} */
    MandalaFlowerSixComponent.prototype.isAnimated;
    /** @type {?} */
    MandalaFlowerSixComponent.prototype.primaryColor;
    /** @type {?} */
    MandalaFlowerSixComponent.prototype.secondaryColor;
    /** @type {?} */
    MandalaFlowerSixComponent.prototype.highlightColor;
    /** @type {?} */
    MandalaFlowerSixComponent.prototype.mandala;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZGFsYS1mbG93ZXItc2l4LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29jdGF2aWEvIiwic291cmNlcyI6WyJsaWIvYW5pbWF0aW9ucy9tYW5kYWxhLWZsb3dlci1zaXgvbWFuZGFsYS1mbG93ZXItc2l4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sTUFBTSxJQUFJLENBQUM7QUFFN0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUXpELE1BQU0sT0FBTyx5QkFBeUI7SUFMdEM7UUFZVyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsTUFBTSxDQUFDO1FBMkMxQixZQUFPOzs7O1FBQUcsVUFBVSxDQUFNOztnQkFFM0IsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVOzs7Z0JBRzlCLEtBQUs7O2dCQUNMLFFBQVE7O2dCQUFFLFFBQVE7O2dCQUFFLFFBQVE7O2dCQUFFLFlBQVk7O2dCQUMxQyxXQUFXOztnQkFBRSxXQUFXOztnQkFBRSxXQUFXOztnQkFBRSxXQUFXOztnQkFDbEQsV0FBVzs7Z0JBQUUsV0FBVzs7Z0JBQUUsV0FBVzs7Z0JBQ3JDLFdBQVc7O2dCQUFFLFFBQVE7O2dCQUNyQixRQUFROztnQkFBRSxXQUFXOztnQkFDckIsU0FBUzs7Z0JBQUUsUUFBUTs7Z0JBQUUsU0FBUzs7Z0JBQzlCLFNBQVM7O2dCQUNULHNCQUFzQjs7Z0JBQUUsc0JBQXNCOztnQkFBRSxzQkFBc0I7O2dCQUFFLHlCQUF5Qjs7Z0JBQUUsc0JBQXNCOztnQkFDekgsVUFBVTs7Z0JBQ1YsVUFBVTs7Z0JBQUUsVUFBVTs7Z0JBQUUsVUFBVTs7Z0JBQ2xDLGNBQWM7O2dC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QWUsQ0FBQyxHQUFZO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDbkQ7UUFDRCxPQUFPO0lBQ1QsQ0FBQzs7Ozs7Ozs7O0lBRU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVM7UUFDbkQsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyw2SEFBa0Q7O2FBRW5EOzs7eUJBUUUsS0FBSzsyQkFFTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7Ozs7OztJQVROLDRDQUFnQjs7Ozs7SUFDaEIsdUNBQVc7Ozs7O0lBQ1gsdUNBQVc7Ozs7O0lBQ1gsdUNBQVc7O0lBRVgsK0NBQTJCOztJQUUzQixpREFBZ0M7O0lBQ2hDLG1EQUFpQzs7SUFDakMsbURBQWlDOztJQTJDakMsNENBeVpFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHNrZXRjaCBmcm9tICdwNSc7XG5cbmltcG9ydCB7IENvbG9yc0VudW0gfSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2NvbG9ycy5lbnVtXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnT2N0LW1hbmRhbGEtZmxvd2VyLXNpeCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYW5kYWxhLWZsb3dlci1zaXguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYW5kYWxhLWZsb3dlci1zaXguY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYW5kYWxhRmxvd2VyU2l4Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgcHJpdmF0ZSBfc2tldGNoO1xuICBwcml2YXRlIF9wO1xuICBwcml2YXRlIF9zO1xuICBwcml2YXRlIF9oO1xuXG4gIEBJbnB1dCgpIGlzQW5pbWF0ZWQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHByaW1hcnlDb2xvciA9IFwiZ3JlZW5cIjtcbiAgQElucHV0KCkgc2Vjb25kYXJ5Q29sb3IgPSBcImJsdWVcIjtcbiAgQElucHV0KCkgaGlnaGxpZ2h0Q29sb3IgPSBcInBpbmtcIjtcblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy9UT0RPIGNhbiBub3QgYnVpbGQgdGhpcyBjb2xvciBpbmZvIHVwIGZyb20gdGhlIGpzb24gLSB3b250IGRvIGFuIG5wbSBidWlsZFxuICAgIHRoaXMuX2dldENvbG9ycyhDb2xvcnNFbnVtLCB0aGlzLnByaW1hcnlDb2xvciwgdGhpcy5zZWNvbmRhcnlDb2xvciwgdGhpcy5oaWdobGlnaHRDb2xvcik7XG4gICAgdGhpcy5jcmVhdGVDYW52YXMoKVxuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5pc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLmNoZWNrSXNBbmltYXRlZCh0aGlzLmlzQW5pbWF0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3lDYW52YXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ2FudmFzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NrZXRjaCA9IG5ldyBza2V0Y2godGhpcy5tYW5kYWxhLmJpbmQodGhpcykpO1xuICAgIGlmICh0aGlzLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmNoZWNrSXNBbmltYXRlZCh0aGlzLmlzQW5pbWF0ZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95Q2FudmFzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NrZXRjaC5ub0NhbnZhcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0lzQW5pbWF0ZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX3NrZXRjaCkge1xuICAgICAgdmFsID8gdGhpcy5fc2tldGNoLmxvb3AoKSA6IHRoaXMuX3NrZXRjaC5ub0xvb3AoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q29sb3JzKG9iaiwgcHJpbWFyeSwgc2Vjb25kYXJ5LCBoaWdobGlnaHQpIHtcbiAgICB0aGlzLl9wID0gb2JqW3ByaW1hcnldWzBdO1xuICAgIHRoaXMuX3MgPSBvYmpbc2Vjb25kYXJ5XVswXTtcbiAgICB0aGlzLl9oID0gb2JqW2hpZ2hsaWdodF1bMF07XG4gIH1cblxuICBwdWJsaWMgbWFuZGFsYSA9IGZ1bmN0aW9uIChwOiBhbnkpIHtcblxuICAgIGxldCBjYW52YXNTaXplID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgLy8gbWFuZGFsYSBvYmplY3RzXG4gICAgbGV0IHBldGFsO1xuICAgIGxldCBmbG93ZXJYMSwgZmxvd2VyWTEsIGZsb3dlclkyLCBmbG93ZXJDaXJjbGU7XG4gICAgbGV0IEF0cmlhbmdsZXgxLCBBdHJpYW5nbGV5MSwgQXRyaWFuZ2xleTIsIEJ0cmlhbmdsZXkxO1xuICAgIGxldCBDdHJpYW5nbGV4MSwgQ3RyaWFuZ2xleTEsIEN0cmlhbmdsZXkyO1xuICAgIGxldCBBY2lyY2xlU2l6ZSwgQWNpcmNsZVg7XG4gICAgbGV0IEJjaXJjbGVYLCBCY2lyY2xlU2l6ZTtcbiAgICBsZXQgQ0NpcmNsZVdILCBDQ2lyY2xlWSwgRENpcmNsZVdIO1xuICAgIGxldCBFQ2lyY2xlSFc7XG4gICAgbGV0IG91dGVyVHJpcGxlQ2lyY2xlc0JpZ1gsIG91dGVyVHJpcGxlQ2lyY2xlc0JpZ0MsIG91dGVyVHJpcGxlQ2lybGNlc01pZEMsIG91dGVyVHJpcGxlQ2lyY2xlc01pZFNtbFgsIG91dGVyVHJpcGxlQ2lyY2xlc1NtbEM7XG4gICAgbGV0IGJpZ0NpcmNsZUM7XG4gICAgbGV0IHRyaWFuZ2xleDEsIHRyaWFuZ2xleTEsIHRyaWFuZ2xleDM7XG4gICAgdmFyIHdhdGVyRHJvcGxldFkyLCB3YXRlckRyb3BsZXRZMSwgd2F0ZXJEcm9wbGV0WDI7XG4gICAgdmFyIHdhdGVyRHJvcGxldENpcmNsZUMsICB3YXRlckRyb3BsZXRDaXJjbGVZO1xuICAgIHZhciB3YXRlckRyb3BsZXRMaXR0bGVZMiwgd2F0ZXJEcm9wbGV0TGl0dGxlWTEsIHdhdGVyRHJvcGxldExpdHRsZVgyO1xuICAgIGxldCBjdXJ2ZSwgY3VydmVQb2ludFgsIGN1cnZlUG9pbnRZO1xuICAgIGxldCBiaWdnZXN0Q2lyY2xlLCBuZWFybHlCaWdnZXN0Q2lyY2xlO1xuICAgIGxldCBjaXJjbGVJbkN1cnZlZFRyaWFuZ2xlcywgc21hbGxDdXJ2ZWRUcmlhbmdsZVN0YXJ0UG9pbnQsIHNtYWxsQ3VydmVkVHJpYW5nbGVzbWFsbGVzdENvbnRyb2xQb2ludCwgc21hbGxDdXJ2ZWRUcmlhbmdsZUhlaWdodCwgc21hbGxDdXJ2ZWRUcmlhbmdsZUhpZ2hlc3RIZWlnaHQ7XG5cbiAgICAvLyBzZXR1cCB2YXJzXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlU2l6ZXMoKSB7XG5cbiAgICAgIHBldGFsID0gY2FudmFzU2l6ZSAvIDE2O1xuICAgICAgQXRyaWFuZ2xleDEgPSBjYW52YXNTaXplIC8gMzM7XG4gICAgICBBdHJpYW5nbGV5MSA9IGNhbnZhc1NpemUgLyAxODtcbiAgICAgIEF0cmlhbmdsZXkyID0gY2FudmFzU2l6ZSAvIDk7XG4gICAgICBCdHJpYW5nbGV5MSA9IGNhbnZhc1NpemUgLyAxMTtcbiAgICAgIEFjaXJjbGVTaXplID0gY2FudmFzU2l6ZSAvIDYzO1xuICAgICAgQWNpcmNsZVggPSBCY2lyY2xlWCA9IHBldGFsO1xuICAgICAgQmNpcmNsZVNpemUgPSBBY2lyY2xlU2l6ZSAqIDY7XG4gICAgICBmbG93ZXJYMSA9IGNhbnZhc1NpemUgLyAxNS4xO1xuICAgICAgZmxvd2VyWTEgPSBjYW52YXNTaXplIC8gOTtcbiAgICAgIGZsb3dlclkyID0gY2FudmFzU2l6ZSAvIDUuNTtcbiAgICAgIGZsb3dlckNpcmNsZSA9IGNhbnZhc1NpemUgLyAzLjg7XG4gICAgICBDQ2lyY2xlWSA9IGNhbnZhc1NpemUgLyAxMDtcbiAgICAgIENDaXJjbGVXSCA9IGNhbnZhc1NpemUgLyAyMDtcbiAgICAgIERDaXJjbGVXSCA9IGNhbnZhc1NpemUgLyAxNTtcbiAgICAgIEVDaXJjbGVIVyA9IGNhbnZhc1NpemUgLyAyLjg7XG5cbiAgICAgIEN0cmlhbmdsZXgxID0gQXRyaWFuZ2xleDEgKiAyLjg7XG4gICAgICBDdHJpYW5nbGV5MSA9IEF0cmlhbmdsZXkxICogMi44O1xuICAgICAgQ3RyaWFuZ2xleTIgPSBjYW52YXNTaXplIC8gNC41O1xuICAgICAgb3V0ZXJUcmlwbGVDaXJjbGVzQmlnWCA9IGNhbnZhc1NpemUgLyA0Ljk7XG4gICAgICBvdXRlclRyaXBsZUNpcmNsZXNCaWdDID0gY2FudmFzU2l6ZSAvIDI1O1xuICAgICAgb3V0ZXJUcmlwbGVDaXJjbGVzTWlkU21sWCAgPSBjYW52YXNTaXplIC8gNS42O1xuICAgICAgb3V0ZXJUcmlwbGVDaXJsY2VzTWlkQyA9IGNhbnZhc1NpemUgLyAyNjtcbiAgICAgIG91dGVyVHJpcGxlQ2lyY2xlc1NtbEMgPSBjYW52YXNTaXplIC8gNDA7XG4gICAgICBiaWdDaXJjbGVDID0gY2FudmFzU2l6ZSAvIDMuNTtcblxuICAgICAgdHJpYW5nbGV4MSA9IGNhbnZhc1NpemUgLyAzO1xuICAgICAgdHJpYW5nbGV5MSA9IGNhbnZhc1NpemUgLyAyMDtcbiAgICAgIHRyaWFuZ2xleDMgPSBjYW52YXNTaXplIC8gMTA7XG5cbiAgICAgIHdhdGVyRHJvcGxldFkyID0gY2FudmFzU2l6ZSAvIDM7XG4gICAgICB3YXRlckRyb3BsZXRZMSA9IGNhbnZhc1NpemUgLyA0O1xuICAgICAgd2F0ZXJEcm9wbGV0WDIgPSBjYW52YXNTaXplIC8gMTI7XG4gICAgICB3YXRlckRyb3BsZXRDaXJjbGVDID0gY2FudmFzU2l6ZSAvIDEyMDtcbiAgICAgIHdhdGVyRHJvcGxldENpcmNsZVkgPSBjYW52YXNTaXplIC8gMy40NTtcbiAgICAgIHdhdGVyRHJvcGxldExpdHRsZVkyID0gY2FudmFzU2l6ZSAvIDQuNTtcbiAgICAgIHdhdGVyRHJvcGxldExpdHRsZVkxID0gY2FudmFzU2l6ZSAvIDMuODtcbiAgICAgIHdhdGVyRHJvcGxldExpdHRsZVgyID0gY2FudmFzU2l6ZSAvIDI5O1xuXG4gICAgICBjdXJ2ZSA9IGNhbnZhc1NpemUgLyA1O1xuICAgICAgY3VydmVQb2ludFggPSBjYW52YXNTaXplIC8gMi40O1xuICAgICAgY3VydmVQb2ludFkgPSBjYW52YXNTaXplIC8gODtcbiAgICAgIGJpZ2dlc3RDaXJjbGUgPSBjYW52YXNTaXplIC8gMi4yNTtcbiAgICAgIG5lYXJseUJpZ2dlc3RDaXJjbGUgPSBjYW52YXNTaXplIC8gMi44O1xuXG4gICAgICBjaXJjbGVJbkN1cnZlZFRyaWFuZ2xlcyA9IGNhbnZhc1NpemUgLyA0MFxuICAgICAgc21hbGxDdXJ2ZWRUcmlhbmdsZVN0YXJ0UG9pbnQgPSBjYW52YXNTaXplIC8gMjA7XG4gICAgICBzbWFsbEN1cnZlZFRyaWFuZ2xlc21hbGxlc3RDb250cm9sUG9pbnQgPSBjYW52YXNTaXplIC8gMjk7XG4gICAgICBzbWFsbEN1cnZlZFRyaWFuZ2xlSGVpZ2h0ID0gY2FudmFzU2l6ZSAvIDIuODtcbiAgICAgIHNtYWxsQ3VydmVkVHJpYW5nbGVIaWdoZXN0SGVpZ2h0ID0gY2FudmFzU2l6ZSAvIDIuMjY7XG5cblxuICAgIH1cblxuICAgIC8vIHNldHVwXG4gICAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAgIHAuY3JlYXRlQ2FudmFzKGNhbnZhc1NpemUsIGNhbnZhc1NpemUpLnBhcmVudCgnZm9yZXN0LW1hbmRhbGEnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdzZXR1cCcsIGNhbnZhc1NpemUpXG4gICAgICBwLmFuZ2xlTW9kZShwLkRFR1JFRVMpO1xuICAgICAgY2FsY3VsYXRlU2l6ZXMoKTtcbiAgICB9O1xuICAgIHAuY2VudGVyID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAvLyBsZXRzIGFjdHVhbGx5IGRyYXcgc29tZXRoaW5nIG5vdy5cbiAgICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgICBwLmJhY2tncm91bmQoMjU1LCAyNTUsIDI1NSk7XG4gICAgICBwLmNlbnRlci54ID0gcC53aWR0aCAvIDI7XG4gICAgICBwLmNlbnRlci55ID0gcC5oZWlnaHQgLyAyO1xuXG4gICAgICAvLyBPdXRlciBmbG93ZXIgc2hhcGVcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5maWxsKHAuY29sb3IodGhpcy5fcFsnNjAwJ10pKTtcbiAgICAgICAgcC5zdHJva2UocC5jb2xvcih0aGlzLl9wWyc2MDAnXSkpO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50ICogNjApIC8gLTMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgcC5iZWdpblNoYXBlKCk7XG4gICAgICAgICAgcC5jdXJ2ZShjdXJ2ZSwgY3VydmUsIC1jdXJ2ZVBvaW50WSwgLWN1cnZlUG9pbnRYLCBjdXJ2ZVBvaW50WSwgLWN1cnZlUG9pbnRYLCAtY3VydmUsIGN1cnZlKTtcbiAgICAgICAgICBwLnJvdGF0ZSgzMClcbiAgICAgICAgICBwLmVuZFNoYXBlKCk7XG4gICAgICAgIH1cbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAuZmlsbChwLmNvbG9yKHRoaXMuX3BbXCIxMDBcIl0pKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDUpICogMSkgKyAuMik7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgKiA2MCkgLyAzKTtcbiAgICAgICAgcC5jaXJjbGUoMCwgMCwgYmlnZ2VzdENpcmNsZSk7XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBDdXJ2ZWQgdHJpYW5nbGVzXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG5cbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICBwLmJlZ2luU2hhcGUoKTtcbiAgICAgICAgICBwLmZpbGwodGhpcy5fcFtcIjUwMFwiXSk7XG4gICAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gNSkgKiAxKSArIC4yKTtcbiAgICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50ICogNjApIC8gMyk7XG4gICAgICAgICAgcC52ZXJ0ZXgoLXNtYWxsQ3VydmVkVHJpYW5nbGVTdGFydFBvaW50LCAtc21hbGxDdXJ2ZWRUcmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgcC5iZXppZXJWZXJ0ZXgoLXNtYWxsQ3VydmVkVHJpYW5nbGVTdGFydFBvaW50LCAtc21hbGxDdXJ2ZWRUcmlhbmdsZUhlaWdodCwgLXNtYWxsQ3VydmVkVHJpYW5nbGVzbWFsbGVzdENvbnRyb2xQb2ludCwgLXNtYWxsQ3VydmVkVHJpYW5nbGVIZWlnaHQsIDAsIC1zbWFsbEN1cnZlZFRyaWFuZ2xlSGlnaGVzdEhlaWdodCk7XG4gICAgICAgICAgcC5iZXppZXJWZXJ0ZXgoMCwgLXNtYWxsQ3VydmVkVHJpYW5nbGVIaWdoZXN0SGVpZ2h0LCBzbWFsbEN1cnZlZFRyaWFuZ2xlc21hbGxlc3RDb250cm9sUG9pbnQsIC1zbWFsbEN1cnZlZFRyaWFuZ2xlSGVpZ2h0LCBzbWFsbEN1cnZlZFRyaWFuZ2xlU3RhcnRQb2ludCwgLXNtYWxsQ3VydmVkVHJpYW5nbGVIZWlnaHQpO1xuICAgICAgICAgIHAudmVydGV4KHNtYWxsQ3VydmVkVHJpYW5nbGVTdGFydFBvaW50LCAtc21hbGxDdXJ2ZWRUcmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgcC5lbmRTaGFwZShwLkNMT1NFKTtcbiAgICAgICAgICBwLnJvdGF0ZSgxNSk7XG4gICAgICAgIH1cbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIFRoZSBjaXJjbGVzIGluIHRoZSB0cmlhbmdsZXNcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLmZpbGwodGhpcy5faFtcIjEwMFwiXSk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCkgKiAxKSArIC41KTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAqIDQwKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICAgIHAuY2lyY2xlKDAsIC1zbWFsbEN1cnZlZFRyaWFuZ2xlSGVpZ2h0LCBjaXJjbGVJbkN1cnZlZFRyaWFuZ2xlcyk7XG4gICAgICAgICAgcC5yb3RhdGUoMTUpO1xuICAgICAgICB9XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBiaWcgYmx1ZSBjaXJjbGVcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLmZpbGwocC5jb2xvcih0aGlzLl9zW1wiNTAwXCJdKSk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCkgKiAxKSArIC4yKTtcbiAgICAgICAgcC5jaXJjbGUoMCwgMCwgbmVhcmx5QmlnZ2VzdENpcmNsZSk7XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBiaWcgYmx1ZSBjaXJjbGVcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgcC5maWxsKHAuY29sb3IodGhpcy5fc1tcIjMwMFwiXSkpO1xuICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50KSAqIDEpICsgLjIpO1xuICAgICAgcC5jaXJjbGUoMCwgMCwgYmlnQ2lyY2xlQyk7XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBsb25nIHNraW5ueSBsb3RzIG9mICB0cmlhbmdsZXNcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLmZpbGwodGhpcy5faFtcIjIwMFwiXSk7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgKiAzMCkpO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyAyKSAqIDEuNikgKyAuMik7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBwLnRyaWFuZ2xlKC10cmlhbmdsZXgxLCB0cmlhbmdsZXkxLCAtdHJpYW5nbGV4MSwgLXRyaWFuZ2xleTEsIC10cmlhbmdsZXgzLCAwKTtcbiAgICAgICAgICAgIHAucm90YXRlKDMwKTtcbiAgICAgICAgICB9XG4gICAgICAgIC8vIHdhdGVyIGRyb3BsZXRzXG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5iZWdpblNoYXBlKCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBwLmZpbGwodGhpcy5fc1tcIjYwMFwiXSk7XG4gICAgICAgICAgICBwLmJlemllcigwLCAtd2F0ZXJEcm9wbGV0WTEsIC13YXRlckRyb3BsZXRYMiwgLXdhdGVyRHJvcGxldFkyLCB3YXRlckRyb3BsZXRYMiwgLXdhdGVyRHJvcGxldFkyLCAwLCAtd2F0ZXJEcm9wbGV0WTEpO1xuICAgICAgICAgICAgcC5maWxsKHRoaXMuX3NbXCIyMDBcIl0pO1xuICAgICAgICAgICAgcC5jaXJjbGUoMCwgLXdhdGVyRHJvcGxldENpcmNsZVksIHdhdGVyRHJvcGxldENpcmNsZUMpO1xuICAgICAgICAgICAgcC5yb3RhdGUoMzApO1xuICAgICAgICAgIH07XG4gICAgICAgIHAuZW5kU2hhcGUoKTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5maWxsKHRoaXMuX3BbXCIyMDBcIl0pO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyA1KSAqIDEuNikgKyAuMik7XG4gICAgICAgIHAuYmVnaW5TaGFwZSgpO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50ICogLTQwKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgICAgIHAuYmV6aWVyKDAsIC13YXRlckRyb3BsZXRMaXR0bGVZMiwgLXdhdGVyRHJvcGxldExpdHRsZVgyLCAtd2F0ZXJEcm9wbGV0TGl0dGxlWTEsIHdhdGVyRHJvcGxldExpdHRsZVgyLCAtd2F0ZXJEcm9wbGV0TGl0dGxlWTEsIDAsIC13YXRlckRyb3BsZXRMaXR0bGVZMik7XG4gICAgICAgIH07XG4gICAgICAgICAgcC5lbmRTaGFwZSgpO1xuICAgICAgICBwLnBvcCgpO1xuXG4gICAgICAgIHAucHVzaCgpO1xuICAgICAgICAgIHAuYmVnaW5TaGFwZSgpO1xuICAgICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgKiA0MCkpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICAgICAgICBwLmJlemllcigwLCAtd2F0ZXJEcm9wbGV0TGl0dGxlWTIsIC13YXRlckRyb3BsZXRMaXR0bGVYMiwgLXdhdGVyRHJvcGxldExpdHRsZVkxLCB3YXRlckRyb3BsZXRMaXR0bGVYMiwgLXdhdGVyRHJvcGxldExpdHRsZVkxLCAwLCAtd2F0ZXJEcm9wbGV0TGl0dGxlWTIpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcC5lbmRTaGFwZSgpO1xuICAgICAgICBwLnBvcCgpO1xuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gb3V0ZXIgdHJpcGxlIGNpcmNsZXNcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50ICogLTIwKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgcC5maWxsKHRoaXMuX3BbXCI1MDBcIl0pO1xuICAgICAgICAgICAgcC5jaXJjbGUob3V0ZXJUcmlwbGVDaXJjbGVzQmlnWCwgMCwgb3V0ZXJUcmlwbGVDaXJjbGVzQmlnQyk7XG4gICAgICAgICAgICBwLmZpbGwodGhpcy5fcFtcIjMwMFwiXSk7XG4gICAgICAgICAgICBwLmNpcmNsZShvdXRlclRyaXBsZUNpcmNsZXNNaWRTbWxYLCAwLCBvdXRlclRyaXBsZUNpcmxjZXNNaWRDKTtcbiAgICAgICAgICAgIHAuZmlsbCh0aGlzLl9wW1wiMTAwXCJdKTtcbiAgICAgICAgICAgIHAuY2lyY2xlKG91dGVyVHJpcGxlQ2lyY2xlc01pZFNtbFgsIDAsIG91dGVyVHJpcGxlQ2lyY2xlc1NtbEMpO1xuICAgICAgICAgICAgcC5yb3RhdGUoMzApO1xuICAgICAgICAgIH07XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBDdHJpYW5nbGVcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLmZpbGwodGhpcy5fcFtcIjQwMFwiXSk7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgLyA0KSAqIDUwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICBwLnRyaWFuZ2xlKEN0cmlhbmdsZXgxLCAtQ3RyaWFuZ2xleTEsIC1DdHJpYW5nbGV4MSwgLUN0cmlhbmdsZXkxLCAwLCAtQ3RyaWFuZ2xleTIpXG4gICAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgICB9XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBmbG93ZXJBXG4gICAgICBwLnB1c2goKTtcbiAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgcC5maWxsKHAuY29sb3IodGhpcy5fc1tcIjcwMFwiXSkpO1xuICAgICAgcC5wdXNoKCk7XG4gICAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICAgIHAuZWxsaXBzZSgwLCAwLCBmbG93ZXJDaXJjbGUsIGZsb3dlckNpcmNsZSk7XG4gICAgICAgIHAucG9wKCk7XG4gICAgICAgIHAucHVzaCgpO1xuICAgICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDIpICogMS42KSArIC4yKTtcbiAgICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50ICogLTUwKSk7XG4gICAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBwLmJlZ2luU2hhcGUoKTtcbiAgICAgICAgICAgIHAudmVydGV4KC1mbG93ZXJYMSwgLWZsb3dlclkxKTtcbiAgICAgICAgICAgIHAuYmV6aWVyVmVydGV4KC1mbG93ZXJYMSwgLWZsb3dlclkyLCAwLCAtZmxvd2VyWTEsIDAsIC1mbG93ZXJZMik7XG4gICAgICAgICAgICBwLmJlemllclZlcnRleCgwLCAtZmxvd2VyWTEsIGZsb3dlclgxLCAtZmxvd2VyWTIsIGZsb3dlclgxLCAtZmxvd2VyWTEpO1xuICAgICAgICAgICAgcC5lbmRTaGFwZSgpO1xuICAgICAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgICAgIH1cbiAgICAgICAgcC5wb3AoKTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIG91dGVyIHRyaXBsZSBjaXJjbGVzXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gMikgKiAuNSkgKyAxKTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAvIDQpICogLTUwKTtcbiAgICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDUpICogMS41KSArIDEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICBwLmZpbGwodGhpcy5fcFtcIjQwMFwiXSk7XG4gICAgICAgICAgcC5jaXJjbGUob3V0ZXJUcmlwbGVDaXJjbGVzQmlnWCwgMCwgb3V0ZXJUcmlwbGVDaXJjbGVzQmlnQyAvIDQpO1xuICAgICAgICAgIHAucm90YXRlKDMwKTtcbiAgICAgICAgfTtcbiAgICAgIHAucG9wKCk7XG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgcC5maWxsKHRoaXMuX3BbXCI1MDBcIl0pO1xuICAgICAgICAgIHAuY2lyY2xlKG91dGVyVHJpcGxlQ2lyY2xlc01pZFNtbFgsIDAsIG91dGVyVHJpcGxlQ2lybGNlc01pZEMgLyA0KTtcbiAgICAgICAgICBwLmZpbGwodGhpcy5fcFtcIjMwMFwiXSk7XG4gICAgICAgICAgcC5jaXJjbGUob3V0ZXJUcmlwbGVDaXJjbGVzTWlkU21sWCwgMCwgb3V0ZXJUcmlwbGVDaXJjbGVzU21sQyAvIDQpO1xuICAgICAgICAgIHAucm90YXRlKDMwKTtcbiAgICAgICAgfTtcbiAgICAgICAgcC5wb3AoKTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIEN0cmlhbmdsZVxuICAgICAgcC5wdXNoKCk7XG4gICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgIHAuZmlsbCh0aGlzLl9wW1wiNjAwXCJdKTtcbiAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgLyA0KSAqIDUwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIHAudHJpYW5nbGUoQ3RyaWFuZ2xleDEsIC1DdHJpYW5nbGV5MSwgLUN0cmlhbmdsZXgxLCAtQ3RyaWFuZ2xleTEsIDAsIC1DdHJpYW5nbGV5MilcbiAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgfVxuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gRUNpcmNsZVxuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAuZmlsbChwLmNvbG9yKHRoaXMuX3BbXCIyMDBcIl0pKTtcbiAgICAgICAgcC5lbGxpcHNlKDAsIDAsIEVDaXJjbGVIVywgRUNpcmNsZUhXKTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIENDaXJjbGVcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gMikgKiAxLjMpICsgLjIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICAgICAgcC5maWxsKHAuY29sb3IodGhpcy5fc1tcIjQwMFwiXSkpO1xuICAgICAgICAgICAgcC5lbGxpcHNlKDAsIC1DQ2lyY2xlWSwgRENpcmNsZVdILCBEQ2lyY2xlV0gpO1xuICAgICAgICAgICAgcC5maWxsKHAuY29sb3IodGhpcy5fc1tcIjMwMFwiXSkpO1xuICAgICAgICAgICAgcC5lbGxpcHNlKDAsIC1DQ2lyY2xlWSwgQ0NpcmNsZVdILCBDQ2lyY2xlV0gpO1xuICAgICAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgICB9XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBCY2lyY2xlc1xuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLmZpbGwodGhpcy5fcFtcIjUwMFwiXSk7XG4gICAgICAgIHAuc2NhbGUoMS4yKTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAqIC01MCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgcC5lbGxpcHNlKC1CY2lyY2xlWCwgMCwgQmNpcmNsZVNpemUsIEJjaXJjbGVTaXplKTtcbiAgICAgICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgICAgICB9XG4gICAgICBwLnBvcCgpO1xuICAgICAgcC5wdXNoKCk7XG4gICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50IC8gMykgKiA1MCk7XG4gICAgICBwLmZpbGwodGhpcy5fcFtcIjIwMFwiXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgcC5lbGxpcHNlKC1CY2lyY2xlWCwgMCwgQmNpcmNsZVNpemUsIEJjaXJjbGVTaXplKTtcbiAgICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICAgIH1cbiAgICAgICAgcC5wb3AoKTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIEF0cmlhbmdlXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5maWxsKHRoaXMuX3NbXCIyMDBcIl0pO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50IC8gNCkgKiA1MCk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDEpICogMS4zKSArIC41KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIHAudHJpYW5nbGUoQXRyaWFuZ2xleDEsIC1BdHJpYW5nbGV5MSwgLUF0cmlhbmdsZXgxLCAtQXRyaWFuZ2xleTEsIDAsIC1BdHJpYW5nbGV5MilcbiAgICAgICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgICAgfVxuICAgICAgICBwLmZpbGwodGhpcy5fc1tcIjQwMFwiXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgcC50cmlhbmdsZShBdHJpYW5nbGV4MSwgLUF0cmlhbmdsZXkxLCAtQXRyaWFuZ2xleDEsIC1BdHJpYW5nbGV5MSwgMCwgLUJ0cmlhbmdsZXkxKVxuICAgICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgICAgfVxuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gQWNpcmNsZXNcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLmZpbGwodGhpcy5faFtcIjMwMFwiXSk7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgLyAxKSAqIC01MCk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDIpICogMS4zKSArIC41KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICBwLmVsbGlwc2UoLUFjaXJjbGVYLCAwLCBBY2lyY2xlU2l6ZSwgQWNpcmNsZVNpemUpO1xuICAgICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgICAgfVxuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gY2lyY2xlIGZyYW1pbmcgdGhlIGZsb3dlciBvZiBsaWZlXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5maWxsKHRoaXMuX3BbXCIyMDBcIl0pO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyAzKSAqIDEuMykgKyAuNSk7XG4gICAgICAgIHAuZWxsaXBzZSgwLCAwLCBwZXRhbCAqIDIgLCBwZXRhbCAqIDIpO1xuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gZmxvd2VyIG9mIGxpZmVcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMC4xKTtcbiAgICAgICAgcC5zdHJva2UoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgICAgIHAuZmlsbChwLmNvbG9yKHRoaXMuX3BbXCI2MDBcIl0pKTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gNCkgKiAuNSkgKyAuNSk7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgLyA0KSAqIC01MCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgcC5jdXJ2ZShwZXRhbCwgMCwgMCwgMCwgMCwgcGV0YWwsIHBldGFsLCBwZXRhbCk7XG4gICAgICAgICAgcC5jdXJ2ZSgtcGV0YWwsIDAsIDAsIDAsIDAsIHBldGFsLCAtcGV0YWwsIHBldGFsKTtcbiAgICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICAgIH1cbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAvIDQpICogLTUwKTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICB9O1xuICB9O1xufVxuIl19