(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/MotorBike.ts":
/*!******************************!*\
  !*** ./src/app/MotorBike.ts ***!
  \******************************/
/*! exports provided: MotorBike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotorBike", function() { return MotorBike; });
var MotorBike = /** @class */ (function () {
    function MotorBike() {
    }
    return MotorBike;
}());



/***/ }),

/***/ "./src/app/add-motorbike/add-motorbike.component.css":
/*!***********************************************************!*\
  !*** ./src/app/add-motorbike/add-motorbike.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tb3RvcmJpa2UvYWRkLW1vdG9yYmlrZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-motorbike/add-motorbike.component.html":
/*!************************************************************!*\
  !*** ./src/app/add-motorbike/add-motorbike.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">Add New MotorBike</div>\n        <div class=\"card-body\">\n\n          <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n\n            <div class=\"form-group\">\n              <label for=\"name\" class=\"cols-sm-2 control-label\">Model</label>\n              <div class=\"cols-sm-10\">\n                <div class=\"input-group\">\n\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"motorBike.model\" name=\"model\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\" class=\"cols-sm-2 control-label\">Manufacturer</label>\n              <div class=\"cols-sm-10\">\n                <div class=\"input-group\">\n\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"motorBike.manufacturer\" name=\"Manufacturer\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\" class=\"cols-sm-2 control-label\">Chassis No</label>\n              <div class=\"cols-sm-10\">\n                <div class=\"input-group\">\n\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"motorBike.chassisNo\" name=\"Chassis\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\" class=\"cols-sm-2 control-label\">Engine No</label>\n              <div class=\"cols-sm-10\">\n                <div class=\"input-group\">\n\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"motorBike.engineNo\" name=\"engineNo\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n\n              <div class=\"cols-sm-10\">\n                <div class=\"input-group\" style=\"color:green\">\n\n                  <strong>{{resitrationMessage}}</strong>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group \">\n              <button type=\"button\" class=\"btn btn-primary btn-lg btn-block login-button\"\n                (click)=\"registerBike(motorBike)\">Register Bike</button>\n            </div>\n\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-motorbike/add-motorbike.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-motorbike/add-motorbike.component.ts ***!
  \**********************************************************/
/*! exports provided: AddMotorbikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMotorbikeComponent", function() { return AddMotorbikeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _MotorBike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././MotorBike */ "./src/app/MotorBike.ts");
/* harmony import */ var _shared_resource_gk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared_resource/gk.service */ "./src/app/shared_resource/gk.service.ts");




