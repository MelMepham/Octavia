/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import * as sketch from 'p5';
import { ColorsEnum } from "../../../assets/colors.enum";
var MandalaFlowerSixComponent = /** @class */ (function () {
    function MandalaFlowerSixComponent() {
        this.isAnimated = true;
        this.primaryColor = "green";
        this.secondaryColor = "blue";
        this.highlightColor = "pink";
        this.mandala = (/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            var _this = this;
            /** @type {?} */
            var canvasSize = window.innerWidth;
            // mandala objects
            /** @type {?} */
            var petal;
            /** @type {?} */
            var flowerX1;
            /** @type {?} */
            var flowerY1;
            /** @type {?} */
            var flowerY2;
            /** @type {?} */
            var flowerCircle;
            /** @type {?} */
            var Atrianglex1;
            /** @type {?} */
            var Atriangley1;
            /** @type {?} */
            var Atriangley2;
            /** @type {?} */
            var Btriangley1;
            /** @type {?} */
            var Ctrianglex1;
            /** @type {?} */
            var Ctriangley1;
            /** @type {?} */
            var Ctriangley2;
            /** @type {?} */
            var AcircleSize;
            /** @type {?} */
            var AcircleX;
            /** @type {?} */
            var BcircleX;
            /** @type {?} */
            var BcircleSize;
            /** @type {?} */
            var CCircleWH;
            /** @type {?} */
            var CCircleY;
            /** @type {?} */
            var DCircleWH;
            /** @type {?} */
            var ECircleHW;
            /** @type {?} */
            var outerTripleCirclesBigX;
            /** @type {?} */
            var outerTripleCirclesBigC;
            /** @type {?} */
            var outerTripleCirlcesMidC;
            /** @type {?} */
            var outerTripleCirclesMidSmlX;
            /** @type {?} */
            var outerTripleCirclesSmlC;
            /** @type {?} */
            var bigCircleC;
            /** @type {?} */
            var trianglex1;
            /** @type {?} */
            var triangley1;
            /** @type {?} */
            var trianglex3;
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
            var curve;
            /** @type {?} */
            var curvePointX;
            /** @type {?} */
            var curvePointY;
            /** @type {?} */
            var biggestCircle;
            /** @type {?} */
            var nearlyBiggestCircle;
            /** @type {?} */
            var circleInCurvedTriangles;
            /** @type {?} */
            var smallCurvedTriangleStartPoint;
            /** @type {?} */
            var smallCurvedTrianglesmallestControlPoint;
            /** @type {?} */
            var smallCurvedTriangleHeight;
            /** @type {?} */
            var smallCurvedTriangleHighestHeight;
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
            function () {
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
            function () {
                p.background(255, 255, 255);
                p.center.x = p.width / 2;
                p.center.y = p.height / 2;
                // Outer flower shape
                p.push();
                p.translate(p.center.x, p.center.y);
                p.fill(p.color(_this._p['600']));
                p.stroke(p.color(_this._p['600']));
                p.rotate(p.radians(p.frameCount * 60) / -3);
                for (var i = 0; i < 12; i++) {
                    p.beginShape();
                    p.curve(curve, curve, -curvePointY, -curvePointX, curvePointY, -curvePointX, -curve, curve);
                    p.rotate(30);
                    p.endShape();
                }
                p.pop();
                p.push();
                p.noStroke();
                p.fill(p.color(_this._p["100"]));
                p.translate(p.center.x, p.center.y);
                p.scale((p.sin(p.frameCount / 5) * 1) + .2);
                p.rotate(p.radians(p.frameCount * 60) / 3);
                p.circle(0, 0, biggestCircle);
                p.pop();
                // Curved triangles
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                for (var i = 0; i < 24; i++) {
                    p.beginShape();
                    p.fill(_this._p["500"]);
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
                p.fill(_this._h["100"]);
                p.scale((p.sin(p.frameCount) * 1) + .5);
                p.rotate(p.radians(p.frameCount * 40));
                for (var i = 0; i < 24; i++) {
                    p.circle(0, -smallCurvedTriangleHeight, circleInCurvedTriangles);
                    p.rotate(15);
                }
                p.pop();
                // big blue circle
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                p.fill(p.color(_this._s["500"]));
                p.scale((p.sin(p.frameCount) * 1) + .2);
                p.circle(0, 0, nearlyBiggestCircle);
                p.pop();
                // big blue circle
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                p.fill(p.color(_this._s["300"]));
                p.scale((p.sin(p.frameCount) * 1) + .2);
                p.circle(0, 0, bigCircleC);
                p.pop();
                // long skinny lots of  triangles
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                p.fill(_this._h["200"]);
                p.rotate(p.radians(p.frameCount * 30));
                p.scale((p.sin(p.frameCount / 2) * 1.6) + .2);
                for (var i = 0; i < 12; i++) {
                    p.triangle(-trianglex1, triangley1, -trianglex1, -triangley1, -trianglex3, 0);
                    p.rotate(30);
                }
                // water droplets
                p.noStroke();
                p.beginShape();
                for (var i = 0; i < 12; i++) {
                    p.fill(_this._s["600"]);
                    p.bezier(0, -waterDropletY1, -waterDropletX2, -waterDropletY2, waterDropletX2, -waterDropletY2, 0, -waterDropletY1);
                    p.fill(_this._s["200"]);
                    p.circle(0, -waterDropletCircleY, waterDropletCircleC);
                    p.rotate(30);
                }
                ;
                p.endShape();
                p.pop();
                p.push();
                p.translate(p.center.x, p.center.y);
                p.fill(_this._p["200"]);
                p.noStroke();
                p.push();
                p.scale((p.sin(p.frameCount / 5) * 1.6) + .2);
                p.beginShape();
                p.rotate(p.radians(p.frameCount * -40));
                for (var i = 0; i < 6; i++) {
                    p.rotate(60);
                    p.bezier(0, -waterDropletLittleY2, -waterDropletLittleX2, -waterDropletLittleY1, waterDropletLittleX2, -waterDropletLittleY1, 0, -waterDropletLittleY2);
                }
                ;
                p.endShape();
                p.pop();
                p.push();
                p.beginShape();
                p.rotate(p.radians(p.frameCount * 40));
                for (var i = 0; i < 6; i++) {
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
                for (var i = 0; i < 12; i++) {
                    p.fill(_this._p["500"]);
                    p.circle(outerTripleCirclesBigX, 0, outerTripleCirclesBigC);
                    p.fill(_this._p["300"]);
                    p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirlcesMidC);
                    p.fill(_this._p["100"]);
                    p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirclesSmlC);
                    p.rotate(30);
                }
                ;
                p.pop();
                // Ctriangle
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                p.fill(_this._p["400"]);
                p.rotate(p.radians(p.frameCount / 4) * 50);
                for (var i = 0; i < 6; i++) {
                    p.triangle(Ctrianglex1, -Ctriangley1, -Ctrianglex1, -Ctriangley1, 0, -Ctriangley2);
                    p.rotate(60);
                }
                p.pop();
                // flowerA
                p.push();
                p.translate(p.center.x, p.center.y);
                p.fill(p.color(_this._s["700"]));
                p.push();
                p.noStroke();
                p.ellipse(0, 0, flowerCircle, flowerCircle);
                p.pop();
                p.push();
                p.scale((p.sin(p.frameCount / 2) * 1.6) + .2);
                p.rotate(p.radians(p.frameCount * -50));
                p.noStroke();
                for (var i = 0; i < 6; i++) {
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
                for (var i = 0; i < 12; i++) {
                    p.fill(_this._p["400"]);
                    p.circle(outerTripleCirclesBigX, 0, outerTripleCirclesBigC / 4);
                    p.rotate(30);
                }
                ;
                p.pop();
                p.push();
                for (var i = 0; i < 12; i++) {
                    p.fill(_this._p["500"]);
                    p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirlcesMidC / 4);
                    p.fill(_this._p["300"]);
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
                p.fill(_this._p["600"]);
                p.rotate(p.radians(p.frameCount / 4) * 50);
                for (var i = 0; i < 6; i++) {
                    p.triangle(Ctrianglex1, -Ctriangley1, -Ctrianglex1, -Ctriangley1, 0, -Ctriangley2);
                    p.rotate(60);
                }
                p.pop();
                // ECircle
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                p.fill(p.color(_this._p["200"]));
                p.ellipse(0, 0, ECircleHW, ECircleHW);
                p.pop();
                // CCircle
                p.push();
                p.translate(p.center.x, p.center.y);
                p.scale((p.sin(p.frameCount / 2) * 1.3) + .2);
                for (var i = 0; i < 6; i++) {
                    p.noStroke();
                    p.fill(p.color(_this._s["400"]));
                    p.ellipse(0, -CCircleY, DCircleWH, DCircleWH);
                    p.fill(p.color(_this._s["300"]));
                    p.ellipse(0, -CCircleY, CCircleWH, CCircleWH);
                    p.rotate(60);
                }
                p.pop();
                // Bcircles
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                p.push();
                p.fill(_this._p["500"]);
                p.scale(1.2);
                p.rotate(p.radians(p.frameCount * -50));
                for (var i = 0; i < 6; i++) {
                    p.ellipse(-BcircleX, 0, BcircleSize, BcircleSize);
                    p.rotate(60);
                }
                p.pop();
                p.push();
                p.rotate(p.radians(p.frameCount / 3) * 50);
                p.fill(_this._p["200"]);
                for (var i = 0; i < 6; i++) {
                    p.ellipse(-BcircleX, 0, BcircleSize, BcircleSize);
                    p.rotate(60);
                }
                p.pop();
                p.pop();
                // Atriange
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                p.fill(_this._s["200"]);
                p.rotate(p.radians(p.frameCount / 4) * 50);
                p.scale((p.sin(p.frameCount / 1) * 1.3) + .5);
                for (var i = 0; i < 6; i++) {
                    p.triangle(Atrianglex1, -Atriangley1, -Atrianglex1, -Atriangley1, 0, -Atriangley2);
                    p.rotate(60);
                }
                p.fill(_this._s["400"]);
                for (var i = 0; i < 6; i++) {
                    p.triangle(Atrianglex1, -Atriangley1, -Atrianglex1, -Atriangley1, 0, -Btriangley1);
                    p.rotate(60);
                }
                p.pop();
                // Acircles
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                p.fill(_this._h["300"]);
                p.rotate(p.radians(p.frameCount / 1) * -50);
                p.scale((p.sin(p.frameCount / 2) * 1.3) + .5);
                for (var i = 0; i < 6; i++) {
                    p.ellipse(-AcircleX, 0, AcircleSize, AcircleSize);
                    p.rotate(60);
                }
                p.pop();
                // circle framing the flower of life
                p.push();
                p.translate(p.center.x, p.center.y);
                p.noStroke();
                p.fill(_this._p["200"]);
                p.scale((p.sin(p.frameCount / 3) * 1.3) + .5);
                p.ellipse(0, 0, petal * 2, petal * 2);
                p.pop();
                // flower of life
                p.push();
                p.translate(p.center.x, p.center.y);
                p.strokeWeight(0.1);
                p.stroke(255, 255, 255, 0);
                p.fill(p.color(_this._p["600"]));
                p.scale((p.sin(p.frameCount / 4) * .5) + .5);
                p.rotate(p.radians(p.frameCount / 4) * -50);
                for (var i = 0; i < 6; i++) {
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
    MandalaFlowerSixComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //TODO can not build this color info up from the json - wont do an npm build
        this._getColors(ColorsEnum, this.primaryColor, this.secondaryColor, this.highlightColor);
        this.createCanvas();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MandalaFlowerSixComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.isAnimated) {
            this.checkIsAnimated(this.isAnimated);
        }
    };
    /**
     * @return {?}
     */
    MandalaFlowerSixComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyCanvas();
    };
    /**
     * @private
     * @return {?}
     */
    MandalaFlowerSixComponent.prototype.createCanvas = /**
     * @private
     * @return {?}
     */
    function () {
        this._sketch = new sketch(this.mandala.bind(this));
        if (this.isAnimated) {
            return;
        }
        this.checkIsAnimated(this.isAnimated);
    };
    /**
     * @private
     * @return {?}
     */
    MandalaFlowerSixComponent.prototype.destroyCanvas = /**
     * @private
     * @return {?}
     */
    function () {
        this._sketch.noCanvas();
    };
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    MandalaFlowerSixComponent.prototype.checkIsAnimated = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (this._sketch) {
            val ? this._sketch.loop() : this._sketch.noLoop();
        }
        return;
    };
    /**
     * @private
     * @param {?} obj
     * @param {?} primary
     * @param {?} secondary
     * @param {?} highlight
     * @return {?}
     */
    MandalaFlowerSixComponent.prototype._getColors = /**
     * @private
     * @param {?} obj
     * @param {?} primary
     * @param {?} secondary
     * @param {?} highlight
     * @return {?}
     */
    function (obj, primary, secondary, highlight) {
        this._p = obj[primary][0];
        this._s = obj[secondary][0];
        this._h = obj[highlight][0];
    };
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
    return MandalaFlowerSixComponent;
}());
export { MandalaFlowerSixComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZGFsYS1mbG93ZXItc2l4LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29jdGF2aWEvIiwic291cmNlcyI6WyJsaWIvYW5pbWF0aW9ucy9tYW5kYWxhLWZsb3dlci1zaXgvbWFuZGFsYS1mbG93ZXItc2l4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sTUFBTSxJQUFJLENBQUM7QUFFN0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3pEO0lBQUE7UUFZVyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsTUFBTSxDQUFDO1FBMkMxQixZQUFPOzs7O1FBQUcsVUFBVSxDQUFNO1lBQWhCLGlCQXlaaEI7O2dCQXZaSyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVU7OztnQkFHOUIsS0FBSzs7Z0JBQ0wsUUFBUTs7Z0JBQUUsUUFBUTs7Z0JBQUUsUUFBUTs7Z0JBQUUsWUFBWTs7Z0JBQzFDLFdBQVc7O2dCQUFFLFdBQVc7O2dCQUFFLFdBQVc7O2dCQUFFLFdBQVc7O2dCQUNsRCxXQUFXOztnQkFBRSxXQUFXOztnQkFBRSxXQUFXOztnQkFDckMsV0FBVzs7Z0JBQUUsUUFBUTs7Z0JBQ3JCLFFBQVE7O2dCQUFFLFdBQVc7O2dCQUNyQixTQUFTOztnQkFBRSxRQUFROztnQkFBRSxTQUFTOztnQkFDOUIsU0FBUzs7Z0JBQ1Qsc0JBQXNCOztnQkFBRSxzQkFBc0I7O2dCQUFFLHNCQUFzQjs7Z0JBQUUseUJBQXlCOztnQkFBRSxzQkFBc0I7O2dCQUN6SCxVQUFVOztnQkFDVixVQUFVOztnQkFBRSxVQUFVOztnQkFBRSxVQUFVOztnQkFDbEMsY0FBYzs7Z0JBQUUs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QzFCLENBQUM7Ozs7OztJQUVPLG1EQUFlOzs7OztJQUF2QixVQUF3QixHQUFZO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDbkQ7UUFDRCxPQUFPO0lBQ1QsQ0FBQzs7Ozs7Ozs7O0lBRU8sOENBQVU7Ozs7Ozs7O0lBQWxCLFVBQW1CLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVM7UUFDbkQsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyw2SEFBa0Q7O2lCQUVuRDs7OzZCQVFFLEtBQUs7K0JBRUwsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7O0lBcWNSLGdDQUFDO0NBQUEsQUFyZEQsSUFxZEM7U0FoZFkseUJBQXlCOzs7Ozs7SUFFcEMsNENBQWdCOzs7OztJQUNoQix1Q0FBVzs7Ozs7SUFDWCx1Q0FBVzs7Ozs7SUFDWCx1Q0FBVzs7SUFFWCwrQ0FBMkI7O0lBRTNCLGlEQUFnQzs7SUFDaEMsbURBQWlDOztJQUNqQyxtREFBaUM7O0lBMkNqQyw0Q0F5WkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgc2tldGNoIGZyb20gJ3A1JztcblxuaW1wb3J0IHsgQ29sb3JzRW51bSB9IGZyb20gXCIuLi8uLi8uLi9hc3NldHMvY29sb3JzLmVudW1cIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdPY3QtbWFuZGFsYS1mbG93ZXItc2l4JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hbmRhbGEtZmxvd2VyLXNpeC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hbmRhbGEtZmxvd2VyLXNpeC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hbmRhbGFGbG93ZXJTaXhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuICBwcml2YXRlIF9za2V0Y2g7XG4gIHByaXZhdGUgX3A7XG4gIHByaXZhdGUgX3M7XG4gIHByaXZhdGUgX2g7XG5cbiAgQElucHV0KCkgaXNBbmltYXRlZCA9IHRydWU7XG5cbiAgQElucHV0KCkgcHJpbWFyeUNvbG9yID0gXCJncmVlblwiO1xuICBASW5wdXQoKSBzZWNvbmRhcnlDb2xvciA9IFwiYmx1ZVwiO1xuICBASW5wdXQoKSBoaWdobGlnaHRDb2xvciA9IFwicGlua1wiO1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvL1RPRE8gY2FuIG5vdCBidWlsZCB0aGlzIGNvbG9yIGluZm8gdXAgZnJvbSB0aGUganNvbiAtIHdvbnQgZG8gYW4gbnBtIGJ1aWxkXG4gICAgdGhpcy5fZ2V0Q29sb3JzKENvbG9yc0VudW0sIHRoaXMucHJpbWFyeUNvbG9yLCB0aGlzLnNlY29uZGFyeUNvbG9yLCB0aGlzLmhpZ2hsaWdodENvbG9yKTtcbiAgICB0aGlzLmNyZWF0ZUNhbnZhcygpXG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tJc0FuaW1hdGVkKHRoaXMuaXNBbmltYXRlZCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveUNhbnZhcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDYW52YXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2tldGNoID0gbmV3IHNrZXRjaCh0aGlzLm1hbmRhbGEuYmluZCh0aGlzKSk7XG4gICAgaWYgKHRoaXMuaXNBbmltYXRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuY2hlY2tJc0FuaW1hdGVkKHRoaXMuaXNBbmltYXRlZCk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lDYW52YXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2tldGNoLm5vQ2FudmFzKCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrSXNBbmltYXRlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fc2tldGNoKSB7XG4gICAgICB2YWwgPyB0aGlzLl9za2V0Y2gubG9vcCgpIDogdGhpcy5fc2tldGNoLm5vTG9vcCgpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIF9nZXRDb2xvcnMob2JqLCBwcmltYXJ5LCBzZWNvbmRhcnksIGhpZ2hsaWdodCkge1xuICAgIHRoaXMuX3AgPSBvYmpbcHJpbWFyeV1bMF07XG4gICAgdGhpcy5fcyA9IG9ialtzZWNvbmRhcnldWzBdO1xuICAgIHRoaXMuX2ggPSBvYmpbaGlnaGxpZ2h0XVswXTtcbiAgfVxuXG4gIHB1YmxpYyBtYW5kYWxhID0gZnVuY3Rpb24gKHA6IGFueSkge1xuXG4gICAgbGV0IGNhbnZhc1NpemUgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAvLyBtYW5kYWxhIG9iamVjdHNcbiAgICBsZXQgcGV0YWw7XG4gICAgbGV0IGZsb3dlclgxLCBmbG93ZXJZMSwgZmxvd2VyWTIsIGZsb3dlckNpcmNsZTtcbiAgICBsZXQgQXRyaWFuZ2xleDEsIEF0cmlhbmdsZXkxLCBBdHJpYW5nbGV5MiwgQnRyaWFuZ2xleTE7XG4gICAgbGV0IEN0cmlhbmdsZXgxLCBDdHJpYW5nbGV5MSwgQ3RyaWFuZ2xleTI7XG4gICAgbGV0IEFjaXJjbGVTaXplLCBBY2lyY2xlWDtcbiAgICBsZXQgQmNpcmNsZVgsIEJjaXJjbGVTaXplO1xuICAgIGxldCBDQ2lyY2xlV0gsIENDaXJjbGVZLCBEQ2lyY2xlV0g7XG4gICAgbGV0IEVDaXJjbGVIVztcbiAgICBsZXQgb3V0ZXJUcmlwbGVDaXJjbGVzQmlnWCwgb3V0ZXJUcmlwbGVDaXJjbGVzQmlnQywgb3V0ZXJUcmlwbGVDaXJsY2VzTWlkQywgb3V0ZXJUcmlwbGVDaXJjbGVzTWlkU21sWCwgb3V0ZXJUcmlwbGVDaXJjbGVzU21sQztcbiAgICBsZXQgYmlnQ2lyY2xlQztcbiAgICBsZXQgdHJpYW5nbGV4MSwgdHJpYW5nbGV5MSwgdHJpYW5nbGV4MztcbiAgICB2YXIgd2F0ZXJEcm9wbGV0WTIsIHdhdGVyRHJvcGxldFkxLCB3YXRlckRyb3BsZXRYMjtcbiAgICB2YXIgd2F0ZXJEcm9wbGV0Q2lyY2xlQywgIHdhdGVyRHJvcGxldENpcmNsZVk7XG4gICAgdmFyIHdhdGVyRHJvcGxldExpdHRsZVkyLCB3YXRlckRyb3BsZXRMaXR0bGVZMSwgd2F0ZXJEcm9wbGV0TGl0dGxlWDI7XG4gICAgbGV0IGN1cnZlLCBjdXJ2ZVBvaW50WCwgY3VydmVQb2ludFk7XG4gICAgbGV0IGJpZ2dlc3RDaXJjbGUsIG5lYXJseUJpZ2dlc3RDaXJjbGU7XG4gICAgbGV0IGNpcmNsZUluQ3VydmVkVHJpYW5nbGVzLCBzbWFsbEN1cnZlZFRyaWFuZ2xlU3RhcnRQb2ludCwgc21hbGxDdXJ2ZWRUcmlhbmdsZXNtYWxsZXN0Q29udHJvbFBvaW50LCBzbWFsbEN1cnZlZFRyaWFuZ2xlSGVpZ2h0LCBzbWFsbEN1cnZlZFRyaWFuZ2xlSGlnaGVzdEhlaWdodDtcblxuICAgIC8vIHNldHVwIHZhcnNcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVTaXplcygpIHtcblxuICAgICAgcGV0YWwgPSBjYW52YXNTaXplIC8gMTY7XG4gICAgICBBdHJpYW5nbGV4MSA9IGNhbnZhc1NpemUgLyAzMztcbiAgICAgIEF0cmlhbmdsZXkxID0gY2FudmFzU2l6ZSAvIDE4O1xuICAgICAgQXRyaWFuZ2xleTIgPSBjYW52YXNTaXplIC8gOTtcbiAgICAgIEJ0cmlhbmdsZXkxID0gY2FudmFzU2l6ZSAvIDExO1xuICAgICAgQWNpcmNsZVNpemUgPSBjYW52YXNTaXplIC8gNjM7XG4gICAgICBBY2lyY2xlWCA9IEJjaXJjbGVYID0gcGV0YWw7XG4gICAgICBCY2lyY2xlU2l6ZSA9IEFjaXJjbGVTaXplICogNjtcbiAgICAgIGZsb3dlclgxID0gY2FudmFzU2l6ZSAvIDE1LjE7XG4gICAgICBmbG93ZXJZMSA9IGNhbnZhc1NpemUgLyA5O1xuICAgICAgZmxvd2VyWTIgPSBjYW52YXNTaXplIC8gNS41O1xuICAgICAgZmxvd2VyQ2lyY2xlID0gY2FudmFzU2l6ZSAvIDMuODtcbiAgICAgIENDaXJjbGVZID0gY2FudmFzU2l6ZSAvIDEwO1xuICAgICAgQ0NpcmNsZVdIID0gY2FudmFzU2l6ZSAvIDIwO1xuICAgICAgRENpcmNsZVdIID0gY2FudmFzU2l6ZSAvIDE1O1xuICAgICAgRUNpcmNsZUhXID0gY2FudmFzU2l6ZSAvIDIuODtcblxuICAgICAgQ3RyaWFuZ2xleDEgPSBBdHJpYW5nbGV4MSAqIDIuODtcbiAgICAgIEN0cmlhbmdsZXkxID0gQXRyaWFuZ2xleTEgKiAyLjg7XG4gICAgICBDdHJpYW5nbGV5MiA9IGNhbnZhc1NpemUgLyA0LjU7XG4gICAgICBvdXRlclRyaXBsZUNpcmNsZXNCaWdYID0gY2FudmFzU2l6ZSAvIDQuOTtcbiAgICAgIG91dGVyVHJpcGxlQ2lyY2xlc0JpZ0MgPSBjYW52YXNTaXplIC8gMjU7XG4gICAgICBvdXRlclRyaXBsZUNpcmNsZXNNaWRTbWxYICA9IGNhbnZhc1NpemUgLyA1LjY7XG4gICAgICBvdXRlclRyaXBsZUNpcmxjZXNNaWRDID0gY2FudmFzU2l6ZSAvIDI2O1xuICAgICAgb3V0ZXJUcmlwbGVDaXJjbGVzU21sQyA9IGNhbnZhc1NpemUgLyA0MDtcbiAgICAgIGJpZ0NpcmNsZUMgPSBjYW52YXNTaXplIC8gMy41O1xuXG4gICAgICB0cmlhbmdsZXgxID0gY2FudmFzU2l6ZSAvIDM7XG4gICAgICB0cmlhbmdsZXkxID0gY2FudmFzU2l6ZSAvIDIwO1xuICAgICAgdHJpYW5nbGV4MyA9IGNhbnZhc1NpemUgLyAxMDtcblxuICAgICAgd2F0ZXJEcm9wbGV0WTIgPSBjYW52YXNTaXplIC8gMztcbiAgICAgIHdhdGVyRHJvcGxldFkxID0gY2FudmFzU2l6ZSAvIDQ7XG4gICAgICB3YXRlckRyb3BsZXRYMiA9IGNhbnZhc1NpemUgLyAxMjtcbiAgICAgIHdhdGVyRHJvcGxldENpcmNsZUMgPSBjYW52YXNTaXplIC8gMTIwO1xuICAgICAgd2F0ZXJEcm9wbGV0Q2lyY2xlWSA9IGNhbnZhc1NpemUgLyAzLjQ1O1xuICAgICAgd2F0ZXJEcm9wbGV0TGl0dGxlWTIgPSBjYW52YXNTaXplIC8gNC41O1xuICAgICAgd2F0ZXJEcm9wbGV0TGl0dGxlWTEgPSBjYW52YXNTaXplIC8gMy44O1xuICAgICAgd2F0ZXJEcm9wbGV0TGl0dGxlWDIgPSBjYW52YXNTaXplIC8gMjk7XG5cbiAgICAgIGN1cnZlID0gY2FudmFzU2l6ZSAvIDU7XG4gICAgICBjdXJ2ZVBvaW50WCA9IGNhbnZhc1NpemUgLyAyLjQ7XG4gICAgICBjdXJ2ZVBvaW50WSA9IGNhbnZhc1NpemUgLyA4O1xuICAgICAgYmlnZ2VzdENpcmNsZSA9IGNhbnZhc1NpemUgLyAyLjI1O1xuICAgICAgbmVhcmx5QmlnZ2VzdENpcmNsZSA9IGNhbnZhc1NpemUgLyAyLjg7XG5cbiAgICAgIGNpcmNsZUluQ3VydmVkVHJpYW5nbGVzID0gY2FudmFzU2l6ZSAvIDQwXG4gICAgICBzbWFsbEN1cnZlZFRyaWFuZ2xlU3RhcnRQb2ludCA9IGNhbnZhc1NpemUgLyAyMDtcbiAgICAgIHNtYWxsQ3VydmVkVHJpYW5nbGVzbWFsbGVzdENvbnRyb2xQb2ludCA9IGNhbnZhc1NpemUgLyAyOTtcbiAgICAgIHNtYWxsQ3VydmVkVHJpYW5nbGVIZWlnaHQgPSBjYW52YXNTaXplIC8gMi44O1xuICAgICAgc21hbGxDdXJ2ZWRUcmlhbmdsZUhpZ2hlc3RIZWlnaHQgPSBjYW52YXNTaXplIC8gMi4yNjtcblxuXG4gICAgfVxuXG4gICAgLy8gc2V0dXBcbiAgICBwLnNldHVwID0gKCkgPT4ge1xuICAgICAgcC5jcmVhdGVDYW52YXMoY2FudmFzU2l6ZSwgY2FudmFzU2l6ZSkucGFyZW50KCdmb3Jlc3QtbWFuZGFsYScpO1xuICAgICAgY29uc29sZS5sb2coJ3NldHVwJywgY2FudmFzU2l6ZSlcbiAgICAgIHAuYW5nbGVNb2RlKHAuREVHUkVFUyk7XG4gICAgICBjYWxjdWxhdGVTaXplcygpO1xuICAgIH07XG4gICAgcC5jZW50ZXIgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIC8vIGxldHMgYWN0dWFsbHkgZHJhdyBzb21ldGhpbmcgbm93LlxuICAgIHAuZHJhdyA9ICgpID0+IHtcbiAgICAgIHAuYmFja2dyb3VuZCgyNTUsIDI1NSwgMjU1KTtcbiAgICAgIHAuY2VudGVyLnggPSBwLndpZHRoIC8gMjtcbiAgICAgIHAuY2VudGVyLnkgPSBwLmhlaWdodCAvIDI7XG5cbiAgICAgIC8vIE91dGVyIGZsb3dlciBzaGFwZVxuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLmZpbGwocC5jb2xvcih0aGlzLl9wWyc2MDAnXSkpO1xuICAgICAgICBwLnN0cm9rZShwLmNvbG9yKHRoaXMuX3BbJzYwMCddKSk7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgKiA2MCkgLyAtMyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICBwLmJlZ2luU2hhcGUoKTtcbiAgICAgICAgICBwLmN1cnZlKGN1cnZlLCBjdXJ2ZSwgLWN1cnZlUG9pbnRZLCAtY3VydmVQb2ludFgsIGN1cnZlUG9pbnRZLCAtY3VydmVQb2ludFgsIC1jdXJ2ZSwgY3VydmUpO1xuICAgICAgICAgIHAucm90YXRlKDMwKVxuICAgICAgICAgIHAuZW5kU2hhcGUoKTtcbiAgICAgICAgfVxuICAgICAgcC5wb3AoKTtcblxuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5maWxsKHAuY29sb3IodGhpcy5fcFtcIjEwMFwiXSkpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gNSkgKiAxKSArIC4yKTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAqIDYwKSAvIDMpO1xuICAgICAgICBwLmNpcmNsZSgwLCAwLCBiaWdnZXN0Q2lyY2xlKTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIEN1cnZlZCB0cmlhbmdsZXNcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcblxuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICAgIHAuYmVnaW5TaGFwZSgpO1xuICAgICAgICAgIHAuZmlsbCh0aGlzLl9wW1wiNTAwXCJdKTtcbiAgICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyA1KSAqIDEpICsgLjIpO1xuICAgICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgKiA2MCkgLyAzKTtcbiAgICAgICAgICBwLnZlcnRleCgtc21hbGxDdXJ2ZWRUcmlhbmdsZVN0YXJ0UG9pbnQsIC1zbWFsbEN1cnZlZFRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICBwLmJlemllclZlcnRleCgtc21hbGxDdXJ2ZWRUcmlhbmdsZVN0YXJ0UG9pbnQsIC1zbWFsbEN1cnZlZFRyaWFuZ2xlSGVpZ2h0LCAtc21hbGxDdXJ2ZWRUcmlhbmdsZXNtYWxsZXN0Q29udHJvbFBvaW50LCAtc21hbGxDdXJ2ZWRUcmlhbmdsZUhlaWdodCwgMCwgLXNtYWxsQ3VydmVkVHJpYW5nbGVIaWdoZXN0SGVpZ2h0KTtcbiAgICAgICAgICBwLmJlemllclZlcnRleCgwLCAtc21hbGxDdXJ2ZWRUcmlhbmdsZUhpZ2hlc3RIZWlnaHQsIHNtYWxsQ3VydmVkVHJpYW5nbGVzbWFsbGVzdENvbnRyb2xQb2ludCwgLXNtYWxsQ3VydmVkVHJpYW5nbGVIZWlnaHQsIHNtYWxsQ3VydmVkVHJpYW5nbGVTdGFydFBvaW50LCAtc21hbGxDdXJ2ZWRUcmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgcC52ZXJ0ZXgoc21hbGxDdXJ2ZWRUcmlhbmdsZVN0YXJ0UG9pbnQsIC1zbWFsbEN1cnZlZFRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICBwLmVuZFNoYXBlKHAuQ0xPU0UpO1xuICAgICAgICAgIHAucm90YXRlKDE1KTtcbiAgICAgICAgfVxuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gVGhlIGNpcmNsZXMgaW4gdGhlIHRyaWFuZ2xlc1xuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAuZmlsbCh0aGlzLl9oW1wiMTAwXCJdKTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50KSAqIDEpICsgLjUpO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50ICogNDApKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgcC5jaXJjbGUoMCwgLXNtYWxsQ3VydmVkVHJpYW5nbGVIZWlnaHQsIGNpcmNsZUluQ3VydmVkVHJpYW5nbGVzKTtcbiAgICAgICAgICBwLnJvdGF0ZSgxNSk7XG4gICAgICAgIH1cbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIGJpZyBibHVlIGNpcmNsZVxuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAuZmlsbChwLmNvbG9yKHRoaXMuX3NbXCI1MDBcIl0pKTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50KSAqIDEpICsgLjIpO1xuICAgICAgICBwLmNpcmNsZSgwLCAwLCBuZWFybHlCaWdnZXN0Q2lyY2xlKTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIGJpZyBibHVlIGNpcmNsZVxuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICBwLmZpbGwocC5jb2xvcih0aGlzLl9zW1wiMzAwXCJdKSk7XG4gICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQpICogMSkgKyAuMik7XG4gICAgICBwLmNpcmNsZSgwLCAwLCBiaWdDaXJjbGVDKTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIGxvbmcgc2tpbm55IGxvdHMgb2YgIHRyaWFuZ2xlc1xuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAuZmlsbCh0aGlzLl9oW1wiMjAwXCJdKTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAqIDMwKSk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDIpICogMS42KSArIC4yKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIHAudHJpYW5nbGUoLXRyaWFuZ2xleDEsIHRyaWFuZ2xleTEsIC10cmlhbmdsZXgxLCAtdHJpYW5nbGV5MSwgLXRyaWFuZ2xleDMsIDApO1xuICAgICAgICAgICAgcC5yb3RhdGUoMzApO1xuICAgICAgICAgIH1cbiAgICAgICAgLy8gd2F0ZXIgZHJvcGxldHNcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLmJlZ2luU2hhcGUoKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIHAuZmlsbCh0aGlzLl9zW1wiNjAwXCJdKTtcbiAgICAgICAgICAgIHAuYmV6aWVyKDAsIC13YXRlckRyb3BsZXRZMSwgLXdhdGVyRHJvcGxldFgyLCAtd2F0ZXJEcm9wbGV0WTIsIHdhdGVyRHJvcGxldFgyLCAtd2F0ZXJEcm9wbGV0WTIsIDAsIC13YXRlckRyb3BsZXRZMSk7XG4gICAgICAgICAgICBwLmZpbGwodGhpcy5fc1tcIjIwMFwiXSk7XG4gICAgICAgICAgICBwLmNpcmNsZSgwLCAtd2F0ZXJEcm9wbGV0Q2lyY2xlWSwgd2F0ZXJEcm9wbGV0Q2lyY2xlQyk7XG4gICAgICAgICAgICBwLnJvdGF0ZSgzMCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgcC5lbmRTaGFwZSgpO1xuICAgICAgcC5wb3AoKTtcblxuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLmZpbGwodGhpcy5fcFtcIjIwMFwiXSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDUpICogMS42KSArIC4yKTtcbiAgICAgICAgcC5iZWdpblNoYXBlKCk7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgKiAtNDApKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICAgICAgcC5iZXppZXIoMCwgLXdhdGVyRHJvcGxldExpdHRsZVkyLCAtd2F0ZXJEcm9wbGV0TGl0dGxlWDIsIC13YXRlckRyb3BsZXRMaXR0bGVZMSwgd2F0ZXJEcm9wbGV0TGl0dGxlWDIsIC13YXRlckRyb3BsZXRMaXR0bGVZMSwgMCwgLXdhdGVyRHJvcGxldExpdHRsZVkyKTtcbiAgICAgICAgfTtcbiAgICAgICAgICBwLmVuZFNoYXBlKCk7XG4gICAgICAgIHAucG9wKCk7XG5cbiAgICAgICAgcC5wdXNoKCk7XG4gICAgICAgICAgcC5iZWdpblNoYXBlKCk7XG4gICAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAqIDQwKSk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgICAgICAgIHAuYmV6aWVyKDAsIC13YXRlckRyb3BsZXRMaXR0bGVZMiwgLXdhdGVyRHJvcGxldExpdHRsZVgyLCAtd2F0ZXJEcm9wbGV0TGl0dGxlWTEsIHdhdGVyRHJvcGxldExpdHRsZVgyLCAtd2F0ZXJEcm9wbGV0TGl0dGxlWTEsIDAsIC13YXRlckRyb3BsZXRMaXR0bGVZMik7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBwLmVuZFNoYXBlKCk7XG4gICAgICAgIHAucG9wKCk7XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBvdXRlciB0cmlwbGUgY2lyY2xlc1xuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgKiAtMjApKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBwLmZpbGwodGhpcy5fcFtcIjUwMFwiXSk7XG4gICAgICAgICAgICBwLmNpcmNsZShvdXRlclRyaXBsZUNpcmNsZXNCaWdYLCAwLCBvdXRlclRyaXBsZUNpcmNsZXNCaWdDKTtcbiAgICAgICAgICAgIHAuZmlsbCh0aGlzLl9wW1wiMzAwXCJdKTtcbiAgICAgICAgICAgIHAuY2lyY2xlKG91dGVyVHJpcGxlQ2lyY2xlc01pZFNtbFgsIDAsIG91dGVyVHJpcGxlQ2lybGNlc01pZEMpO1xuICAgICAgICAgICAgcC5maWxsKHRoaXMuX3BbXCIxMDBcIl0pO1xuICAgICAgICAgICAgcC5jaXJjbGUob3V0ZXJUcmlwbGVDaXJjbGVzTWlkU21sWCwgMCwgb3V0ZXJUcmlwbGVDaXJjbGVzU21sQyk7XG4gICAgICAgICAgICBwLnJvdGF0ZSgzMCk7XG4gICAgICAgICAgfTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIEN0cmlhbmdsZVxuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAuZmlsbCh0aGlzLl9wW1wiNDAwXCJdKTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAvIDQpICogNTApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgIHAudHJpYW5nbGUoQ3RyaWFuZ2xleDEsIC1DdHJpYW5nbGV5MSwgLUN0cmlhbmdsZXgxLCAtQ3RyaWFuZ2xleTEsIDAsIC1DdHJpYW5nbGV5MilcbiAgICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICAgIH1cbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIGZsb3dlckFcbiAgICAgIHAucHVzaCgpO1xuICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICBwLmZpbGwocC5jb2xvcih0aGlzLl9zW1wiNzAwXCJdKSk7XG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgICAgcC5lbGxpcHNlKDAsIDAsIGZsb3dlckNpcmNsZSwgZmxvd2VyQ2lyY2xlKTtcbiAgICAgICAgcC5wb3AoKTtcbiAgICAgICAgcC5wdXNoKCk7XG4gICAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gMikgKiAxLjYpICsgLjIpO1xuICAgICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgKiAtNTApKTtcbiAgICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIHAuYmVnaW5TaGFwZSgpO1xuICAgICAgICAgICAgcC52ZXJ0ZXgoLWZsb3dlclgxLCAtZmxvd2VyWTEpO1xuICAgICAgICAgICAgcC5iZXppZXJWZXJ0ZXgoLWZsb3dlclgxLCAtZmxvd2VyWTIsIDAsIC1mbG93ZXJZMSwgMCwgLWZsb3dlclkyKTtcbiAgICAgICAgICAgIHAuYmV6aWVyVmVydGV4KDAsIC1mbG93ZXJZMSwgZmxvd2VyWDEsIC1mbG93ZXJZMiwgZmxvd2VyWDEsIC1mbG93ZXJZMSk7XG4gICAgICAgICAgICBwLmVuZFNoYXBlKCk7XG4gICAgICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICAgICAgfVxuICAgICAgICBwLnBvcCgpO1xuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gb3V0ZXIgdHJpcGxlIGNpcmNsZXNcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyAyKSAqIC41KSArIDEpO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50IC8gNCkgKiAtNTApO1xuICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gNSkgKiAxLjUpICsgMSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgIHAuZmlsbCh0aGlzLl9wW1wiNDAwXCJdKTtcbiAgICAgICAgICBwLmNpcmNsZShvdXRlclRyaXBsZUNpcmNsZXNCaWdYLCAwLCBvdXRlclRyaXBsZUNpcmNsZXNCaWdDIC8gNCk7XG4gICAgICAgICAgcC5yb3RhdGUoMzApO1xuICAgICAgICB9O1xuICAgICAgcC5wb3AoKTtcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICBwLmZpbGwodGhpcy5fcFtcIjUwMFwiXSk7XG4gICAgICAgICAgcC5jaXJjbGUob3V0ZXJUcmlwbGVDaXJjbGVzTWlkU21sWCwgMCwgb3V0ZXJUcmlwbGVDaXJsY2VzTWlkQyAvIDQpO1xuICAgICAgICAgIHAuZmlsbCh0aGlzLl9wW1wiMzAwXCJdKTtcbiAgICAgICAgICBwLmNpcmNsZShvdXRlclRyaXBsZUNpcmNsZXNNaWRTbWxYLCAwLCBvdXRlclRyaXBsZUNpcmNsZXNTbWxDIC8gNCk7XG4gICAgICAgICAgcC5yb3RhdGUoMzApO1xuICAgICAgICB9O1xuICAgICAgICBwLnBvcCgpO1xuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gQ3RyaWFuZ2xlXG4gICAgICBwLnB1c2goKTtcbiAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgcC5maWxsKHRoaXMuX3BbXCI2MDBcIl0pO1xuICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAvIDQpICogNTApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgcC50cmlhbmdsZShDdHJpYW5nbGV4MSwgLUN0cmlhbmdsZXkxLCAtQ3RyaWFuZ2xleDEsIC1DdHJpYW5nbGV5MSwgMCwgLUN0cmlhbmdsZXkyKVxuICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICB9XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBFQ2lyY2xlXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5maWxsKHAuY29sb3IodGhpcy5fcFtcIjIwMFwiXSkpO1xuICAgICAgICBwLmVsbGlwc2UoMCwgMCwgRUNpcmNsZUhXLCBFQ2lyY2xlSFcpO1xuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gQ0NpcmNsZVxuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyAyKSAqIDEuMykgKyAuMik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgICAgICBwLmZpbGwocC5jb2xvcih0aGlzLl9zW1wiNDAwXCJdKSk7XG4gICAgICAgICAgICBwLmVsbGlwc2UoMCwgLUNDaXJjbGVZLCBEQ2lyY2xlV0gsIERDaXJjbGVXSCk7XG4gICAgICAgICAgICBwLmZpbGwocC5jb2xvcih0aGlzLl9zW1wiMzAwXCJdKSk7XG4gICAgICAgICAgICBwLmVsbGlwc2UoMCwgLUNDaXJjbGVZLCBDQ2lyY2xlV0gsIENDaXJjbGVXSCk7XG4gICAgICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICAgIH1cbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIEJjaXJjbGVzXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAuZmlsbCh0aGlzLl9wW1wiNTAwXCJdKTtcbiAgICAgICAgcC5zY2FsZSgxLjIpO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50ICogLTUwKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBwLmVsbGlwc2UoLUJjaXJjbGVYLCAwLCBCY2lyY2xlU2l6ZSwgQmNpcmNsZVNpemUpO1xuICAgICAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgICAgIH1cbiAgICAgIHAucG9wKCk7XG4gICAgICBwLnB1c2goKTtcbiAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgLyAzKSAqIDUwKTtcbiAgICAgIHAuZmlsbCh0aGlzLl9wW1wiMjAwXCJdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICBwLmVsbGlwc2UoLUJjaXJjbGVYLCAwLCBCY2lyY2xlU2l6ZSwgQmNpcmNsZVNpemUpO1xuICAgICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgICAgfVxuICAgICAgICBwLnBvcCgpO1xuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gQXRyaWFuZ2VcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLmZpbGwodGhpcy5fc1tcIjIwMFwiXSk7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgLyA0KSAqIDUwKTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gMSkgKiAxLjMpICsgLjUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgcC50cmlhbmdsZShBdHJpYW5nbGV4MSwgLUF0cmlhbmdsZXkxLCAtQXRyaWFuZ2xleDEsIC1BdHJpYW5nbGV5MSwgMCwgLUF0cmlhbmdsZXkyKVxuICAgICAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgICB9XG4gICAgICAgIHAuZmlsbCh0aGlzLl9zW1wiNDAwXCJdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICBwLnRyaWFuZ2xlKEF0cmlhbmdsZXgxLCAtQXRyaWFuZ2xleTEsIC1BdHJpYW5nbGV4MSwgLUF0cmlhbmdsZXkxLCAwLCAtQnRyaWFuZ2xleTEpXG4gICAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgICB9XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBBY2lyY2xlc1xuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAuZmlsbCh0aGlzLl9oW1wiMzAwXCJdKTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAvIDEpICogLTUwKTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gMikgKiAxLjMpICsgLjUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgIHAuZWxsaXBzZSgtQWNpcmNsZVgsIDAsIEFjaXJjbGVTaXplLCBBY2lyY2xlU2l6ZSk7XG4gICAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgICB9XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBjaXJjbGUgZnJhbWluZyB0aGUgZmxvd2VyIG9mIGxpZmVcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLmZpbGwodGhpcy5fcFtcIjIwMFwiXSk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDMpICogMS4zKSArIC41KTtcbiAgICAgICAgcC5lbGxpcHNlKDAsIDAsIHBldGFsICogMiAsIHBldGFsICogMik7XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBmbG93ZXIgb2YgbGlmZVxuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLnN0cm9rZVdlaWdodCgwLjEpO1xuICAgICAgICBwLnN0cm9rZSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICAgICAgcC5maWxsKHAuY29sb3IodGhpcy5fcFtcIjYwMFwiXSkpO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyA0KSAqIC41KSArIC41KTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAvIDQpICogLTUwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICBwLmN1cnZlKHBldGFsLCAwLCAwLCAwLCAwLCBwZXRhbCwgcGV0YWwsIHBldGFsKTtcbiAgICAgICAgICBwLmN1cnZlKC1wZXRhbCwgMCwgMCwgMCwgMCwgcGV0YWwsIC1wZXRhbCwgcGV0YWwpO1xuICAgICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgICAgfVxuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50IC8gNCkgKiAtNTApO1xuICAgICAgcC5wb3AoKTtcblxuICAgIH07XG4gIH07XG59XG4iXX0=