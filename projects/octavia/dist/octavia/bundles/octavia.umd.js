(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('p5')) :
    typeof define === 'function' && define.amd ? define('octavia', ['exports', '@angular/core', '@angular/common', 'p5'], factory) :
    (global = global || self, factory(global.octavia = {}, global.ng.core, global.ng.common, global.sketch));
}(this, function (exports, core, common, sketch) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'Oct-button',
                        template: "<button\n    class=\"oct-button__primary\">\n    <ng-content></ng-content>\n</button>\n",
                        styles: [".oct-button__primary{background-color:var(--btn-primary)}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ButtonComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            ButtonComponent
                        ]
                    },] }
        ];
        return ButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ColorsEnum = {
        'pink': [
            {
                '100': '#FFF0F7',
                '200': '#FFD0F0',
                '300': '#FF57C0',
                '400': '#FF389B',
                '500': '#D12E7F',
                '600': '#A32463',
                '700': '#741A47'
            }
        ],
        'green': [
            {
                '100': '#DCFFD6',
                '200': '#5CFFC8',
                '300': '#2EFFB8',
                '400': '#00FFA9',
                '500': '#00D18B',
                '600': '#00AC72',
                '700': '#00330F'
            }
        ],
        'blue': [
            {
                '100': '#E6F4FF',
                '200': '#BCE2FF',
                '300': '#91BDF0',
                '400': '#65A2EA',
                '500': '#3988E4',
                '600': '#0E6EDE',
                '700': '#0C5BB6'
            }
        ],
        'yellow': [
            {
                '100': '#FFFFAD',
                '200': '#FFFF8C',
                '300': '#FFFF6B',
                '400': '#FFFF4B',
                '500': '#D1D13E',
                '600': '#A3A330',
                '700': '#747423'
            }
        ]
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                    p.endShape();
                    p.pop();
                    p.push();
                    p.beginShape();
                    p.rotate(p.radians(p.frameCount * 40));
                    for (var i = 0; i < 6; i++) {
                        p.rotate(60);
                        p.bezier(0, -waterDropletLittleY2, -waterDropletLittleX2, -waterDropletLittleY1, waterDropletLittleX2, -waterDropletLittleY1, 0, -waterDropletLittleY2);
                    }
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
                    p.pop();
                    p.push();
                    for (var i = 0; i < 12; i++) {
                        p.fill(_this._p["500"]);
                        p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirlcesMidC / 4);
                        p.fill(_this._p["300"]);
                        p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirclesSmlC / 4);
                        p.rotate(30);
                    }
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
            { type: core.Component, args: [{
                        selector: 'Oct-mandala-flower-six',
                        template: "<div\n    class=\"Oct-mandala-flower-six__animation-container\">\n    <div id=\"forest-mandala\"></div>\n</div>\n",
                        styles: ["Oct-mandala-flower-six:host{display:block}.Oct-mandala-flower-six__animation-container ::ng-deep .p5Canvas{border-radius:100%;width:100%!important;height:100%!important;display:block;margin-left:auto;margin-right:auto}"]
                    }] }
        ];
        MandalaFlowerSixComponent.propDecorators = {
            isAnimated: [{ type: core.Input }],
            primaryColor: [{ type: core.Input }],
            secondaryColor: [{ type: core.Input }],
            highlightColor: [{ type: core.Input }]
        };
        return MandalaFlowerSixComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MandalaFlowerSixModule = /** @class */ (function () {
        function MandalaFlowerSixModule() {
        }
        MandalaFlowerSixModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            MandalaFlowerSixComponent
                        ],
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [
                            MandalaFlowerSixComponent
                        ]
                    },] }
        ];
        return MandalaFlowerSixModule;
    }());

    exports.ButtonModule = ButtonModule;
    exports.MandalaFlowerSixModule = MandalaFlowerSixModule;
    exports.ɵa = ButtonComponent;
    exports.ɵb = MandalaFlowerSixComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=octavia.umd.js.map
