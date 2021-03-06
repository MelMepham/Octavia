"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
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
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'button[octButton]',
                    template: "<ng-content></ng-content>",
                    encapsulation: core_1.ViewEncapsulation.None,
                    styles: [".oct-button{background-color:var(--btn-primary-100);color:var(--btn-primary-700);padding:8px 6px 6px;border-radius:6px;border:2px solid var(--btn-primary-700);text-align:center;box-shadow:0 2px var(--btn-primary-700);transform:translateY(0);transition:box-shadow .3s ease-in-out,transform .3s ease-in-out}.oct-button:hover{background-color:var(--btn-primary-300);box-shadow:0 0 var(--btn-primary-700);transform:translateY(2px);transition:box-shadow .3s ease-in-out,transform .3s ease-in-out}.oct-button:active{box-shadow:2px 2px var(--btn-primary-700);background-color:var(--btn-primary-700);color:var(--btn-primary-100)}.oct-button__transparent{background:0 0;border:0;color:inherit;padding:0;overflow:visible;line-height:normal;box-shadow:0 0 transparent}.oct-button__transparent:hover{background:0 0;transform:translateY(0)}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        isPureButton: [{ type: core_1.HostBinding, args: ['class.oct-button',] }]
    };
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.isPureButton;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29jdGF2aWEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FBZ0Y7QUFFaEY7SUFzQkU7Ozs7Ozs7Ozs7UUFGd0MsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFFNUMsQ0FBQzs7OztJQUVqQixrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF6QkYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsMkJBQTJCO29CQUVyQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7OzsrQkFlRSxrQkFBVyxTQUFDLGtCQUFrQjs7SUFPakMsc0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQXJCWSwwQ0FBZTs7O0lBYzFCLHVDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZywgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltvY3RCdXR0b25dJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBnZXQgdHJhbnNwYXJlbnQoKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMuX3RyYW5zcGFyZW50O31cbi8vIHB1YmxpYyB0cmFuc3BhcmVudDogYm9vbGVhbjtcblxuICAvLyBASW5wdXQoJ3RyYW5zcGFyZW50JylcbiAgLy8gc2V0IHNldFRyYW5zcGFyZW50KHZhbHVlOiBib29sZWFuKSB7XG4gICAgLy8gdGhpcy50cmFuc3BhcmVudCA9ICF2YWx1ZSA/IHRydWUgOiB2YWx1ZTtcbiAgLy8gfVxuXG4gIC8vIEBIb3N0QmluZGluZygnY2xhc3Mub2N0LWJ1dHRvbl9fdHJhbnNwYXJlbnQnKVxuICAvLyBnZXQgc2V0VHJhbnNwYXJlbnQoKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMudHJhbnNwYXJlbnQ7fVxuICAvLyBwdWJsaWMgdHJhbnNwYXJlbnQ6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5vY3QtYnV0dG9uJykgcHVibGljIGlzUHVyZUJ1dHRvbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=