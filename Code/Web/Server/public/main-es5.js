(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"container-fulid margin-top-50px\">\r\n  <toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n  <div class=\"col-sm-2 padding-lr-0 hidden-xs\" *ngIf=\"authService.loggedIn()\">\r\n    <app-sidemenu></app-sidemenu>\r\n  </div>\r\n  <div\r\n    [ngClass]=\"{\r\n      'col-sm-10': authService.loggedIn(),\r\n      'col-sm-12': !authService.loggedIn()\r\n    }\"\r\n    id=\"contentContainer\"\r\n  >\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/apartment/apartment.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/apartment/apartment.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <h2 class=\"pull-left\">Tenant</h2>\r\n            <button *ngIf=\"(authService.getUserType() === 'admin')\" class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n          </div>\r\n        </div>\r\n        <form>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label>First Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.firstName\" name=\"firstName\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label>Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lastName\" name=\"lastName\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label>Phone</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.phone\" name=\"phone\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label>Username</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label>Date of Join</label>\r\n                <input type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" [bsConfig]=\"{ dateInputFormat: 'MM-DD-YYYY', containerClass: 'theme-red' }\"\r\n                  bsDatepicker [(ngModel)]=\"user.dateOfJoin\" name=\"dateOfJoin\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label>Confirm Password</label>\r\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.cnfpassword\" name=\"cnfpassword\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-2\" *ngIf=\"this.isNew\"  >\r\n              <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n            </div>\r\n            <div class=\"col-sm-2\" *ngIf=\"!this.isNew\">\r\n              <button class=\"btn btn-primary form-control\" type=\"button\"  (click)=\"update()\">Update</button>\r\n            </div>\r\n            <div class=\"col-sm-2\"  *ngIf=\"(authService.getUserType() === 'admin')\">\r\n              <button class=\"btn btn-danger form-control\" type=\"button\" (click)=\"delete()\">Vacate</button>\r\n            </div>\r\n            <div class=\"col-sm-2\" >\r\n              <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/header/header.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/header/header.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-color margin-bottom-0 hidden-sm hidden-xs navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" *ngIf=\"authService.loggedIn()\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">SDL</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar\" [ngbCollapse]=\"isCollapsed\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li *ngIf=\"authService.loggedIn()\"><a href=\"#\">Hi, {{getUsername()}}</a></li>\r\n        </ul>\r\n      </div>\r\n      <!--/.nav-collapse -->\r\n    </div>\r\n  </nav>\r\n  \r\n  <nav class=\"navbar navbar-color margin-bottom-0 hidden-md hidden-lg\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" *ngIf=\"authService.loggedIn()\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <span class=\"nav-name\">{{name}}</span>\r\n        <a class=\"navbar-brand\" href=\"#\">SDL</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar\" [ngbCollapse]=\"isCollapsed\">\r\n        <ul class=\"nav navbar-nav navbar-left\">\r\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/home']\">Home</a></li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n        </ul>\r\n      </div>\r\n      <!--/.nav-collapse -->\r\n    </div>\r\n  </nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/sidemenu/sidemenu.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/sidemenu/sidemenu.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-navbar\">\r\n    <ul class=\"list-group\">\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact : true }\"\r\n            class=\"list-group-item\" [routerLink]=\"['/home']\">Home</li>\r\n        <li *ngIf=\"authService.loggedIn() && (authService.getUserType() !== 'admin')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact : true }\"\r\n            class=\"list-group-item\" [routerLink]=\"['/apartment']\">Profile</li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact : true }\"\r\n            class=\"list-group-item\" (click)=\"onLogoutClick()\">Logout</li>\r\n    </ul>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"authService.getUserType() === 'admin'\">\r\n  <div *ngIf=\"rooms.length <= 0\">\r\n    <div class=\"wrapper\">\r\n      <button class=\"btn btn-primary\" (click)=\"openModal(template)\">\r\n        Create Rooms\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"rooms.length > 0\">\r\n    <div class=\"row margin-top-20px\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\">Search Room</span>\r\n          <input type=\"text\" class=\"form-control\" id=\"search\" aria-describedby=\"basic-addon3\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <button class=\"btn btn-primary\" (click)=\"openModal(template)\">\r\n          Create Rooms\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row margin-top-5px\">\r\n      <div class=\"col-sm-3\" *ngFor=\"let room of rooms\">\r\n        <div class=\"border-style text-center\">\r\n          <div>\r\n            <img src=\"assets/images/door.jpg\" class=\"door\" (click)=\"goToApartment(room._id,room.user)\" />\r\n          </div>\r\n          <p [ngClass]=\"\r\n              room.isVacant == true ? 'label label-success' : 'label label-info'\r\n            \">\r\n            {{ room.roomnumber }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #template>\r\n    <div class=\"modal-body\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Create Rooms</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label>Enter Floor Number</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"floornumber\" name=\"floornumber\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label>Enter Number of Rooms</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"roomscount\" name=\"roomscount\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">\r\n          Close\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createRooms()\">\r\n          Create\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<div *ngIf=\"authService.getUserType() !== 'admin'\">\r\n  <div class=\"wrapper\">\r\n    <p>Page Under Construction!</p>\r\n  </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-4 col-sm-offset-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"page-header text-center\">\r\n        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Login\r\n      </h2>\r\n      <form (submit)=\"onLoginSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label>Username</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            [(ngModel)]=\"username\"\r\n            name=\"username\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Password</label>\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            [(ngModel)]=\"password\"\r\n            name=\"password\"\r\n          />\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4 col-sm-offset-4\">\r\n            <input\r\n              type=\"submit\"\r\n              class=\"btn btn-primary form-control\"\r\n              value=\"Login\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 col-sm-offset-3  margin-top-20px\">\r\n          <input\r\n            type=\"submit\"\r\n            class=\"btn btn-primary form-control\"\r\n            (click)=\"openModal(template)\"\r\n            value=\"Forgot Password\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #template>\r\n  <div class=\"modal-body\">\r\n    <div class=\"modal-header\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        data-dismiss=\"modal\"\r\n        aria-label=\"Close\"\r\n        (click)=\"closeModal()\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <h4 class=\"modal-title\" id=\"myModalLabel\">Forgot Password</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              [(ngModel)]=\"fusername\"\r\n              name=\"fusername\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-default\"\r\n        data-dismiss=\"modal\"\r\n        (click)=\"closeModal()\"\r\n      >\r\n        Close\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"sendMail()\">\r\n        Send\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/common/auth.service */ "./src/app/services/common/auth.service.ts");
            /* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authService) {
                    this.authService = authService;
                    this.title = "SDL";
                    this.config = new angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]({
                        positionClass: "toast-bottom-right",
                        animation: "fade"
                    });
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-root",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: getToken, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function () { return getToken; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
            /* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/common/auth.service */ "./src/app/services/common/auth.service.ts");
            /* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
            /* harmony import */ var _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/common/header/header.component */ "./src/app/components/common/header/header.component.ts");
            /* harmony import */ var _components_common_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/common/sidemenu/sidemenu.component */ "./src/app/components/common/sidemenu/sidemenu.component.ts");
            /* harmony import */ var _components_apartment_apartment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/apartment/apartment.component */ "./src/app/components/apartment/apartment.component.ts");
            var appRoutes = [
                { path: "", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
                { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
                { path: "apartment", component: _components_apartment_apartment_component__WEBPACK_IMPORTED_MODULE_19__["ApartmentComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] }
            ];
            function getToken() {
                return localStorage.getItem("id_token");
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                        _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                        _components_common_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_18__["SidemenuComponent"],
                        _components_apartment_apartment_component__WEBPACK_IMPORTED_MODULE_19__["ApartmentComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
                            config: {
                                tokenGetter: getToken
                            }
                        }),
                        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                        angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterModule"].forRoot(),
                        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
                    ],
                    providers: [_services_common_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtHelperService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/apartment/apartment.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/apartment/apartment.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBhcnRtZW50L2FwYXJ0bWVudC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/apartment/apartment.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/apartment/apartment.component.ts ***!
          \*************************************************************/
        /*! exports provided: ApartmentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApartmentComponent", function () { return ApartmentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/auth.service */ "./src/app/services/common/auth.service.ts");
            /* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
            var ApartmentComponent = /** @class */ (function () {
                function ApartmentComponent(toasterService, router, authService, userService) {
                    this.toasterService = toasterService;
                    this.router = router;
                    this.authService = authService;
                    this.userService = userService;
                    this.user = {
                        "firstName": "",
                        "lastName": "",
                        "email": "",
                        "phone": "",
                        "username": "",
                        "password": "",
                        "dateOfJoin": "",
                        "cnfpassword": ""
                    };
                    this.isNew = true;
                    if (localStorage.getItem("userId") !== null && localStorage.getItem("userId") !== "null") {
                        this.getUserById(localStorage.getItem("userId"));
                        this.isNew = false;
                    }
                }
                ApartmentComponent.prototype.ngOnInit = function () {
                };
                ApartmentComponent.prototype.new = function () {
                    this.isNew = true;
                    this.user = {
                        "firstName": "",
                        "lastName": "",
                        "email": "",
                        "phone": "",
                        "username": "",
                        "password": "",
                        "dateOfJoin": "",
                        "cnfpassword": ""
                    };
                };
                ApartmentComponent.prototype.back = function () {
                    this.router.navigate(['home']);
                };
                ApartmentComponent.prototype.save = function () {
                    var _this = this;
                    if (this.user.firstName !== "" &&
                        this.user.lastName !== "" &&
                        this.user.email !== "" &&
                        this.user.phone !== "" &&
                        this.user.username !== "" &&
                        this.user.password !== "" &&
                        this.user.dateOfJoin !== "" &&
                        this.user.cnfpassword !== "") {
                        if (this.user.password === this.user.cnfpassword) {
                            this.user["type"] = "tenant";
                            this.user["roomId"] = localStorage.getItem("roomnumber");
                            this.userService.addUser(this.user).subscribe(function (data) {
                                if (data["success"]) {
                                    var toast = {
                                        type: 'success',
                                        title: 'Success',
                                        body: 'User saved successfully.',
                                        showCloseButton: true
                                    };
                                    _this.toasterService.pop(toast);
                                    _this.getUserById(data["id"]);
                                }
                                else {
                                    var toast = {
                                        type: "error",
                                        title: "Error",
                                        body: "User failed to added.",
                                        showCloseButton: true
                                    };
                                    _this.toasterService.pop(toast);
                                }
                            });
                        }
                        else {
                            var toast = {
                                type: 'error',
                                title: 'Error',
                                body: 'Password mismatch.',
                                showCloseButton: true
                            };
                            this.toasterService.pop(toast);
                        }
                    }
                    else {
                        var toast = {
                            type: 'error',
                            title: 'Error',
                            body: 'Please fill the all the details.',
                            showCloseButton: true
                        };
                        this.toasterService.pop(toast);
                    }
                };
                ApartmentComponent.prototype.getUserById = function (id) {
                    var _this = this;
                    this.userService.getUserById(id).subscribe(function (data) {
                        if (data !== null) {
                            _this.user.firstName = data["firstName"];
                            _this.user.lastName = data["lastName"];
                            _this.user.email = data["email"];
                            _this.user.phone = data["phone"];
                            _this.user.username = data["username"];
                            _this.user.password = data["password"];
                            _this.user.dateOfJoin = data["dateOfJoin"];
                        }
                        else {
                            var toast = {
                                type: 'error',
                                title: 'Error',
                                body: 'There is some issue please contact admin.',
                                showCloseButton: true
                            };
                            _this.toasterService.pop(toast);
                        }
                    });
                };
                ApartmentComponent.prototype.delete = function () {
                    var _this = this;
                    this.userService.deleteUser(localStorage.getItem("userId")).subscribe(function (data) {
                        if (data["success"]) {
                            var toast = {
                                type: 'success',
                                title: 'Success',
                                body: 'User deleted successfully.',
                                showCloseButton: true
                            };
                            _this.toasterService.pop(toast);
                            localStorage.removeItem("userId");
                            _this.new();
                        }
                        else {
                            var toast = {
                                type: 'error',
                                title: 'Error',
                                body: 'There is some issue please contact admin.',
                                showCloseButton: true
                            };
                            _this.toasterService.pop(toast);
                        }
                    });
                };
                ApartmentComponent.prototype.update = function () {
                    var _this = this;
                    this.userService.updateUser(this.user).subscribe(function (data) {
                        if (data["success"]) {
                            var toast = {
                                type: 'success',
                                title: 'Success',
                                body: 'User updated successfully.',
                                showCloseButton: true
                            };
                            _this.toasterService.pop(toast);
                            _this.getUserById(data["id"]);
                        }
                        else {
                            var toast = {
                                type: 'error',
                                title: 'Error',
                                body: 'There is some issue please contact admin.',
                                showCloseButton: true
                            };
                            _this.toasterService.pop(toast);
                        }
                    });
                };
                return ApartmentComponent;
            }());
            ApartmentComponent.ctorParameters = function () { return [
                { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_services_common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
            ]; };
            ApartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-apartment',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./apartment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/apartment/apartment.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./apartment.component.css */ "./src/app/components/apartment/apartment.component.css")).default]
                })
            ], ApartmentComponent);
            /***/ 
        }),
        /***/ "./src/app/components/common/header/header.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/components/common/header/header.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar-color{\r\n    background-color: #00adff;\r\n    border-color: #00adff;\r\n}\r\n.navbar-color .navbar-brand{\r\n    color: #fff;\r\n}\r\n.navbar-color li > a{\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n.navbar-color .navbar-nav > li > a:hover, .navbar-color .navbar-nav > li > a:focus {\r\n    background-color: transparent;\r\n    color: #FFF;\r\n}\r\n.navbar-color .navbar-toggle .icon-bar{\r\n    background-color: #fff;\r\n}\r\n.img-logo{\r\n    padding: 0!important;\r\n}\r\n.img-logo img{\r\n    width: 60px;\r\n    height: 30px;\r\n    margin: 10px; \r\n}\r\n.dropdown-menu li a:focus,.dropdown-menu li a:hover{\r\n    background-color: transparent;\r\n    color: #FFF;\r\n}\r\n.nav-name{\r\n    float: right;\r\n    color: white;\r\n    padding: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFkZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGFkZmY7XHJcbn1cclxuLm5hdmJhci1jb2xvciAubmF2YmFyLWJyYW5ke1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm5hdmJhci1jb2xvciBsaSA+IGF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhci1jb2xvciAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlciwgLm5hdmJhci1jb2xvciAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcbi5uYXZiYXItY29sb3IgLm5hdmJhci10b2dnbGUgLmljb24tYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaW1nLWxvZ297XHJcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZy1sb2dvIGltZ3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4OyBcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgbGkgYTpmb2N1cywuZHJvcGRvd24tbWVudSBsaSBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuLm5hdi1uYW1le1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/common/header/header.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/components/common/header/header.component.ts ***!
          \**************************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.isCollapsed = true;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                HeaderComponent.prototype.onLogoutClick = function () {
                    this.authService.logout();
                    console.log("Logout");
                    this.router.navigate(['/']);
                    this.isCollapsed = !this.isCollapsed;
                    return false;
                };
                HeaderComponent.prototype.getUsername = function () {
                    var user = JSON.parse(localStorage.getItem('user'));
                    if (user)
                        return user.username;
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/common/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/common/sidemenu/sidemenu.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/common/sidemenu/sidemenu.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".side-navbar{\r\n    padding: 0;\r\n    background-color: #333836;\r\n    color: #FFF;\r\n    position: fixed;\r\n    width: 16.66666667%;\r\n    height: 100%;\r\n}\r\n.side-navbar .list-group-item{\r\n    background-color: #d3d3d3!important;\r\n    margin-bottom: 5px;\r\n    border-radius: 0;\r\n    cursor: pointer;\r\n    color: black!important;\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9zaWRlbWVudS9zaWRlbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtbmF2YmFye1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM4MzY7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNpZGUtbmF2YmFyIC5saXN0LWdyb3VwLWl0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/common/sidemenu/sidemenu.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/components/common/sidemenu/sidemenu.component.ts ***!
          \******************************************************************/
        /*! exports provided: SidemenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function () { return SidemenuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SidemenuComponent = /** @class */ (function () {
                function SidemenuComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                SidemenuComponent.prototype.ngOnInit = function () { };
                SidemenuComponent.prototype.onResize = function (event) {
                    this.resizeSideMenu();
                };
                SidemenuComponent.prototype.ngAfterViewInit = function () {
                    this.resizeSideMenu();
                };
                SidemenuComponent.prototype.onLogoutClick = function () {
                    this.authService.logout();
                    console.log("Logout");
                    this.router.navigate(["/"]);
                };
                SidemenuComponent.prototype.resizeSideMenu = function () {
                    this.headerHeight = document.getElementsByClassName("navbar-color")[0]["offsetHeight"];
                    this.windowHeight = window.innerHeight;
                    document.getElementsByClassName("side-navbar")[0]["style"]["height"] =
                        this.windowHeight - this.headerHeight + "px";
                };
                return SidemenuComponent;
            }());
            SidemenuComponent.ctorParameters = function () { return [
                { type: _services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"])
            ], SidemenuComponent.prototype, "onResize", null);
            SidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-sidemenu",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidemenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/sidemenu/sidemenu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidemenu.component.css */ "./src/app/components/common/sidemenu/sidemenu.component.css")).default]
                })
            ], SidemenuComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".door{\r\n    height: 10em;\r\n}\r\n\r\n.wrapper {\r\n    width: 100%;\r\n    height: 400px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb29ye1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/auth.service */ "./src/app/services/common/auth.service.ts");
            /* harmony import */ var _services_room_room_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/room/room.service */ "./src/app/services/room/room.service.ts");
            /* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(modalService, router, authService, roomService, toasterService) {
                    this.modalService = modalService;
                    this.router = router;
                    this.authService = authService;
                    this.roomService = roomService;
                    this.toasterService = toasterService;
                    this.rooms = [];
                    this.getAllRooms();
                }
                HomeComponent.prototype.getAllRooms = function () {
                    var _this = this;
                    this.roomService.getRooms().subscribe(function (data) {
                        _this.rooms = data;
                    });
                };
                HomeComponent.prototype.ngOnInit = function () { };
                HomeComponent.prototype.openModal = function (template) {
                    this.modalRef = this.modalService.show(template, { class: "modal-md" });
                };
                HomeComponent.prototype.createRooms = function () {
                    var _this = this;
                    var newRooms = [];
                    for (var ind = 0; ind < this.roomscount; ind++) {
                        var room = {
                            roomnumber: this.floornumber + "-" + (ind + 1),
                            floor: this.floornumber,
                            isVacant: true,
                            user: null
                        };
                        newRooms.push(room);
                    }
                    this.roomService.addRooms(newRooms).subscribe(function (data) {
                        if (data["success"]) {
                            var toast = {
                                type: "success",
                                title: "Success",
                                body: "Rooms added successfully.",
                                showCloseButton: true
                            };
                            _this.toasterService.pop(toast);
                            _this.floornumber = null;
                            _this.roomscount = null;
                            _this.getAllRooms();
                        }
                        else {
                            var toast = {
                                type: "error",
                                title: "Error",
                                body: "Rooms failed to added.",
                                showCloseButton: true
                            };
                            _this.toasterService.pop(toast);
                        }
                    });
                    this.modalRef.hide();
                };
                HomeComponent.prototype.filter = function () {
                };
                HomeComponent.prototype.goToApartment = function (roomno, userid) {
                    localStorage.setItem("roomnumber", roomno);
                    localStorage.setItem("userId", userid);
                    this.router.navigate(["apartment"]);
                };
                HomeComponent.prototype.closeModal = function () {
                    this.modalRef.hide();
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_services_common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _services_room_room_service__WEBPACK_IMPORTED_MODULE_5__["RoomService"] },
                { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-home",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/login/login.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/login/login.component.ts ***!
          \*****************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/auth.service */ "./src/app/services/common/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
            /* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authService, router, toasterService, modalService) {
                    this.authService = authService;
                    this.router = router;
                    this.toasterService = toasterService;
                    this.modalService = modalService;
                    this.username = "";
                    this.password = "";
                    this.fusername = "";
                }
                LoginComponent.prototype.ngOnInit = function () { };
                LoginComponent.prototype.openModal = function (template) {
                    this.modalRef = this.modalService.show(template, { class: "modal-md" });
                };
                LoginComponent.prototype.onLoginSubmit = function () {
                    var _this = this;
                    if (this.username !== "" && this.password !== "") {
                        var user = {
                            username: this.username,
                            password: this.password
                        };
                        this.authService.authenticateUser(user).subscribe(function (data) {
                            console.log(data);
                            if (data["success"]) {
                                _this.authService.storeUserData(data["token"], data["user"]);
                                console.log("Logged In");
                                if (data["user"].type !== 'admin')
                                    localStorage.setItem("userId", data["user"].id);
                                _this.router.navigate(["home"]);
                            }
                            else {
                                var toast = {
                                    type: "error",
                                    title: "Error",
                                    body: "Invalid Username/Password.",
                                    showCloseButton: true
                                };
                                _this.toasterService.pop(toast);
                                console.log("Login falied.");
                                _this.router.navigate(["/"]);
                            }
                        });
                    }
                    else {
                        var toast = {
                            type: "error",
                            title: "Error",
                            body: "Please fill the all the details.",
                            showCloseButton: true
                        };
                        this.toasterService.pop(toast);
                    }
                };
                LoginComponent.prototype.sendMail = function () {
                    var _this = this;
                    if (this.fusername != "") {
                        this.authService.forgotPassword(this.fusername).subscribe(function (data) {
                            _this.fusername = "";
                            var toast = {
                                type: "success",
                                title: "Success",
                                body: "An email has been sent. please check your email for temporary password.",
                                showCloseButton: true
                            };
                            _this.toasterService.pop(toast);
                            _this.modalRef.hide();
                        });
                    }
                    else {
                        var toast = {
                            type: "error",
                            title: "Error",
                            body: "Please fill the username.",
                            showCloseButton: true
                        };
                        this.toasterService.pop(toast);
                    }
                };
                LoginComponent.prototype.closeModal = function () {
                    this.modalRef.hide();
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
                { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-login",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/guards/auth.guard.ts": 
        /*!**************************************!*\
          !*** ./src/app/guards/auth.guard.ts ***!
          \**************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    if (this.authService.loggedIn() && state.url !== "/") {
                        return true;
                    }
                    else if (this.authService.loggedIn() && state.url === "/") {
                        this.router.navigate(['home']);
                        return true;
                    }
                    else if (!this.authService.loggedIn() && state.url !== "/") {
                        this.router.navigate(['/']);
                        return false;
                    }
                    else if (state.url === "/") {
                        return true;
                    }
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _services_common_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/services/common/auth.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/common/auth.service.ts ***!
          \*************************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
            var AuthService = /** @class */ (function () {
                function AuthService(http, jwtHelper) {
                    this.http = http;
                    this.jwtHelper = jwtHelper;
                    this.isDev = true;
                }
                AuthService.prototype.authenticateUser = function (user) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
                    var url = this.prepEndpoint("login/authenticate");
                    return this.http.post(url, user, { headers: headers });
                };
                AuthService.prototype.storeUserData = function (token, user) {
                    localStorage.setItem("id_token", token);
                    localStorage.setItem("user", typeof user === "string" ? user : JSON.stringify(user));
                    this.authToken = token;
                    this.user = user;
                };
                AuthService.prototype.loggedIn = function () {
                    this.loadToken();
                    return this.authToken !== null && !this.jwtHelper.isTokenExpired();
                };
                AuthService.prototype.getUserType = function () {
                    var user = JSON.parse(localStorage.getItem("user"));
                    if (user)
                        return user.type;
                };
                AuthService.prototype.loadToken = function () {
                    var token = localStorage.getItem("id_token");
                    this.authToken = token;
                };
                AuthService.prototype.getToken = function () {
                    return localStorage.getItem("id_token");
                };
                AuthService.prototype.logout = function () {
                    this.authToken = null;
                    this.user = null;
                    localStorage.clear();
                };
                AuthService.prototype.forgotPassword = function (username) {
                    var user = {
                        username: username
                    };
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
                    var url = this.prepEndpoint("login/forgotPassword");
                    return this.http.post(url, user, { headers: headers });
                };
                AuthService.prototype.getUser = function () {
                    return JSON.parse(localStorage.getItem("user"));
                };
                AuthService.prototype.storeRoute = function (route) {
                    localStorage.setItem("current_route", route);
                };
                AuthService.prototype.isRouteDisplay = function (route) {
                    if (route === localStorage.getItem("current_route")) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                AuthService.prototype.prepEndpoint = function (ep) {
                    if (!this.isDev) {
                        return ep;
                    }
                    else {
                        return "http://localhost:3000/" + ep;
                    }
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/services/room/room.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/room/room.service.ts ***!
          \***********************************************/
        /*! exports provided: RoomService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function () { return RoomService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var RoomService = /** @class */ (function () {
                function RoomService(http, authService) {
                    this.http = http;
                    this.authService = authService;
                }
                RoomService.prototype.addRooms = function (rooms) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        "Content-Type": "application/json",
                        Authorization: this.authService.getToken()
                    });
                    var url = this.authService.prepEndpoint("room/createrooms");
                    return this.http.post(url, rooms, { headers: headers });
                };
                RoomService.prototype.addRoom = function (room) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        "Content-Type": "application/json",
                        Authorization: this.authService.getToken()
                    });
                    var url = this.authService.prepEndpoint("room/create");
                    return this.http.post(url, room, { headers: headers });
                };
                RoomService.prototype.updateRoom = function (room) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        "Content-Type": "application/json",
                        Authorization: this.authService.getToken()
                    });
                    var url = this.authService.prepEndpoint("room/update/");
                    url = url + ("" + room._id);
                    return this.http.put(url, room, { headers: headers });
                };
                RoomService.prototype.deleteRoom = function (id) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        "Content-Type": "application/json",
                        Authorization: this.authService.getToken()
                    });
                    var url = this.authService.prepEndpoint("room/delete/");
                    return this.http.delete(url + id, { headers: headers });
                };
                RoomService.prototype.getRooms = function () {
                    // let headers = new HttpHeaders().set(
                    //   "Authorization",
                    //   this.authService.getToken()
                    // );
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        "Content-Type": "application/json",
                        Authorization: this.authService.getToken()
                    });
                    var url = this.authService.prepEndpoint("room/all/");
                    return this.http.get(url, { headers: headers });
                };
                return RoomService;
            }());
            RoomService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            RoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], RoomService);
            /***/ 
        }),
        /***/ "./src/app/services/user/user.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/user/user.service.ts ***!
          \***********************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
            var UserService = /** @class */ (function () {
                function UserService(http, authService) {
                    this.http = http;
                    this.authService = authService;
                }
                UserService.prototype.addUser = function (user) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': this.authService.getToken()
                    });
                    var url = this.authService.prepEndpoint('users/create');
                    return this.http.post(url, user, { headers: headers });
                };
                UserService.prototype.updateUser = function (user) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': this.authService.getToken()
                    });
                    var url = this.authService.prepEndpoint('users/update/');
                    url = url + ("" + localStorage.getItem("userId"));
                    return this.http.put(url, user, { headers: headers });
                };
                UserService.prototype.deleteUser = function (id) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': this.authService.getToken()
                    });
                    var url = this.authService.prepEndpoint('users/delete/');
                    return this.http.delete(url + id, { headers: headers });
                };
                UserService.prototype.getUsers = function () {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': this.authService.getToken()
                    });
                    var url = this.authService.prepEndpoint('users/all/');
                    return this.http.get(url, { headers: headers });
                };
                UserService.prototype.getUserById = function (id) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': this.authService.getToken()
                    });
                    var url = this.authService.prepEndpoint('users/getid/');
                    return this.http.get(url + id, { headers: headers });
                };
                UserService.prototype.getUserName = function (searchTerm) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': this.authService.getToken()
                    });
                    var url = this.authService.prepEndpoint('users/get/');
                    return this.http.get(url + searchTerm, { headers: headers });
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _common_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\Cloud Project\2019-Fall-CC-Team7-SmartLockForApartments\Code\Web\Client\SDL\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map