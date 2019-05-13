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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var appRoutes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'search/:texto', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'movie/:id/:pag', component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"] },
    { path: 'movie/:id/:pag/:busqueda', component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
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

module.exports = "<app-navbar></app-navbar>\r\n\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.title = 'PelisApp';
        this.peliculas = [];
    }
    AppComponent.prototype.buscar = function (params) {
        this.router.navigate(['/search', params]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pipes_controla_url_poster_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/controla-url-poster.pipe */ "./src/app/pipes/controla-url-poster.pipe.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_galeria_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/galeria.component */ "./src/app/components/home/galeria.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








// RUTEO





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_7__["MovieComponent"],
                _pipes_controla_url_poster_pipe__WEBPACK_IMPORTED_MODULE_9__["ControlaUrlPosterPipe"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_home_galeria_component__WEBPACK_IMPORTED_MODULE_11__["GaleriaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/galeria.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/home/galeria.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4\">{{titulo}}</h1>\n<hr>\n<div class=\"row\" *ngIf=\"peliculas\">\n\n    <div class=\"col-sm-6\">\n\n        <div class=\"row\">\n            <div class=\"col-md-12 div-pic-1 puntero\" [routerLink]=\"['/movie',peliculas.results[0].id,'home']\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+peliculas.results[0].poster_path +')' }\">\n              <p class=\"pic-titulo\">\n                {{ peliculas.results[0].original_title }}\n              </p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-6 div-pic-2 puntero\" [routerLink]=\"['/movie',peliculas.results[1].id,'home']\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+peliculas.results[1].poster_path +')' }\">\n              <p class=\"pic-titulo\">\n                {{ peliculas.results[1].original_title }}\n              </p>\n            </div>\n            <div class=\"col-sm-6 div-pic-2 puntero\" [routerLink]=\"['/movie',peliculas.results[2].id,'home']\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+peliculas.results[2].poster_path +')' }\">\n              <p class=\"pic-titulo\">\n                {{ peliculas.results[2].original_title }}\n              </p>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"col-sm-6\">\n\n\n        <div class=\"row\">\n            <div class=\"col-sm-6 div-pic-2 puntero\"  [routerLink]=\"['/movie',peliculas.results[3].id,'home']\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+peliculas.results[3].poster_path +')' }\">\n              <p class=\"pic-titulo\">\n                {{ peliculas.results[3].original_title }}\n              </p>\n            </div>\n            <div class=\"col-sm-6 div-pic-2 puntero\" [routerLink]=\"['/movie',peliculas.results[4].id,'home']\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+peliculas.results[4].poster_path +')' }\">\n              <p class=\"pic-titulo\">\n                {{ peliculas.results[4].original_title }}\n              </p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12 div-pic-1 puntero\" [routerLink]=\"['/movie',peliculas.results[5].id,'home']\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+peliculas.results[5].poster_path +')' }\">\n              <p class=\"pic-titulo\">\n                {{ peliculas.results[5].original_title }}\n              </p>\n            </div>\n        </div>\n\n    </div>\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/galeria.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/home/galeria.component.ts ***!
  \******************************************************/
/*! exports provided: GaleriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaComponent", function() { return GaleriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GaleriaComponent = /** @class */ (function () {
    function GaleriaComponent() {
    }
    GaleriaComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('peliculas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GaleriaComponent.prototype, "peliculas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('titulo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GaleriaComponent.prototype, "titulo", void 0);
    GaleriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-galeria',
            template: __webpack_require__(/*! ./galeria.component.html */ "./src/app/components/home/galeria.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GaleriaComponent);
    return GaleriaComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1 class=\"display-4\">Movies App</h1>\r\n        <p class=\"lead\">Esta es una aplicacion de pelis.</p>\r\n    </div>\r\n</div>\r\n<div class=\"container gallery-container\">\r\n\r\n    <app-galeria titulo=\"Peliculas en cartelera\" [peliculas]='cartelera'></app-galeria>\r\n\r\n    <app-galeria titulo=\"Peliculas populares\" [peliculas]='populares'></app-galeria>\r\n\r\n    <app-galeria titulo=\"Peliculas de kids populares\" [peliculas]='popularesNinios'></app-galeria>\r\n</div>\r\n\r\n<!-- <br>\r\n    <h1 class=\"display-4\">Populares</h1>\r\n    <p class=\"lead\">Peliculas mas populares en la actualidad.</p>\r\n    <hr class=\"my-4\">\r\n    <div class=\"container gallery-container\">\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-sm-6\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 div-pic-1\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+populares.results[0].poster_path +')' }\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 div-pic-2\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+populares.results[1].poster_path +')' }\">\r\n                    </div>\r\n                    <div class=\"col-sm-6 div-pic-2\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+populares.results[2].poster_path +')' }\">\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\">\r\n\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 div-pic-2\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+populares.results[3].poster_path +')' }\">\r\n                    </div>\r\n                    <div class=\"col-sm-6 div-pic-2\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+populares.results[4].poster_path +')' }\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 div-pic-1\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+populares.results[5].poster_path +')' }\">\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <br>\r\n    <h1 class=\"display-4\">Populares entre los niños</h1>\r\n    <p class=\"lead\">Peliculas mas populares en la actualidad para niños.</p>\r\n    <hr class=\"my-4\">\r\n    <div class=\"container gallery-container\">\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-sm-6\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 div-pic-1\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+popularesNinios.results[0].poster_path +')' }\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 div-pic-2\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+popularesNinios.results[1].poster_path +')' }\">\r\n                    </div>\r\n                    <div class=\"col-sm-6 div-pic-2\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+popularesNinios.results[2].poster_path +')' }\">\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\">\r\n\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 div-pic-2\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+popularesNinios.results[3].poster_path +')' }\">\r\n                    </div>\r\n                    <div class=\"col-sm-6 div-pic-2\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+popularesNinios.results[4].poster_path +')' }\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 div-pic-1\" [ngStyle]=\"{ 'background-image':  'url( http://image.tmdb.org/t/p/w500/'+popularesNinios.results[5].poster_path +')' }\">\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div> -->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/peliculas.service */ "./src/app/services/peliculas.service.ts");



var HomeComponent = /** @class */ (function () {
    // tslint:disable-next-line:variable-name
    function HomeComponent(_ps) {
        var _this = this;
        this._ps = _ps;
        this._ps.getPopulares()
            .subscribe(function (data) {
            _this.populares = data;
        });
        this._ps.getCartelera()
            .subscribe(function (data) {
            _this.cartelera = data;
        });
        this._ps.getPopularesNinios()
            .subscribe(function (data) {
            console.log(data);
            _this.popularesNinios = data;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/movie/movie.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/movie/movie.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pelicula\" class=\"container main-container\">\r\n  <button style=\"margin-bottom: 9px\" (click)=\"volver()\" class=\"btn btn-outline-danger\">Volver</button>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n\r\n      <img style=\"height: 700px;width:400px\" class=\"loading\" [src]=\" pelicula | controlaUrlPoster:true \"\r\n           class=\"img-fluid\">\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <h4 class=\"text-center\"> {{ pelicula.title }} </h4>\r\n      <hr>\r\n      <p class=\"lead\">\r\n        {{ pelicula.overview }}.\r\n      </p>\r\n      <h4>Frase celebre</h4>\r\n      <p> {{ pelicula.tagline }}. </p>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <p class=\"muted\">Nota Promedio: <span class=\"badge badge-primary\"><strong> {{pelicula.vote_average}} </strong></span>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <p class=\"muted\">Cantidad Votos: <span class=\"badge badge-primary\"><strong> {{pelicula.vote_count}} </strong></span>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <p class=\"muted\">Popularidad: <span\r\n            class=\"badge badge-primary\"><strong> {{pelicula.popularity}} </strong></span></p>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <span style=\"margin-left:4px\" *ngFor=\"let genero of pelicula.genres\"\r\n                class=\"badge badge-secondary\">{{ genero.name }}  </span>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var MovieComponent = /** @class */ (function () {
    function MovieComponent(route, router, service, location) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.location = location;
        this.busqueda = '';
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            if (data.busqueda) {
                _this.busqueda = data.busqueda;
            }
            // tslint:disable-next-line:no-shadowed-variable
            _this.service.getPeliculaById(data.id).subscribe(function (movie) {
                _this.regresarA = data.pag;
                _this.pelicula = movie;
            });
        });
    };
    MovieComponent.prototype.volver = function () {
        if (this.regresarA == 'home') {
            this.router.navigate(['/home']);
        }
        else if (this.regresarA == 'search') {
            this.router.navigate(['/search', this.busqueda]);
        }
    };
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/components/movie/movie.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\r\n        <a class=\"navbar-brand\" href=\"#\">Movies App</a>\r\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/search/\" routerLinkActive=\"active\">Buscar </a>\r\n            </li>\r\n\r\n        </ul>\r\n        <div class=\"form-inline my-2 my-lg-0\">\r\n            <input #params class=\"form-control mr-sm-2\" (keydown.enter)=\"buscar(params.value)\" type=\"search\" placeholder=\"Buscar...\" aria-label=\"Search\">\r\n            <button (click)=\"buscar(params.value)\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\">Buscar</button>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.buscar = function (params) {
        if (params.length === 0) {
            return;
        }
        this.router.navigate(['search', params]);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Buscar</label>\r\n        <input name=\"buscar\" [(ngModel)]=\"buscar\" class=\"form-control\" type=\"text\" placeholder=\"Buscar\"\r\n               (keyup.enter)=\"buscarPelicula()\">\r\n        <small id=\"helpId\" class=\"form-text text-muted\">Ingrese una palabra para buscar..</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"card-columns\">\r\n    <div *ngFor=\"let item of service.peliculas.results\" class=\"card\">\r\n      <img class=\"card-img-top\" alt=\"Card image cap\" [src]=\"  (item) | controlaUrlPoster \">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\"> {{ item.original_title }} </h5>\r\n        <p class=\"card-text text-justify\">  {{ item.overview | slice:0:300 }}... </p>\r\n        <input type=\"button\" [routerLink]=\"['/movie',item.id,'search',buscar ]\"\r\n               class=\"btn btn-outline-primary btn-block \" value=\"Ver mas..\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/peliculas.service */ "./src/app/services/peliculas.service.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, service, router) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.router = router;
        this.buscar = '';
        route.params.subscribe(function (data) {
            if (data.texto) {
                _this.buscar = data.texto;
                _this.buscarPelicula();
            }
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.buscarPelicula = function () {
        if (this.buscar.length == 0) {
            return;
        }
        this.service.buscarPelicula(this.buscar)
            .subscribe(function (data) { return console.log(data); });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pipes/controla-url-poster.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/controla-url-poster.pipe.ts ***!
  \***************************************************/
/*! exports provided: ControlaUrlPosterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlaUrlPosterPipe", function() { return ControlaUrlPosterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ControlaUrlPosterPipe = /** @class */ (function () {
    function ControlaUrlPosterPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ControlaUrlPosterPipe.prototype.transform = function (pelicula, poster) {
        if (poster === void 0) { poster = false; }
        if (poster) {
            return 'http://image.tmdb.org/t/p/w500/' + pelicula.poster_path;
        }
        if (pelicula.backdrop_path) {
            return 'http://image.tmdb.org/t/p/w500/' + pelicula.backdrop_path;
        }
        else if (pelicula.poster_path) {
            return 'http://image.tmdb.org/t/p/w500/' + pelicula.poster_path;
        }
        else {
            return '../../../assets/imagenes/noimage.jpg';
        }
    };
    ControlaUrlPosterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'controlaUrlPoster'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ControlaUrlPosterPipe);
    return ControlaUrlPosterPipe;
}());



/***/ }),

/***/ "./src/app/services/peliculas.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/peliculas.service.ts ***!
  \***********************************************/
/*! exports provided: PeliculasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculasService", function() { return PeliculasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var PeliculasService = /** @class */ (function () {
    function PeliculasService(http) {
        this.http = http;
        this.apiKey = '2299dc6da6cc72d2d784c911618f835e';
        this.urlMovieDb = 'https://api.themoviedb.org/3';
        // tslint:disable-next-line:ban-types
        this.peliculas = [];
    }
    PeliculasService.prototype.getPopulares = function () {
        var url = this.urlMovieDb + "/movie/popular?api_key=" + this.apiKey + "&language=es&callback=JSONP_CALLBACK";
        return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PeliculasService.prototype.getCartelera = function () {
        var url = this.urlMovieDb + "/movie/now_playing?api_key=" + this.apiKey + "&language=es&callback=JSONP_CALLBACK";
        return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PeliculasService.prototype.getPopularesNinios = function () {
        // tslint:disable-next-line:max-line-length
        var url = this.urlMovieDb + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&callback=JSONP_CALLBACK&api_key=" + this.apiKey + "&language=es";
        return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PeliculasService.prototype.getPeliculaById = function (id) {
        // tslint:disable-next-line:max-line-length
        var url = this.urlMovieDb + "/movie/" + id + "?api_key=" + this.apiKey + "&callback=JSONP_CALLBACK&language=es";
        return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PeliculasService.prototype.buscarPelicula = function (keyword) {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        var url = this.urlMovieDb + "/search/movie?query=" + keyword + "&api_key=" + this.apiKey + "&callback=JSONP_CALLBACK&language=es";
        return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.peliculas = res;
            return res;
        }));
    };
    PeliculasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PeliculasService);
    return PeliculasService;
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

module.exports = __webpack_require__(/*! C:\Users\JP\Desktop\Angular\AppAngular\pelisapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map