webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    LandingPage.prototype.hello = function (text) {
        console.log(text);
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"/Users/shan/Desktop/Psionic/royal_carabian/src/pages/landing/landing.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button menuToggle end>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <!--<ion-title ion-text class="title-text">Crown of Miami</ion-title>-->\n    <components-title title="Crown Of Miami" ></components-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-bounce>\n  <components-weather></components-weather>\n\n\n    <!--//use card image remove the margin-->\n\n    <ion-card no-margin no-padding  class="hero-card">\n      <img class="hero-image" src="assets/imgs/test_ship.jpg"/>\n    </ion-card>\n\n\n  <!--set the background image of this div-->\n    <ion-grid no-padding no-margin>\n\n      <ion-row no-padding no-margin>\n        <ion-col no-padding no-margin text-center>\n          <ion-card no-padding no-margin class="card-image">\n            <img src="assets/Tabs/Embarketion.png"/>\n            <div class="card-title">EMBARKATION</div>\n\n          </ion-card>\n        </ion-col>\n        <ion-col  no-padding no-margin text-center>\n          <ion-card no-padding no-margin class="card-image">\n            <img src="assets/Tabs/Dismbarketion.png"/>\n            <div class="card-title">DISEMBARKATION</div>\n\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row no-padding no-margin>\n        <ion-col  no-padding no-margin text-center>\n          <ion-card no-padding no-margin class="card-image">\n            <img src="assets/Tabs/Security.png"/>\n            <div class="card-title">SECURITY</div>\n\n          </ion-card>\n        </ion-col>\n\n        <ion-col  no-padding no-margin text-center>\n          <ion-card no-padding no-margin class="card-image">\n            <img src="assets/Tabs/Restriction.png"/>\n            <div class="card-title">RESTRICTION</div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row no-padding no-margin>\n        <ion-col  no-padding no-margin text-center (click)="hello(\'hello\')">\n          <ion-card no-padding no-margin class="card-image">\n            <img src="assets/Tabs/Parking.png"/>\n            <div class="card-title">PARKING</div>\n\n          </ion-card>\n\n        </ion-col>\n        <ion-col  no-padding no-margin text-center (click)="hello(\'welcome\')">\n          <ion-card no-padding no-margin class="card-image">\n            <img src="assets/Tabs/Docs.png"/>\n            <div class="card-title">DOCUMENTS</div>\n\n          </ion-card>\n          <!--<div class="gird-background6">-->\n            <!--<img style="width: 15vw; height: 15vh; padding-top: 36px; padding-bottom: 20px" src="assets/imgs/Documents.png" alt="hello">-->\n              <!--<ion-label color="primary" no-margin class="label-text">DOCUMENTS</ion-label>-->\n          <!--</div>-->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/shan/Desktop/Psionic/royal_carabian/src/pages/landing/landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/embarkation/embarkation.module": [
		271,
		1
	],
	"../pages/landing/landing.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_landing_landing__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_embarkation_embarkation__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_title_components_title__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_components_weather_components_weather__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_embarkation_embarkation__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//components



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_title_components_title__["a" /* ComponentsTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_components_weather_components_weather__["a" /* ComponentsWeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_embarkation_embarkation__["a" /* EmbarkationPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_embarkation_embarkation__["a" /* EmbarkationComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/embarkation/embarkation.module#EmbarkationPageModule', name: 'EmbarkationPage', segment: 'embarkation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_title_components_title__["a" /* ComponentsTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_components_weather_components_weather__["a" /* ComponentsWeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_embarkation_embarkation__["a" /* EmbarkationPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_embarkation_embarkation__["a" /* EmbarkationComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_embarkation_embarkation__ = __webpack_require__(99);
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
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__["a" /* LandingPage */];
        this.displayPage = __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__["a" /* LandingPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.emba = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_embarkation_embarkation__["a" /* EmbarkationPage */]);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/shan/Desktop/Psionic/royal_carabian/src/app/app.html"*/'<ion-menu [content]="nav" side="right">\n\n    <ion-header>\n        <ion-toolbar>\n        </ion-toolbar>\n            <ion-title>Menu</ion-title>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)="onLoad(displayPage)">\n                <ion-icon name="settings" item-left></ion-icon>\n              Main Page\n            </button>\n            <button ion-item (click)="emba()">\n                <ion-icon name="settings" item-left></ion-icon>\n                Embarkation\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="settingsPage" #nav></ion-nav>\n'/*ion-inline-end:"/Users/shan/Desktop/Psionic/royal_carabian/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ComponentsTitleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComponentsTitleComponent = /** @class */ (function () {
    function ComponentsTitleComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ComponentsTitleComponent.prototype, "title", void 0);
    ComponentsTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'components-title',template:/*ion-inline-start:"/Users/shan/Desktop/Psionic/royal_carabian/src/components/components-title/components-title.html"*/'<!-- Generated template for the ComponentsTitleComponent component -->\n<div>\n  <ion-title ion-text  text-center class="title-text">{{title}}</ion-title>\n</div>\n'/*ion-inline-end:"/Users/shan/Desktop/Psionic/royal_carabian/src/components/components-title/components-title.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsTitleComponent);
    return ComponentsTitleComponent;
}());

//# sourceMappingURL=components-title.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsWeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the ComponentsWeatherComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComponentsWeatherComponent = /** @class */ (function () {
    function ComponentsWeatherComponent() {
    }
    ComponentsWeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'components-weather',template:/*ion-inline-start:"/Users/shan/Desktop/Psionic/royal_carabian/src/components/components-weather/components-weather.html"*/'<div ion-text text-center  color="light" class="weather-widget">\n  <div class="weather-inner">\n    <ion-icon name="sunny"></ion-icon>\n    WEATHER 20F\n  </div>\n\n</div>\n'/*ion-inline-end:"/Users/shan/Desktop/Psionic/royal_carabian/src/components/components-weather/components-weather.html"*/
        })
    ], ComponentsWeatherComponent);
    return ComponentsWeatherComponent;
}());

