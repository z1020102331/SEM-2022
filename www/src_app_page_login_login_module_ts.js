"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_login_login_module_ts"],{

/***/ 482:
/*!****************************************************!*\
  !*** ./src/app/page/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 7569);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 4131:
/*!********************************************!*\
  !*** ./src/app/page/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 482);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 7569);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 7569:
/*!******************************************!*\
  !*** ./src/app/page/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 9356);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 9221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ 676);
/* harmony import */ var _service_ToastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/ToastService */ 4477);







let LoginPage = class LoginPage {
    constructor(toastservice, navCtrl) {
        this.toastservice = toastservice;
        this.navCtrl = navCtrl;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__.Users();
    }
    ngOnInit() {
    }
    save() {
        // local check
        console.log(_model_user__WEBPACK_IMPORTED_MODULE_2__.tmpGlobalUsers);
        if (this.user.username === undefined || this.user.pass === undefined) {
            this.toastservice.showErrrorToast("login fail, username or password is empty");
            return;
        }
        for (var i = 0; i < _model_user__WEBPACK_IMPORTED_MODULE_2__.tmpGlobalUsers.length; i++) {
            var regist_user = _model_user__WEBPACK_IMPORTED_MODULE_2__.tmpGlobalUsers[i];
            if (regist_user.username == this.user.username && regist_user.pass == this.user.pass) {
                // jump to login
                this.toastservice.showSuccessToast("login success");
                this.navCtrl.navigateForward('/main');
                return;
            }
        }
        this.toastservice.showErrrorToast("login fail, username or password not right");
    }
};
LoginPage.ctorParameters = () => [
    { type: _service_ToastService__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 9221:
/*!*******************************************************!*\
  !*** ./src/app/page/login/login.page.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9356:
/*!*******************************************************!*\
  !*** ./src/app/page/login/login.page.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons> -->\n    <ion-title>ProHeart Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">UserName</ion-label>\n      <ion-input [(ngModel)]=\"user.username\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"user.pass\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-button color=\"primary\" (click)=\"save()\">login</ion-button>\n      <ion-button color=\"primary\" routerLink=\"/regist\">Regist</ion-button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_page_login_login_module_ts.js.map