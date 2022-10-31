"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_regist_regist_module_ts"],{

/***/ 9844:
/*!******************************************************!*\
  !*** ./src/app/page/regist/regist-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistPageRoutingModule": () => (/* binding */ RegistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _regist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regist.page */ 7478);




const routes = [
    {
        path: '',
        component: _regist_page__WEBPACK_IMPORTED_MODULE_0__.RegistPage
    }
];
let RegistPageRoutingModule = class RegistPageRoutingModule {
};
RegistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistPageRoutingModule);



/***/ }),

/***/ 1235:
/*!**********************************************!*\
  !*** ./src/app/page/regist/regist.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistPageModule": () => (/* binding */ RegistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _regist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regist-routing.module */ 9844);
/* harmony import */ var _regist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regist.page */ 7478);







let RegistPageModule = class RegistPageModule {
};
RegistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _regist_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistPageRoutingModule
        ],
        declarations: [_regist_page__WEBPACK_IMPORTED_MODULE_1__.RegistPage]
    })
], RegistPageModule);



/***/ }),

/***/ 7478:
/*!********************************************!*\
  !*** ./src/app/page/regist/regist.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistPage": () => (/* binding */ RegistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _regist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regist.page.html?ngResource */ 5180);
/* harmony import */ var _regist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regist.page.scss?ngResource */ 8531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ 676);
/* harmony import */ var _service_ToastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/ToastService */ 4477);






let RegistPage = class RegistPage {
    constructor(toastservice) {
        this.toastservice = toastservice;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__.Users();
    }
    ngOnInit() {
    }
    save() {
        // local check
        console.log("id:" + this.user.username + ",pass:" + this.user.pass + "!");
        if (this.user.username === undefined || this.user.pass === undefined) {
            this.toastservice.showErrrorToast("regist fail, must input username and password");
            return;
        }
        if (this.user.pass.length < 8) {
            this.toastservice.showErrrorToast("regist fail, password is at least 8 characters");
            return;
        }
        var upper_case, low_case, special_case = false;
        for (var i = 0; i < this.user.pass.length; i++) {
            var c = this.user.pass.charAt(i);
            if (c >= 'a' && c <= 'z') {
                low_case = true;
            }
            else if (c >= 'A' && c <= 'Z') {
                upper_case = true;
            }
            else if (c >= '0' && c <= '9') {
                // pass
            }
            else {
                special_case = true;
            }
        }
        if (!upper_case || !low_case || !special_case) {
            this.toastservice.showErrrorToast("regist fail, password must contain upper case, low case and special character");
            return;
        }
        // check email
        let d = this.user.email.length - 4;
        if (d >= 0 && (this.user.email.lastIndexOf(".com") == d || this.user.email.lastIndexOf(".edu") == d)) {
            // jump to login
            _model_user__WEBPACK_IMPORTED_MODULE_2__.tmpGlobalUsers.push(this.user);
            this.toastservice.showSuccessToast("regist success");
        }
        else {
            this.toastservice.showErrrorToast("regist fail, email must end with .com or .edu");
        }
    }
};
RegistPage.ctorParameters = () => [
    { type: _service_ToastService__WEBPACK_IMPORTED_MODULE_3__.ToastService }
];
RegistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-regist',
        template: _regist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_regist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistPage);



/***/ }),

/***/ 8531:
/*!*********************************************************!*\
  !*** ./src/app/page/regist/regist.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5180:
/*!*********************************************************!*\
  !*** ./src/app/page/regist/regist.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons> -->\n    <ion-title>ProHeart Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">UserName</ion-label>\n      <ion-input [(ngModel)]=\"user.username\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"user.pass\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Email</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"user.email\"></ion-input>\n    </ion-item>\n\n\n  <ion-item>\n    <ion-button color=\"primary\" (click)=\"save()\">Regist</ion-button>\n\n    <ion-button color=\"primary\" routerLink=\"/login\">Login</ion-button>\n  </ion-item>\n  </ion-list>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_page_regist_regist_module_ts.js.map