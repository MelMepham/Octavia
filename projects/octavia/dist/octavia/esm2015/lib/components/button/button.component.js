/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
export class ButtonComponent {
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
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.isPureButton;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29jdGF2aWEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQVUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFRaEYsTUFBTSxPQUFPLGVBQWU7SUFnQjFCOzs7Ozs7Ozs7O1FBRndDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO0lBRTVDLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OzsyQkFlRSxXQUFXLFNBQUMsa0JBQWtCOzs7O0lBQS9CLHVDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZywgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltvY3RCdXR0b25dJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBnZXQgdHJhbnNwYXJlbnQoKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMuX3RyYW5zcGFyZW50O31cbi8vIHB1YmxpYyB0cmFuc3BhcmVudDogYm9vbGVhbjtcblxuICAvLyBASW5wdXQoJ3RyYW5zcGFyZW50JylcbiAgLy8gc2V0IHNldFRyYW5zcGFyZW50KHZhbHVlOiBib29sZWFuKSB7XG4gICAgLy8gdGhpcy50cmFuc3BhcmVudCA9ICF2YWx1ZSA/IHRydWUgOiB2YWx1ZTtcbiAgLy8gfVxuXG4gIC8vIEBIb3N0QmluZGluZygnY2xhc3Mub2N0LWJ1dHRvbl9fdHJhbnNwYXJlbnQnKVxuICAvLyBnZXQgc2V0VHJhbnNwYXJlbnQoKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMudHJhbnNwYXJlbnQ7fVxuICAvLyBwdWJsaWMgdHJhbnNwYXJlbnQ6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5vY3QtYnV0dG9uJykgcHVibGljIGlzUHVyZUJ1dHRvbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=