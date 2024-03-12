/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/common.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/common.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/indieground-freebies-font-neon80s/Neon.ttf */ "./src/font/indieground-freebies-font-neon80s/Neon.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background-2.png */ "./src/img/background-2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/destroyer1.png */ "./src/img/destroyer1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/battleship.png */ "./src/img/battleship.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cruiser.png */ "./src/img/cruiser.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/submarine.png */ "./src/img/submarine.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,*::before,*::after
{
    box-sizing: border-box;
    padding: 0;
    margin: 0; 

}

/**** CSS variables *****/
:root{
--Cosmic-Gray: RGBA(88, 89, 91, 1);
--Photon-Yellow: RGBA(255, 255, 0, 1);
--Nebula-Green: RGBA(0, 128, 0, 1);
--Space-Void-Black: RGBA(0, 0, 0, 0.6);

--Destroyer :RGBA(255, 255, 153, 1);
--BattleShip:RGBA(204, 255, 0, 1);
--Cruiser: RGBA(255, 153, 0, 1);
--Submarine:RGBA(255, 153, 153, 1);

}
@font-face {
    font-family: 'maPolice'; 
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 200;
  }

#app{
  height: 100vh;
  width: 100vw;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: 'maPolice';
}


.title{
    font-size: 4em;
   
    border-radius: 10px;
    padding: 0.1em;
    color: var(--Photon-Yellow);
    background-color: var(--Space-Void-Black);
    box-shadow: var(--Photon-Yellow) 0px 5px 10px -2px, var(--Photon-Yellow) 0px 3px 6px -3px, var(--Photon-Yellow) 0px -2px 6px 0px inset;
}

.game-grid
{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
}

.cases
{
    background-color: var(--Space-Void-Black);
    border: 0.1em solid var(--Nebula-Green);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: var(--Cosmic-Gray);
    margin: 0.07em;
}
.is-hidden
{
    background-image: none !important;
    
    background-color: var(--Cosmic-Gray) !important;
  
    box-shadow: none !important;
    
}

.cases:hover
{
    background-color: var(--Cosmic-Gray);
    transform: scale(1.2);
    color: var(--Space-Void-Black);
}
.ship{
    background-color: var(--Photon-Yellow); 
}
.ship:hover{
    background-color: var(--Photon-Yellow);
}

.hit
{
    background-color: red;
    color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.hit:hover{
    background-color: red;
    color: black;
}

.board
{
    display: grid;
    grid-template-rows: repeat(10,minmax(1.5em,3em));
    grid-template-columns: repeat(10,minmax(1.5em,3em));
    border: 0.3em solid var(--Photon-Yellow);
    padding: 0.2em;
    border-radius: 10px;
}

.Ship-Selector
{
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 2em;
  
}
.Ship-Btn-Div
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
}
.numberUnitsDiv
{
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--Space-Void-Black);
    color: var(--Photon-Yellow);
    padding: 0.2em;
    
}
.ships-Units
{
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    gap: 0.5em;
    font-size: 1em;

}
.btnShipDirection
{
    padding: 0.75em;
    border-radius: 50%;
    width: 6em;
    height: 6em;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
    background-color: var(--Space-Void-Black);
    color: var(--Photon-Yellow);
    font-size: 1em;
    border: none;
}
span{
    border-top: solid 1px var(--Photon-Yellow);
    padding: 0.1em;
    width: 100%;
}

.btnShipDirection:hover
{
    transform: scale(1.1);
}

/** Ship ***/
.ship-info
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.2em;
    padding-left: 0.2em;
    
   

}
.ship-img
{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

}

    .Destroyer{
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});   
        background-color: var(--Destroyer);
        font-size: 1em;
        color: var(--Space-Void-Black);
        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--Destroyer) 0px -2px 6px 0px inset;
    }
    .Destroyer-selector
    {
        background-color: var(--Destroyer);
        font-size: 1em;
        color: black;
        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--Destroyer) 0px -2px 6px 0px inset;
    }
    .BattleShip{
        background-color: var(--BattleShip);
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});  
        font-size: 1em;
        color: var(--Space-Void-Black);
        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--BattleShip) 0px -2px 6px 0px inset;
    }
    .BattleShip-selector{
        background-color: var(--BattleShip);  
        font-size: 1em;

       color: black;
        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--BattleShip) 0px -2px 6px 0px inset;
    }
    .Cruiser{
        background-color: var(--Cruiser);
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});  
        font-size: 1em;
        color: var(--Space-Void-Black);
        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--Cruiser) 0px -2px 6px 0px inset;
    }
    .Cruiser-selector
    {
        background-color: var(--Cruiser);
        color: black;
        font-size: 1em;
        
        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--Cruiser) 0px -2px 6px 0px inset;
    }
    .SubMarine
    {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
       
        font-size: 1em;
        color: var(--Space-Void-Black);
        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--S) 0px -2px 6px 0px inset;


    }
    .SubMarine-selector{
        background-color: var(--Submarine);
        color: black;
        font-size: 1em;
  
    }
  
/*****/

.ShipIcon
{
    width: 4em;
    height: 4em;
    max-width: 100%;
    max-height: 100%;
}

