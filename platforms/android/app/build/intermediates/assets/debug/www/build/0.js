webpackJsonp([0],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoClientePageModule", function() { return InfoClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_cliente__ = __webpack_require__(678);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoClientePageModule = /** @class */ (function () {
    function InfoClientePageModule() {
    }
    InfoClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_cliente__["a" /* InfoClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_cliente__["a" /* InfoClientePage */]),
            ],
        })
    ], InfoClientePageModule);
    return InfoClientePageModule;
}());

//# sourceMappingURL=info-cliente.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InfoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoClientePage = /** @class */ (function () {
    function InfoClientePage(navCtrl, navParams, _login) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._login = _login;
        this.pet = "pagos";
        this.id = 0;
        this.ventas = [];
        this.suma = 0;
        this.comprados = [];
        this.noComprados = [];
        console.log(this.navParams.get('id'));
        this.id = this.navParams.get('id');
        this._login.getProveedores()
            .subscribe(function (resp3) {
            console.log(resp3);
            for (var _i = 0, resp3_1 = resp3; _i < resp3_1.length; _i++) {
                var proveedor = resp3_1[_i];
                _this.noComprados.push({
                    id: proveedor.codigo,
                    cant: null,
                    nombre: proveedor.razon
                });
            }
            console.log(_this.noComprados);
        });
        this._login.getCliente(this.id)
            .subscribe(function (resp) {
            console.log(resp[0].razon);
            _this.cliente = resp[0].razon;
        });
        this._login.getNotas(this.id)
            .subscribe(function (resp) {
            _this.ventas = resp;
            for (var _i = 0, _a = _this.ventas; _i < _a.length; _i++) {
                var venta = _a[_i];
                // console.log(venta.codmov)
                // console.log(parseInt(venta.codmov))
                parseInt(venta.codmov) > 6 ? _this.suma = _this.suma + parseInt(venta.importe) + 1000 : _this.suma = _this.suma + parseInt(venta.importe) - 1000;
            }
        });
        this._login.getProveedoresComprados(this.id)
            .subscribe(function (resp) {
            console.log(resp);
            console.log(resp.length);
            if (resp.length > 0) {
                var _loop_1 = function () {
                    var proveedor_id = resp[0]["PROVE" + i];
                    var proveedor_cant = resp[0]["COMPR" + i];
                    var proveedor_name;
                    if (resp[0]["PROVE" + i] != 0) {
                        _this._login.getProveedor(resp[0]["PROVE" + i])
                            .subscribe(function (resp2) {
                            console.log(resp2);
                            console.log(resp2.length);
                            resp2.length ? proveedor_name = resp2[0].razon : proveedor_name = "Sin definir";
                            _this.comprados.push({
                                id: proveedor_id,
                                cant: proveedor_cant,
                                nombre: proveedor_name
                            });
                        });
                        var index = _this.noComprados.findIndex(function (x) { return x.id === proveedor_id; });
                        if (index > -1) {
                            _this.noComprados.splice(index, 1);
                        }
                    }
                };
                for (var i = 1; i < 51; i++) {
                    _loop_1();
                }
            }
            else {
                console.log("La query de comprados viene vacia");
                _this.comprados.push({
                    id: null,
                    cant: null,
                    nombre: 'No se encuentra registros'
                });
            }
        });
    }
    InfoClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoClientePage');
    };
    InfoClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-cliente',template:/*ion-inline-start:"C:\users\diego\angular4\appSol\appSol\src\pages\info-cliente\info-cliente.html"*/'<ion-header>\n\n  <ion-navbar color=primary>\n\n    <ion-title>\n\n      Cliente: {{cliente}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="pet">\n\n      <ion-segment-button value="pagos">\n\n        Cuentas Corrientes\n\n      </ion-segment-button>\n\n      <ion-segment-button value="notas">\n\n        Prov/Compr\n\n      </ion-segment-button>\n\n      <ion-segment-button value="descargar">\n\n        Prov/NC\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div [ngSwitch]="pet">\n\n\n\n    <div *ngSwitchCase="\'pagos\'">\n\n\n\n      <div class="row header">\n\n        <div class="col">Número</div>\n\n        <div class="col">Fecha</div>\n\n        <div class="col">Importe</div>\n\n      </div>\n\n\n\n      <div class="row" *ngFor="let item of ventas">\n\n        <div class="col">{{item.numero}}</div>\n\n        <div class="col">{{item.fecha |  date:\'dd/MM/yyyy\' | uppercase}}</div>\n\n        <div *ngIf="item.codmov < 6" style="color:red" class="col">- $ {{item.importe}}</div>\n\n        <div *ngIf="item.codmov > 5" style="color:green" class="col"> $ {{item.importe}}</div>\n\n      </div>\n\n\n\n      <button *ngIf="suma !=0" ion-button full large >Total: $ {{ suma }}</button>\n\n\n\n    </div>\n\n\n\n\n\n\n\n    <ion-list *ngSwitchCase="\'notas\'">\n\n      <ion-item *ngFor="let item of comprados">\n\n        <div style="width:100%; background-color:#f8f8f8; padding:2%">\n\n          <h2 style="border-bottom:0px solid #888; padding-bottom: 0px; margin-bottom:8px"> {{item.nombre}}</h2>\n\n          <hr *ngIf="noComprados.cant">\n\n          <p *ngIf="item.cant">Cantidad de compras: {{item.cant }}</p>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'descargar\'">\n\n      <ion-item *ngFor="let item of noComprados">\n\n        <div style="width:100%; background-color:#f8f8f8; padding:2%">\n\n          <h2 style="padding-bottom: 0px; margin-bottom:0px"> {{item.nombre}}</h2>\n\n          <hr *ngIf="noComprados.cant">\n\n          <p *ngIf="noComprados.cant">Cantidad de compras {{item.cant }}</p>\n\n\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\diego\angular4\appSol\appSol\src\pages\info-cliente\info-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_login_services_login__["a" /* ServicesLoginProvider */]])
    ], InfoClientePage);
    return InfoClientePage;
}());

//# sourceMappingURL=info-cliente.js.map

/***/ })

});
//# sourceMappingURL=0.js.map