//# sourceMappingURL=components-weather.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmbarkationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the EmbarkationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EmbarkationComponent = /** @class */ (function () {
    function EmbarkationComponent() {
        console.log('Hello EmbarkationComponent Component');
        this.text = 'Hello World';
    }
    EmbarkationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'embarkation',template:/*ion-inline-start:"/Users/shan/Desktop/Psionic/royal_carabian/src/components/embarkation/embarkation.html"*/'<!-- Generated template for the EmbarkationComponent component -->\n<div>\n  <ion-row no-padding no-margin>\n    <ion-col no-padding no-margin >\n      <div class="post-container">\n        <div class="post-thumb"><img src="http://dummyimage.com/200x200/f0f/fff" /></div>\n        <div class="post-content">\n          <h3 class="post-title">Post title</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci aliquam amet architecto dicta distinctio dolore facilis iste itaque iure magnam, maxime modi non pariatur recusandae? Ex explicabo facere laborum.</p></div>\n      </div>\n    </ion-col>\n  </ion-row>\n</div>\n'/*ion-inline-end:"/Users/shan/Desktop/Psionic/royal_carabian/src/components/embarkation/embarkation.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EmbarkationComponent);
    return EmbarkationComponent;
}());

//# sourceMappingURL=embarkation.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmbarkationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
 * Generated class for the EmbarkationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmbarkationPage = /** @class */ (function () {
    function EmbarkationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmbarkationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmbarkationPage');
    };
    EmbarkationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-embarkation',template:/*ion-inline-start:"/Users/shan/Desktop/Psionic/royal_carabian/src/pages/embarkation/embarkation.html"*/'<!--\n  Generated template for the EmbarkationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button menuToggle end>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <!--<ion-title ion-text class="title-text">Crown of Miami</ion-title>-->\n    <components-title title="EMBARKATION" ></components-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid no-padding no-margin>\n\n    <ion-row no-padding no-margin>\n      <ion-col no-padding no-margin >\n        <ion-card no-padding no-margin class="hero-card">\n          <img class="hero-image" src="assets/imgs/ship2.png"/>\n          <div text-center class="card-title custom-card-title-over-hero-img">TERMINAL OPENING TIME</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <embarkation></embarkation>\n\n  </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/shan/Desktop/Psionic/royal_carabian/src/pages/embarkation/embarkation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EmbarkationPage);
    return EmbarkationPage;
}());

//# sourceMappingURL=embarkation.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map