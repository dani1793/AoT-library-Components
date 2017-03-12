(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.amazing = global.ng.amazing || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.GridViewComponent = (function () {
    function GridViewComponent() {
    }
    GridViewComponent.prototype.ngOnInit = function () {
    };
    return GridViewComponent;
}());
exports.GridViewComponent = __decorate$1([
    _angular_core.Component({
        selector: 'app-grid-view',
        template: "<p>\nTesting Libray component\n</p>\n",
        styles: [""]
    })
], exports.GridViewComponent);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.GridViewModule = (function () {
    function GridViewModule() {
    }
    return GridViewModule;
}());
exports.GridViewModule = __decorate([
    _angular_core.NgModule({
        declarations: [
            exports.GridViewComponent
        ],
        imports: [],
        providers: [],
        exports: [exports.GridViewComponent]
    })
], exports.GridViewModule);

// to keep it AoT compatible

Object.defineProperty(exports, '__esModule', { value: true });

})));
