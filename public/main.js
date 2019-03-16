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

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <br>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

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
        this.title = 'FrontEnd';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _components_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profiles/profiles.component */ "./src/app/components/profiles/profiles.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _service_profile_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/profile.service */ "./src/app/service/profile.service.ts");
/* harmony import */ var _components_add_education_add_education_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-education/add-education.component */ "./src/app/components/add-education/add-education.component.ts");
/* harmony import */ var _components_add_experience_add_experience_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/add-experience/add-experience.component */ "./src/app/components/add-experience/add-experience.component.ts");
/* harmony import */ var _components_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/create-profile/create-profile.component */ "./src/app/components/create-profile/create-profile.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_posts_post_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/posts/post.component */ "./src/app/components/posts/post.component.ts");
/* harmony import */ var _service_posts_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/posts.service */ "./src/app/service/posts.service.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
/* harmony import */ var _components_single_post_single_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/single-post/single-post.component */ "./src/app/components/single-post/single-post.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/view-profile/view-profile.component */ "./src/app/components/view-profile/view-profile.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");



























var routes = [
    { path: '', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_24__["LandingComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'register', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: 'all', component: _components_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_13__["ProfilesComponent"] },
    { path: 'current', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: 'profile/:handle', component: _components_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_25__["ViewProfileComponent"] },
    { path: 'editProfile', component: _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_19__["EditProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: 'createProfile', component: _components_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_18__["CreateProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: 'addEducation', component: _components_add_education_add_education_component__WEBPACK_IMPORTED_MODULE_16__["AddEducationComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: 'addExperience', component: _components_add_experience_add_experience_component__WEBPACK_IMPORTED_MODULE_17__["AddExperienceComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: 'posts', component: _components_posts_post_component__WEBPACK_IMPORTED_MODULE_20__["PostComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: 'post/:id', component: _components_single_post_single_post_component__WEBPACK_IMPORTED_MODULE_23__["SinglePostComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _components_profiles_profiles_component__WEBPACK_IMPORTED_MODULE_13__["ProfilesComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _components_add_education_add_education_component__WEBPACK_IMPORTED_MODULE_16__["AddEducationComponent"],
                _components_add_experience_add_experience_component__WEBPACK_IMPORTED_MODULE_17__["AddExperienceComponent"],
                _components_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_18__["CreateProfileComponent"],
                _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_19__["EditProfileComponent"],
                _components_posts_post_component__WEBPACK_IMPORTED_MODULE_20__["PostComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_22__["SpinnerComponent"],
                _components_single_post_single_post_component__WEBPACK_IMPORTED_MODULE_23__["SinglePostComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_24__["LandingComponent"],
                _components_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_25__["ViewProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' }),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"].forRoot(),
            ],
            providers: [
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"],
                _service_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _service_profile_service__WEBPACK_IMPORTED_MODULE_15__["ProfileService"],
                _service_posts_service__WEBPACK_IMPORTED_MODULE_21__["PostsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.userService.isLoggedin()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/add-education/add-education.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/add-education/add-education.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary{\r\n    margin-top:20px;\r\n    margin-bottom: 20px;\r\n}\r\n.form-group>.form-control{\r\n    border-radius:5px;\r\n}\r\n.mar{\r\n    margin-top: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtZWR1Y2F0aW9uL2FkZC1lZHVjYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtZWR1Y2F0aW9uL2FkZC1lZHVjYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcHJpbWFyeXtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXA+LmZvcm0tY29udHJvbHtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG59XHJcbi5tYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-education/add-education.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-education/add-education.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button routerLink=\"/current\" class=\"btn back btn-primary\">Go Back</button>\n<h1 *ngIf=\"isLoading\">Loading</h1>\n<h1 class=\"text-center\">Add Experience</h1>\n<div class=\"row\">\n  <div class=\"col-md-8 offset-md-2 \">\n    <p class=\"text-danger\">**required feilds</p>\n\n    <form [formGroup]=\"addEdu\" (ngSubmit)=\"addEducation()\">\n\n      <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"school\" class=\"form-control\" placeholder=\"**School\">\n        <p *ngIf=\"errors.school\" class=\"text-warning\">{{errors.school}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"degree\" class=\"form-control\" placeholder=\"**Degree\">\n        <p *ngIf=\"errors.degree\" class=\"text-warning\">{{errors.degree}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"fieldofstudy\" class=\"form-control\" placeholder=\"**fieldofstudy\">\n        <p *ngIf=\"errors.fieldofstudy\" class=\"text-warning\">{{errors.fieldofstudy}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"date\" formControlName=\"from\" class=\"form-control\">\n        <p *ngIf=\"errors.from\" class=\"text-warning\">{{errors.from}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"date\" formControlName=\"to\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n        <textarea class=\"form-control\" formControlName=\"description\" cols=\"5\" rows=\"5\"\n          placeholder=\"Job description\"></textarea>\n      </div>\n\n      <input type=\"submit\" class=\" btn btn-block btn-primary\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/add-education/add-education.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-education/add-education.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEducationComponent", function() { return AddEducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/profile.service */ "./src/app/service/profile.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddEducationComponent = /** @class */ (function () {
    function AddEducationComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        this.errors = {};
        this.addEdu = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            school: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            fieldofstudy: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            current: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    AddEducationComponent.prototype.ngOnInit = function () {
    };
    AddEducationComponent.prototype.addEducation = function () {
        var _this = this;
        this.profileService.postEducation(this.addEdu.value)
            .subscribe(function (success) {
            _this.router.navigate(['/current']);
        }, function (err) {
            _this.errors = err.error;
        });
    };
    AddEducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-education',
            template: __webpack_require__(/*! ./add-education.component.html */ "./src/app/components/add-education/add-education.component.html"),
            styles: [__webpack_require__(/*! ./add-education.component.css */ "./src/app/components/add-education/add-education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddEducationComponent);
    return AddEducationComponent;
}());



/***/ }),

/***/ "./src/app/components/add-experience/add-experience.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/add-experience/add-experience.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary{\r\n    margin-top:20px;\r\n    margin-bottom: 20px;\r\n}\r\n.form-group>.form-control{\r\n    border-radius:5px;\r\n}\r\n.mar{\r\n    margin-top: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtZXhwZXJpZW5jZS9hZGQtZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1leHBlcmllbmNlL2FkZC1leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnl7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5mb3JtLWdyb3VwPi5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4ubWFye1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/add-experience/add-experience.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-experience/add-experience.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button routerLink=\"/current\" class=\"btn back btn-primary\">Go Back</button>\n<h1 *ngIf=\"isLoading\">Loading</h1>\n<h1 class=\"text-center\">Add Experience</h1>\n<div class=\"row\">\n  <div class=\"col-md-8 offset-md-2 \">\n    <p class=\"text-danger\">**required feilds</p>\n\n    <form [formGroup]=\"addExp\" (ngSubmit)=\"addExperience()\">\n\n      <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"title\" class=\"form-control\" placeholder=\"**Job title\">\n        <p *ngIf=\"errors.title\" class=\"text-warning\">{{errors.title}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"company\" class=\"form-control\" placeholder=\"**Company\">\n        <p *ngIf=\"errors.company\" class=\"text-warning\">{{errors.company}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"location\" class=\"form-control\" placeholder=\"Location\">\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"date\" formControlName=\"from\" class=\"form-control\">\n        <p *ngIf=\"errors.from\" class=\"text-warning\">{{errors.from}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"date\" formControlName=\"to\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <textarea class=\"form-control\" formControlName=\"description\" cols=\"5\" rows=\"5\"\n          placeholder=\"Job description\"></textarea>\n      </div>\n\n      <input type=\"submit\" class=\" btn btn-block btn-primary\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/add-experience/add-experience.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-experience/add-experience.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExperienceComponent", function() { return AddExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/profile.service */ "./src/app/service/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddExperienceComponent = /** @class */ (function () {
    function AddExperienceComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        this.errors = {};
        this.addExp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            current: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    AddExperienceComponent.prototype.ngOnInit = function () {
    };
    AddExperienceComponent.prototype.addExperience = function () {
        var _this = this;
        console.log(this.addExp.value);
        this.profileService.postExperience(this.addExp.value)
            .subscribe(function (success) {
            _this.router.navigate(['/current']);
        }, function (err) {
            _this.errors = err.error;
        });
    };
    AddExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-experience',
            template: __webpack_require__(/*! ./add-experience.component.html */ "./src/app/components/add-experience/add-experience.component.html"),
            styles: [__webpack_require__(/*! ./add-experience.component.css */ "./src/app/components/add-experience/add-experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddExperienceComponent);
    return AddExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/create-profile/create-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/create-profile/create-profile.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary{\r\n    margin-top:20px;\r\n    margin-bottom: 20px;\r\n}\r\n.form-group>.form-control{\r\n    border-radius:5px;\r\n}\r\n.mar{\r\n    margin-top: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS1wcm9maWxlL2NyZWF0ZS1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnl7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5mb3JtLWdyb3VwPi5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4ubWFye1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/create-profile/create-profile.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-profile/create-profile.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"/current\" class=\"btn back btn-primary\">Go Back</button>\r\n<h1 *ngIf=\"isLoading\">Loading</h1>\r\n<h1 class=\"text-center\">Create Profile</h1>\r\n<div class=\"row\">\r\n    <div class=\"col-md-8 offset-md-2 \">\r\n        <p class=\"text-danger\">**required feilds</p>\r\n        <form [formGroup]=\"createForm\" (ngSubmit)=\"createProfile()\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"handle\" class=\"form-control\">\r\n                <small class=\"text-muted\">**A unique handle for your profile URL. Your full name, company name,\r\n                    nickname</small>\r\n                <p *ngIf=\"errors.handle\" class=\"text-warning\">{{errors.handle}}</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"status\" class=\"form-control\">\r\n                <small class=\"text-muted\">**Give us an idea of where you are at in your career</small>\r\n                <p *ngIf=\"errors.status\" class=\"text-warning\">{{errors.status}}</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"company\" class=\"form-control\">\r\n                <small class=\"text-muted\">Could be your own company or one you work for</small>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"website\" class=\"form-control\">\r\n                <small class=\"text-muted\">Could be your own website or a company one</small>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"githubusername\" class=\"form-control\">\r\n                <small class=\"text-muted\">If you want your latest repos and a Github link, include your username</small>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"location\" class=\"form-control\">\r\n                <small class=\"text-muted\">City or city & state suggested (eg. Noida, Delhi)</small>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"skills\" class=\"form-control\">\r\n                <small class=\"text-muted\">**Please use comma separated values (eg.\r\n                    HTML,CSS,JavaScript,Angular</small>\r\n                <p *ngIf=\"errors.skills\" class=\"text-warning\">{{errors.skills}}</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <textarea class=\"form-control\" formControlName=\"bio\" cols=\"10\" rows=\"5\"></textarea>\r\n                <small class=\"text-muted\">Tell us a little about yourself</small>\r\n            </div>\r\n\r\n            <p class=\"text-muted\"> Add Social Network Links</p>\r\n\r\n            <div class=\"input-group input-group-sm mar\">\r\n                <div class=\"input-group-prepend\">\r\n                    <i class=\"input-group-text fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <input type=\"text\" formControlName=\"linkedin\" class=\"form-control\" aria-describedby=\"basic-addon3\">\r\n                <p *ngIf=\"errors.linkedin\" class=\"text-warning\">{{errors.linkedin}}</p>\r\n            </div>\r\n\r\n            <div class=\"input-group input-group-sm mar\">\r\n                <div class=\"input-group-prepend\">\r\n                    <i class=\"input-group-text fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <input type=\"text\" formControlName=\"facebook\" class=\"form-control\" aria-describedby=\"basic-addon3\">\r\n                <p *ngIf=\"errors.facebook\" class=\"text-warning\">{{errors.facebook}}</p>\r\n            </div>\r\n\r\n            <div class=\"input-group input-group-sm mar\">\r\n                <div class=\"input-group-prepend\">\r\n                    <i class=\"input-group-text fa fa-instagram\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <input type=\"text\" formControlName=\"instagram\" class=\"form-control\" aria-describedby=\"basic-addon3\">\r\n                <p *ngIf=\"errors.instagram\" class=\"text-warning\">{{errors.instagram}}</p>\r\n            </div>\r\n\r\n            <div class=\"input-group input-group-sm mar\">\r\n                <div class=\"input-group-prepend\">\r\n                    <i class=\"input-group-text fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <input type=\"text\" formControlName=\"twitter\" class=\"form-control\" aria-describedby=\"basic-addon3\">\r\n                <p *ngIf=\"errors.twitter\" class=\"text-warning\">{{errors.twitter}}</p>\r\n            </div>\r\n\r\n            <div class=\"input-group input-group-sm mar\">\r\n                <div class=\"input-group-prepend\">\r\n                    <i class=\"input-group-text fa fa-youtube\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <input type=\"text\" formControlName=\"youtube\" class=\"form-control\" aria-describedby=\"basic-addon3\">\r\n                <p *ngIf=\"errors.youtube\" class=\"text-warning\">{{errors.youtube}}</p>\r\n            </div>\r\n\r\n            <input type=\"submit\" class=\" btn btn-block btn-primary\">\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/create-profile/create-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-profile/create-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProfileComponent", function() { return CreateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/profile.service */ "./src/app/service/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");






var CreateProfileComponent = /** @class */ (function () {
    function CreateProfileComponent(profileService, userService, router) {
        this.profileService = profileService;
        this.userService = userService;
        this.router = router;
        this.errors = {};
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            handle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            githubusername: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            youtube: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            twitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
    }
    CreateProfileComponent.prototype.ngOnInit = function () {
    };
    CreateProfileComponent.prototype.createProfile = function () {
        var _this = this;
        this.profileService.postProfile(this.createForm.value)
            .subscribe(function () {
            _this.router.navigate(['/current']);
        }, function (err) {
            _this.errors = err.error;
        });
    };
    CreateProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-profile',
            template: __webpack_require__(/*! ./create-profile.component.html */ "./src/app/components/create-profile/create-profile.component.html"),
            styles: [__webpack_require__(/*! ./create-profile.component.css */ "./src/app/components/create-profile/create-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateProfileComponent);
    return CreateProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary{\r\n    margin-top:20px;\r\n    margin-bottom: 20px;\r\n}\r\n.form-group>.form-control{\r\n    border-radius:5px;\r\n}\r\n.mar{\r\n    margin-top: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1wcmltYXJ5e1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZm9ybS1ncm91cD4uZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbn1cclxuXHJcbi5tYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner *ngIf=\"isLoading\"></app-spinner>\n<button routerLink=\"/current\" class=\"btn back btn-primary\">Go Back</button>\n<h1 *ngIf=\"isLoading\">Loading</h1>\n<h1 class=\"text-center\">Edit Profile</h1>\n<div class=\"row\">\n  <div class=\"col-md-8 offset-md-2 \">\n    <p class=\"text-danger\">**required feilds</p>\n    <form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"userProfile.handle\" name=\"handle\" #handle=\"ngModel\" class=\"form-control\">\n        <small class=\"text-muted\">**A unique handle for your profile URL. Your full name, company name, nickname</small>\n        <p *ngIf=\"errors.handle\" class=\"text-warning\">{{errors.handle}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <input class=\"form-control\" [(ngModel)]=\"userProfile.status\" name=\"status\" #status=\"ngModel\">\n        <small class=\"text-muted\">**Give us an idea of where you are at in your career</small>\n        <p *ngIf=\"errors.status\" class=\"text-warning\">{{errors.status}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"userProfile.company\" name=\"company\" #company=\"ngModel\" class=\"form-control\">\n        <small class=\"text-muted\">Could be your own company or one you work for</small>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"userProfile.website\" name=\"website\" #website=\"ngModel\" class=\"form-control\">\n        <small class=\"text-muted\">Could be your own website or a company one</small>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"userProfile.githubusername\" name=\"githubusername\" #githubusername=\"ngModel\"\n          class=\"form-control\">\n        <small class=\"text-muted\">If you want your latest repos and a Github link, include your username</small>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"userProfile.location\" name=\"location\" #location=\"ngModel\" class=\"form-control\">\n        <small class=\"text-muted\">City or city & state suggested (eg. Noida, Delhi)</small>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"skill\" name=\"skill\" #skills=\"ngModel\" class=\"form-control\">\n        <small class=\"text-muted\">**Please use comma separated values (eg.\n          HTML,CSS,JavaScript,Angular</small>\n        <p *ngIf=\"errors.skills\" class=\"text-warning\">{{errors.skills}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <textarea class=\"form-control\" [(ngModel)]=\"userProfile.bio\" name=\"bio\" #bio=\"ngModel\" cols=\"10\"\n          rows=\"5\"></textarea>\n        <small class=\"text-muted\">Tell us a little about yourself</small>\n      </div>\n\n      <p class=\"text-muted\"> Add Social Network Links</p>\n\n      <div class=\"input-group input-group-sm mar\">\n          <div class=\"input-group-prepend\">\n            <i class=\"input-group-text fa fa-linkedin\" aria-hidden=\"true\"></i>\n          </div>\n          <input type=\"text\" [(ngModel)]=\"social.linkedin\" name=\"linkedin\" #linkedin=\"ngModel\" class=\"form-control\"\n            id=\"\" aria-describedby=\"basic-addon3\">\n          <p *ngIf=\"errors.linkedin\" class=\"text-warning\">{{errors.linkedin}}</p>\n        </div>\n\n      <div class=\"input-group input-group-sm mar\">\n        <div class=\"input-group-prepend\">\n          <i class=\"input-group-text fa fa-facebook\" aria-hidden=\"true\"></i>\n        </div>\n        <input type=\"text\" [(ngModel)]=\"social.facebook\" name=\"facebook\" #facebook=\"ngModel\" class=\"form-control\" id=\"\"\n          aria-describedby=\"basic-addon3\">\n        <p *ngIf=\"errors.facebook\" class=\"text-warning\">{{errors.facebook}}</p>\n      </div>\n\n      <div class=\"input-group input-group-sm mar\">\n        <div class=\"input-group-prepend\">\n          <i class=\"input-group-text fa fa-instagram\" aria-hidden=\"true\"></i>\n        </div>\n        <input type=\"text\" [(ngModel)]=\"social.instagram\" name=\"instagram\" #instagram=\"ngModel\" class=\"form-control\"\n          id=\"\" aria-describedby=\"basic-addon3\">\n        <p *ngIf=\"errors.instagram\" class=\"text-warning\">{{errors.instagram}}</p>\n      </div>\n\n      <div class=\"input-group input-group-sm mar\">\n        <div class=\"input-group-prepend\">\n          <i class=\"input-group-text fa fa-twitter\" aria-hidden=\"true\"></i>\n        </div>\n        <input type=\"text\" [(ngModel)]=\"social.twitter\" name=\"twitter\" #twitter=\"ngModel\" class=\"form-control\" id=\"\"\n          aria-describedby=\"basic-addon3\">\n        <p *ngIf=\"errors.twitter\" class=\"text-warning\">{{errors.twitter}}</p>\n      </div>\n\n      <div class=\"input-group input-group-sm mar\">\n        <div class=\"input-group-prepend\">\n          <i class=\"input-group-text fa fa-youtube\" aria-hidden=\"true\"></i>\n        </div>\n        <input type=\"text\" [(ngModel)]=\"social.youtube\" name=\"youtube\" #youtube=\"ngModel\" class=\"form-control\" id=\"\"\n          aria-describedby=\"basic-addon3\">\n        <p *ngIf=\"errors.youtube\" class=\"text-warning\">{{errors.youtube}}</p>\n      </div>\n\n      <input type=\"submit\" class=\" btn btn-block btn-primary\">\n    </form>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/profile.service */ "./src/app/service/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        this.isLoading = true;
        this.errors = {};
        this.userProfile = {};
        this.social = {};
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.currentProfile()
            .subscribe(function (profile) {
            _this.userProfile = profile;
            _this.social = profile.social;
            _this.skill = profile.skills.join();
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
            _this.errors = err.error;
        });
    };
    EditProfileComponent.prototype.submit = function (f) {
        var _this = this;
        var submitProfile = {
            handle: f.value.handle,
            website: f.value.website,
            status: f.value.status,
            company: f.value.company,
            githubusername: f.value.githubusername,
            location: f.value.location,
            skills: f.value.skill,
            bio: f.value.bio,
            instagram: f.value.instagram,
            facebook: f.value.facebook,
            twitter: f.value.twitter,
            linkedin: f.value.linkedin,
            youtube: f.value.youtube
        };
        this.profileService.postProfile(submitProfile)
            .subscribe(function () {
            _this.router.navigateByUrl('/current');
        }, function (err) {
            _this.errors = err.error;
        });
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/components/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/components/edit-profile/edit-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-top:16%;\r\n}\r\n.card{\r\n    border-radius:10px;\r\n    background-color: rgb(10, 80, 138);\r\n}\r\n.btn{\r\n    margin: 10px;\r\n    border-radius: 5px;\r\n}\r\nbody{\r\n    background-color: greenyellow;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixtQ0FBbUM7Q0FDdEM7QUFDRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgbWFyZ2luLXRvcDoxNiU7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDgwLCAxMzgpO1xyXG59XHJcbi5idG57XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card col-md-6 mx-auto text-center\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title text-white\">Choose what to do</h2>\n            <button routerLink=\"/login\" class=\"btn btn-secondary\">Login</button>\n            <button routerLink=\"/register\" class=\"btn btn-secondary\">Register</button>\n          </div>\n        </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\r\n    margin-top: 9%;\r\n}\r\n.form-control{\r\n    border-radius:5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHtcclxuICAgIG1hcmdpbi10b3A6IDklO1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row top\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n        <div class=\"card\" style=\"border-radius:8px;\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"text-center text-primary pb-4 pt-3\">\r\n                    Login\r\n                </h3>\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">\r\n                            Email\r\n                            <i class=\"fa fa-envelope-o fa-lg\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n                        <input formControlName=\"email\" type=\"text\" id=\"email\" class=\"form-control\"\r\n                            placeholder=\"Enter Email\">\r\n                        <div *ngIf=\"errors.email\" class=\"text-danger\">\r\n                            {{errors.email}}\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">\r\n                            Password\r\n                            <i class=\"fa fa-cog fa-lg\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n                        <input formControlName=\"password\" type=\"password\" id=\"password\" class=\"form-control\"\r\n                            placeholder=\"Enter password\">\r\n                                <div *ngIf=\"errors.password\" class=\"text-danger\">\r\n                                        {{errors.password}}\r\n                                    </div>\r\n                    </div>\r\n                    <input type=\"submit\" class=\" btn btn-block btn-primary\">\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errors = {};
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.loginUser(this.form.value)
            .subscribe(function (data) {
            _this.success = data;
            _this.userService.setToken(_this.success.token);
            _this.router.navigate(['/current']);
        }, function (err) {
            _this.errors = err.error;
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a routerLink=\"/all\" class=\"navbar-brand\">Developers</a>\n  <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navMenu\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navMenu\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"isLoggedin()\"  class=\"nav-item\">\n        <a routerLink=\"/current\" class=\"nav-link\">DashBoard</a>\n      </li>\n\n      <li *ngIf=\"isLoggedin()\" class=\"nav-item\">\n        <a routerLink=\"/posts\" class=\"nav-link\">Post feed</a>\n      </li>\n\n      <li *ngIf=\"!isLoggedin()\" class=\"nav-item\">\n        <a routerLink=\"/register\" class=\"nav-link\">Sign Up</a>\n      </li>\n\n      <li *ngIf=\"!isLoggedin()\" class=\"nav-item\">\n        <a routerLink=\"/login\" class=\"nav-link\">Login</a>\n      </li>\n\n      <li *ngIf=\"isLoggedin()\" class=\"nav-item\">\n        <a routerlink=\"/\" style=\"cursor:pointer;\" class=\"nav-link\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.isLoggedin = function () {
        return this.userService.isLoggedin();
    };
    NavBarComponent.prototype.logout = function () {
        this.userService.deleteToken();
        this.router.navigate(['/login']);
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\r\n    margin-top: 9%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9we1xyXG4gICAgbWFyZ2luLXRvcDogOSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row top\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\" style=\"border-radius:8px;\">\n      <div class=\"card-body\">\n        <h3 class=\"text-center text-danger pb-4 pt-3\">\n          Page Does not Exists\n        </h3>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/post.component.css":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/post.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    margin-top: 6%;\r\n}\r\n.btn{\r\n    border-radius: 4px;\r\n}\r\n.card{\r\n    border-radius: 8px;\r\n}\r\n.fa{\r\n    margin: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG59XHJcbi5idG57XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLmZhe1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/posts/post.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/posts/post.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner *ngIf=\"isLoading\"></app-spinner>\n\n\n<div class=\"body\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h4 style=\"color:royalblue\">Say Something</h4>\n    </div>\n    <div class=\"card-body\">\n      <form #form=\"ngForm\" (ngSubmit)=\"createPost(form)\">\n        <div class=\"form-group\">\n         \n          <textarea ngModel name=\"text\" #text=\"ngModel\" class=\"form-control\" id=\"\" cols=\"5\" rows=\"\"></textarea>\n          <p *ngIf=\"errors.text\" class=\"text-danger\">{{errors.text}}</p>\n        </div>\n        <input class=\"btn btn-primary\" type=\"submit\">\n      </form>\n    </div>\n  </div>\n\n  <div *ngFor=\"let post of posts\">\n    <div class=\"\">\n      <div class=\"card \" style=\"margin-top:20px;\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"\"><img src=\"//placehold.it/100\" alt=\"\" style=\"border-radius:50%\"></div>\n            </div>\n            <div class=\"col-md-4\">\n              <h2>{{post.text}}</h2>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"row\">\n                <i class=\"fa fa-thumbs-o-up fa-lg\" (click)=\"likePost(post)\" aria-hidden=\"true\" data-toggle=\"modal\"\n                  data-target=\"#likeModal\"></i>\n                <div>{{post.likes.length}}</div>\n                <i class=\"fa fa-thumbs-o-down fa-lg\" (click)=\"unlikePost(post)\" aria-hidden=\"true\" data-toggle=\"modal\"\n                  data-target=\"#UnlikeModal\"></i>\n             \n                <i class=\"fa fa-trash-o fa-lg \" style=\"color:red;\" (click)=\"deletePost(post._id)\" data-toggle=\"modal\"\n                  data-target=\"#exampleModalLong\" aria-hidden=\"true\"></i>\n                <button class=\"btn btn-sm btn-info\" (click)=\"comment(post)\">comment</button>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\n      aria-hidden=\"true\" style=\"border-radius:8px;\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title text-primary\" id=\"exampleModalLongTitle\">Alert Box</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div *ngIf=\"errors.Unauthorize;then unauthorize else success\"></div>\n          <ng-template #unauthorize>\n            <h2 class=\"modal-body bg-light text-danger\">{{errors.Unauthorize}}</h2>\n          </ng-template>\n          <ng-template #success>\n            <h2 class=\"modal-body bg-light text-success\">Post Sucessfully Deleted</h2>\n          </ng-template>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reLoadPage()\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"modal fade\" id=\"likeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalTitle\"\n      aria-hidden=\"true\" style=\"border-radius:8px;\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title text-primary\" id=\"exampleModalTitle\">Alert Box</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div *ngIf=\"errors.alreadyliked;then alreadyliked else liked\"></div>\n          <ng-template #alreadyliked>\n            <h2 class=\"modal-body bg-light text-warning\">{{errors.alreadyliked}}</h2>\n          </ng-template>\n          <ng-template #liked>\n            <h2 class=\"modal-body bg-light text-success\">You Liked the post</h2>\n          </ng-template>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reLoadPage()\" data-dismiss=\" modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"modal fade\" id=\"UnlikeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleUnModalTitle\"\n      aria-hidden=\"true\" style=\"border-radius:8px;\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title text-primary\" id=\"exampleUnModalTitle\">Alert Box</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div *ngIf=\"errors.notLiked;then notLiked else Unlike\"></div>\n          <ng-template #notLiked>\n            <h2 class=\"modal-body bg-light text-danger\">{{errors.notLiked}}</h2>\n          </ng-template>\n          <ng-template #Unlike>\n            <h2 class=\"modal-body bg-light text-success\">You Unlike the post</h2>\n          </ng-template>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reLoadPage()\" data-dismiss=\" modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/posts/post.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/posts/post.component.ts ***!
  \****************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/posts.service */ "./src/app/service/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var PostComponent = /** @class */ (function () {
    function PostComponent(postService, router, flashMessage) {
        this.postService = postService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.isLoading = true;
        this.errors = {};
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.fetchPosts()
            .subscribe(function (posts) {
            _this.Spinner();
            _this.posts = posts;
        }, function (err) {
            _this.Spinner();
        });
    };
    PostComponent.prototype.createPost = function (form) {
        var _this = this;
        this.Spinner();
        console.log(form.value);
        this.postService.createPost(form.value)
            .subscribe(function (post) {
            _this.Spinner();
            _this.reLoadPage();
        }, function (err) {
            _this.Spinner();
            _this.errors = err.error;
        });
    };
    PostComponent.prototype.likePost = function (post) {
        var _this = this;
        this.Spinner();
        this.postService.likePost(post)
            .subscribe(function (like) {
            _this.Spinner();
        }, function (err) {
            _this.errors = err.error;
            _this.Spinner();
        });
    };
    PostComponent.prototype.unlikePost = function (post) {
        var _this = this;
        this.Spinner();
        this.postService.unlikePost(post)
            .subscribe(function (like) {
            _this.Spinner();
        }, function (err) {
            _this.errors = err.error;
            _this.Spinner();
        });
    };
    PostComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.Spinner();
        this.postService.deletePost(id)
            .subscribe(function (success) {
            _this.Spinner();
        }, function (err) {
            _this.errors = err.error;
            _this.Spinner();
        });
        this.errors = {};
    };
    PostComponent.prototype.comment = function (post) {
        console.log(post);
        this.router.navigate(["/post/" + post._id]);
    };
    PostComponent.prototype.Spinner = function () {
        this.isLoading = !this.isLoading;
    };
    PostComponent.prototype.reLoadPage = function () {
        window.location.href = "/posts";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PostComponent.prototype, "like", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/posts/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/posts/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\r\n    margin-top:100px;\r\n}\r\n.btn-info{\r\n    border-radius: 6px;\r\n    margin: 6px;\r\n}\r\n.btn-primary{\r\n    margin: 3px;\r\n    border-radius: 2px;\r\n}\r\n.btn-danger{\r\n    border-radius: 3px;\r\n}\r\n.row{\r\n    margin: 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHtcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbn1cclxuLmJ0bi1pbmZve1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbn1cclxuLmJ0bi1wcmltYXJ5e1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLmJ0bi1kYW5nZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbjogMXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner *ngIf=\"isLoading\"></app-spinner>\n<div *ngIf=\"errors.noProfile;then noProfile else showProfile\"></div>\n<ng-template #noProfile>\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <div class=\"card top\" style=\"border-radius: 10px;\">\n        <div class=\"card-body text-center\">\n          <h2 class=\"card-title text-primary \">It seems you do not have a profile</h2>\n          <h5>Create one</h5>\n          <button class=\"btn btn-info\" (click)=\"createProfile()\">Create profile</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #showProfile>\n  <h1>Dash Board</h1>\n  <h5>Welcome <span class=\"text-primary\">{{user.name}}</span></h5>\n  <hr>\n  <div class=\"row\">\n    <button routerLink='/editProfile' class=\"btn btn-sm btn-primary\">\n      <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\n      Edit profile\n    </button>\n    <button routerLink=\"/addEducation\" class=\"btn btn-sm btn-primary\">\n      <i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\n      Add Education\n    </button>\n    <button routerLink=\"/addExperience\" class=\"btn btn-sm btn-primary\">\n      <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n      Add Experience\n    </button>\n  </div>\n  <hr>\n  <h4>Experience Credentials</h4>\n\n  <table class=\"table\">\n    <thead class=\"thead\">\n      <tr>\n        <!-- <th scope=\"col\">NO'</th> -->\n        <th scope=\"col\">Company</th>\n        <th scope=\"col\">Title</th>\n        <th scope=\"col\">Years</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let exp of experience\">\n        <!-- <th scope=\"row\">{{count+1}}</th> -->\n        <td>{{exp.company}}</td>\n        <td>{{exp.title}}</td>\n        <td>{{exp.from | date}}</td>\n        <td><button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#deleteExp\">Delete</button>\n        </td>\n        <!-- Delete Experience Modal -->\n        <div class=\"modal fade\" id=\"deleteExp\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteExpTitle\"\n          aria-hidden=\"true\" style=\"border-radius:8px;\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title text-primary\" id=\"exampleModalLongTitle\">\n                  Are You Sure?\n                </h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">No</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)='deleteExp(exp._id)'>\n                  Yes</button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </tr>\n    </tbody>\n  </table>\n  <hr>\n\n  <h4>Education Credentials</h4>\n\n  <table class=\"table\">\n    <thead class=\"thead\">\n      <tr>\n        <!-- <th scope=\"col\">NO'</th> -->\n        <th scope=\"col\">School</th>\n        <th scope=\"col\">Degree</th>\n        <th scope=\"col\">Years</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let edu of education\">\n        <!-- <th scope=\"row\">{{count+1}}</th> -->\n        <td>{{edu.school}}</td>\n        <td>{{edu.degree}}</td>\n        <td>{{edu.from | date}}</td>\n        <td>\n          <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">Delete</button>\n        </td>\n        <!-- Delete Education Modal -->\n        <div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\"\n          aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\" style=\"border-radius:8px;\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title text-primary\" id=\"exampleModalLongTitle\">\n                  Are You Sure\n                </h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">No</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)='deleteEdu(edu._id)'>Yes</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </tr>\n    </tbody>\n  </table>\n  <button class=\"btn btn-danger\" style=\"margin:10px;\" (click)='deleteACC()'>Delete Account</button>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/profile.service */ "./src/app/service/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        this.isLoading = true;
        this.errors = {};
        // There is no need to declare user Object but 
        //i am getting a undifined error while parsing 'profile.user.name'
        // so to not get this error i am declaring a user object
        this.user = {};
        this.experience = [];
        this.education = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.currentProfile()
            .subscribe(function (profile) {
            _this.userProfile = profile;
            _this.user = profile.user;
            _this.experience = profile.experience;
            _this.education = profile.education;
            _this.Spinner();
        }, function (err) {
            _this.Spinner();
            _this.errors = err.error;
        });
    };
    ProfileComponent.prototype.createProfile = function () {
        this.router.navigate(['/createProfile']);
    };
    ProfileComponent.prototype.deleteExp = function (id) {
        var _this = this;
        this.Spinner();
        this.profileService.deleteExperience(id)
            .subscribe(function () {
            _this.reloadPage();
            _this.Spinner();
        });
    };
    ProfileComponent.prototype.deleteEdu = function (id) {
        var _this = this;
        this.Spinner();
        this.profileService.deleteEducation(id)
            .subscribe(function () {
            _this.reloadPage();
            _this.Spinner();
        });
    };
    ProfileComponent.prototype.deleteACC = function () {
        var _this = this;
        this.profileService.deleteAccount()
            .subscribe(function () {
            localStorage.removeItem('token');
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.Spinner = function () {
        this.isLoading = !this.isLoading;
    };
    ProfileComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profiles/profiles.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/profiles/profiles.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-box{\r\n    display: flex;\r\n   \r\n}\r\n.skills{\r\n    margin-left:auto;\r\n}\r\n.list-group > *.list-group-item{\r\n background-color: #008080; \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlcy9wcm9maWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYzs7Q0FFakI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlcy9wcm9maWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgXHJcbn1cclxuLnNraWxsc3tcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbn1cclxuLmxpc3QtZ3JvdXAgPiAqLmxpc3QtZ3JvdXAtaXRlbXtcclxuIGJhY2tncm91bmQtY29sb3I6ICMwMDgwODA7IFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/profiles/profiles.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/profiles/profiles.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner *ngIf=\"isLoading\"></app-spinner>\n<div *ngFor=\"let profile of profiles\">\n  <div class=\"card\" style=\"margin-top:20px;\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-4\"><img [src]=\"profile.user.profilepicture\" alt=\"\"></div>\n        <div class=\"col-md-4 mx-auto\">\n          <h5 class=\"card-title\">{{profile.user.name}}</h5>\n          <p class=\"card-text\">{{profile.bio}}</p>\n          <button (click)=\"viewProfile(profile.handle)\" class=\"btn btn-primary\">View profile</button>\n        </div>\n        <div class=\"col-md-4 mx-auto\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item text-center\">\n              <header>Skill Set</header>\n            </li>\n            <li class=\"list-group-item\">{{profile.skills[0]}}</li>\n            <li class=\"list-group-item\">{{profile.skills[1]}}</li>\n            <li class=\"list-group-item\">{{profile.skills[2]}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profiles/profiles.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/profiles/profiles.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function() { return ProfilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/profile.service */ "./src/app/service/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfilesComponent = /** @class */ (function () {
    function ProfilesComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        this.image = '../../../asset/demo.jpg';
        this.isLoading = true;
        this.users = {};
    }
    ProfilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.allProfile()
            .subscribe(function (profiles) {
            _this.profiles = profiles;
            _this.isLoading = false;
        });
    };
    ProfilesComponent.prototype.viewProfile = function (handle) {
        this.router.navigate(["/profile/" + handle]);
    };
    ProfilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profiles',
            template: __webpack_require__(/*! ./profiles.component.html */ "./src/app/components/profiles/profiles.component.html"),
            styles: [__webpack_require__(/*! ./profiles.component.css */ "./src/app/components/profiles/profiles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfilesComponent);
    return ProfilesComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\r\n    margin-top: 5%;\r\n}\r\n.form-control{\r\n    border-radius:5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3B7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row top\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\" style=\"border-radius:8px;\">\n      <div class=\"card-body\">\n        <h3 class=\"text-center text-primary pb-4 pt-3\">\n          Register\n        </h3>\n\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n          <div class=\"form-group\">\n            <label for=\"name\">\n              Name\n              <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n            </label>\n            <input formControlName=\"name\" type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Enter name\">\n            <div *ngIf=\"errors.name\" class=\"text-danger\">{{errors.name}}</div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\">\n              Email\n              <i class=\"fa fa-envelope-o fa-lg\" aria-hidden=\"true\"></i>\n            </label>\n            <input formControlName=\"email\" type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Enter Email\">\n            <div *ngIf=\"errors.email\" class=\"text-danger\">{{errors.email}}</div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"password\">\n              Password\n              <i class=\"fa fa-cog fa-lg\" aria-hidden=\"true\"></i>\n            </label>\n            <input formControlName=\"password\" type=\"password\" id=\"password\" class=\"form-control\"\n              placeholder=\"Enter Password\">\n            <div *ngIf=\"errors.password\" class=\"text-danger\">{{errors.password}}</div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"password2\">\n              Password\n              <i class=\"fa fa-cogs fa-lg\" aria-hidden=\"true\"></i>\n            </label>\n            <input formControlName=\"password2\" type=\"password\" id=\"password2\" class=\"form-control\"\n              placeholder=\"ReEnter password\">\n            <div *ngIf=\"errors.password2\" class=\"text-danger\">{{errors.password2}}</div>\n          </div>\n\n          <input type=\"submit\" class=\" btn btn-block btn-primary\">\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errors = {};
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function () {
        var _this = this;
        this.user = {
            name: this.registerForm.value.name,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
            password2: this.registerForm.value.password2
        };
        this.userService.registerUser(this.user)
            .subscribe(function () {
            _this.router.navigate(['/login']);
        }, function (err) {
            _this.errors = err.error;
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/single-post/single-post.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/single-post/single-post.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mar{\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;;\r\n}\r\n.btn{\r\n    border-radius: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OztcclxufVxyXG4uYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/single-post/single-post.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/single-post/single-post.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"/posts\" class=\"btn btn-primary mar\">Go Back</button>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n<div class=\"card\">\n  <div class=\"card-header text-primary\">\n    <h5 class=\"text-center\">Write comment on this post</h5 >\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <img src=\"//placehold.it/150\" alt=\"\" style=\"border-radius:50%\">\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{post.text}}</h3>\n        <div class=\"col-md-6\">{{post.date|date}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"body\">\n  <div class=\"card\" style=\"margin-top:20px;\">\n    <h4 class=\"card-header text-primary\">Make a comment on the Post</h4>\n    <div class=\"card-body\">\n      <form #form=\"ngForm\" (ngSubmit)=\"createComment(form)\">\n        <div class=\"form-group\">\n          <textarea ngModel name=\"text\" #text=\"ngModel\" id=\"\" cols=\"5\" rows=\"\" class=\"form-control\"></textarea>\n        </div>\n        <input class=\"btn btn-primary\" type=\"submit\">\n      </form>\n    </div>\n  </div>\n\n  <div *ngFor=\"let comment of post.comments\" style=\"margin-top:18px;\">\n    <div class=\"card w-75\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{comment.text}}</h5>\n        <p class=\"card-text\">{{comment.date|date}}</p>\n        <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">Delete</button>\n      </div>\n    </div>\n\n    <!-- Delete Modal -->\n    <div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\n      aria-hidden=\"true\" style=\"border-radius:8px;\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title text-primary\" id=\"exampleModalLongTitle\">\n              Are You Sure?\n            </h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">No</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteComment(comment._id)\">Yes</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/single-post/single-post.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/single-post/single-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: SinglePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostComponent", function() { return SinglePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/posts.service */ "./src/app/service/posts.service.ts");




var SinglePostComponent = /** @class */ (function () {
    function SinglePostComponent(activatedRoute, postService, router) {
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.router = router;
        this.isLoading = true;
        this.errors = {};
        this.post = {};
        this.postId = this.activatedRoute.snapshot.params['id'];
    }
    SinglePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log((this.postId));
        this.postService.getPostbyId(this.postId)
            .subscribe(function (post) {
            _this.post = post;
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
        });
    };
    SinglePostComponent.prototype.createComment = function (form) {
        var _this = this;
        this.postService.createComment(form.value, this.postId)
            .subscribe(function (success) {
            _this.isLoading = false;
            _this.reloadPage();
        }, function (err) {
            _this.errors = err.error;
        });
    };
    SinglePostComponent.prototype.deleteComment = function (id) {
        var _this = this;
        this.postService.deleteComment(this.postId, id)
            .subscribe(function (success) {
            _this.reloadPage();
        }, function (err) {
            _this.errors = err.error;
        });
    };
    SinglePostComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    SinglePostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-post',
            template: __webpack_require__(/*! ./single-post.component.html */ "./src/app/components/single-post/single-post.component.html"),
            styles: [__webpack_require__(/*! ./single-post.component.css */ "./src/app/components/single-post/single-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_service_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SinglePostComponent);
    return SinglePostComponent;
}());



/***/ }),

/***/ "./src/app/components/spinner/spinner.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n.v-loading-indicator {\r\n  position: fixed !important;\r\n  box-sizing: border-box;\r\n  opacity: 0.8;\r\n  z-index: 99999;\r\n  left: 50%;\r\n  top: 50%;\r\n  pointer-events: none;\r\n  width: 100px;\r\n  height: 100px;\r\n  margin-left: -50px;\r\n  margin-top: -50px;\r\n  border: 20px solid gray;\r\n  border-radius: 50%;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n.v-loading-indicator:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  left: -15px;\r\n  top: -18px;\r\n  pointer-events: none;\r\n  width: 90px;\r\n  height: 90px;\r\n  border: 15px solid transparent;\r\n  border-top: 15px solid #0000FF;\r\n  border-radius: 50%;\r\n}\r\n\r\n@keyframes spin { 100% { transform: rotate(360deg); } } */\r\nbody{\r\n  background-color: #2E5266;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.spinner-container{\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  -webkit-transform: scale(.8);\r\n          transform: scale(.8);}\r\n.spinners{\r\n  position: relative;\r\n  border-radius: 50%;\r\n  width: 80px;\r\n  height: 80px;\r\n   border: 1px solid rgba(#D3D0CB, .1);\r\n  -webkit-animation: spinner-anima 2s ease-in-out infinite;\r\n          animation: spinner-anima 2s ease-in-out infinite;\r\n}\r\n.spinner{\r\n    box-shadow: 1px 1px 3px #223D4C;\r\n    position: absolute;\r\n    left: calc(50% - 7px); \r\n    width: 14px;\r\n    height: 14px;\r\n    border-radius: 50%;\r\n    -webkit-transform-origin: 7px 40px;\r\n            transform-origin: 7px 40px;\r\n    -webkit-animation: spinner-anima 2s ease-in-out infinite;\r\n            animation: spinner-anima 2s ease-in-out infinite;\r\n  }\r\n.spinner-01{\r\n    background-color: #E2C044;\r\n  }\r\n.spinner-02{\r\n    background-color: #D3D0CB;}\r\n.spinner-03{\r\n    background-color: #9FB1BC;}\r\n@-webkit-keyframes spinner-anima {\r\n      0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n      }\r\n      100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n      }\r\n    }\r\n@keyframes spinner-anima {\r\n      0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n      }\r\n      100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n      }\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBZ0MwRDtBQUMxRDtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsVUFBVTtDQUNYO0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLDZCQUFxQjtVQUFyQixxQkFBcUIsQ0FBQztBQUV4QjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7R0FDWixvQ0FBb0M7RUFDckMseURBQWlEO1VBQWpELGlEQUFpRDtDQUNsRDtBQUVDO0lBQ0UsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQix5REFBaUQ7WUFBakQsaURBQWlEO0dBQ2xEO0FBRUQ7SUFDRSwwQkFBMEI7R0FDM0I7QUFDRDtJQUNFLDBCQUEwQixDQUFDO0FBQzdCO0lBQ0UsMEJBQTBCLENBQUM7QUFFM0I7TUFDRTtRQUNFLGdDQUF3QjtnQkFBeEIsd0JBQXdCO09BQ3pCO01BQ0Q7UUFDRSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtPQUMzQjtLQUNGO0FBUEQ7TUFDRTtRQUNFLGdDQUF3QjtnQkFBeEIsd0JBQXdCO09BQ3pCO01BQ0Q7UUFDRSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtPQUMzQjtLQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxyXG4udi1sb2FkaW5nLWluZGljYXRvciB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICBib3JkZXI6IDIwcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLnYtbG9hZGluZy1pbmRpY2F0b3I6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGxlZnQ6IC0xNXB4O1xyXG4gIHRvcDogLTE4cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGJvcmRlcjogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wOiAxNXB4IHNvbGlkICMwMDAwRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9ICovXHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFNTI2NjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLjgpO31cclxuXHJcbi5zcGlubmVyc3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgjRDNEMENCLCAuMSk7XHJcbiAgYW5pbWF0aW9uOiBzcGlubmVyLWFuaW1hIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcbiBcclxuICAuc3Bpbm5lcntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICMyMjNENEM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDdweCk7IFxyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA3cHggNDBweDtcclxuICAgIGFuaW1hdGlvbjogc3Bpbm5lci1hbmltYSAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5zcGlubmVyLTAxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyQzA0NDtcclxuICB9XHJcbiAgLnNwaW5uZXItMDJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEMENCO31cclxuICAuc3Bpbm5lci0wM3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5RkIxQkM7fVxyXG5cclxuICAgIEBrZXlmcmFtZXMgc3Bpbm5lci1hbmltYSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"v-loading-indicator\"></div> -->\r\n<div class=\"spinner-container\">\r\n    <div class=\"spinners\">\r\n      <div class=\"spinner spinner-01\">\r\n        <div class=\"spinner spinner-02\">\r\n          <div class=\"spinner spinner-03\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/components/spinner/spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/components/view-profile/view-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/view-profile/view-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img{\r\n    border-radius: 50%;\r\n}\r\n.mar{\r\n    margin-top: 20px;;\r\n}\r\n.flex-box{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LXByb2ZpbGUvdmlldy1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwrQkFBK0I7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXctcHJvZmlsZS92aWV3LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLm1hcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7O1xyXG59XHJcbi5mbGV4LWJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/view-profile/view-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/view-profile/view-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner *ngIf=\"isLoading\"></app-spinner>\n<div class=\"card text-white bg-primary mb-3 mar\" style=\"margin-top:20px;\">\n  <div class=\"card-body\">\n    <div class=\"text-center\">\n      <img class=\"img\" [src]=\"user.profilepicture\" alt=\"\">\n      <h2 class=\"card-title\">{{user.name}}</h2>\n      <p class=\"card-text\">{{profile.bio}}</p>\n      <h6>{{profile.location}}</h6>\n    </div>\n  </div>\n</div>\n\n<div class=\"card text-white bg-primary mb-3\">\n  <div class=\"card-body\">\n    <h3 class=\"text-center\">{{user.name}} Bio</h3>\n    <h5>{{profile.bio}}</h5>\n  </div>\n</div>\n\n<div class=\"card text-white bg-primary mb-3 \">\n  <div class=\"card-body\">\n    <h3 class=\"text-center\">Skill Set</h3>\n    <div>\n      <div class=\"row\">\n        <ul *ngFor=\"let skill of skills\">\n          <li>\n            <p>{{skill}}</p>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<h2 class=\"text-center text-info\">Experience</h2>\n<div class=\"flex-box\">\n  <div *ngFor=\"let exp of experience\">\n    <div class=\"card-group\">\n      <div class=\"card bg-primary text-white\" style=\" border-radius: 5px;\">\n        <div class=\"card-body\">\n          <div class=\"card-body\">\n            <h5>{{exp.company}}</h5>\n            <p>{{exp.title}}</p>\n            <p>{{exp.description}}</p>\n            <p>{{exp.location}}</p>\n            <p>{{exp.from|date}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<h2 class=\"text-center text-info\">Education</h2>\n<div class=\"flex-box\">\n  <div *ngFor=\"let edu of education\">\n    <div class=\"card-group\">\n      <div class=\"card bg-primary text-white\" style=\" border-radius: 5px;\">\n        <div class=\"card-body\">\n          <div class=\"card-body\">\n            <h5>{{edu.school}}</h5>\n            <h5>{{edu.degree}}</h5>\n            <p>{{edu.description}}</p>\n            <p>{{edu.fieldofstudy}}</p>\n            <p>{{edu.from|date}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/view-profile/view-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/view-profile/view-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ViewProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function() { return ViewProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/profile.service */ "./src/app/service/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewProfileComponent = /** @class */ (function () {
    function ViewProfileComponent(profileService, activatedRoute) {
        this.profileService = profileService;
        this.activatedRoute = activatedRoute;
        this.isLoading = true;
        this.skill = [];
        this.experience = [];
        this.education = [];
        this.user = {};
        this.handle = this.activatedRoute.snapshot.params['handle'];
    }
    ViewProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileByHandle(this.handle)
            .subscribe(function (profile) {
            _this.profile = profile;
            _this.user = _this.profile.user;
            _this.skill = _this.profile.skills;
            _this.experience = _this.profile.experience;
            _this.education = _this.profile.education;
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
        });
    };
    ViewProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-profile',
            template: __webpack_require__(/*! ./view-profile.component.html */ "./src/app/components/view-profile/view-profile.component.html"),
            styles: [__webpack_require__(/*! ./view-profile.component.css */ "./src/app/components/view-profile/view-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewProfileComponent);
    return ViewProfileComponent;
}());



/***/ }),

/***/ "./src/app/service/posts.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/posts.service.ts ***!
  \******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this.url = "/api/posts";
    }
    PostsService.prototype.fetchPosts = function () {
        return this.http.get(this.url);
    };
    PostsService.prototype.getPostbyId = function (id) {
        return this.http.get(this.url + "/" + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    PostsService.prototype.createComment = function (comment, id) {
        return this.http.post(this.url + "/comment/" + id, comment, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    PostsService.prototype.createPost = function (post) {
        return this.http.post(this.url, post, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    PostsService.prototype.deletePost = function (id) {
        return this.http.delete(this.url + "/" + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    PostsService.prototype.deleteComment = function (postId, comId) {
        return this.http.delete(this.url + "/comment/" + postId + "/" + comId, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    PostsService.prototype.likePost = function (post) {
        return this.http.post(this.url + '/like/' + post._id, post, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    PostsService.prototype.unlikePost = function (post) {
        return this.http.post(this.url + '/unlike/' + post._id, post, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    PostsService.prototype.getUserPayload = function () {
        var token = localStorage.getItem('token');
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        return null;
    };
    Object.defineProperty(PostsService.prototype, "Token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/service/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.url = "/api/profile";
    }
    ProfileService.prototype.allProfile = function () {
        return this.http.get(this.url + '/all');
    };
    ProfileService.prototype.currentProfile = function () {
        return this.http.get(this.url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    ProfileService.prototype.postProfile = function (Profile) {
        return this.http.post(this.url, Profile, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    ProfileService.prototype.getProfileByHandle = function (handle) {
        return this.http.get(this.url + "/handle/" + handle);
    };
    ProfileService.prototype.postExperience = function (exp) {
        return this.http.post(this.url + '/experience', exp, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    ProfileService.prototype.postEducation = function (edu) {
        return this.http.post(this.url + '/education', edu, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    ProfileService.prototype.deleteExperience = function (id) {
        return this.http.delete(this.url + '/experience/:' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    ProfileService.prototype.deleteEducation = function (id) {
        return this.http.delete(this.url + '/education/:' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    ProfileService.prototype.deleteAccount = function () {
        return this.http.delete(this.url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.Token)
        });
    };
    Object.defineProperty(ProfileService.prototype, "Token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = '/api/users';
    }
    UserService.prototype.registerUser = function (User) {
        return this.http.post(this.url + '/register', User);
    };
    UserService.prototype.loginUser = function (authCredentials) {
        return this.http.post(this.url + '/login', authCredentials);
    };
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    Object.defineProperty(UserService.prototype, "Token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.isLoggedin = function () {
        return !!localStorage.getItem('token');
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ruhail pc\Desktop\Projects\Blog\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map