@media screen and (max-width:600px) {
    #app
    {
        
        justify-content: space-evenly;
        gap: 1em;
    }
    
    .title
    {
        font-size: 2em;
        padding: 0.25em;
    }
    .board 
    {
       
        display: grid;
        grid-template-rows: repeat(10,minmax(1.5em,1fr));
        grid-template-columns: repeat(10,minmax(1.5em,1fr));
        gap: 0.1em;
    }
    .cases
    {
        border-radius: 1px;
        margin: 0px; 
        
    }
    .game-grid
    {
        width: 100vw;
        padding: 2em;
       
        gap: 0.1em;
    }

    .ships-Units
    {
        
        height: 20vh;
        
    }
    .ships-Units >*
    {
        flex: 1;
    }

    .ship-info{
       flex: 1;
    }
  .ShipIcon{
        max-width: 2.5em;
        max-height: 2.5em;
    }
    .Ship-Selector
    {
        height: 30vh;
        
    }
    .btnShipDirection
    {
        height: 5em;
        width: 5em;
        font-size: 1em;
        padding: 0.5em;

    }
    .btnShipDirection span 
    {
        font-size: 1em;
    }
    
}`, "",{"version":3,"sources":["webpack://./src/css/common.css"],"names":[],"mappings":"AAAA;;IAEI,sBAAsB;IACtB,UAAU;IACV,SAAS;;AAEb;;AAEA,yBAAyB;AACzB;AACA,kCAAkC;AAClC,qCAAqC;AACrC,kCAAkC;AAClC,sCAAsC;;AAEtC,mCAAmC;AACnC,iCAAiC;AACjC,+BAA+B;AAC/B,kCAAkC;;AAElC;AACA;IACI,uBAAuB;IACvB,4CAA8D;IAC9D,gBAAgB;EAClB;;AAEF;EACE,aAAa;EACb,YAAY;EACZ,yDAAgD;EAChD,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,uBAAuB;AACzB;;;AAGA;IACI,cAAc;;IAEd,mBAAmB;IACnB,cAAc;IACd,2BAA2B;IAC3B,yCAAyC;IACzC,sIAAsI;AAC1I;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;;IAEI,yCAAyC;IACzC,uCAAuC;IACvC,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,yBAAyB;IACzB,cAAc;AAClB;AACA;;IAEI,iCAAiC;;IAEjC,+CAA+C;;IAE/C,2BAA2B;;AAE/B;;AAEA;;IAEI,oCAAoC;IACpC,qBAAqB;IACrB,8BAA8B;AAClC;AACA;IACI,sCAAsC;AAC1C;AACA;IACI,sCAAsC;AAC1C;;AAEA;;IAEI,qBAAqB;IACrB,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;AAChC;AACA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,gDAAgD;IAChD,mDAAmD;IACnD,wCAAwC;IACxC,cAAc;IACd,mBAAmB;AACvB;;AAEA;;GAEG,aAAa;GACb,uBAAuB;GACvB,mBAAmB;GACnB,QAAQ;;AAEX;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;AACA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,yCAAyC;IACzC,2BAA2B;IAC3B,cAAc;;AAElB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;;IAEvB,UAAU;IACV,cAAc;;AAElB;AACA;;IAEI,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,mBAAmB;IACnB,yCAAyC;IACzC,2BAA2B;IAC3B,cAAc;IACd,YAAY;AAChB;AACA;IACI,0CAA0C;IAC1C,cAAc;IACd,WAAW;AACf;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA,YAAY;AACZ;;IAEI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;IACV,mBAAmB;;;;AAIvB;AACA;;IAEI,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;;AAEhC;;IAEI;QACI,yDAA8C;QAC9C,kCAAkC;QAClC,cAAc;QACd,8BAA8B;QAC9B,wIAAwI;IAC5I;IACA;;QAEI,kCAAkC;QAClC,cAAc;QACd,YAAY;QACZ,wIAAwI;IAC5I;IACA;QACI,mCAAmC;QACnC,yDAA8C;QAC9C,cAAc;QACd,8BAA8B;QAC9B,yIAAyI;IAC7I;IACA;QACI,mCAAmC;QACnC,cAAc;;OAEf,YAAY;QACX,yIAAyI;IAC7I;IACA;QACI,gCAAgC;QAChC,yDAA2C;QAC3C,cAAc;QACd,8BAA8B;QAC9B,sIAAsI;IAC1I;IACA;;QAEI,gCAAgC;QAChC,YAAY;QACZ,cAAc;;QAEd,sIAAsI;IAC1I;IACA;;QAEI,yDAA6C;;QAE7C,cAAc;QACd,8BAA8B;QAC9B,gIAAgI;;;IAGpI;IACA;QACI,kCAAkC;QAClC,YAAY;QACZ,cAAc;;IAElB;;AAEJ,MAAM;;AAEN;;IAEI,UAAU;IACV,WAAW;IACX,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI;;;QAGI,6BAA6B;QAC7B,QAAQ;IACZ;;IAEA;;QAEI,cAAc;QACd,eAAe;IACnB;IACA;;;QAGI,aAAa;QACb,gDAAgD;QAChD,mDAAmD;QACnD,UAAU;IACd;IACA;;QAEI,kBAAkB;QAClB,WAAW;;IAEf;IACA;;QAEI,YAAY;QACZ,YAAY;;QAEZ,UAAU;IACd;;IAEA;;;QAGI,YAAY;;IAEhB;IACA;;QAEI,OAAO;IACX;;IAEA;OACG,OAAO;IACV;EACF;QACM,gBAAgB;QAChB,iBAAiB;IACrB;IACA;;QAEI,YAAY;;IAEhB;IACA;;QAEI,WAAW;QACX,UAAU;QACV,cAAc;QACd,cAAc;;IAElB;IACA;;QAEI,cAAc;IAClB;;AAEJ","sourcesContent":["*,*::before,*::after\n{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0; \n\n}\n\n/**** CSS variables *****/\n:root{\n--Cosmic-Gray: RGBA(88, 89, 91, 1);\n--Photon-Yellow: RGBA(255, 255, 0, 1);\n--Nebula-Green: RGBA(0, 128, 0, 1);\n--Space-Void-Black: RGBA(0, 0, 0, 0.6);\n\n--Destroyer :RGBA(255, 255, 153, 1);\n--BattleShip:RGBA(204, 255, 0, 1);\n--Cruiser: RGBA(255, 153, 0, 1);\n--Submarine:RGBA(255, 153, 153, 1);\n\n}\n@font-face {\n    font-family: 'maPolice'; \n    src: url('../font/indieground-freebies-font-neon80s/Neon.ttf');\n    font-weight: 200;\n  }\n\n#app{\n  height: 100vh;\n  width: 100vw;\n  background-image: url('../img/background-2.png');\n  background-position: center; \n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  font-family: 'maPolice';\n}\n\n\n.title{\n    font-size: 4em;\n   \n    border-radius: 10px;\n    padding: 0.1em;\n    color: var(--Photon-Yellow);\n    background-color: var(--Space-Void-Black);\n    box-shadow: var(--Photon-Yellow) 0px 5px 10px -2px, var(--Photon-Yellow) 0px 3px 6px -3px, var(--Photon-Yellow) 0px -2px 6px 0px inset;\n}\n\n.game-grid\n{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2em;\n}\n\n.cases\n{\n    background-color: var(--Space-Void-Black);\n    border: 0.1em solid var(--Nebula-Green);\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2em;\n    color: var(--Cosmic-Gray);\n    margin: 0.07em;\n}\n.is-hidden\n{\n    background-image: none !important;\n    \n    background-color: var(--Cosmic-Gray) !important;\n  \n    box-shadow: none !important;\n    \n}\n\n.cases:hover\n{\n    background-color: var(--Cosmic-Gray);\n    transform: scale(1.2);\n    color: var(--Space-Void-Black);\n}\n.ship{\n    background-color: var(--Photon-Yellow); \n}\n.ship:hover{\n    background-color: var(--Photon-Yellow);\n}\n\n.hit\n{\n    background-color: red;\n    color: black;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.hit:hover{\n    background-color: red;\n    color: black;\n}\n\n.board\n{\n    display: grid;\n    grid-template-rows: repeat(10,minmax(1.5em,3em));\n    grid-template-columns: repeat(10,minmax(1.5em,3em));\n    border: 0.3em solid var(--Photon-Yellow);\n    padding: 0.2em;\n    border-radius: 10px;\n}\n\n.Ship-Selector\n{\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   gap: 2em;\n  \n}\n.Ship-Btn-Div\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n}\n.numberUnitsDiv\n{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    background-color: var(--Space-Void-Black);\n    color: var(--Photon-Yellow);\n    padding: 0.2em;\n    \n}\n.ships-Units\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n   \n    gap: 0.5em;\n    font-size: 1em;\n\n}\n.btnShipDirection\n{\n    padding: 0.75em;\n    border-radius: 50%;\n    width: 6em;\n    height: 6em;\n    display: flex;\n    flex-direction: column;\n    justify-content:space-evenly;\n    align-items: center;\n    background-color: var(--Space-Void-Black);\n    color: var(--Photon-Yellow);\n    font-size: 1em;\n    border: none;\n}\nspan{\n    border-top: solid 1px var(--Photon-Yellow);\n    padding: 0.1em;\n    width: 100%;\n}\n\n.btnShipDirection:hover\n{\n    transform: scale(1.1);\n}\n\n/** Ship ***/\n.ship-info\n{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.2em;\n    padding-left: 0.2em;\n    \n   \n\n}\n.ship-img\n{\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n\n}\n\n    .Destroyer{\n        background-image: url('../img/destroyer1.png');   \n        background-color: var(--Destroyer);\n        font-size: 1em;\n        color: var(--Space-Void-Black);\n        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--Destroyer) 0px -2px 6px 0px inset;\n    }\n    .Destroyer-selector\n    {\n        background-color: var(--Destroyer);\n        font-size: 1em;\n        color: black;\n        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--Destroyer) 0px -2px 6px 0px inset;\n    }\n    .BattleShip{\n        background-color: var(--BattleShip);\n        background-image: url('../img/battleship.png');  \n        font-size: 1em;\n        color: var(--Space-Void-Black);\n        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--BattleShip) 0px -2px 6px 0px inset;\n    }\n    .BattleShip-selector{\n        background-color: var(--BattleShip);  \n        font-size: 1em;\n\n       color: black;\n        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--BattleShip) 0px -2px 6px 0px inset;\n    }\n    .Cruiser{\n        background-color: var(--Cruiser);\n        background-image: url('../img/cruiser.png');  \n        font-size: 1em;\n        color: var(--Space-Void-Black);\n        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--Cruiser) 0px -2px 6px 0px inset;\n    }\n    .Cruiser-selector\n    {\n        background-color: var(--Cruiser);\n        color: black;\n        font-size: 1em;\n        \n        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--Cruiser) 0px -2px 6px 0px inset;\n    }\n    .SubMarine\n    {\n        background-image: url('../img/submarine.png');\n       \n        font-size: 1em;\n        color: var(--Space-Void-Black);\n        box-shadow: var(--Space-Void-Black) 0px 5px 10px -2px, var(--Space-Void-Black) 0px 3px 6px -3px, var(--S) 0px -2px 6px 0px inset;\n\n\n    }\n    .SubMarine-selector{\n        background-color: var(--Submarine);\n        color: black;\n        font-size: 1em;\n  \n    }\n  \n/*****/\n\n.ShipIcon\n{\n    width: 4em;\n    height: 4em;\n    max-width: 100%;\n    max-height: 100%;\n}\n\n@media screen and (max-width:600px) {\n    #app\n    {\n        \n        justify-content: space-evenly;\n        gap: 1em;\n    }\n    \n    .title\n    {\n        font-size: 2em;\n        padding: 0.25em;\n    }\n    .board \n    {\n       \n        display: grid;\n        grid-template-rows: repeat(10,minmax(1.5em,1fr));\n        grid-template-columns: repeat(10,minmax(1.5em,1fr));\n        gap: 0.1em;\n    }\n    .cases\n    {\n        border-radius: 1px;\n        margin: 0px; \n        \n    }\n    .game-grid\n    {\n        width: 100vw;\n        padding: 2em;\n       \n        gap: 0.1em;\n    }\n\n    .ships-Units\n    {\n        \n        height: 20vh;\n        \n    }\n    .ships-Units >*\n    {\n        flex: 1;\n    }\n\n    .ship-info{\n       flex: 1;\n    }\n  .ShipIcon{\n        max-width: 2.5em;\n        max-height: 2.5em;\n    }\n    .Ship-Selector\n    {\n        height: 30vh;\n        \n    }\n    .btnShipDirection\n    {\n        height: 5em;\n        width: 5em;\n        font-size: 1em;\n        padding: 0.5em;\n\n    }\n    .btnShipDirection span \n    {\n        font-size: 1em;\n    }\n    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/common.css":
/*!****************************!*\
  !*** ./src/css/common.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/common.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Class/ship.js":
/*!***************************!*\
  !*** ./src/Class/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship{


    constructor(size,position,name)
    {
        this.size = size
        this.hit = 0;
        this.sink = false;
        this.position = position;
        this.name = name
    }

    gotHit()
    {
        this.hit +=1 ;
        
        this.isSunk();
    } 

    isSunk()
    {
        if(this.hit >= this.size)
            this.sink = true;
       
    }
}

/***/ }),

/***/ "./src/component/cp-container.js":
/*!***************************************!*\
  !*** ./src/component/cp-container.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*Create a new div with the class of className and it to his parent */
const createContainer=(className,parent)=>{
    
    const element = document.createElement('div');
    element.classList.add(className);
   
    if(parent)
    {
         parent.appendChild(element);
         return element
        
    }
    else
    {
         document.getElementById('app').appendChild(element);
         return element
    }
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContainer);

/***/ }),

/***/ "./src/component/cp-createBoard.js":
/*!*****************************************!*\
  !*** ./src/component/cp-createBoard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _cp_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cp-container */ "./src/component/cp-container.js");
/* harmony import */ var _cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cp-createElementWithText */ "./src/component/cp-createElementWithText.js");




function createBoard(gameGrid){


    const boardDiv = (0,_cp_container__WEBPACK_IMPORTED_MODULE_0__["default"])("board",gameGrid)
    let board = [];
    let numRows = 10;
    let numCols = 10;
   
    
    for (let i = 0; i < numRows; i++) {
        board[i] = [];
        for (let j = 0; j < numCols; j++) {
           
            board[i][j] = 0;
        }
    }
    
    let element; 
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            
            
                element= (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('div',``,boardDiv,"cases")
                element.classList.add(`${i}/${j}`)  
        }
    }



        return { 
            DomBoard:boardDiv,
            ArrayBoard : board,
        };
            

}

/***/ }),

/***/ "./src/component/cp-createElementWithText.js":
/*!***************************************************!*\
  !*** ./src/component/cp-createElementWithText.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementWithText)
/* harmony export */ });


function createElementWithText(balise,text,container,className)
{
   const element= document.createElement(balise)
   element.innerText= text

    if(className)
        element.classList.add(className)

    if(container)
        container.appendChild(element)
    else
        document.getElementById('app').appendChild(element)

    return element;

}



/***/ }),

/***/ "./src/component/cp-shipSelector.js":
/*!******************************************!*\
  !*** ./src/component/cp-shipSelector.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipDivSelector)
/* harmony export */ });
/* harmony import */ var _cp_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cp-container */ "./src/component/cp-container.js");
/* harmony import */ var _cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cp-createElementWithText */ "./src/component/cp-createElementWithText.js");
/* harmony import */ var _img_destroyer1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/destroyer1.png */ "./src/img/destroyer1.png");
/* harmony import */ var _img_battleship_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/battleship.png */ "./src/img/battleship.png");
/* harmony import */ var _img_cruiser_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/cruiser.png */ "./src/img/cruiser.png");
/* harmony import */ var _img_submarine_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/submarine.png */ "./src/img/submarine.png");











function shipDivSelector() {

    const shipSelector = (0,_cp_container__WEBPACK_IMPORTED_MODULE_0__["default"])("Ship-Selector")
    const shipsUnits = (0,_cp_container__WEBPACK_IMPORTED_MODULE_0__["default"])("ships-Units",shipSelector)
    const shipbtndiv =(0,_cp_container__WEBPACK_IMPORTED_MODULE_0__["default"])('Ship-Btn-Div',shipSelector)
    const shipDirectionBtn=(0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('button',"Place Ship",shipbtndiv,"btnShipDirection")
    ;(0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('div',null,shipbtndiv,"numberUnitsDiv")
    const destroyerSelector = (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('div',"Destroyer : 5 Units",shipsUnits,"Destroyer-selector")
    const battleshipSelector = (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('div',"Battle Ship: 4 Units",shipsUnits,"BattleShip-selector")
    const cruiserSelector = (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('div',"Cruiser: 3 Units",shipsUnits,"Cruiser-selector")
    const SubMarineSelector = (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('div',"SubMarine: 2 Units",shipsUnits,"SubMarine-selector")

    createShipImg(_img_destroyer1_png__WEBPACK_IMPORTED_MODULE_2__,destroyerSelector)
    createShipImg(_img_battleship_png__WEBPACK_IMPORTED_MODULE_3__,battleshipSelector)
    createShipImg(_img_cruiser_png__WEBPACK_IMPORTED_MODULE_4__,cruiserSelector)
    createShipImg(_img_submarine_png__WEBPACK_IMPORTED_MODULE_5__,SubMarineSelector)
    
    destroyerSelector.classList.add('ship-info')
    battleshipSelector.classList.add('ship-info')
    cruiserSelector.classList.add('ship-info')
    SubMarineSelector.classList.add('ship-info')
    
    destroyerSelector.classList.add('ship-img')
    battleshipSelector.classList.add('ship-img')
    cruiserSelector.classList.add('ship-img')
    SubMarineSelector.classList.add('ship-img')



    
    
     shipSelector;
}

function createShipImg(url,conteneur)
{
    const img = document.createElement('img')
    img.src = url
    img.classList.add("ShipIcon")
   
    conteneur.appendChild(img);
}

/***/ }),

/***/ "./src/dom-scripts/Dom-Manipulation.js":
/*!*********************************************!*\
  !*** ./src/dom-scripts/Dom-Manipulation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomManipulationModule: () => (/* binding */ DomManipulationModule)
/* harmony export */ });
/* harmony import */ var _logic_board_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/board-logic */ "./src/logic/board-logic.js");
/* harmony import */ var _img_miss_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/miss.png */ "./src/img/miss.png");
/* harmony import */ var _img_destroyer1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/destroyer1.png */ "./src/img/destroyer1.png");
/* harmony import */ var _img_battleship_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/battleship.png */ "./src/img/battleship.png");
/* harmony import */ var _img_cruiser_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/cruiser.png */ "./src/img/cruiser.png");
/* harmony import */ var _img_submarine_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/submarine.png */ "./src/img/submarine.png");
/* harmony import */ var _img_explosion_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/explosion.png */ "./src/img/explosion.png");
/* harmony import */ var _Class_ship__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Class/ship */ "./src/Class/ship.js");
/* harmony import */ var _logic_IA_logic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logic/IA-logic */ "./src/logic/IA-logic.js");















const DomManipulationModule =(() => {

    const refreshTheDomAfterHit=(board,doubleDomArray) =>{
        
   
      board.forEach((row, x) => {  // Iterating over rows
            row.forEach((cell, y) => {  // Iterating over cells in each row
                if (cell !== 0) {
                   
                    if(cell ==='X')
                    {
                        doubleDomArray[x][y].classList.remove('is-hidden')
                        doubleDomArray[x][y].innerText = "";
                        doubleDomArray[x][y].classList.add('hit')
                        doubleDomArray[x][y].style.backgroundImage = `url('${_img_explosion_png__WEBPACK_IMPORTED_MODULE_6__}')`

                    }
                    if(cell==="M")
                    {
                    doubleDomArray[x][y].classList.remove('is-hidden')
                    doubleDomArray[x][y].innerText = "";
                    doubleDomArray[x][y].classList.add('hit')
                    doubleDomArray[x][y].style.backgroundImage = `url('${_img_miss_png__WEBPACK_IMPORTED_MODULE_1__}')`

                    }
                    

                    

                }
            });
        });
        
    }
    const getPositionHitFromTheBoardDom = (board, leftBoardShip,boardIa,rightBoardShip) => {
       
        
       
        const domBoard = document.querySelectorAll(`.right > *`)
        const doubleDomArray = MakeDomNodeListIntoDoubleArray(domBoard)
        /*Ia Board to play*/
        const domBoardIa = document.querySelectorAll(`.left > *`)
        const doubleDomArrayIa = MakeDomNodeListIntoDoubleArray(domBoardIa)
        /**/
        console.log(doubleDomArrayIa)
        // Nettoyer les gestionnaires d'événements précédents
        doubleDomArray.forEach((row) => {
            row.forEach((element) => {
                element.removeEventListener("click", element.clickHandler);
            });
        });
    
        // Ajouter de nouveaux gestionnaires d'événements
        doubleDomArray.forEach((row, x) => {
            row.forEach((element, y) => {
                // Créer un écouteur unique pour chaque élément
                const clickHandler = function(event) {
                  const allShipSunk =  _logic_board_logic__WEBPACK_IMPORTED_MODULE_0__.gameBoardModule.hitTheBoardArray(boardIa, rightBoardShip, [x, y]);
                    displayerGame(rightBoardShip);
                    // Supprimer l'écouteur d'événements
                    event.target.removeEventListener('click', clickHandler);
                   
                    event.target.style.pointerEvents = "none";
                    refreshTheDomAfterHit(boardIa, doubleDomArray);

                    if(allShipSunk)
                        alert('tout les bateau ont coulés ')

                        const IaSunkAllShips = _logic_IA_logic__WEBPACK_IMPORTED_MODULE_8__.IaMove.IaRdmMove(board,leftBoardShip,doubleDomArrayIa)
                  

                     if(IaSunkAllShips)
                     {
                        alert('Ia coulé tout vos bateau')
                        return;
                     }
                     };

                     
                        
    
                // Stocker la référence de l'écouteur dans l'élément même
                element.clickHandler = clickHandler;
    
                element.addEventListener("click", clickHandler);
            });
        });
    };

    const displayerGame = (rightBoardShip) => {
        const displayer = document.querySelector('.numberUnitsDiv');
        const numberUnits = {
            Destroyer: 1,
            BattleShip: 2,
            Cruiser: 3,
            SubMarine: 4,
        };
        
        let displayText = ''; // Préparer le texte à afficher
    
        for (const [shipType, shipsArray] of Object.entries(rightBoardShip)) {
            let unitDown = 0; // Nombre de vaisseaux de ce type coulés
            
            for (const ship of shipsArray) {
                if (ship.sink) {
                    unitDown++; // Compter chaque vaisseau coulé
                }
            }
    
            if (unitDown > 0) {
                // Mettre à jour le texte à afficher avec les détails pour ce type de vaisseau
                displayText += `${shipType} : Détruit: ${unitDown}, Restant : ${numberUnits[shipType] - unitDown} <br>`;
            }
        }
    
        // Mettre à jour le contenu de l'élément 'displayer' une seule fois à la fin
        displayer.innerHTML = displayText;
    };
    
    
 
    const MakeDomNodeListIntoDoubleArray = (DomBoard) => {
        const tableauFinal = [];
        for (let i = 0; i < DomBoard.length; i += 10) {
            const sousTableau = [];
            for (let j = i; j < i + 10 && j < DomBoard.length; j++) {
                sousTableau.push(DomBoard[j]);
            }
            tableauFinal.push(sousTableau);
        }
        return tableauFinal;
    };
    const hideIaBoard=()=>{

        const domBoard = document.querySelectorAll(`.right > *`);
        const doubleDomArray = MakeDomNodeListIntoDoubleArray(domBoard);
        doubleDomArray.forEach((row)=>{
            row.forEach(element=>{
                element.classList.add('is-hidden')

            })
        })

    }

    const checkifpossible = (index, rowIndex, doubleDomArray, size, direction) => {
        
        let availableSpaceAfter = 0;
        let availableSpaceBefore = 0;
       
    
        if (direction === 'h') {
            
            for (let i = rowIndex; i < doubleDomArray[rowIndex].length && availableSpaceAfter < size; i++) {
                if (!doubleDomArray[index][i].classList.contains('locked')) {
                    availableSpaceAfter++;
                } else {
                    break; // Rencontre un 'locked', arrêtez le comptage
                }   
            }
            
            if(availableSpaceAfter<size)
            {
                for (let i = rowIndex - 1; i >= 0&&  availableSpaceBefore < (size - availableSpaceAfter); i--) {
                    if (!doubleDomArray[index][i].classList.contains('locked')) {
                        availableSpaceBefore++;
                    } 
                    else 
                    {
                        return false;
                    }
                }
                

            }
            
           
        } else if (direction === 'v') {
              // Compter l'espace disponible en bas
              for (let i = index ; i < 10 && availableSpaceAfter < size ; i++) {
                if (!doubleDomArray[i][rowIndex].classList.contains('locked')) {
                    availableSpaceAfter++;
                } else {
                    break; // Rencontre un 'locked', arrêtez le comptage
                }
            }
            // Compter l'espace disponible en haut
            for (let i = index-1; i >= 0 && availableSpaceBefore < (size-availableSpaceAfter); i--) {
                if (!doubleDomArray[i][rowIndex].classList.contains('locked')) {
                    availableSpaceBefore++;
                } else {
                    return false;
                }
            }
          
        }
        
        
        return availableSpaceBefore + availableSpaceAfter >= size;
    };
    
    
    
    const waitForAllShipsPlaced = (size, icon, numberUnits,direction,cancelToken,lastShip) => {
        
        const domBoard = document.querySelectorAll('.left > *');
        const doubleDomArray = MakeDomNodeListIntoDoubleArray(domBoard);
        let ships = {}; // Conserve les positions de tous les navires
        let position = []; // Initialisation de l'entrée pour ce type d'unité
            
           
            const removeMouseoverListeners = () => {
                domBoard.forEach(element => {
                    if (element.handleMouseover) {
                        element.removeEventListener("mouseover", element.handleMouseover);
                        delete element.handleMouseover;
                    }
                });

            };
        
            const removeAllClickListeners = () => {
                doubleDomArray.forEach(subArray => {
                    subArray.forEach(element => {
                        if (element.handleClick) {
                            element.removeEventListener("click", element.handleClick);
                            delete element.handleClick; // Clean up to avoid memory leaks
                        }
                    });
                });
            };
            
            // console.log(direction,icon,"-> en, cours")
       
        return new Promise((resolve,reject) => {
            
                if(cancelToken.isCancelled)
                {
                   removeMouseoverListeners();
                   removeAllClickListeners();
                    resolve(ships)
                    console.log(direction,icon,"-> annulée dans time out")
                    return;     
                }                                
    
            // Parcours de chaque cellule du plateau de jeu
            doubleDomArray.forEach((subArray, rowIndex) => {
                subArray.forEach((element, columnIndex) => {
    
                    // Gestion du mouseover
                    element.handleMouseover = () => {


                        if (numberUnits <= 0) return;
                        
                        
                        removeHighlights(doubleDomArray, icon);

                     
                       
    
                        if (checkifpossible(rowIndex, columnIndex, doubleDomArray, size, direction)) {
                            let elementsToPlace = size;
                           
                            
                            if (direction === 'h') {
                                removeHighlights(doubleDomArray, icon);
                                let placed = 0; // Nombre d'unités placées
                                // Essayez de placer à droite
                                for (let i = columnIndex; placed < size && i < subArray.length; i++) {
                                    if (!subArray[i].classList.contains('locked')) {
                                        subArray[i].classList.add(icon, 'ship-img');
                                        placed++;
                                    } else {
                                        // Rencontré un élément locked, arrêtez la boucle
                                        break;
                                    }
                                }
                            
                                // Si tous les éléments n'ont pas été placés et aucun élément locked rencontré, compléter à gauche
                                if (placed < size) {
                                    for (let i = columnIndex - 1; placed < size && i >= 0; i--) {
                                        if (!subArray[i].classList.contains('locked')) {
                                            subArray[i].classList.add(icon, 'ship-img');
                                            placed++;
                                        } else {
                                            // Rencontré un élément locked, arrêtez la boucle
                                            break;
                                        }
                                    }
                                }
                            }
                            else
                            if (direction === 'v') 
                            {
                                removeHighlights(doubleDomArray, icon);
                                let placed = 0; // Nombre d'unités placées
                                // Essayez de placer en bas
                                for (let i = rowIndex; placed < size && i < doubleDomArray.length; i++) {
                                    if (!doubleDomArray[i][columnIndex].classList.contains('locked')) {
                                        doubleDomArray[i][columnIndex].classList.add(icon, 'ship-img');
                                        placed++;
                                    } else {
                                        // Rencontré un élément locked, arrêtez la boucle
                                        break;
                                    }
                                }
                            
                                // Si tous les éléments n'ont pas été placés et aucun élément locked rencontré, compléter en haut
                                if (placed < size) {
                                    for (let i = rowIndex - 1; placed < size && i >= 0; i--) {
                                        if (!doubleDomArray[i][columnIndex].classList.contains('locked')) {
                                            doubleDomArray[i][columnIndex].classList.add(icon, 'ship-img');
                                            placed++;
                                        } else {
                                            // Rencontré un élément locked, arrêtez la boucle
                                            break;
                                        }
                                    }
                                }
                            }
                            
                            
                        }
                    };
                  
                    element.addEventListener("mouseover", element.handleMouseover);
    
                    // Gestion du click
                    element.handleClick = () => {
                        if (numberUnits <= 0) return;

                    
                        if (checkifpossible(rowIndex, columnIndex, doubleDomArray, size, direction)) {
                            let elementsToPlace = size;
                            let placed = 0;

                            
                           
                            if (direction === 'h') {
                                // Placement à droite
                                for (let i = columnIndex; placed < size && i < subArray.length; i++) {
                                    if (!subArray[i].classList.contains('locked')) {
                                        subArray[i].classList.add('locked', icon, 'ship-img');
                                        position.push([rowIndex, i]);
                                        
                                        placed++;
                                    } else {
                                        break; // Arrêtez si un élément locked est rencontré
                                    }
                                }
        
                                // Compléter à gauche si nécessaire
                                for (let i = columnIndex - 1; placed < size && i >= 0; i--) {
                                    if (!subArray[i].classList.contains('locked')) {
                                        subArray[i].classList.add('locked', icon, 'ship-img');
                                        position.push([rowIndex, i]);
                                        
                                        placed++;
                                    } else {
                                        break; // Arrêtez si un élément locked est rencontré
                                    }
                                }
                               
                            } else 
                            if (direction === 'v') {
                                // Placement en bas
                                for (let i = rowIndex; placed < size && i < doubleDomArray.length; i++) {
                                    if (!doubleDomArray[i][columnIndex].classList.contains('locked')) {
                                        doubleDomArray[i][columnIndex].classList.add('locked', icon, 'ship-img');
                                        position.push([i, columnIndex]);
                                        

                                        placed++;
                                    } else {
                                        break; // Arrêtez si un élément locked est rencontré
                                    }
                                }
        
                                // Compléter en haut si nécessaire
                                for (let i = rowIndex - 1; placed < size && i >= 0; i--) {
                                    if (!doubleDomArray[i][columnIndex].classList.contains('locked')) {
                                        doubleDomArray[i][columnIndex].classList.add('locked', icon, 'ship-img');
                                        position.push([i, columnIndex]);
                                        

                                        placed++;
                                    } else {
                                        break; // Arrêtez si un élément locked est rencontré
                                    }
                                }
                                
                             
                            }
                            
    
                            numberUnits--;
                            ships[icon]=position;
                            lastShip.positionPlaced = position;
                           
                            
                            
    
                            if (numberUnits <= 0) {
                                removeAllClickListeners();
                                removeMouseoverListeners();
                                resolve(ships);
                            }
                        }
                    };
    
                    element.addEventListener("click", element.handleClick);
                });
            });
        });
    
        (async () => {
            try {
                await waitForAllShipsPlaced();
                console.log("Tous les navires ont été placés !");
            } catch (error) {
                console.error("Une erreur s'est produite :", error);
            }
        })();
    }
        
    
    // Function to remove highlights from all elements
    const removeHighlights = (doubleDomArray, icon) => {
        doubleDomArray.forEach(subArray => {
            subArray.forEach(element => {
                if(!element.classList.contains('locked'))
                    element.classList.remove(icon, 'ship-img');
            });
        });
    };

    const placeIaShips =()=>
    {
        const domBoard = document.querySelectorAll('.right > *');
        const doubleDomArray = MakeDomNodeListIntoDoubleArray(domBoard);
        let ships = {}; // Conserve les positions de tous les navires
        let position = []; // Initialisation de l'entrée pour ce type d'unité
        
        const numberUnits = {
            1:["Destroyer",5],
            2:["BattleShip",4],
            3:["Cruiser",3],
            4:["SubMarine",2],
        }
        let direction= getRandomDirection();

        function getRandomDirection() {
            // Génère un nombre aléatoire entre 0 et 1
            const randomNum = Math.random();
            
            // Si le nombre est inférieur à 0.5, choisir 'h', sinon 'v'
            return randomNum < 0.5 ? 'h' : 'v';
        }

        function checkIfPossibleIa(direction, indexH, indexV, size, doubleDomArray) {
            // Vérification si l'unité peut être placée verticalement
            if (direction === "v") {
                for (let j = 0; j < size; j++) {
                    // Vérifier si l'index est dans les limites du tableau et si la case est déjà occupée
                    if (indexV + j >= doubleDomArray.length || doubleDomArray[indexV + j][indexH].classList.contains('locked')) {
                        return false;
                    }
                }
            } 
            // Vérification si l'unité peut être placée horizontalement
            else if (direction === "h") {
                for (let j = 0; j < size; j++) {
                    // Vérifier si l'index est dans les limites du tableau et si la case est déjà occupée
                    if (indexH + j >= doubleDomArray[0].length || doubleDomArray[indexV][indexH + j].classList.contains('locked')) {
                        return false;
                    }
                }
            }
        
            // Si on arrive ici, cela signifie que toutes les cases nécessaires sont libres
            return true;
        }
        
        
            for(let key of Object.keys(numberUnits))
            {
                
                ships[numberUnits[key][0]]=[];
                for(let i=0;i<key;i++)
                {
                    let indexH = Math.floor(Math.random() *doubleDomArray[0].length)
                    let indexV = Math.floor(Math.random() *doubleDomArray[0].length)
                    
                    direction = getRandomDirection()
                    let size = numberUnits[key][1];
                    // console.log(key,"----> KEy",size ,"---> size")

                    position=[];
                    while(!checkIfPossibleIa(direction,indexH,indexV,size,doubleDomArray))
                    {
                        indexH = Math.floor(Math.random() *doubleDomArray[0].length)
                        indexV = Math.floor(Math.random() *doubleDomArray[0].length)
                        direction = getRandomDirection();
                        checkIfPossibleIa(direction,indexH,indexV,size,doubleDomArray)
                    }

                        for(let j=0;j<size;j++)
                        {
                                if(direction==="v")
                                {
                                    if(!doubleDomArray[indexV+j][indexH].classList.contains('locked'))
                                    {
                                        doubleDomArray[indexV+j][indexH].classList.add('locked',numberUnits[key][0],'ship-img');
                                        position.push([indexV+j,indexH])
                                    }
                                    
                                
                                }
                                else
                                if(direction==="h")
                                {
                                    if(!doubleDomArray[indexV][indexH+j].classList.contains('locked'))
                                    {
                                        doubleDomArray[indexV][indexH+j].classList.add("locked",numberUnits[key][0], 'ship-img');
                                        position.push([indexV,indexH+j])
                                    }

                                }
                            }

                        ships[numberUnits[key][0]].push(new _Class_ship__WEBPACK_IMPORTED_MODULE_7__["default"](size,position,numberUnits[key][0]))   
                }
                
            }
                return ships;    
        
    };
    
    
    
    return {
        getPositionHitFromTheBoardDom,
        waitForAllShipsPlaced,
        placeIaShips,
        refreshTheDomAfterHit,
        hideIaBoard,


    }

})();



/***/ }),

/***/ "./src/dom-scripts/Init-page.js":
/*!**************************************!*\
  !*** ./src/dom-scripts/Init-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPage)
/* harmony export */ });
/* harmony import */ var _component_cp_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/cp-container */ "./src/component/cp-container.js");
/* harmony import */ var _component_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/cp-createElementWithText */ "./src/component/cp-createElementWithText.js");
/* harmony import */ var _component_cp_createBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/cp-createBoard */ "./src/component/cp-createBoard.js");
/* harmony import */ var _Class_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Class/ship */ "./src/Class/ship.js");
/* harmony import */ var _logic_board_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logic/board-logic */ "./src/logic/board-logic.js");
/* harmony import */ var _Dom_Manipulation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dom-Manipulation */ "./src/dom-scripts/Dom-Manipulation.js");
/* harmony import */ var _component_cp_shipSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/cp-shipSelector */ "./src/component/cp-shipSelector.js");
/* harmony import */ var _logic_IA_logic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logic/IA-logic */ "./src/logic/IA-logic.js");









function initPage()
{
(0,_component_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('h1',"SPACE SHIP BATTLE",null,"title")
const shipSelector = (0,_component_cp_shipSelector__WEBPACK_IMPORTED_MODULE_6__["default"])();

const gameGrid= (0,_component_cp_container__WEBPACK_IMPORTED_MODULE_0__["default"])("game-grid")

const boardLeft = (0,_component_cp_createBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(gameGrid);


boardLeft.DomBoard.classList.add("left")

const boardRight = (0,_component_cp_createBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(gameGrid);




boardRight.DomBoard.classList.add("right")
const ship = new _Class_ship__WEBPACK_IMPORTED_MODULE_3__["default"](3,[[0, 1], [0, 2], [0, 3]])
const ship2 = new _Class_ship__WEBPACK_IMPORTED_MODULE_3__["default"](2,[[2, 1], [2, 2]])
const ship3 = new _Class_ship__WEBPACK_IMPORTED_MODULE_3__["default"](2,[[5, 1], [4, 1]])
const ship4 = new _Class_ship__WEBPACK_IMPORTED_MODULE_3__["default"](1,[[0,0]])

const leftBoardShip ={
   
}
_Dom_Manipulation__WEBPACK_IMPORTED_MODULE_5__.DomManipulationModule.hideIaBoard();



// DomManipulationModule.addShipOnTheBoard(4,'BattleShip',2);
const btnPlaceShip = document.querySelector(".btnShipDirection")
const numberUnitsDiv =document.querySelector('.numberUnitsDiv')
let direction = null
let numberUnits = {
    1:["Destroyer",5],
    2:["BattleShip",4],
    3:["Cruiser",3],
    4:["SubMarine",2],
}
let unitsPlaced = 0;

let cancelToken = { isCancelled: false };

// Fonction pour réinitialiser le token
function resetCancelToken() {
    cancelToken = { isCancelled: false };
}
let ships;
let lastShip ={positionPlaced:null}
const rightBoardShip = _Dom_Manipulation__WEBPACK_IMPORTED_MODULE_5__.DomManipulationModule.placeIaShips();

_logic_board_logic__WEBPACK_IMPORTED_MODULE_4__.gameBoardModule.placeShipOnTheBoardArray(boardRight.ArrayBoard,rightBoardShip)

// DomManipulationModule.getPositionHitFromTheBoardDom(boardRight.ArrayBoard,rightBoardShip,".right");
 







 /***************/


function handlePlaceShipClick(e) {
    e.preventDefault();
   
    // console.log("position deja placé Avant appel ->",lastShip.positionPlaced)

    
    if (!direction) 
            direction = 'h';
            else 
            {
                
                direction = (direction === "h") ? 'v' : 'h';
                cancelToken.isCancelled = true;
            }

    (async () => {
        for (const key of Object.keys(numberUnits)) {
            btnPlaceShip.innerHTML=""
            ;(0,_component_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('h4',"Direction",btnPlaceShip,null)
             const span = (direction=== "h") ? (0,_component_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])("span","swap_horiz",btnPlaceShip,"material-symbols-outlined") : (0,_component_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])("span","swap_vert",btnPlaceShip,"material-symbols-outlined")
                

            let k = parseInt([Object.keys(leftBoardShip).length])+1
            let icon = numberUnits[k][0]
            let unit = {Destroyer : 5,BattleShip:4,Cruiser:3,SubMarine:2}
            let number ={5:1,4:2,3:3,2:4}
            let size = unit[icon];
            let unitNb= number[size];
            let bateau =[] ;
            numberUnitsDiv.innerHTML =icon+" : "+unitNb+" Unit(s)";
        if(lastShip.positionPlaced &&Object.keys(leftBoardShip)[Object.keys(leftBoardShip).length - 1] !==icon )
        {
            
                unitNb = (unitNb*size - lastShip.positionPlaced.length)/size
                // console.log(size,icon,unitNb,"->missing " + "dernier cles ->" ,Object.keys(leftBoardShip)[Object.keys(leftBoardShip).length - 1] )
               
                let shipsPositionAfter = [];
                let index = 0;
                let shipsPosition =lastShip.positionPlaced;
               
                while(lastShip.positionPlaced.length>0)
                {
                    shipsPositionAfter[index]=[]
                    for(let i =0;i<size;i++)
                    {
                        
                        shipsPositionAfter[index].push(shipsPosition[0])
                        shipsPosition.shift();
                    }
                    
                    //  console.log(shipsPositionAfter[index],"My man ->")
                    const tempUnits =new _Class_ship__WEBPACK_IMPORTED_MODULE_3__["default"](size,shipsPositionAfter[index],icon)
                    bateau.push(tempUnits)
                    index++;
                    
                }
                // console.log(bateau,"My Units already on Dom ->")
                lastShip.positionPlaced =null;
                ships = await _Dom_Manipulation__WEBPACK_IMPORTED_MODULE_5__.DomManipulationModule.waitForAllShipsPlaced(size, icon, unitNb,direction,cancelToken,lastShip);
                cancelToken.isCancelled=false;
               shipsPosition =lastShip.positionPlaced;
                
        }

        else
        {

            ships = await _Dom_Manipulation__WEBPACK_IMPORTED_MODULE_5__.DomManipulationModule.waitForAllShipsPlaced(size, icon, unitNb,direction,cancelToken,lastShip);
            cancelToken.isCancelled=false;
            
        }
        if(Object.keys(ships).length === 0 || cancelToken.isCancelled)
        {   
            
           
            cancelToken.isCancelled=false;
          
            ships =   await _Dom_Manipulation__WEBPACK_IMPORTED_MODULE_5__.DomManipulationModule.waitForAllShipsPlaced(size, icon, unitNb,direction,cancelToken,lastShip);   
            
        }
        // console.log(ships,"My Units from wait->"+"My Units already on Dom ->",bateau)
        
         for(const shipName of Object.keys(ships))
         {
            let shipsPosition=ships[shipName]
          
            let shipsPositionAfter = []; 
            let index = 0;
            leftBoardShip[shipName] =[]
            //si des untis sont déja placé sur le dom 
            if(bateau.length>0)
            {
                bateau.forEach(element => {
                    leftBoardShip[shipName].push(element);
                    unitsPlaced++;
                });
            }
                
        while(shipsPosition.length>0)
        {
            shipsPositionAfter[index]=[];

            for(let i = 0;i<size;i++)
           {
            
            shipsPositionAfter[index].push(shipsPosition[0])
            shipsPosition.shift();

           }
           
            leftBoardShip[shipName].push( new _Class_ship__WEBPACK_IMPORTED_MODULE_3__["default"](size,shipsPositionAfter[index],shipName)) 
           index++;
           unitsPlaced++;
    

        }
                
        }
   
            if (unitsPlaced === 10) {
                
                btnPlaceShip.removeEventListener('click', handlePlaceShipClick);
                _logic_board_logic__WEBPACK_IMPORTED_MODULE_4__.gameBoardModule.placeShipOnTheBoardArray(boardLeft.ArrayBoard,leftBoardShip)
                
               _Dom_Manipulation__WEBPACK_IMPORTED_MODULE_5__.DomManipulationModule.getPositionHitFromTheBoardDom(boardLeft.ArrayBoard,leftBoardShip,boardRight.ArrayBoard,rightBoardShip)
                
                break; 
            }
        }
    })();
}



// Attachez l'écouteur d'événements en utilisant la fonction nommée
btnPlaceShip.addEventListener('click', handlePlaceShipClick);



}









/***/ }),

/***/ "./src/logic/IA-logic.js":
/*!*******************************!*\
  !*** ./src/logic/IA-logic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IaMove: () => (/* binding */ IaMove)
/* harmony export */ });
/* harmony import */ var _board_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-logic */ "./src/logic/board-logic.js");
/* harmony import */ var _dom_scripts_Dom_Manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-scripts/Dom-Manipulation */ "./src/dom-scripts/Dom-Manipulation.js");




const IaMove=(()=>{

const IaRdmMove=(BoardToPlay,rightBoardShip,doubleDomArrayIa)=>{


let allShipSunkleft = false
let getNextUniqueIndex = _board_logic__WEBPACK_IMPORTED_MODULE_0__.gameBoardModule.uniqueRandomIndices(BoardToPlay);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Fonction asynchrone pour exécuter votre logique avec un délai entre chaque itération
async function executeWithDelay() {
   
       const nextIndex =getNextUniqueIndex();
        // console.log("Je tire à la position ->", nextIndex, "Tout les bateaux sont coulés:", allShipSunkleft);
        allShipSunkleft = _board_logic__WEBPACK_IMPORTED_MODULE_0__.gameBoardModule.hitTheBoardArray(BoardToPlay,rightBoardShip,nextIndex)
        // Attendre 1000 millisecondes (1 seconde) avant de continuer à la prochaine itération
        await delay(20);

        // Logique après le délai, si nécessaire
        
        _dom_scripts_Dom_Manipulation__WEBPACK_IMPORTED_MODULE_1__.DomManipulationModule.refreshTheDomAfterHit(BoardToPlay, doubleDomArrayIa);
    
   
}


executeWithDelay();
return allShipSunkleft;
}

return {
    IaRdmMove,
}

})();



/***/ }),

/***/ "./src/logic/board-logic.js":
/*!**********************************!*\
  !*** ./src/logic/board-logic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameBoardModule: () => (/* binding */ gameBoardModule)
/* harmony export */ });


const gameBoardModule =(() => {


    const placeShipOnTheBoardArray =(board,objetNavires) =>{
        
        
        for (let typeNavire in objetNavires) {
            const navires = objetNavires[typeNavire];
            // console.log(`Type de navire: ${typeNavire}`);
            navires.forEach(function(navire) {
                navire.position.forEach(([x,y])=>{
                    board[x][y] ="S"+ navire.size
                })
                
            });
           
        }
        
        // ship.position.forEach(([x,y]) => {
            
        //     board[x][y]='S' 
           
        // });
    }

    const hitTheBoardArray =(board,objetShips,hitPosition)=>{

       let  allShipSunk= true
        if(board[hitPosition[0]][hitPosition[1]]="0")
        {
            board[hitPosition[0]][hitPosition[1]]="M"
        }
        

        for(let key in objetShips )
        {
            const ship = objetShips[key];
            ship.forEach(s =>{
                s.position.forEach(p=>{
                   
                    if(p[0]===hitPosition[0]&& p[1]===hitPosition[1])
                    {
                        s.gotHit()
                        board[p[0]][p[1]]="X"
                        
                    }
                })
                
                    allShipSunk = allShipSunk && s.sink;
                
            })
            
        }
        
        return allShipSunk;

        
    }

    const uniqueRandomIndices=(array)=> {
        const usedIndices = new Set();
        const uniqueIdentifier = (x, y) => `${x},${y}`;
      
        const generateUniqueIndex=()=> {
          if (usedIndices.size === array.length * array[0].length) {
            console.log('Tous les indices possibles ont été utilisés.');
            return null;
          }
      
          let x, y;
          do {
            x = Math.floor(Math.random() * array.length);
            y = Math.floor(Math.random() * array[x].length);
          } while (usedIndices.has(uniqueIdentifier(x, y)));
      
          usedIndices.add(uniqueIdentifier(x, y));
          return [x, y ];
        }
      
        return generateUniqueIndex;
      }
      
     
      
    
    return {
        placeShipOnTheBoardArray,
        hitTheBoardArray,
        uniqueRandomIndices,



    }

})();





/***/ }),

/***/ "./src/font/indieground-freebies-font-neon80s/Neon.ttf":
/*!*************************************************************!*\
  !*** ./src/font/indieground-freebies-font-neon80s/Neon.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9501592f396eb5a4d3a.ttf";

/***/ }),

/***/ "./src/img/background-2.png":
/*!**********************************!*\
  !*** ./src/img/background-2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "806865c85a2cbd4d6d56.png";

/***/ }),

/***/ "./src/img/battleship.png":
/*!********************************!*\
  !*** ./src/img/battleship.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17151525cc37f583f811.png";

/***/ }),

/***/ "./src/img/cruiser.png":
/*!*****************************!*\
  !*** ./src/img/cruiser.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72a64eca2198b3516393.png";

/***/ }),

/***/ "./src/img/destroyer1.png":
/*!********************************!*\
  !*** ./src/img/destroyer1.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc9468ae9079744e7e8d.png";

/***/ }),

/***/ "./src/img/explosion.png":
/*!*******************************!*\
  !*** ./src/img/explosion.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73bf4ff138740fcaf658.png";

/***/ }),

/***/ "./src/img/miss.png":
/*!**************************!*\
  !*** ./src/img/miss.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1eda71cfacf8b2e79fbd.png";

/***/ }),

/***/ "./src/img/submarine.png":
/*!*******************************!*\
  !*** ./src/img/submarine.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "938c78bb1b010b01fa64.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_css_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/css/common.css */ "./src/css/common.css");
/* harmony import */ var _dom_scripts_Init_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-scripts/Init-page */ "./src/dom-scripts/Init-page.js");




(0,_dom_scripts_Init_page__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map