(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.amazing = global.ng.amazing || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var GridViewComponent = (function () {
    function GridViewComponent() {
    }
    GridViewComponent.prototype.ngOnInit = function () {
    };
    GridViewComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'app-grid-view',
                    template: "<p>\nTesting Libray component\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    GridViewComponent.ctorParameters = function () { return []; };
    return GridViewComponent;
}());

var GridViewModule = (function () {
    function GridViewModule() {
    }
    GridViewModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        GridViewComponent
                    ],
                    imports: [],
                    providers: [],
                    exports: [GridViewComponent]
                },] },
    ];
    /** @nocollapse */
    GridViewModule.ctorParameters = function () { return []; };
    return GridViewModule;
}());

// to keep it AoT compatible

exports.GridViewModule = GridViewModule;
exports.GridViewComponent = GridViewComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
