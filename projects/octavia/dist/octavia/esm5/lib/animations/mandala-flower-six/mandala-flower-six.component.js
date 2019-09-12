"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sketch = require("p5");
var colors_enum_1 = require("../../styles/colors.enum");
var MandalaFlowerSixComponent = /** @class */ (function () {
    function MandalaFlowerSixComponent() {
        var _this = this;
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
        this._getColors(colors_enum_1.ColorsEnum, this.primaryColor, this.secondaryColor, this.highlightColor);
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
        this._sketch = new sketch(this.mandala);
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
        { type: core_1.Component, args: [{
                    selector: 'Oct-mandala-flower-six',
                    template: "<div\n    class=\"Oct-mandala-flower-six__animation-container\">\n    <div id=\"forest-mandala\"></div>\n</div>\n",
                    styles: ["Oct-mandala-flower-six:host{display:block}.Oct-mandala-flower-six__animation-container ::ng-deep .p5Canvas{border-radius:100%;width:100%!important;height:100%!important;display:block;margin-left:auto;margin-right:auto}"]
                }] }
    ];
    MandalaFlowerSixComponent.propDecorators = {
        isAnimated: [{ type: core_1.Input }],
        primaryColor: [{ type: core_1.Input }],
        secondaryColor: [{ type: core_1.Input }],
        highlightColor: [{ type: core_1.Input }]
    };
    return MandalaFlowerSixComponent;
}());
exports.MandalaFlowerSixComponent = MandalaFlowerSixComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZGFsYS1mbG93ZXItc2l4LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29jdGF2aWEvIiwic291cmNlcyI6WyJsaWIvYW5pbWF0aW9ucy9tYW5kYWxhLWZsb3dlci1zaXgvbWFuZGFsYS1mbG93ZXItc2l4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FPdUI7QUFDdkIsMkJBQTZCO0FBRTdCLHdEQUFzRDtBQUd0RDtJQUFBO1FBQUEsaUJBa2RDO1FBdGNVLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIsaUJBQVksR0FBRyxPQUFPLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxNQUFNLENBQUM7UUFDeEIsbUJBQWMsR0FBRyxNQUFNLENBQUM7UUEwQzFCLFlBQU87Ozs7UUFBRyxVQUFDLENBQU07O2dCQUVsQixVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVU7OztnQkFHOUIsS0FBVTs7Z0JBQ1YsUUFBYTs7Z0JBQUUsUUFBYTs7Z0JBQUUsUUFBYTs7Z0JBQUUsWUFBaUI7O2dCQUM5RCxXQUFnQjs7Z0JBQUUsV0FBZ0I7O2dCQUFFLFdBQWdCOztnQkFBRSxXQUFnQjs7Z0JBQ3RFLFdBQWdCOztnQkFBRSxXQUFnQjs7Z0JBQUUsV0FBZ0I7O2dCQUNwRCxXQUFnQjs7Z0JBQUUsUUFBYTs7Z0JBQy9CLFFBQWE7O2dCQUFFLFdBQWdCOztnQkFDL0IsU0FBYzs7Z0JBQUUsUUFBYTs7Z0JBQUUsU0FBYzs7Z0JBQzdDLFNBQWM7O2dCQUNkLHNCQUEyQjs7Z0JBQUUsc0JBQTJCOztnQkFBRSxzQkFBMkI7O2dCQUFFLHlCQUE4Qjs7Z0JBQUUsc0JBQTJCOztnQkFDbEosVUFBZTs7Z0JBQ2YsVUFBZTs7Z0JBQUUsVUFBZTs7Z0JBQUUsVUFBZTs7Z0JBQ2pELGNBQW1COztnQkFBRSxjQUFtQjs7Z0JBQUUsY0FBbUI7O2dCQUM3RCxtQkFBd0I7O2dCQUFHLG1CQUF3Qjs7Z0JBQ25ELG9CQUF5Qjs7Z0JBQUUsb0JBQXlCOztn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TUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzdDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzFCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2xELENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ2Q7Z0JBQ0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRVYsQ0FBQyxDQUFBLENBQUM7UUFDSixDQUFDLEVBQUM7SUFDSixDQUFDOzs7O0lBaGNRLDRDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDOzs7OztJQUVNLCtDQUFXOzs7O0lBQWxCLFVBQW1CLE9BQXNCO1FBQ3ZDLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7SUFFTSwrQ0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU8sZ0RBQVk7Ozs7SUFBcEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTTtTQUNQO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTyxpREFBYTs7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRU8sbURBQWU7Ozs7O0lBQXZCLFVBQXdCLEdBQVk7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNuRDtRQUNELE9BQU87SUFDVCxDQUFDOzs7Ozs7Ozs7SUFFTyw4Q0FBVTs7Ozs7Ozs7SUFBbEIsVUFBbUIsR0FBUSxFQUFFLE9BQVksRUFBRSxTQUFjLEVBQUUsU0FBYztRQUN2RSxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkF4REYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyw2SEFBa0Q7O2lCQUVuRDs7OzZCQVFFLFlBQUs7K0JBRUwsWUFBSztpQ0FDTCxZQUFLO2lDQUNMLFlBQUs7O0lBa2NSLGdDQUFDO0NBQUEsQUFsZEQsSUFrZEM7QUE3Y1ksOERBQXlCOzs7Ozs7SUFFcEMsNENBQXFCOzs7OztJQUNyQix1Q0FBZ0I7Ozs7O0lBQ2hCLHVDQUFnQjs7Ozs7SUFDaEIsdUNBQWdCOztJQUVoQiwrQ0FBMkI7O0lBRTNCLGlEQUFnQzs7SUFDaEMsbURBQWlDOztJQUNqQyxtREFBaUM7O0lBMENqQyw0Q0F1WkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgc2tldGNoIGZyb20gJ3A1JztcblxuaW1wb3J0IHsgQ29sb3JzRW51bSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvY29sb3JzLmVudW1cIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdPY3QtbWFuZGFsYS1mbG93ZXItc2l4JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hbmRhbGEtZmxvd2VyLXNpeC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hbmRhbGEtZmxvd2VyLXNpeC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hbmRhbGFGbG93ZXJTaXhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuICBwcml2YXRlIF9za2V0Y2g6IGFueTtcbiAgcHJpdmF0ZSBfcDogYW55O1xuICBwcml2YXRlIF9zOiBhbnk7XG4gIHByaXZhdGUgX2g6IGFueTtcblxuICBASW5wdXQoKSBpc0FuaW1hdGVkID0gdHJ1ZTtcblxuICBASW5wdXQoKSBwcmltYXJ5Q29sb3IgPSBcImdyZWVuXCI7XG4gIEBJbnB1dCgpIHNlY29uZGFyeUNvbG9yID0gXCJibHVlXCI7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodENvbG9yID0gXCJwaW5rXCI7XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2dldENvbG9ycyhDb2xvcnNFbnVtLCB0aGlzLnByaW1hcnlDb2xvciwgdGhpcy5zZWNvbmRhcnlDb2xvciwgdGhpcy5oaWdobGlnaHRDb2xvcik7XG4gICAgdGhpcy5jcmVhdGVDYW52YXMoKVxuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5pc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLmNoZWNrSXNBbmltYXRlZCh0aGlzLmlzQW5pbWF0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3lDYW52YXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ2FudmFzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NrZXRjaCA9IG5ldyBza2V0Y2godGhpcy5tYW5kYWxhKTtcbiAgICBpZiAodGhpcy5pc0FuaW1hdGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5jaGVja0lzQW5pbWF0ZWQodGhpcy5pc0FuaW1hdGVkKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUNhbnZhcygpOiB2b2lkIHtcbiAgICB0aGlzLl9za2V0Y2gubm9DYW52YXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tJc0FuaW1hdGVkKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9za2V0Y2gpIHtcbiAgICAgIHZhbCA/IHRoaXMuX3NrZXRjaC5sb29wKCkgOiB0aGlzLl9za2V0Y2gubm9Mb29wKCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENvbG9ycyhvYmo6IGFueSwgcHJpbWFyeTogYW55LCBzZWNvbmRhcnk6IGFueSwgaGlnaGxpZ2h0OiBhbnkpIHtcbiAgICB0aGlzLl9wID0gb2JqW3ByaW1hcnldWzBdO1xuICAgIHRoaXMuX3MgPSBvYmpbc2Vjb25kYXJ5XVswXTtcbiAgICB0aGlzLl9oID0gb2JqW2hpZ2hsaWdodF1bMF07XG4gIH1cblxuICBwdWJsaWMgbWFuZGFsYSA9IChwOiBhbnkpID0+IHtcblxuICAgIGxldCBjYW52YXNTaXplID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgLy8gbWFuZGFsYSBvYmplY3RzXG4gICAgbGV0IHBldGFsOiBhbnk7XG4gICAgbGV0IGZsb3dlclgxOiBhbnksIGZsb3dlclkxOiBhbnksIGZsb3dlclkyOiBhbnksIGZsb3dlckNpcmNsZTogYW55O1xuICAgIGxldCBBdHJpYW5nbGV4MTogYW55LCBBdHJpYW5nbGV5MTogYW55LCBBdHJpYW5nbGV5MjogYW55LCBCdHJpYW5nbGV5MTogYW55O1xuICAgIGxldCBDdHJpYW5nbGV4MTogYW55LCBDdHJpYW5nbGV5MTogYW55LCBDdHJpYW5nbGV5MjogYW55O1xuICAgIGxldCBBY2lyY2xlU2l6ZTogYW55LCBBY2lyY2xlWDogYW55O1xuICAgIGxldCBCY2lyY2xlWDogYW55LCBCY2lyY2xlU2l6ZTogYW55O1xuICAgIGxldCBDQ2lyY2xlV0g6IGFueSwgQ0NpcmNsZVk6IGFueSwgRENpcmNsZVdIOiBhbnk7XG4gICAgbGV0IEVDaXJjbGVIVzogYW55O1xuICAgIGxldCBvdXRlclRyaXBsZUNpcmNsZXNCaWdYOiBhbnksIG91dGVyVHJpcGxlQ2lyY2xlc0JpZ0M6IGFueSwgb3V0ZXJUcmlwbGVDaXJsY2VzTWlkQzogYW55LCBvdXRlclRyaXBsZUNpcmNsZXNNaWRTbWxYOiBhbnksIG91dGVyVHJpcGxlQ2lyY2xlc1NtbEM6IGFueTtcbiAgICBsZXQgYmlnQ2lyY2xlQzogYW55O1xuICAgIGxldCB0cmlhbmdsZXgxOiBhbnksIHRyaWFuZ2xleTE6IGFueSwgdHJpYW5nbGV4MzogYW55O1xuICAgIGxldCB3YXRlckRyb3BsZXRZMjogYW55LCB3YXRlckRyb3BsZXRZMTogYW55LCB3YXRlckRyb3BsZXRYMjogYW55O1xuICAgIGxldCB3YXRlckRyb3BsZXRDaXJjbGVDOiBhbnksICB3YXRlckRyb3BsZXRDaXJjbGVZOiBhbnk7XG4gICAgbGV0IHdhdGVyRHJvcGxldExpdHRsZVkyOiBhbnksIHdhdGVyRHJvcGxldExpdHRsZVkxOiBhbnksIHdhdGVyRHJvcGxldExpdHRsZVgyOiBhbnk7XG4gICAgbGV0IGN1cnZlOiBhbnksIGN1cnZlUG9pbnRYOiBhbnksIGN1cnZlUG9pbnRZOiBhbnk7XG4gICAgbGV0IGJpZ2dlc3RDaXJjbGU6IGFueSwgbmVhcmx5QmlnZ2VzdENpcmNsZTogYW55O1xuICAgIGxldCBjaXJjbGVJbkN1cnZlZFRyaWFuZ2xlczogYW55LCBzbWFsbEN1cnZlZFRyaWFuZ2xlU3RhcnRQb2ludDogYW55LCBzbWFsbEN1cnZlZFRyaWFuZ2xlc21hbGxlc3RDb250cm9sUG9pbnQ6IGFueSwgc21hbGxDdXJ2ZWRUcmlhbmdsZUhlaWdodDogYW55LCBzbWFsbEN1cnZlZFRyaWFuZ2xlSGlnaGVzdEhlaWdodDogYW55O1xuXG4gICAgLy8gc2V0dXAgdmFyc1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVNpemVzKCkge1xuXG4gICAgICBwZXRhbCA9IGNhbnZhc1NpemUgLyAxNjtcbiAgICAgIEF0cmlhbmdsZXgxID0gY2FudmFzU2l6ZSAvIDMzO1xuICAgICAgQXRyaWFuZ2xleTEgPSBjYW52YXNTaXplIC8gMTg7XG4gICAgICBBdHJpYW5nbGV5MiA9IGNhbnZhc1NpemUgLyA5O1xuICAgICAgQnRyaWFuZ2xleTEgPSBjYW52YXNTaXplIC8gMTE7XG4gICAgICBBY2lyY2xlU2l6ZSA9IGNhbnZhc1NpemUgLyA2MztcbiAgICAgIEFjaXJjbGVYID0gQmNpcmNsZVggPSBwZXRhbDtcbiAgICAgIEJjaXJjbGVTaXplID0gQWNpcmNsZVNpemUgKiA2O1xuICAgICAgZmxvd2VyWDEgPSBjYW52YXNTaXplIC8gMTUuMTtcbiAgICAgIGZsb3dlclkxID0gY2FudmFzU2l6ZSAvIDk7XG4gICAgICBmbG93ZXJZMiA9IGNhbnZhc1NpemUgLyA1LjU7XG4gICAgICBmbG93ZXJDaXJjbGUgPSBjYW52YXNTaXplIC8gMy44O1xuICAgICAgQ0NpcmNsZVkgPSBjYW52YXNTaXplIC8gMTA7XG4gICAgICBDQ2lyY2xlV0ggPSBjYW52YXNTaXplIC8gMjA7XG4gICAgICBEQ2lyY2xlV0ggPSBjYW52YXNTaXplIC8gMTU7XG4gICAgICBFQ2lyY2xlSFcgPSBjYW52YXNTaXplIC8gMi44O1xuXG4gICAgICBDdHJpYW5nbGV4MSA9IEF0cmlhbmdsZXgxICogMi44O1xuICAgICAgQ3RyaWFuZ2xleTEgPSBBdHJpYW5nbGV5MSAqIDIuODtcbiAgICAgIEN0cmlhbmdsZXkyID0gY2FudmFzU2l6ZSAvIDQuNTtcbiAgICAgIG91dGVyVHJpcGxlQ2lyY2xlc0JpZ1ggPSBjYW52YXNTaXplIC8gNC45O1xuICAgICAgb3V0ZXJUcmlwbGVDaXJjbGVzQmlnQyA9IGNhbnZhc1NpemUgLyAyNTtcbiAgICAgIG91dGVyVHJpcGxlQ2lyY2xlc01pZFNtbFggID0gY2FudmFzU2l6ZSAvIDUuNjtcbiAgICAgIG91dGVyVHJpcGxlQ2lybGNlc01pZEMgPSBjYW52YXNTaXplIC8gMjY7XG4gICAgICBvdXRlclRyaXBsZUNpcmNsZXNTbWxDID0gY2FudmFzU2l6ZSAvIDQwO1xuICAgICAgYmlnQ2lyY2xlQyA9IGNhbnZhc1NpemUgLyAzLjU7XG5cbiAgICAgIHRyaWFuZ2xleDEgPSBjYW52YXNTaXplIC8gMztcbiAgICAgIHRyaWFuZ2xleTEgPSBjYW52YXNTaXplIC8gMjA7XG4gICAgICB0cmlhbmdsZXgzID0gY2FudmFzU2l6ZSAvIDEwO1xuXG4gICAgICB3YXRlckRyb3BsZXRZMiA9IGNhbnZhc1NpemUgLyAzO1xuICAgICAgd2F0ZXJEcm9wbGV0WTEgPSBjYW52YXNTaXplIC8gNDtcbiAgICAgIHdhdGVyRHJvcGxldFgyID0gY2FudmFzU2l6ZSAvIDEyO1xuICAgICAgd2F0ZXJEcm9wbGV0Q2lyY2xlQyA9IGNhbnZhc1NpemUgLyAxMjA7XG4gICAgICB3YXRlckRyb3BsZXRDaXJjbGVZID0gY2FudmFzU2l6ZSAvIDMuNDU7XG4gICAgICB3YXRlckRyb3BsZXRMaXR0bGVZMiA9IGNhbnZhc1NpemUgLyA0LjU7XG4gICAgICB3YXRlckRyb3BsZXRMaXR0bGVZMSA9IGNhbnZhc1NpemUgLyAzLjg7XG4gICAgICB3YXRlckRyb3BsZXRMaXR0bGVYMiA9IGNhbnZhc1NpemUgLyAyOTtcblxuICAgICAgY3VydmUgPSBjYW52YXNTaXplIC8gNTtcbiAgICAgIGN1cnZlUG9pbnRYID0gY2FudmFzU2l6ZSAvIDIuNDtcbiAgICAgIGN1cnZlUG9pbnRZID0gY2FudmFzU2l6ZSAvIDg7XG4gICAgICBiaWdnZXN0Q2lyY2xlID0gY2FudmFzU2l6ZSAvIDIuMjU7XG4gICAgICBuZWFybHlCaWdnZXN0Q2lyY2xlID0gY2FudmFzU2l6ZSAvIDIuODtcblxuICAgICAgY2lyY2xlSW5DdXJ2ZWRUcmlhbmdsZXMgPSBjYW52YXNTaXplIC8gNDBcbiAgICAgIHNtYWxsQ3VydmVkVHJpYW5nbGVTdGFydFBvaW50ID0gY2FudmFzU2l6ZSAvIDIwO1xuICAgICAgc21hbGxDdXJ2ZWRUcmlhbmdsZXNtYWxsZXN0Q29udHJvbFBvaW50ID0gY2FudmFzU2l6ZSAvIDI5O1xuICAgICAgc21hbGxDdXJ2ZWRUcmlhbmdsZUhlaWdodCA9IGNhbnZhc1NpemUgLyAyLjg7XG4gICAgICBzbWFsbEN1cnZlZFRyaWFuZ2xlSGlnaGVzdEhlaWdodCA9IGNhbnZhc1NpemUgLyAyLjI2O1xuICAgIH1cblxuICAgIC8vIHNldHVwXG4gICAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAgIHAuY3JlYXRlQ2FudmFzKGNhbnZhc1NpemUsIGNhbnZhc1NpemUpLnBhcmVudCgnZm9yZXN0LW1hbmRhbGEnKTtcbiAgICAgIHAuYW5nbGVNb2RlKHAuREVHUkVFUyk7XG4gICAgICBjYWxjdWxhdGVTaXplcygpO1xuICAgIH07XG4gICAgcC5jZW50ZXIgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIC8vIGxldHMgYWN0dWFsbHkgZHJhdyBzb21ldGhpbmcgbm93LlxuICAgIHAuZHJhdyA9ICgpID0+IHtcblxuICAgICAgcC5iYWNrZ3JvdW5kKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgcC5jZW50ZXIueCA9IHAud2lkdGggLyAyO1xuICAgICAgcC5jZW50ZXIueSA9IHAuaGVpZ2h0IC8gMjtcblxuICAgICAgLy8gT3V0ZXIgZmxvd2VyIHNoYXBlXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAuZmlsbChwLmNvbG9yKHRoaXMuX3BbJzYwMCddKSk7XG4gICAgICAgIHAuc3Ryb2tlKHAuY29sb3IodGhpcy5fcFsnNjAwJ10pKTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAqIDYwKSAvIC0zKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgIHAuYmVnaW5TaGFwZSgpO1xuICAgICAgICAgIHAuY3VydmUoY3VydmUsIGN1cnZlLCAtY3VydmVQb2ludFksIC1jdXJ2ZVBvaW50WCwgY3VydmVQb2ludFksIC1jdXJ2ZVBvaW50WCwgLWN1cnZlLCBjdXJ2ZSk7XG4gICAgICAgICAgcC5yb3RhdGUoMzApXG4gICAgICAgICAgcC5lbmRTaGFwZSgpO1xuICAgICAgICB9XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLmZpbGwocC5jb2xvcih0aGlzLl9wW1wiMTAwXCJdKSk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyA1KSAqIDEpICsgLjIpO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50ICogNjApIC8gMyk7XG4gICAgICAgIHAuY2lyY2xlKDAsIDAsIGJpZ2dlc3RDaXJjbGUpO1xuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gQ3VydmVkIHRyaWFuZ2xlc1xuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuXG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgcC5iZWdpblNoYXBlKCk7XG4gICAgICAgICAgcC5maWxsKHRoaXMuX3BbXCI1MDBcIl0pO1xuICAgICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDUpICogMSkgKyAuMik7XG4gICAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAqIDYwKSAvIDMpO1xuICAgICAgICAgIHAudmVydGV4KC1zbWFsbEN1cnZlZFRyaWFuZ2xlU3RhcnRQb2ludCwgLXNtYWxsQ3VydmVkVHJpYW5nbGVIZWlnaHQpO1xuICAgICAgICAgIHAuYmV6aWVyVmVydGV4KC1zbWFsbEN1cnZlZFRyaWFuZ2xlU3RhcnRQb2ludCwgLXNtYWxsQ3VydmVkVHJpYW5nbGVIZWlnaHQsIC1zbWFsbEN1cnZlZFRyaWFuZ2xlc21hbGxlc3RDb250cm9sUG9pbnQsIC1zbWFsbEN1cnZlZFRyaWFuZ2xlSGVpZ2h0LCAwLCAtc21hbGxDdXJ2ZWRUcmlhbmdsZUhpZ2hlc3RIZWlnaHQpO1xuICAgICAgICAgIHAuYmV6aWVyVmVydGV4KDAsIC1zbWFsbEN1cnZlZFRyaWFuZ2xlSGlnaGVzdEhlaWdodCwgc21hbGxDdXJ2ZWRUcmlhbmdsZXNtYWxsZXN0Q29udHJvbFBvaW50LCAtc21hbGxDdXJ2ZWRUcmlhbmdsZUhlaWdodCwgc21hbGxDdXJ2ZWRUcmlhbmdsZVN0YXJ0UG9pbnQsIC1zbWFsbEN1cnZlZFRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICBwLnZlcnRleChzbWFsbEN1cnZlZFRyaWFuZ2xlU3RhcnRQb2ludCwgLXNtYWxsQ3VydmVkVHJpYW5nbGVIZWlnaHQpO1xuICAgICAgICAgIHAuZW5kU2hhcGUocC5DTE9TRSk7XG4gICAgICAgICAgcC5yb3RhdGUoMTUpO1xuICAgICAgICB9XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBUaGUgY2lyY2xlcyBpbiB0aGUgdHJpYW5nbGVzXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5maWxsKHRoaXMuX2hbXCIxMDBcIl0pO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQpICogMSkgKyAuNSk7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgKiA0MCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICBwLmNpcmNsZSgwLCAtc21hbGxDdXJ2ZWRUcmlhbmdsZUhlaWdodCwgY2lyY2xlSW5DdXJ2ZWRUcmlhbmdsZXMpO1xuICAgICAgICAgIHAucm90YXRlKDE1KTtcbiAgICAgICAgfVxuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gYmlnIGJsdWUgY2lyY2xlXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5maWxsKHAuY29sb3IodGhpcy5fc1tcIjUwMFwiXSkpO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQpICogMSkgKyAuMik7XG4gICAgICAgIHAuY2lyY2xlKDAsIDAsIG5lYXJseUJpZ2dlc3RDaXJjbGUpO1xuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gYmlnIGJsdWUgY2lyY2xlXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgIHAuZmlsbChwLmNvbG9yKHRoaXMuX3NbXCIzMDBcIl0pKTtcbiAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCkgKiAxKSArIC4yKTtcbiAgICAgIHAuY2lyY2xlKDAsIDAsIGJpZ0NpcmNsZUMpO1xuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gbG9uZyBza2lubnkgbG90cyBvZiAgdHJpYW5nbGVzXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5maWxsKHRoaXMuX2hbXCIyMDBcIl0pO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50ICogMzApKTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gMikgKiAxLjYpICsgLjIpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgcC50cmlhbmdsZSgtdHJpYW5nbGV4MSwgdHJpYW5nbGV5MSwgLXRyaWFuZ2xleDEsIC10cmlhbmdsZXkxLCAtdHJpYW5nbGV4MywgMCk7XG4gICAgICAgICAgICBwLnJvdGF0ZSgzMCk7XG4gICAgICAgICAgfVxuICAgICAgICAvLyB3YXRlciBkcm9wbGV0c1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAuYmVnaW5TaGFwZSgpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgcC5maWxsKHRoaXMuX3NbXCI2MDBcIl0pO1xuICAgICAgICAgICAgcC5iZXppZXIoMCwgLXdhdGVyRHJvcGxldFkxLCAtd2F0ZXJEcm9wbGV0WDIsIC13YXRlckRyb3BsZXRZMiwgd2F0ZXJEcm9wbGV0WDIsIC13YXRlckRyb3BsZXRZMiwgMCwgLXdhdGVyRHJvcGxldFkxKTtcbiAgICAgICAgICAgIHAuZmlsbCh0aGlzLl9zW1wiMjAwXCJdKTtcbiAgICAgICAgICAgIHAuY2lyY2xlKDAsIC13YXRlckRyb3BsZXRDaXJjbGVZLCB3YXRlckRyb3BsZXRDaXJjbGVDKTtcbiAgICAgICAgICAgIHAucm90YXRlKDMwKTtcbiAgICAgICAgICB9O1xuICAgICAgICBwLmVuZFNoYXBlKCk7XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAuZmlsbCh0aGlzLl9wW1wiMjAwXCJdKTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gNSkgKiAxLjYpICsgLjIpO1xuICAgICAgICBwLmJlZ2luU2hhcGUoKTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAqIC00MCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgICAgICBwLmJlemllcigwLCAtd2F0ZXJEcm9wbGV0TGl0dGxlWTIsIC13YXRlckRyb3BsZXRMaXR0bGVYMiwgLXdhdGVyRHJvcGxldExpdHRsZVkxLCB3YXRlckRyb3BsZXRMaXR0bGVYMiwgLXdhdGVyRHJvcGxldExpdHRsZVkxLCAwLCAtd2F0ZXJEcm9wbGV0TGl0dGxlWTIpO1xuICAgICAgICB9O1xuICAgICAgICAgIHAuZW5kU2hhcGUoKTtcbiAgICAgICAgcC5wb3AoKTtcblxuICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgICBwLmJlZ2luU2hhcGUoKTtcbiAgICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50ICogNDApKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgICAgICAgcC5iZXppZXIoMCwgLXdhdGVyRHJvcGxldExpdHRsZVkyLCAtd2F0ZXJEcm9wbGV0TGl0dGxlWDIsIC13YXRlckRyb3BsZXRMaXR0bGVZMSwgd2F0ZXJEcm9wbGV0TGl0dGxlWDIsIC13YXRlckRyb3BsZXRMaXR0bGVZMSwgMCwgLXdhdGVyRHJvcGxldExpdHRsZVkyKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHAuZW5kU2hhcGUoKTtcbiAgICAgICAgcC5wb3AoKTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIG91dGVyIHRyaXBsZSBjaXJjbGVzXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAqIC0yMCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIHAuZmlsbCh0aGlzLl9wW1wiNTAwXCJdKTtcbiAgICAgICAgICAgIHAuY2lyY2xlKG91dGVyVHJpcGxlQ2lyY2xlc0JpZ1gsIDAsIG91dGVyVHJpcGxlQ2lyY2xlc0JpZ0MpO1xuICAgICAgICAgICAgcC5maWxsKHRoaXMuX3BbXCIzMDBcIl0pO1xuICAgICAgICAgICAgcC5jaXJjbGUob3V0ZXJUcmlwbGVDaXJjbGVzTWlkU21sWCwgMCwgb3V0ZXJUcmlwbGVDaXJsY2VzTWlkQyk7XG4gICAgICAgICAgICBwLmZpbGwodGhpcy5fcFtcIjEwMFwiXSk7XG4gICAgICAgICAgICBwLmNpcmNsZShvdXRlclRyaXBsZUNpcmNsZXNNaWRTbWxYLCAwLCBvdXRlclRyaXBsZUNpcmNsZXNTbWxDKTtcbiAgICAgICAgICAgIHAucm90YXRlKDMwKTtcbiAgICAgICAgICB9O1xuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gQ3RyaWFuZ2xlXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5maWxsKHRoaXMuX3BbXCI0MDBcIl0pO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50IC8gNCkgKiA1MCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgcC50cmlhbmdsZShDdHJpYW5nbGV4MSwgLUN0cmlhbmdsZXkxLCAtQ3RyaWFuZ2xleDEsIC1DdHJpYW5nbGV5MSwgMCwgLUN0cmlhbmdsZXkyKVxuICAgICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgICAgfVxuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gZmxvd2VyQVxuICAgICAgcC5wdXNoKCk7XG4gICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgIHAuZmlsbChwLmNvbG9yKHRoaXMuX3NbXCI3MDBcIl0pKTtcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgICBwLmVsbGlwc2UoMCwgMCwgZmxvd2VyQ2lyY2xlLCBmbG93ZXJDaXJjbGUpO1xuICAgICAgICBwLnBvcCgpO1xuICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyAyKSAqIDEuNikgKyAuMik7XG4gICAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAqIC01MCkpO1xuICAgICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgcC5iZWdpblNoYXBlKCk7XG4gICAgICAgICAgICBwLnZlcnRleCgtZmxvd2VyWDEsIC1mbG93ZXJZMSk7XG4gICAgICAgICAgICBwLmJlemllclZlcnRleCgtZmxvd2VyWDEsIC1mbG93ZXJZMiwgMCwgLWZsb3dlclkxLCAwLCAtZmxvd2VyWTIpO1xuICAgICAgICAgICAgcC5iZXppZXJWZXJ0ZXgoMCwgLWZsb3dlclkxLCBmbG93ZXJYMSwgLWZsb3dlclkyLCBmbG93ZXJYMSwgLWZsb3dlclkxKTtcbiAgICAgICAgICAgIHAuZW5kU2hhcGUoKTtcbiAgICAgICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgICAgICB9XG4gICAgICAgIHAucG9wKCk7XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBvdXRlciB0cmlwbGUgY2lyY2xlc1xuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDIpICogLjUpICsgMSk7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgLyA0KSAqIC01MCk7XG4gICAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyA1KSAqIDEuNSkgKyAxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgcC5maWxsKHRoaXMuX3BbXCI0MDBcIl0pO1xuICAgICAgICAgIHAuY2lyY2xlKG91dGVyVHJpcGxlQ2lyY2xlc0JpZ1gsIDAsIG91dGVyVHJpcGxlQ2lyY2xlc0JpZ0MgLyA0KTtcbiAgICAgICAgICBwLnJvdGF0ZSgzMCk7XG4gICAgICAgIH07XG4gICAgICBwLnBvcCgpO1xuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgIHAuZmlsbCh0aGlzLl9wW1wiNTAwXCJdKTtcbiAgICAgICAgICBwLmNpcmNsZShvdXRlclRyaXBsZUNpcmNsZXNNaWRTbWxYLCAwLCBvdXRlclRyaXBsZUNpcmxjZXNNaWRDIC8gNCk7XG4gICAgICAgICAgcC5maWxsKHRoaXMuX3BbXCIzMDBcIl0pO1xuICAgICAgICAgIHAuY2lyY2xlKG91dGVyVHJpcGxlQ2lyY2xlc01pZFNtbFgsIDAsIG91dGVyVHJpcGxlQ2lyY2xlc1NtbEMgLyA0KTtcbiAgICAgICAgICBwLnJvdGF0ZSgzMCk7XG4gICAgICAgIH07XG4gICAgICAgIHAucG9wKCk7XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBDdHJpYW5nbGVcbiAgICAgIHAucHVzaCgpO1xuICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICBwLmZpbGwodGhpcy5fcFtcIjYwMFwiXSk7XG4gICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50IC8gNCkgKiA1MCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBwLnRyaWFuZ2xlKEN0cmlhbmdsZXgxLCAtQ3RyaWFuZ2xleTEsIC1DdHJpYW5nbGV4MSwgLUN0cmlhbmdsZXkxLCAwLCAtQ3RyaWFuZ2xleTIpXG4gICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgIH1cbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIEVDaXJjbGVcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLmZpbGwocC5jb2xvcih0aGlzLl9wW1wiMjAwXCJdKSk7XG4gICAgICAgIHAuZWxsaXBzZSgwLCAwLCBFQ2lyY2xlSFcsIEVDaXJjbGVIVyk7XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBDQ2lyY2xlXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDIpICogMS4zKSArIC4yKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgICAgIHAuZmlsbChwLmNvbG9yKHRoaXMuX3NbXCI0MDBcIl0pKTtcbiAgICAgICAgICAgIHAuZWxsaXBzZSgwLCAtQ0NpcmNsZVksIERDaXJjbGVXSCwgRENpcmNsZVdIKTtcbiAgICAgICAgICAgIHAuZmlsbChwLmNvbG9yKHRoaXMuX3NbXCIzMDBcIl0pKTtcbiAgICAgICAgICAgIHAuZWxsaXBzZSgwLCAtQ0NpcmNsZVksIENDaXJjbGVXSCwgQ0NpcmNsZVdIKTtcbiAgICAgICAgICAgIHAucm90YXRlKDYwKTtcbiAgICAgICAgfVxuICAgICAgcC5wb3AoKTtcblxuICAgICAgLy8gQmNpcmNsZXNcbiAgICAgIHAucHVzaCgpO1xuICAgICAgICBwLnRyYW5zbGF0ZShwLmNlbnRlci54LCBwLmNlbnRlci55KTtcbiAgICAgICAgcC5ub1N0cm9rZSgpO1xuICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgcC5maWxsKHRoaXMuX3BbXCI1MDBcIl0pO1xuICAgICAgICBwLnNjYWxlKDEuMik7XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgKiAtNTApKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIHAuZWxsaXBzZSgtQmNpcmNsZVgsIDAsIEJjaXJjbGVTaXplLCBCY2lyY2xlU2l6ZSk7XG4gICAgICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICAgICAgfVxuICAgICAgcC5wb3AoKTtcbiAgICAgIHAucHVzaCgpO1xuICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAvIDMpICogNTApO1xuICAgICAgcC5maWxsKHRoaXMuX3BbXCIyMDBcIl0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgIHAuZWxsaXBzZSgtQmNpcmNsZVgsIDAsIEJjaXJjbGVTaXplLCBCY2lyY2xlU2l6ZSk7XG4gICAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgICB9XG4gICAgICAgIHAucG9wKCk7XG4gICAgICBwLnBvcCgpO1xuXG4gICAgICAvLyBBdHJpYW5nZVxuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAuZmlsbCh0aGlzLl9zW1wiMjAwXCJdKTtcbiAgICAgICAgcC5yb3RhdGUocC5yYWRpYW5zKHAuZnJhbWVDb3VudCAvIDQpICogNTApO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyAxKSAqIDEuMykgKyAuNSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBwLnRyaWFuZ2xlKEF0cmlhbmdsZXgxLCAtQXRyaWFuZ2xleTEsIC1BdHJpYW5nbGV4MSwgLUF0cmlhbmdsZXkxLCAwLCAtQXRyaWFuZ2xleTIpXG4gICAgICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICAgIH1cbiAgICAgICAgcC5maWxsKHRoaXMuX3NbXCI0MDBcIl0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgIHAudHJpYW5nbGUoQXRyaWFuZ2xleDEsIC1BdHJpYW5nbGV5MSwgLUF0cmlhbmdsZXgxLCAtQXRyaWFuZ2xleTEsIDAsIC1CdHJpYW5nbGV5MSlcbiAgICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICAgIH1cbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIEFjaXJjbGVzXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgcC5maWxsKHRoaXMuX2hbXCIzMDBcIl0pO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50IC8gMSkgKiAtNTApO1xuICAgICAgICBwLnNjYWxlKChwLnNpbihwLmZyYW1lQ291bnQgLyAyKSAqIDEuMykgKyAuNSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgcC5lbGxpcHNlKC1BY2lyY2xlWCwgMCwgQWNpcmNsZVNpemUsIEFjaXJjbGVTaXplKTtcbiAgICAgICAgICBwLnJvdGF0ZSg2MCk7XG4gICAgICAgIH1cbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIGNpcmNsZSBmcmFtaW5nIHRoZSBmbG93ZXIgb2YgbGlmZVxuICAgICAgcC5wdXNoKCk7XG4gICAgICAgIHAudHJhbnNsYXRlKHAuY2VudGVyLngsIHAuY2VudGVyLnkpO1xuICAgICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICAgIHAuZmlsbCh0aGlzLl9wW1wiMjAwXCJdKTtcbiAgICAgICAgcC5zY2FsZSgocC5zaW4ocC5mcmFtZUNvdW50IC8gMykgKiAxLjMpICsgLjUpO1xuICAgICAgICBwLmVsbGlwc2UoMCwgMCwgcGV0YWwgKiAyICwgcGV0YWwgKiAyKTtcbiAgICAgIHAucG9wKCk7XG5cbiAgICAgIC8vIGZsb3dlciBvZiBsaWZlXG4gICAgICBwLnB1c2goKTtcbiAgICAgICAgcC50cmFuc2xhdGUocC5jZW50ZXIueCwgcC5jZW50ZXIueSk7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDAuMSk7XG4gICAgICAgIHAuc3Ryb2tlKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgICAgICBwLmZpbGwocC5jb2xvcih0aGlzLl9wW1wiNjAwXCJdKSk7XG4gICAgICAgIHAuc2NhbGUoKHAuc2luKHAuZnJhbWVDb3VudCAvIDQpICogLjUpICsgLjUpO1xuICAgICAgICBwLnJvdGF0ZShwLnJhZGlhbnMocC5mcmFtZUNvdW50IC8gNCkgKiAtNTApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgIHAuY3VydmUocGV0YWwsIDAsIDAsIDAsIDAsIHBldGFsLCBwZXRhbCwgcGV0YWwpO1xuICAgICAgICAgIHAuY3VydmUoLXBldGFsLCAwLCAwLCAwLCAwLCBwZXRhbCwgLXBldGFsLCBwZXRhbCk7XG4gICAgICAgICAgcC5yb3RhdGUoNjApO1xuICAgICAgICB9XG4gICAgICAgIHAucm90YXRlKHAucmFkaWFucyhwLmZyYW1lQ291bnQgLyA0KSAqIC01MCk7XG4gICAgICBwLnBvcCgpO1xuXG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==