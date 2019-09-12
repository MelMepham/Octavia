import { Component, ViewEncapsulation, HostBinding, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as sketch from 'p5';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
        // get transparent(): boolean {return this._transparent;}
        // public transparent: boolean;
        // @Input('transparent')
        // set setTransparent(value: boolean) {
        // this.transparent = !value ? true : value;
        // }
        // @HostBinding('class.oct-button__transparent')
        // get setTransparent(): boolean {return this.transparent;}
        // public transparent: boolean;
        this.isPureButton = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'button[octButton]',
                template: `<ng-content></ng-content>`,
                encapsulation: ViewEncapsulation.None,
                styles: [".oct-button{background-color:var(--btn-primary-100);color:var(--btn-primary-700);padding:8px 6px 6px;border-radius:6px;border:2px solid var(--btn-primary-700);text-align:center;box-shadow:0 2px var(--btn-primary-700);transform:translateY(0);transition:box-shadow .3s ease-in-out,transform .3s ease-in-out}.oct-button:hover{background-color:var(--btn-primary-300);box-shadow:0 0 var(--btn-primary-700);transform:translateY(2px);transition:box-shadow .3s ease-in-out,transform .3s ease-in-out}.oct-button:active{box-shadow:2px 2px var(--btn-primary-700);background-color:var(--btn-primary-700);color:var(--btn-primary-100)}.oct-button__transparent{background:0 0;border:0;color:inherit;padding:0;overflow:visible;line-height:normal;box-shadow:0 0 transparent}.oct-button__transparent:hover{background:0 0;transform:translateY(0)}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    isPureButton: [{ type: HostBinding, args: ['class.oct-button',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ButtonComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    ButtonComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ColorsEnum = {
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
class MandalaFlowerSixComponent {
    constructor() {
        this.isAnimated = true;
        this.primaryColor = "green";
        this.secondaryColor = "blue";
        this.highlightColor = "pink";
        this.mandala = (/**
         * @param {?} p
         * @return {?}
         */
        (p) => {
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
            let waterDropletY2;
            /** @type {?} */
            let waterDropletY1;
            /** @type {?} */
            let waterDropletX2;
            /** @type {?} */
            let waterDropletCircleC;
            /** @type {?} */
            let waterDropletCircleY;
            /** @type {?} */
            let waterDropletLittleY2;
            /** @type {?} */
            let waterDropletLittleY1;
            /** @type {?} */
            let waterDropletLittleX2;
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
                p.endShape();
                p.pop();
                p.push();
                p.beginShape();
                p.rotate(p.radians(p.frameCount * 40));
                for (let i = 0; i < 6; i++) {
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
                for (let i = 0; i < 12; i++) {
                    p.fill(this._p["500"]);
                    p.circle(outerTripleCirclesBigX, 0, outerTripleCirclesBigC);
                    p.fill(this._p["300"]);
                    p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirlcesMidC);
                    p.fill(this._p["100"]);
                    p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirclesSmlC);
                    p.rotate(30);
                }
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
                p.pop();
                p.push();
                for (let i = 0; i < 12; i++) {
                    p.fill(this._p["500"]);
                    p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirlcesMidC / 4);
                    p.fill(this._p["300"]);
                    p.circle(outerTripleCirclesMidSmlX, 0, outerTripleCirclesSmlC / 4);
                    p.rotate(30);
                }
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
        this._sketch = new sketch(this.mandala);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MandalaFlowerSixModule {
}
MandalaFlowerSixModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MandalaFlowerSixComponent
                ],
                imports: [
                    CommonModule,
                ],
                exports: [
                    MandalaFlowerSixComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerComponent {
    // @ViewChild('canvas', { static: true })
    // canvas: ElementRef<HTMLCanvasElement>;
    // private ctx: CanvasRenderingContext2D;
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.ctx = this.canvas.nativeElement.getContext('2d');
        // console.log(this.ctx)
    }
    /**
     * @return {?}
     */
    animate() {
    }
}
BannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'Oct-banner',
                template: "        <canvas #canvas width=\"400\" height=\"300\"></canvas>\n    <div\n        class=\"Oct-banner__animation-container\">\n\n    </div>\n\n\n    <div\n        class=\"Oct-animated-message__text\">\n        <ng-content></ng-content>\n    </div>\n",
                styles: ["Oct-animated-message:host{display:block}.Oct-banner__animation-container{position:absolute;background-color:pink}.Oct-animated-message__text{position:absolute}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerModule {
}
BannerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BannerComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    BannerComponent
                ]
            },] }
];

export { BannerModule, ButtonModule, MandalaFlowerSixModule, ButtonComponent as ɵa, MandalaFlowerSixComponent as ɵb, BannerComponent as ɵc };
//# sourceMappingURL=octavia.js.map
