(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('octavia', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.octavia = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OctaviaService = /** @class */ (function () {
        function OctaviaService() {
        }
        OctaviaService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        OctaviaService.ctorParameters = function () { return []; };
        /** @nocollapse */ OctaviaService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function OctaviaService_Factory() { return new OctaviaService(); }, token: OctaviaService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [OctaviaComponent],
                        imports: [],
                        exports: [OctaviaComponent]
                    },] }
        ];
        return OctaviaModule;
    }());

    exports.OctaviaComponent = OctaviaComponent;
    exports.OctaviaModule = OctaviaModule;
    exports.OctaviaService = OctaviaService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=octavia.umd.js.map
