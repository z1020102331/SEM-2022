"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_main_module_ts"],{

/***/ 9853:
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 4332);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 5705:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 9853);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 4332);







let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
    })
], MainPageModule);



/***/ }),

/***/ 4332:
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page.html?ngResource */ 8583);
/* harmony import */ var _main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss?ngResource */ 4982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MainPage = class MainPage {
    constructor() { }
    ngOnInit() {
    }
};
MainPage.ctorParameters = () => [];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-main',
        template: _main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainPage);



/***/ }),

/***/ 4982:
/*!************************************************!*\
  !*** ./src/app/main/main.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8583:
/*!************************************************!*\
  !*** ./src/app/main/main.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ProHeart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-label position=\"stacked\">Page not complete</ion-label>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts.js.map