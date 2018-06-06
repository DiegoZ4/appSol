webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_login_services_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, _login) {
        this.navCtrl = navCtrl;
        this._login = _login;
        this.data = {};
        this.loginPass = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            pass1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            pass2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
        });
        this.loginPass.controls["pass2"].setValidators([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            this.noIgual.bind(this.loginPass)
        ]);
    }
    AboutPage.prototype.noIgual = function (control) {
        var forma = this;
        console.log(forma);
        if (control.value !== forma.controls['pass1'].value) {
            return {
                noiguales: true
            };
        }
        return null;
    };
    AboutPage.prototype.changePass = function () {
        var _this = this;
        var dataStorage = JSON.parse(localStorage.getItem('userData'));
        var dni = dataStorage.dni;
        this.data = {
            dni: dni,
            pass: this.loginPass.value.pass1
        };
        this._login.changePass(this.data)
            .subscribe(function (resp) {
            console.log(resp.status);
            if (resp.status == "ok") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
            }
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/diego/Documentos/apSol/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    <ion-title>\n      Primer Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-content color="primary">\n      Debes actualizar tu contraseña para poder continuar operando.\n    </ion-card-content>\n\n  </ion-card>\n\n  <form [formGroup]="loginPass">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input formControlName="pass1" type="number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Escribe nuevamente la Contraseña</ion-label>\n      <ion-input formControlName="pass2" type="number"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button style="margin-bottom:20px" (click)="changePass()"\n            color="primary" ion-button block>Ingresar</button>\n\n    <button *ngIf="islogin" ion-button block color="danger">Las claves no coinciden</button>\n  </div>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/diego/Documentos/apSol/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_login_services_login__["a" /* ServicesLoginProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/diego/Documentos/apSol/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/diego/Documentos/apSol/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_login_services_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Services

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _login) {
        this.navCtrl = navCtrl;
        this._login = _login;
        this.usuarios = [];
        this.islogin = false;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            user: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
        });
    }
    HomePage.prototype.login = function () {
        var _this = this;
        console.log(this.loginForm);
        console.log(this.loginForm.value.user);
        console.log(this.loginForm.value.pass);
        var userLogin = this.loginForm.value.user;
        var passLogin = this.loginForm.value.pass;
        this._login.login()
            .then(function (data) {
            _this.usuarios.push(data);
            console.log(_this.usuarios);
            for (var _i = 0, _a = _this.usuarios[0]; _i < _a.length; _i++) {
                var user = _a[_i];
                //console.log(user.dni)
                if (user.id == userLogin && user.Pass == passLogin) {
                    console.log("hubo Login");
                    var userData = {
                        id: user.id,
                        pass: user.Pass,
                        nombre: user.nombre
                    };
                    localStorage.setItem('userData', JSON.stringify(userData));
                    // if(user.dni == user.pass){
                    //   "Es primer login"
                    //   this.navCtrl.push(AboutPage)
                    //   return this.islogin = false;
                    // }else{
                    //   console.log("Ya tiene clave nueva");
                    //   this.navCtrl.push(ContactPage)
                    //   return this.islogin = false;
                    // }
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
                    return _this.islogin = false;
                }
                else {
                    console.log("no hay login");
                    _this.islogin = true;
                }
            }
            return _this.islogin;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/diego/Documentos/apSol/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Autopartes Sol</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding class="text-center">\n\n  <ion-card color=primary>\n    <ion-card-content>\n      Porfavor identifiquese con su usuario y contraseña\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <form [formGroup]="loginForm">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>ID</ion-label>\n      <ion-input formControlName="user" type="number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input formControlName="pass" type="number"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button style="margin-bottom:20px" (click)="login()"\n            color="primary" ion-button block>Ingresar</button>\n\n    <button *ngIf="islogin" ion-button block color="danger">El usuario o la contraseña no existen</button>\n  </div>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/diego/Documentos/apSol/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_services_login_services_login__["a" /* ServicesLoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_services_login_services_login__["a" /* ServicesLoginProvider */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_es__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_services_login_services_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_es__["a" /* default */]);







//Services

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_services_login_services_login__["a" /* ServicesLoginProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* LOCALE_ID */], useValue: 'es-ES' }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/diego/Documentos/apSol/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/diego/Documentos/apSol/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, _login) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._login = _login;
        this.pet = "pagos";
        this.datosPagos = [];
        this.datosNotas = [];
        var dataStorage = JSON.parse(localStorage.getItem('userData'));
        this.id = dataStorage.id;
        this.nombre = dataStorage.nombre;
        console.log(this.id);
        this._login.getPagos(this.id)
            .subscribe(function (resp) {
            console.log(resp);
            _this.datosPagos = resp;
            console.log(_this.datosPagos);
        });
        this._login.getNotas(this.id)
            .subscribe(function (resp) {
            console.log(resp);
            _this.datosNotas = resp;
            console.log(_this.datosNotas);
        });
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/diego/Documentos/apSol/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar hideBackButton color=primary>\n    <ion-title>\n      {{nombre}}\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="pagos">\n        Cuentas Corrientes\n      </ion-segment-button>\n      <ion-segment-button value="notas">\n        Proveedores Comprados\n      </ion-segment-button>\n      <ion-segment-button value="descargar">\n        Proveedores No Comprados\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'pagos\'">\n      <ion-item *ngFor="let item of datosPagos">\n          <h2> {{item.razon}}</h2>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'notas\'">\n      <ion-item *ngFor="let item of datosNotas">\n        <div style="width:100%; background-color:#f8f8f8; padding:5%">\n          <h2 style="border-bottom:1px solid #888; padding-bottom: 10px; margin-bottom:10px">Mes: {{item.mes}}</h2>\n          <h3 style="background:#488aff; padding:10px; color:white; margin-bottom:8px">Examen</h3>\n          <p>{{item.examen |  date:\'fullDate\' | uppercase}}</p>\n          <h4>Calificación: <ion-badge color=primary item-Right>{{item.calificacion}}</ion-badge></h4>\n          <h3 style="background:#32db64; padding:10px; color:white; margin-bottom:8px">TP</h3>\n          <p>{{item.tp |  date:\'fullDate\' | uppercase}}</p>\n          <h4>Calificación: <ion-badge color=secondary item-Right>{{item.calificacionTp}}</ion-badge></h4>\n        </div>\n\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'descargar\'">\n      <ion-item>\n\n        <a href="http://insmis.com.ar.elserver.com/descargas" color=primary ion-button block target="_blank">\n          <ion-icon ios="ios-cloud-download" md="md-cloud-download" syle="margin-right:10px"></ion-icon>  Descargar Material\n        </a>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/diego/Documentos/apSol/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__["a" /* ServicesLoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__["a" /* ServicesLoginProvider */]) === "function" && _b || Object])
    ], ContactPage);
    return ContactPage;
    var _a, _b;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesLoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the ServicesLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicesLoginProvider = /** @class */ (function () {
    function ServicesLoginProvider(http) {
        this.http = http;
        this.apiUrl = 'http://appsausol.com.ar.elserver.com/vendedores.php';
        this.apiUrlPass = 'http://appsausol.com.ar.elserver.com/saveNewPass.php';
        this.apiUrlPagos = 'http://appsausol.com.ar.elserver.com/getClientes.php';
        this.apiUrlNotas = 'http://appsausol.com.ar.elserver.com/getCuentas.php';
        console.log('Hello ServicesLoginProvider Provider');
    }
    ServicesLoginProvider.prototype.login = function () {
        var _this = this;
        console.log("aca");
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (data) {
                //console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ServicesLoginProvider.prototype.changePass = function (data) {
        console.log(data);
        var body = JSON.stringify(data);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        });
        return this.http.post(this.apiUrlPass, data, { headers: headers })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getPagos = function (id) {
        console.log(id);
        return this.http.get(this.apiUrlPagos + '?id=' + id)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider.prototype.getNotas = function (id) {
        console.log(id);
        return this.http.get(this.apiUrlNotas + '?id=' + id)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesLoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ServicesLoginProvider);
    return ServicesLoginProvider;
    var _a;
}());

//# sourceMappingURL=services-login.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map