var AddMotorbikeComponent = /** @class */ (function () {
    function AddMotorbikeComponent(_gkService) {
        this._gkService = _gkService;
        this.motorBike = new _MotorBike__WEBPACK_IMPORTED_MODULE_2__["MotorBike"]();
    }
    AddMotorbikeComponent.prototype.ngOnInit = function () {
    };
    AddMotorbikeComponent.prototype.registerBike = function (bike) {
        var _this = this;
        return this._gkService.addNewBike(bike).subscribe(function (response) {
            _this.resitrationMessage = response;
        });
    };
    AddMotorbikeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-motorbike',
            template: __webpack_require__(/*! ./add-motorbike.component.html */ "./src/app/add-motorbike/add-motorbike.component.html"),
            styles: [__webpack_require__(/*! ./add-motorbike.component.css */ "./src/app/add-motorbike/add-motorbike.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_resource_gk_service__WEBPACK_IMPORTED_MODULE_3__["GkService"]])
    ], AddMotorbikeComponent);
    return AddMotorbikeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vehiclelist_vehiclelist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehiclelist/vehiclelist.component */ "./src/app/vehiclelist/vehiclelist.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _add_motorbike_add_motorbike_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-motorbike/add-motorbike.component */ "./src/app/add-motorbike/add-motorbike.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");









var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'user', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'vehicleList', component: _vehiclelist_vehiclelist_component__WEBPACK_IMPORTED_MODULE_3__["VehiclelistComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'addNewBike', component: _add_motorbike_add_motorbike_component__WEBPACK_IMPORTED_MODULE_7__["AddMotorbikeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'signUp', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <app-nav-bar></app-nav-bar>\n\n</div>\n<div>\n        <router-outlet></router-outlet>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vehicle-control-system';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _vehiclelist_vehiclelist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehiclelist/vehiclelist.component */ "./src/app/vehiclelist/vehiclelist.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _add_motorbike_add_motorbike_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-motorbike/add-motorbike.component */ "./src/app/add-motorbike/add-motorbike.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _vehiclelist_vehiclelist_component__WEBPACK_IMPORTED_MODULE_7__["VehiclelistComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                _add_motorbike_add_motorbike_component__WEBPACK_IMPORTED_MODULE_13__["AddMotorbikeComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this._authService.isLoggedIn.
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this._router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/app/auth/user.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
});
var AuthService = /** @class */ (function () {
    function AuthService(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_4__["User"];
        this.baseUrl = 'http://127.0.0.1:8080';
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    AuthService.prototype.setUser = function (user) {
        this.user = user;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.logout = function () {
        this.loggedIn.next(false);
        this._router.navigate(['/login']);
    };
    AuthService.prototype.validLogin = function () {
        this.loggedIn.next(true);
        this._router.navigate(['/user']);
    };
    AuthService.prototype.login = function (user) {
        var _params = { 'userName': user.username, 'password': user.password };
        return this._http.get(this.baseUrl + '/login', { params: _params, headers: httpHeaders, 'responseType': 'text' });
        // if(login.username==''&&login.password==''){
        //   this.loggedIn.next(true);
        //   
        // }else{
        //   alert('Invalid Credentials');
        // }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/user.ts":
/*!******************************!*\
  !*** ./src/app/auth/user.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t/* Coded with love by Mutiullah Samim */\r\n\tbody,\r\n\thtml {\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t\theight: 100%;\r\n\t\tbackground: #60a3bc !important;\r\n\t}\r\n\t.user_card {\r\n\t\theight: 400px;\r\n\t\twidth: 350px;\r\n\t\tmargin-top: auto;\r\n\t\tmargin-bottom: auto;\r\n\t\tbackground: #f39c12;\r\n\t\tposition: relative;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\tflex-direction: column;\r\n\t\tpadding: 10px;\r\n\t\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\t\t-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\t\t-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\t\tborder-radius: 5px;\r\n\r\n\t}\r\n\t.brand_logo_container {\r\n\t\tposition: absolute;\r\n\t\theight: 170px;\r\n\t\twidth: 170px;\r\n\t\ttop: -75px;\r\n\t\tborder-radius: 50%;\r\n\t\tbackground: #60a3bc;\r\n\t\tpadding: 10px;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.brand_logo {\r\n\t\theight: 150px;\r\n\t\twidth: 150px;\r\n\t\tborder-radius: 50%;\r\n\t\tborder: 2px solid white;\r\n\t}\r\n\t.form_container {\r\n\t\tmargin-top: 100px;\r\n\t}\r\n\t.login_btn {\r\n\t\twidth: 100%;\r\n\t\tbackground: #c0392b !important;\r\n\t\tcolor: white !important;\r\n\t}\r\n\t.login_btn:focus {\r\n\t\tbox-shadow: none !important;\r\n\t\toutline: 0px !important;\r\n\t}\r\n\t.login_container {\r\n\t\tpadding: 0 2rem;\r\n\t}\r\n\t.input-group-text {\r\n\t\tbackground: #c0392b !important;\r\n\t\tcolor: white !important;\r\n\t\tborder: 0 !important;\r\n\t\tborder-radius: 0.25rem 0 0 0.25rem !important;\r\n\t}\r\n\t.input_user,\r\n\t.input_pass:focus {\r\n\t\tbox-shadow: none !important;\r\n\t\toutline: 0px !important;\r\n\t}\r\n\t.custom-checkbox .custom-control-input:checked~.custom-control-label::before {\r\n\t\tbackground-color: #c0392b !important;\r\n\t}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQyx1Q0FBdUM7Q0FDdkM7O0VBRUMsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osOEJBQThCO0NBQy9CO0NBQ0E7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsNEVBQTRFO0VBQzVFLG9GQUFvRjtFQUNwRixpRkFBaUY7RUFDakYsa0JBQWtCOztDQUVuQjtDQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQywyQkFBMkI7RUFDM0IsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiw2Q0FBNkM7Q0FDOUM7Q0FDQTs7RUFFQywyQkFBMkI7RUFDM0IsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxvQ0FBb0M7Q0FDckMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHQvKiBDb2RlZCB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltICovXHJcblx0Ym9keSxcclxuXHRodG1sIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjNjBhM2JjICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC51c2VyX2NhcmQge1xyXG5cdFx0aGVpZ2h0OiA0MDBweDtcclxuXHRcdHdpZHRoOiAzNTBweDtcclxuXHRcdG1hcmdpbi10b3A6IGF1dG87XHJcblx0XHRtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG5cdFx0YmFja2dyb3VuZDogI2YzOWMxMjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuXHRcdC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuXHRcdC1tb3otYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcblx0fVxyXG5cdC5icmFuZF9sb2dvX2NvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRoZWlnaHQ6IDE3MHB4O1xyXG5cdFx0d2lkdGg6IDE3MHB4O1xyXG5cdFx0dG9wOiAtNzVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJhY2tncm91bmQ6ICM2MGEzYmM7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuYnJhbmRfbG9nbyB7XHJcblx0XHRoZWlnaHQ6IDE1MHB4O1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Ym9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcblx0fVxyXG5cdC5mb3JtX2NvbnRhaW5lciB7XHJcblx0XHRtYXJnaW4tdG9wOiAxMDBweDtcclxuXHR9XHJcblx0LmxvZ2luX2J0biB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcclxuXHRcdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQubG9naW5fYnRuOmZvY3VzIHtcclxuXHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQubG9naW5fY29udGFpbmVyIHtcclxuXHRcdHBhZGRpbmc6IDAgMnJlbTtcclxuXHR9XHJcblx0LmlucHV0LWdyb3VwLXRleHQge1xyXG5cdFx0YmFja2dyb3VuZDogI2MwMzkyYiAhaW1wb3J0YW50O1xyXG5cdFx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXI6IDAgIWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW0gIWltcG9ydGFudDtcclxuXHR9XHJcblx0LmlucHV0X3VzZXIsXHJcblx0LmlucHV0X3Bhc3M6Zm9jdXMge1xyXG5cdFx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0b3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xyXG5cdH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<div class=\"container h-100\">\n\t<div class=\"d-flex justify-content-center h-100\">\n\t\t<div class=\"user_card\">\n\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t<div class=\"brand_logo_container\">\n\t\t\t\t\t<img src=\"../../assets/pintrest.png\" class=\"brand_logo\" alt=\"Logo\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"d-flex justify-content-center form_container\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" class=\"form-control input_user\" placeholder=\"username\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group mb-2\">\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" class=\"form-control input_pass\" placeholder=\"password\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlInline\">\n\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customControlInline\">Remember me</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"d-flex justify-content-center mt-3 login_container\">\n\t\t\t\t<button type=\"button\" name=\"button\" (click) = \"clickLogin(user)\" class=\"btn login_btn\">Login</button>\n\t\t\t</div>\n\t\t\t<div class=\"mt-4\">\n\t\t\t\t<div class=\"d-flex justify-content-center links\">\n\t\t\t\t\tDon't have an account? <a [routerLink]=\"['/signUp']\" class=\"ml-2\">Sign Up</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex justify-content-center links\">\n\t\t\t\t\t<a href=\"#\">Forgot your password?</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _authservice) {
        this._router = _router;
        this._authservice = _authservice;
        this.user = {
            username: '',
            password: '',
        };
    }
    LoginComponent.prototype.clickLogin = function (user) {
        var _this = this;
        this._authservice.login(user).subscribe(function (response) {
            response = JSON.parse(response);
            if (response.status === 'true') {
                _this._authservice.setUser(user);
                _this._authservice.validLogin();
            }
            else {
                alert('Invalid User');
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color:#007bff;\r\n}\r\n\r\nli {\r\n  float: left;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n  background-color: #111;\r\n}\r\n\r\n.active {\r\n  background-color: #4CAF50;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDA3YmZmO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"_isLoggedIn | async as isLoggedIn\">\n  <ul>\n    <li><a [routerLink]=\"['/user']\">My Profile</a></li>\n    <li><a [routerLink]=\"['/vehicleList']\">Vehicle List</a></li>\n    <li><a [routerLink]=\"['/addNewBike']\" >Add New</a></li>\n    <li style=\"float:right\"><a class=\"active\"  (click)=\"onLogOut()\">LogOut</a></li>\n  </ul>\n\n <hr>\n</div>\n\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(_authservice) {
        this._authservice = _authservice;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this._isLoggedIn = this._authservice.isLoggedIn;
    };
    NavBarComponent.prototype.onLogOut = function () {
        this._authservice.logout();
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/shared_resource/gk.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared_resource/gk.service.ts ***!
  \***********************************************/
/*! exports provided: GkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GkService", function() { return GkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
});
var GkService = /** @class */ (function () {
    function GkService(_http) {
        this._http = _http;
        this.baseUrl = "http://127.0.0.1:8080";
    }
    GkService.prototype.getUserDetails = function (user) {
        var _params = { 'userName': user.username };
        return this._http.get(this.baseUrl + '/getUser', { params: _params, headers: httpHeaders });
    };
    Object.defineProperty(GkService.prototype, "allMotorBikes", {
        get: function () {
            return this._http.get(this.baseUrl + '/getAllMotorBikes', { headers: httpHeaders });
        },
        enumerable: true,
        configurable: true
    });
    GkService.prototype.modifyMotorBike = function (motorBike) {
        return this._http.put(this.baseUrl + '/modifyMotorBike', motorBike, { responseType: 'text' });
    };
    GkService.prototype.addNewBike = function (motorBike) {
        return this._http.post(this.baseUrl + '/saveMotorBike', motorBike, { headers: httpHeaders, responseType: 'text' });
    };
    GkService.prototype.deleteMotorBike = function (motorBike) {
        return this._http.delete(this.baseUrl + '/deleteMotorBikeById/' + motorBike.bikeId, { headers: httpHeaders, responseType: 'text' });
    };
    GkService.prototype.signUp = function (user) {
        return this._http.post(this.baseUrl + '/signUp', user, { headers: httpHeaders, responseType: 'text' });
    };
    GkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GkService);
    return GkService;
}());



/***/ }),

/***/ "./src/app/shared_resource/uploadfile.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared_resource/uploadfile.service.ts ***!
  \*******************************************************/
/*! exports provided: UploadfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadfileService", function() { return UploadfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
});
var UploadfileService = /** @class */ (function () {
    function UploadfileService(_http) {
        this._http = _http;
    }
    UploadfileService.prototype.pushFileToStorage = function (file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', 'http://localhost:8080/uploadPhoto', formdata, {
            reportProgress: true,
            responseType: 'text',
            headers: httpHeaders
        });
        return this._http.request(req);
    };
    UploadfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UploadfileService);
    return UploadfileService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t/* Coded with love by Mutiullah Samim */\r\n\tbody,\r\n\thtml {\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t\theight: 100%;\r\n\t\tbackground: #60a3bc !important;\r\n\t}\r\n\t.user_card {\r\n\t\theight: 500px;\r\n\t\twidth: 350px;\r\n\t\tmargin-top: auto;\r\n\t\tmargin-bottom: auto;\r\n\t\tbackground: #f39c12;\r\n\t\tposition: relative;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\tflex-direction: column;\r\n\t\tpadding: 10px;\r\n\t\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\t\t-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\t\t-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\t\tborder-radius: 5px;\r\n\r\n\t}\r\n\t.brand_logo_container {\r\n\t\tposition: absolute;\r\n\t\theight: 170px;\r\n\t\twidth: 170px;\r\n\t\ttop: -75px;\r\n\t\tborder-radius: 50%;\r\n\t\tbackground: #60a3bc;\r\n\t\tpadding: 10px;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.brand_logo {\r\n\t\theight: 150px;\r\n\t\twidth: 150px;\r\n\t\tborder-radius: 50%;\r\n\t\tborder: 2px solid white;\r\n\t}\r\n\t.form_container {\r\n\t\tmargin-top: 100px;\r\n\t}\r\n\t.login_btn {\r\n\t\twidth: 100%;\r\n\t\tbackground: #c0392b !important;\r\n\t\tcolor: white !important;\r\n\t}\r\n\t.login_btn:focus {\r\n\t\tbox-shadow: none !important;\r\n\t\toutline: 0px !important;\r\n\t}\r\n\t.login_container {\r\n\t\tpadding: 0 2rem;\r\n\t}\r\n\t.input-group-text {\r\n\t\tbackground: #c0392b !important;\r\n\t\tcolor: white !important;\r\n\t\tborder: 0 !important;\r\n\t\tborder-radius: 0.25rem 0 0 0.25rem !important;\r\n\t}\r\n\t.input_user,\r\n\t.input_pass:focus {\r\n\t\tbox-shadow: none !important;\r\n\t\toutline: 0px !important;\r\n\t}\r\n\t.custom-checkbox .custom-control-input:checked~.custom-control-label::before {\r\n\t\tbackground-color: #c0392b !important;\r\n\t}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLHVDQUF1QztDQUN2Qzs7RUFFQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWiw4QkFBOEI7Q0FDL0I7Q0FDQTtFQUNDLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw0RUFBNEU7RUFDNUUsb0ZBQW9GO0VBQ3BGLGlGQUFpRjtFQUNqRixrQkFBa0I7O0NBRW5CO0NBQ0E7RUFDQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qix1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLDJCQUEyQjtFQUMzQix1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLDZDQUE2QztDQUM5QztDQUNBOztFQUVDLDJCQUEyQjtFQUMzQix1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLG9DQUFvQztDQUNyQyIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlx0LyogQ29kZWQgd2l0aCBsb3ZlIGJ5IE11dGl1bGxhaCBTYW1pbSAqL1xyXG5cdGJvZHksXHJcblx0aHRtbCB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZDogIzYwYTNiYyAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQudXNlcl9jYXJkIHtcclxuXHRcdGhlaWdodDogNTAwcHg7XHJcblx0XHR3aWR0aDogMzUwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiBhdXRvO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogYXV0bztcclxuXHRcdGJhY2tncm91bmQ6ICNmMzljMTI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblx0XHQtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblx0XHQtbW96LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG5cdH1cclxuXHQuYnJhbmRfbG9nb19jb250YWluZXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0aGVpZ2h0OiAxNzBweDtcclxuXHRcdHdpZHRoOiAxNzBweDtcclxuXHRcdHRvcDogLTc1cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjNjBhM2JjO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0LmJyYW5kX2xvZ28ge1xyXG5cdFx0aGVpZ2h0OiAxNTBweDtcclxuXHRcdHdpZHRoOiAxNTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG5cdH1cclxuXHQuZm9ybV9jb250YWluZXIge1xyXG5cdFx0bWFyZ2luLXRvcDogMTAwcHg7XHJcblx0fVxyXG5cdC5sb2dpbl9idG4ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XHJcblx0XHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LmxvZ2luX2J0bjpmb2N1cyB7XHJcblx0XHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcclxuXHR9XHJcblx0LmxvZ2luX2NvbnRhaW5lciB7XHJcblx0XHRwYWRkaW5nOiAwIDJyZW07XHJcblx0fVxyXG5cdC5pbnB1dC1ncm91cC10ZXh0IHtcclxuXHRcdGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcclxuXHRcdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5pbnB1dF91c2VyLFxyXG5cdC5pbnB1dF9wYXNzOmZvY3VzIHtcclxuXHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmIgIWltcG9ydGFudDtcclxuXHR9Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<div class=\"container h-100\">\n\t<div class=\"d-flex justify-content-center h-100\">\n\t\t<div class=\"user_card\">\n\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t<div class=\"brand_logo_container\">\n\t\t\t\t\t<img src=\"../../assets/pintrest.png\" class=\"brand_logo\" alt=\"Logo\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"d-flex justify-content-center form_container\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"text\" name=\"username\" [(ngModel)]=\"user.userName\" class=\"form-control input_user\" placeholder=\"username\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" class=\"form-control input_pass\" placeholder=\"password\">\n          </div>\n          <div class=\"input-group mb-3\">\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fa fa-mobile\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"number\" name=\"mobile\" [(ngModel)]=\"user.mobileNumber\" class=\"form-control input_pass\" placeholder=\"mobile\">\n          </div\n          ><div class=\"input-group mb-3\">\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fa fa-address-book\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" class=\"form-control input_pass\" placeholder=\"email\">\n          </div>\n          <div class=\"input-group mb-3\">\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fa fa-paw\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"text\" name=\"designation\" [(ngModel)]=\"user.designation\" class=\"form-control input_pass\" placeholder=\"designation\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\n          \n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"d-flex justify-content-center mt-3 login_container\">\n\t\t\t\t<button type=\"button\" name=\"button\" (click) = \"signUpUser(user)\" class=\"btn login_btn\">Sign Up</button>\n\t\t\t</div>\n\t\t\t<div class=\"mt-4\">\n\t\t\t\t<div class=\"d-flex justify-content-center links\">\n\t\t\t\t\tAlready have an account? <a [routerLink]=\"['/login']\" class=\"ml-2\">Login</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex justify-content-center links\">\n\t\t\t\t\t<a href=\"#\">Forgot your password?</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_resource_gk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared_resource/gk.service */ "./src/app/shared_resource/gk.service.ts");
/* harmony import */ var _auth_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/user */ "./src/app/auth/user.ts");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(_gkService) {
        this._gkService = _gkService;
        this.user = new _auth_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    SignupComponent.prototype.signUpUser = function (user) {
        var _this = this;
        return this._gkService.signUp(user).subscribe(function (response) {
            response = JSON.parse(response);
            if (response.status === 'true') {
                alert(response.message);
                _this.user = new _auth_user__WEBPACK_IMPORTED_MODULE_3__["User"](); //so that the form will be reset in front end after addition of user
            }
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_resource_gk_service__WEBPACK_IMPORTED_MODULE_2__["GkService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/UserProfile.ts":
/*!*********************************************!*\
  !*** ./src/app/user-profile/UserProfile.ts ***!
  \*********************************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    return UserProfile;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h4> &nbsp;&nbsp;&nbsp;My Profile</h4>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\" style=\"margin-left: 0px;\">\n        <div class=\"col-md-4 col-xs-12 col-sm-6 col-lg-4\">\n          <img alt=\"User Pic\" style=\"width:80%\"\n            src=\"../../assets/profile.jpg\" id=\"profile-image1\"\n            class=\"img-circle img-responsive\">\n            <div><br></div>\n            <div>\n              <label>\n                <input type=\"file\" (change)=\"selectFile($event)\" class=\"btn btn-secondary\">\n              </label>\n              </div>\n              <div>\n                <button [disabled]=\"!selectedFiles\"\n            (click)=\"upload()\" class=\"btn btn-primary\">Upload</button>\n              </div>\n        </div>\n        \n        <div class=\"col-md-8 col-xs-12 col-sm-6 col-lg-8\">\n          <div class=\"container\">\n            <h2>{{currentUser.userName}}</h2>\n            <p>an <b> {{currentUser.designation}}</b></p>\n\n\n          </div>\n          <hr>\n          <ul class=\"container details\">\n            <li>\n              <p><span class=\"glyphicon glyphicon-user one\" style=\"width:50px;\"></span>{{currentUser.mobile}}</p>\n            </li>\n            <li>\n              <p><span class=\"glyphicon glyphicon-envelope one\" style=\"width:50px;\"></span>{{currentUser.email}}</p>\n            </li>\n          </ul>\n          <hr>\n          <div class=\"col-sm-5 col-xs-6 tital \">Date Of Joining: 15 Jun 2016</div>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_resource_uploadfile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared_resource/uploadfile.service */ "./src/app/shared_resource/uploadfile.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_resource_gk_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared_resource/gk.service */ "./src/app/shared_resource/gk.service.ts");
/* harmony import */ var _auth_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/user */ "./src/app/auth/user.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserProfile */ "./src/app/user-profile/UserProfile.ts");








var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(_uploadService, _authService, _gkService) {
        this._uploadService = _uploadService;
        this._authService = _authService;
        this._gkService = _gkService;
        this.user = new _auth_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.currentUser = new _UserProfile__WEBPACK_IMPORTED_MODULE_7__["UserProfile"]();
    }
    UserProfileComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    UserProfileComponent.prototype.upload = function () {
        this.currentFileUpload = this.selectedFiles.item(0);
        console.log(this.currentFileUpload);
        this._uploadService.pushFileToStorage(this.currentFileUpload).subscribe(function (event) {
            console.log(event);
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
    };
    UserProfileComponent.prototype.getUserDetails = function () {
        var _this = this;
        return this._gkService.getUserDetails(this.user).subscribe(function (response) {
            _this.currentUser = response;
            console.log(_this.currentUser);
        });
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        this.user = this._authService.getUser();
        this.getUserDetails();
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_resource_uploadfile_service__WEBPACK_IMPORTED_MODULE_2__["UploadfileService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _shared_resource_gk_service__WEBPACK_IMPORTED_MODULE_4__["GkService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/vehiclelist/vehiclelist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/vehiclelist/vehiclelist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.controls {\r\n    text-align: left;\r\n    position: relative;\r\n  }\r\n  .controls input[type=\"text\"],\r\n  .controls input[type=\"email\"],\r\n  .controls input[type=\"number\"],\r\n  .controls input[type=\"date\"],\r\n  .controls input[type=\"tel\"],\r\n  .controls textarea,\r\n  .controls button,\r\n  .controls select {\r\n    padding: 12px;\r\n    font-size: 14px;\r\n    border: 2px solid #c6c6c6;\r\n    width: 100%;\r\n    margin-bottom: 18px;\r\n    color: #888;\r\n    font-family: 'Lato', 'sans-serif';\r\n    font-size: 19px;\r\n    font-weight: 300;\r\n    border-radius: 2px;\r\n    transition: all 0.3s;\r\n  }\r\n  .controls input[type=\"text\"]:focus, .controls input[type=\"text\"]:hover,\r\n  .controls input[type=\"email\"]:focus,\r\n  .controls input[type=\"email\"]:hover,\r\n  .controls input[type=\"number\"]:focus,\r\n  .controls input[type=\"number\"]:hover,\r\n  .controls input[type=\"date\"]:focus,\r\n  .controls input[type=\"date\"]:hover,\r\n  .controls input[type=\"tel\"]:focus,\r\n  .controls input[type=\"tel\"]:hover,\r\n  .controls textarea:focus,\r\n  .controls textarea:hover,\r\n  .controls button:focus,\r\n  .controls button:hover,\r\n  .controls select:focus,\r\n  .controls select:hover {\r\n    outline: none;\r\n    border-color: #9FB1C1;\r\n  }\r\n  .controls input[type=\"text\"]:focus + label, .controls input[type=\"text\"]:hover + label,\r\n  .controls input[type=\"email\"]:focus + label,\r\n  .controls input[type=\"email\"]:hover + label,\r\n  .controls input[type=\"number\"]:focus + label,\r\n  .controls input[type=\"number\"]:hover + label,\r\n  .controls input[type=\"date\"]:focus + label,\r\n  .controls input[type=\"date\"]:hover + label,\r\n  .controls input[type=\"tel\"]:focus + label,\r\n  .controls input[type=\"tel\"]:hover + label,\r\n  .controls textarea:focus + label,\r\n  .controls textarea:hover + label,\r\n  .controls button:focus + label,\r\n  .controls button:hover + label,\r\n  .controls select:focus + label,\r\n  .controls select:hover + label {\r\n    color: #bdcc00;\r\n    cursor: text;\r\n  }\r\n  .controls .fa-sort {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 17px;\r\n    color: #999;\r\n  }\r\n  .controls select {\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n    cursor: pointer;\r\n  }\r\n  .controls label {\r\n    position: absolute;\r\n    left: 8px;\r\n    top: 12px;\r\n    width: 60%;\r\n    color: #999;\r\n    font-size: 16px;\r\n    display: inline-block;\r\n    padding: 4px 10px;\r\n    font-weight: 400;\r\n    background-color: rgba(255, 255, 255, 0);\r\n    transition: color 0.3s, top 0.3s, background-color 0.8s;\r\n    background-color: white;\r\n  }\r\n  .controls label.active {\r\n    top: -11px;\r\n    color: #555;\r\n    background-color: white;\r\n    width: auto;\r\n  }\r\n  .controls textarea {\r\n    resize: none;\r\n    height: 200px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZWxpc3QvdmVoaWNsZWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7Ozs7Ozs7O0lBUUUsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixnQkFBZ0I7SUFHaEIsa0JBQWtCO0lBSWxCLG9CQUFvQjtFQUN0QjtFQUNBOzs7Ozs7Ozs7Ozs7Ozs7SUFlRSxhQUFhO0lBQ2IscUJBQXFCO0VBQ3ZCO0VBQ0E7Ozs7Ozs7Ozs7Ozs7OztJQWVFLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3Q0FBd0M7SUFJeEMsdURBQXVEO0lBQ3ZELHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvdmVoaWNsZWxpc3QvdmVoaWNsZWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udHJvbHMge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNvbnRyb2xzIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gIC5jb250cm9scyBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgLmNvbnRyb2xzIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgLmNvbnRyb2xzIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG4gIC5jb250cm9scyBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4gIC5jb250cm9scyB0ZXh0YXJlYSxcclxuICAuY29udHJvbHMgYnV0dG9uLFxyXG4gIC5jb250cm9scyBzZWxlY3Qge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNmM2YzY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsICdzYW5zLXNlcmlmJztcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICAuY29udHJvbHMgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsIC5jb250cm9scyBpbnB1dFt0eXBlPVwidGV4dFwiXTpob3ZlcixcclxuICAuY29udHJvbHMgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4gIC5jb250cm9scyBpbnB1dFt0eXBlPVwiZW1haWxcIl06aG92ZXIsXHJcbiAgLmNvbnRyb2xzIGlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMsXHJcbiAgLmNvbnRyb2xzIGlucHV0W3R5cGU9XCJudW1iZXJcIl06aG92ZXIsXHJcbiAgLmNvbnRyb2xzIGlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzLFxyXG4gIC5jb250cm9scyBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpob3ZlcixcclxuICAuY29udHJvbHMgaW5wdXRbdHlwZT1cInRlbFwiXTpmb2N1cyxcclxuICAuY29udHJvbHMgaW5wdXRbdHlwZT1cInRlbFwiXTpob3ZlcixcclxuICAuY29udHJvbHMgdGV4dGFyZWE6Zm9jdXMsXHJcbiAgLmNvbnRyb2xzIHRleHRhcmVhOmhvdmVyLFxyXG4gIC5jb250cm9scyBidXR0b246Zm9jdXMsXHJcbiAgLmNvbnRyb2xzIGJ1dHRvbjpob3ZlcixcclxuICAuY29udHJvbHMgc2VsZWN0OmZvY3VzLFxyXG4gIC5jb250cm9scyBzZWxlY3Q6aG92ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzlGQjFDMTtcclxuICB9XHJcbiAgLmNvbnRyb2xzIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzICsgbGFiZWwsIC5jb250cm9scyBpbnB1dFt0eXBlPVwidGV4dFwiXTpob3ZlciArIGxhYmVsLFxyXG4gIC5jb250cm9scyBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMgKyBsYWJlbCxcclxuICAuY29udHJvbHMgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmhvdmVyICsgbGFiZWwsXHJcbiAgLmNvbnRyb2xzIGlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMgKyBsYWJlbCxcclxuICAuY29udHJvbHMgaW5wdXRbdHlwZT1cIm51bWJlclwiXTpob3ZlciArIGxhYmVsLFxyXG4gIC5jb250cm9scyBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1cyArIGxhYmVsLFxyXG4gIC5jb250cm9scyBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpob3ZlciArIGxhYmVsLFxyXG4gIC5jb250cm9scyBpbnB1dFt0eXBlPVwidGVsXCJdOmZvY3VzICsgbGFiZWwsXHJcbiAgLmNvbnRyb2xzIGlucHV0W3R5cGU9XCJ0ZWxcIl06aG92ZXIgKyBsYWJlbCxcclxuICAuY29udHJvbHMgdGV4dGFyZWE6Zm9jdXMgKyBsYWJlbCxcclxuICAuY29udHJvbHMgdGV4dGFyZWE6aG92ZXIgKyBsYWJlbCxcclxuICAuY29udHJvbHMgYnV0dG9uOmZvY3VzICsgbGFiZWwsXHJcbiAgLmNvbnRyb2xzIGJ1dHRvbjpob3ZlciArIGxhYmVsLFxyXG4gIC5jb250cm9scyBzZWxlY3Q6Zm9jdXMgKyBsYWJlbCxcclxuICAuY29udHJvbHMgc2VsZWN0OmhvdmVyICsgbGFiZWwge1xyXG4gICAgY29sb3I6ICNiZGNjMDA7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcbiAgfVxyXG4gIC5jb250cm9scyAuZmEtc29ydCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTdweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICAuY29udHJvbHMgc2VsZWN0IHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmNvbnRyb2xzIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIHRvcCAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuOHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCB0b3AgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjhzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCB0b3AgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjhzO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgdG9wIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC44cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY29udHJvbHMgbGFiZWwuYWN0aXZlIHtcclxuICAgIHRvcDogLTExcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIC5jb250cm9scyB0ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/vehiclelist/vehiclelist.component.html":
/*!********************************************************!*\
  !*** ./src/app/vehiclelist/vehiclelist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <table class=\"table table-bordered table-condensed table-striped\">\n    <thead>\n      <tr>\n        <th>Bike ID</th>\n        <th>Model</th>\n        <th>Manufacturer</th>\n        <th>Engine No</th>\n        <th>Chassis No</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tr *ngFor=\"let motorbike of allMotorBikesArr\">\n      <td>{{motorbike.bikeId}}\n      </td>\n      <td>\n        {{motorbike.model}}\n      </td>\n      <td>\n        {{motorbike.manufacturer}}\n      </td>\n      <td>\n        {{motorbike.engineNo}}\n      </td>\n      <td>\n        {{motorbike.chassisNo}}\n      </td>\n      <td>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"loadToBootstrapModel(motorbike)\" data-toggle=\"modal\" data-target=\"#myModal\">Modify</button> &nbsp;\n        <button class=\"btn btn-danger\" (click)=\"deleteMotorBike(motorbike)\">Delete</button>\n      </td>\n    </tr>\n\n  </table>\n\n</div>\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog  modal-lg\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        \n        <div> Modifing MotorBike ID: {{modifiableFormData.bikeId}}</div>\n        <div><button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        \n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n            <div class=\"controls\">\n                \n                <input type=\"text\" [(ngModel)]=\"modifiableFormData.bikeId\">\n            </div><div class=\"controls\">\n                \n                <input type=\"text\" [(ngModel)]=\"modifiableFormData.model\">\n            </div><div class=\"controls\">\n                \n                <input type=\"text\" [(ngModel)]=\"modifiableFormData.manufacturer\">\n            </div><div class=\"controls\">\n                \n                <input type=\"text\" [(ngModel)]=\"modifiableFormData.engineNo\">\n            </div><div class=\"controls\">\n                \n                <input type=\"text\" [(ngModel)]=\"modifiableFormData.chassisNo\">\n            </div>\n          <div class=\"controls\" style=\"color:green\">\n          <strong> {{modifyMessage}}</strong>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" (click)=\"modifyMotorBike(modifiableFormData)\">Modify</button> &nbsp;\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/vehiclelist/vehiclelist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/vehiclelist/vehiclelist.component.ts ***!
  \******************************************************/
/*! exports provided: VehiclelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclelistComponent", function() { return VehiclelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_resource_gk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared_resource/gk.service */ "./src/app/shared_resource/gk.service.ts");
/* harmony import */ var _MotorBike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MotorBike */ "./src/app/MotorBike.ts");




var VehiclelistComponent = /** @class */ (function () {
    function VehiclelistComponent(_gkService) {
        this._gkService = _gkService;
        this.modifiableFormData = new _MotorBike__WEBPACK_IMPORTED_MODULE_3__["MotorBike"]();
    }
    VehiclelistComponent.prototype.ngOnInit = function () {
        this.allMotorBikes();
    };
    VehiclelistComponent.prototype.allMotorBikes = function () {
        var _this = this;
        return this._gkService.allMotorBikes.subscribe(function (response) {
            _this.allMotorBikesArr = response;
        });
    };
    VehiclelistComponent.prototype.loadToBootstrapModel = function (motorBike) {
        this.modifiableFormData = motorBike;
    };
    VehiclelistComponent.prototype.modifyMotorBike = function (motorBike) {
        var _this = this;
        return this._gkService.modifyMotorBike(motorBike).subscribe(function (response) {
            _this.modifyMessage = response;
        }, function (error) {
            console.log(error);
        });
    };
    VehiclelistComponent.prototype.deleteMotorBike = function (motorBike) {
        var _this = this;
        var userconfirmation = confirm("Are you really want to delete bike: " + motorBike.bikeId + ' ?');
        if (userconfirmation == true) {
            return this._gkService.deleteMotorBike(motorBike).subscribe(function (response) {
                _this.deleteMessage = response;
                alert(_this.deleteMessage);
                _this.allMotorBikes();
            });
        }
        else {
            alert('You are aborted the operation');
        }
    };
    VehiclelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehiclelist',
            template: __webpack_require__(/*! ./vehiclelist.component.html */ "./src/app/vehiclelist/vehiclelist.component.html"),
            styles: [__webpack_require__(/*! ./vehiclelist.component.css */ "./src/app/vehiclelist/vehiclelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_resource_gk_service__WEBPACK_IMPORTED_MODULE_2__["GkService"]])
    ], VehiclelistComponent);
    return VehiclelistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kasturi's\workspaces\sts\vehicle-control-system\vcs-frontend\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map