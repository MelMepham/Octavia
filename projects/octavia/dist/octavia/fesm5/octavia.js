import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OctaviaService = /** @class */ (function () {
    function OctaviaService() {
    }
    OctaviaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OctaviaService.ctorParameters = function () { return []; };
    /** @nocollapse */ OctaviaService.ngInjectableDef = ɵɵdefineInjectable({ factory: function OctaviaService_Factory() { return new OctaviaService(); }, token: OctaviaService, providedIn: "root" });
    return OctaviaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OctaviaComponent = /** @class */ (function () {
    function OctaviaComponent() {
    }
    /**
     * @return {?}
     */
    OctaviaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    OctaviaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'Oct-octavia',
                    template: "\n    <button>\n    <ng-content></ng-content>\n    </button>\n  "
                }] }
    ];
    /** @nocollapse */
    OctaviaComponent.ctorParameters = function () { return []; };
    return OctaviaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OctaviaModule = /** @class */ (function () {
    function OctaviaModule() {
    }
    OctaviaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [OctaviaComponent],
                    imports: [],
                    exports: [OctaviaComponent]
                },] }
    ];
    return OctaviaModule;
}());

export { OctaviaComponent, OctaviaModule, OctaviaService };
//# sourceMappingURL=octavia.js.map
