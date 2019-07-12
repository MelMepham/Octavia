import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OctaviaService {
    constructor() { }
}
OctaviaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OctaviaService.ctorParameters = () => [];
/** @nocollapse */ OctaviaService.ngInjectableDef = ɵɵdefineInjectable({ factory: function OctaviaService_Factory() { return new OctaviaService(); }, token: OctaviaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OctaviaComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
OctaviaComponent.decorators = [
    { type: Component, args: [{
                selector: 'Oct-octavia',
                template: `
    <button>
    <ng-content></ng-content>
    </button>
  `
            }] }
];
/** @nocollapse */
OctaviaComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OctaviaModule {
}
OctaviaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OctaviaComponent],
                imports: [],
                exports: [OctaviaComponent]
            },] }
];

export { OctaviaComponent, OctaviaModule, OctaviaService };
//# sourceMappingURL=octavia.js.map
