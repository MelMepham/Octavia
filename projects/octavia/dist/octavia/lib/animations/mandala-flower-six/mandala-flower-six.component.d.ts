import { OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
export declare class MandalaFlowerSixComponent implements OnInit, OnDestroy, OnChanges {
    private _sketch;
    private _p;
    private _s;
    private _h;
    isAnimated: boolean;
    primaryColor: string;
    secondaryColor: string;
    highlightColor: string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private createCanvas;
    private destroyCanvas;
    private checkIsAnimated;
    private _getColors;
    mandala: (p: any) => void;
}
