/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/candyBg.jpg */ "./src/assets/candyBg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-color: #fae6ef;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Lato', sans-serif;\n}\n\nheader {\n  height: 4.8em;\n  background-color: #7c508a;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  width: 100vw;\n}\n\n.header-center {\n  display: flex;\n  justify-content: center;\n  gap: 1.2em;\n  align-items: flex-end;\n}\n\n.header-left,\n.header-right {\n  display: flex;\n  gap: 5em;\n  align-items: flex-end;\n  justify-content: space-around;\n  max-width: 400px;\n  margin: 0 10em 0 10em;\n}\n\n.icon {\n  width: 58px;\n  height: 58px;\n}\n\nbutton {\n  background-color: #ea9ab6;\n  border: 2px solid #f1bdcf;\n  border-bottom: none;\n  height: 40px;\n  width: 105px;\n  padding: 10px;\n  font-size: 20px;\n  color: #7c508a;\n}\n\nbutton:hover {\n  height: 43px;\n  font-size: 21px;\n}\n\n.content {\n  margin: 3em 0 2em 0;\n  border-radius: 1.2em;\n  width: max(50%, 600px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fae6ef;\n  height: 100%;\n  padding: 1em;\n  color: #7c508a;\n  font-weight: bold;\n  border: 2px solid #7c508a;\n}\n\n.selected {\n  height: 50px !important;\n  font-size: 24px !important;\n  background-color: #fae6ef;\n}\n\nfooter {\n  background-color: #7c508a;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #f1bdcf;\n  margin-top: auto;\n  padding: 20px;\n  width: 100vw;\n}\n\n#box {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  height: 100%;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.text-div {\n  min-height: 15em;\n  width: 70%;\n  align-self: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.2em;\n  padding: 1.5em;\n  border: 0.6em solid #7c508a;\n  border-radius: 6em;\n  background-color: #f1bdcf;\n}\n\n.text-div h2 {\n  font-size: 1.5em;\n  width: clamp(10em, 40%, 12em);\n}\n\n.text-div h3 {\n  width: clamp(5em, 30%, 9em);\n}\n\n.text-div-grid {\n  display: grid !important;\n  grid-template-columns: 4fr 1fr;\n  align-items: center;\n}\n\n.text-div-grid-menu {\n  display: grid !important;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n}\n\nul {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  gap: 1em;\n  border: 2px solid #fae6ef;\n  padding: 2em;\n  border-radius: 1em;\n}\n\nli {\n  font-size: 1.2em;\n}\n\n#hour-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5em;\n}\n\n.content-img {\n  height: 100%;\n  width: 40%;\n  border-radius: 12em;\n}\n\n.menu-img {\n  height: 70%;\n  width: 90%;\n  border-radius: 12em;\n  align-self: center;\n  justify-self: center;\n}\n\n#menu-header {\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  width: 100%;\n}\n\n#menu-header #title {\n  padding-right: 2.5em;\n}\n\n.menu-icon {\n  margin-right: auto;\n}\n\n.social-media-text {\njustify-self: center;\nmargin-right: 2.5em;\nwidth: 15em !important;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,yDAA8C;EAC9C,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,qBAAqB;AACvB;;AAEA;;EAEE,aAAa;EACb,QAAQ;EACR,qBAAqB;EACrB,6BAA6B;EAC7B,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,cAAc;EACd,2BAA2B;EAC3B,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,8BAA8B;EAC9B,MAAM;AACR;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,QAAQ;EACR,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;AACA,oBAAoB;AACpB,mBAAmB;AACnB,sBAAsB;AACtB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-color: #fae6ef;\n  background-image: url(\"../assets/candyBg.jpg\");\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Lato', sans-serif;\n}\n\nheader {\n  height: 4.8em;\n  background-color: #7c508a;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  width: 100vw;\n}\n\n.header-center {\n  display: flex;\n  justify-content: center;\n  gap: 1.2em;\n  align-items: flex-end;\n}\n\n.header-left,\n.header-right {\n  display: flex;\n  gap: 5em;\n  align-items: flex-end;\n  justify-content: space-around;\n  max-width: 400px;\n  margin: 0 10em 0 10em;\n}\n\n.icon {\n  width: 58px;\n  height: 58px;\n}\n\nbutton {\n  background-color: #ea9ab6;\n  border: 2px solid #f1bdcf;\n  border-bottom: none;\n  height: 40px;\n  width: 105px;\n  padding: 10px;\n  font-size: 20px;\n  color: #7c508a;\n}\n\nbutton:hover {\n  height: 43px;\n  font-size: 21px;\n}\n\n.content {\n  margin: 3em 0 2em 0;\n  border-radius: 1.2em;\n  width: max(50%, 600px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fae6ef;\n  height: 100%;\n  padding: 1em;\n  color: #7c508a;\n  font-weight: bold;\n  border: 2px solid #7c508a;\n}\n\n.selected {\n  height: 50px !important;\n  font-size: 24px !important;\n  background-color: #fae6ef;\n}\n\nfooter {\n  background-color: #7c508a;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #f1bdcf;\n  margin-top: auto;\n  padding: 20px;\n  width: 100vw;\n}\n\n#box {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  height: 100%;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.text-div {\n  min-height: 15em;\n  width: 70%;\n  align-self: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.2em;\n  padding: 1.5em;\n  border: 0.6em solid #7c508a;\n  border-radius: 6em;\n  background-color: #f1bdcf;\n}\n\n.text-div h2 {\n  font-size: 1.5em;\n  width: clamp(10em, 40%, 12em);\n}\n\n.text-div h3 {\n  width: clamp(5em, 30%, 9em);\n}\n\n.text-div-grid {\n  display: grid !important;\n  grid-template-columns: 4fr 1fr;\n  align-items: center;\n}\n\n.text-div-grid-menu {\n  display: grid !important;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n}\n\nul {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  gap: 1em;\n  border: 2px solid #fae6ef;\n  padding: 2em;\n  border-radius: 1em;\n}\n\nli {\n  font-size: 1.2em;\n}\n\n#hour-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5em;\n}\n\n.content-img {\n  height: 100%;\n  width: 40%;\n  border-radius: 12em;\n}\n\n.menu-img {\n  height: 70%;\n  width: 90%;\n  border-radius: 12em;\n  align-self: center;\n  justify-self: center;\n}\n\n#menu-header {\n  display: grid;\n  grid-template-columns: 1fr 10fr;\n  width: 100%;\n}\n\n#menu-header #title {\n  padding-right: 2.5em;\n}\n\n.menu-icon {\n  margin-right: auto;\n}\n\n.social-media-text {\njustify-self: center;\nmargin-right: 2.5em;\nwidth: 15em !important;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/contato.js":
/*!********************************!*\
  !*** ./src/modules/contato.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "default": () => (/* binding */ contato)
/* harmony export */ });
/* harmony import */ var _assets_icons_gmail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/gmail.png */ "./src/assets/icons/gmail.png");
/* harmony import */ var _assets_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/whatsapp.png */ "./src/assets/icons/whatsapp.png");
/* harmony import */ var _assets_icons_instagram_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/instagram.png */ "./src/assets/icons/instagram.png");
let counter = 0;





class contato {
  static load(content) {
    const title = document.createElement("h1");
    title.innerHTML = "Entre em contato conosco!";
    title.setAttribute("id", "title");

    //text content (whatsapp)
    const textDiv1 = document.createElement('div');
    const textContent1 = document.createElement('h3');
    textContent1.innerHTML = "(55) 95555-5555"
    textContent1.classList.add('social-media-text');
    textDiv1.classList.add('text-div-grid', 'text-div');
    textDiv1.appendChild(textContent1);

    //textDiv1 Image
    const whatsappIcon = document.createElement('img');
    whatsappIcon.src = _assets_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_1__;
    whatsappIcon.alt = 'whatsapp-icon';
    whatsappIcon.style.height = '50%';
    textDiv1.appendChild(whatsappIcon);

    //text content (instagram)
    const textDiv2 = document.createElement('div');
    const textContent2 = document.createElement('h3');
    textContent2.innerHTML = "@padariacoreanaverdadeira";
    textContent2.classList.add('social-media-text');
    textDiv2.classList.add('text-div-grid', 'text-div');
    textDiv2.appendChild(textContent2);

    //textDiv2 Image
    const instagramIcon = document.createElement('img');
    instagramIcon.src = _assets_icons_instagram_png__WEBPACK_IMPORTED_MODULE_2__;
    instagramIcon.alt = 'instagram-icon';
    instagramIcon.style.height = '50%';
    textDiv2.appendChild(instagramIcon);

    //text content (mail)
    const textDiv3 = document.createElement('div');
    const textContent3 = document.createElement('h3');
    textContent3.innerHTML = "emailverdadeiro@naosoufalso.com"
    textContent3.classList.add('social-media-text');
    textDiv3.classList.add('text-div-grid', 'text-div');
    textDiv3.appendChild(textContent3);

    //textDiv1 Image
    const mailIcon = document.createElement('img');
    mailIcon.src = _assets_icons_gmail_png__WEBPACK_IMPORTED_MODULE_0__;
    mailIcon.alt = 'mail-icon';
    mailIcon.style.height = '50%';
    textDiv3.appendChild(mailIcon);


    const box = document.createElement("div");
    box.setAttribute("id", "box");
    box.appendChild(title);
    box.appendChild(textDiv1);
    box.appendChild(textDiv2);
    box.appendChild(textDiv3);
    content.appendChild(box);
    contato.counter("add");
  }

  static remove(content) {
    const box = document.getElementById("box");
    content.removeChild(box);
    const contatoBtn = document.getElementById("contato");
    contatoBtn.classList.remove('selected');
    contato.counter("remove");
  }

  static counter(order) {
    if (order === "add") counter = 1;
    else if (order === "remove") counter = 0;
  }
}



/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _assets_toast_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/toast.jpg */ "./src/assets/toast.jpg");
let counter = 0;



class home {
  static load(content) {
    //title
    const title = document.createElement("h1");
    title.innerHTML = `Padaria Coreana! <br> 한국 빵집`;
    title.setAttribute("id", "title");
    title.style.textAlign = "center";

    //text content
    const textDiv1 = document.createElement('div');
    const textContent = document.createElement('h2');
    textContent.innerHTML = "Acreditamos que a paixão pela culinária Coreana precisa ser compartilhada"
    textDiv1.classList.add('text-div');
    textDiv1.appendChild(textContent);

    //textDiv1 Image
    const toastImg = document.createElement('img');
    toastImg.src = _assets_toast_jpg__WEBPACK_IMPORTED_MODULE_0__;
    toastImg.alt = '딸기 샌드위치';
    toastImg.classList.add('content-img');
    textDiv1.appendChild(toastImg);

    //Hours
    const textDiv2 = document.createElement('div');
    const hourTitle = document.createElement('h1');
    hourTitle.innerHTML = 'Horário de funcionamento:';
    const list = document.createElement('ul');
    const hours = ['Domingo: 06:00 - 20:00', 'Segunda-feira: 06:00 - 19:00', 'Terça-feira: 06:00 - 19:00', 'Quarta-feira: 06:00 - 19:00', 'Quinta-Feira: 06:00 - 20:00', 'Sexta-feira: 06:00 - 21:00', 'Sábado: 06:00 - 21:00'];
    for(let i=0; i<hours.length; i++){
      const listItem = document.createElement('li');
      listItem.innerHTML = hours[i];
      list.appendChild(listItem);
    }
  
    textDiv2.classList.add('text-div');
    const hourDiv = document.createElement('div');
    hourDiv.setAttribute('id', 'hour-div');
    hourDiv.appendChild(hourTitle);
    hourDiv.appendChild(list);
    textDiv2.appendChild(hourDiv);



    //adding everything to the screen box
    const box = document.createElement("div");
    box.setAttribute("id", "box");
    box.appendChild(title);
    box.appendChild(textDiv1);
    box.appendChild(textDiv2);
    content.appendChild(box);
    //adding 1 to home counter
  home.counter("add");
  }

  static remove(content) {
    const box = document.getElementById("box");
    content.removeChild(box);
    const homeBtn = document.getElementById("home");
    homeBtn.classList.remove('selected');
    home.counter("remove");
  }

  static counter(order) {
    if (order === "add") counter = 1;
    else if (order === "remove") counter = 0;
  }
}



/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _assets_icons_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/menu.png */ "./src/assets/icons/menu.png");
/* harmony import */ var _assets_raspadinha_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/raspadinha.png */ "./src/assets/raspadinha.png");
/* harmony import */ var _assets_donut_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/donut.jpg */ "./src/assets/donut.jpg");
let counter = 0;




class menu {
  static load(content) {
    //title header with icon
    const menuIcon = document.createElement('img');
    menuIcon.src = _assets_icons_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuIcon.alt = 'menu-icon';
    menuIcon.classList.add('icon', 'menu-icon');
    const title = document.createElement("h1");
    title.innerHTML = "Menu! <br> 메뉴";
    title.setAttribute("id", "title");
    title.style.textAlign = 'center';
    const header = document.createElement('div');
    header.appendChild(menuIcon);
    header.appendChild(title);
    header.setAttribute('id', 'menu-header');

    //first item
    const items = ['Nome: Raspadinha Coreana', 'Hangul: 빙수', 'R$15,00']
    const list = document.createElement('ul');
    for(let i =0; i<items.length; i++){
      const listItems = document.createElement('li');
      listItems.innerHTML = items[i];
      list.appendChild(listItems);
    }
    const itemDiv1 = document.createElement('div');
    list.style.borderRight = '2px solid #fae6ef';
    list.style.padding = '2em';
    itemDiv1.appendChild(list);
    const raspadinha = document.createElement('img');
    raspadinha.src = _assets_raspadinha_png__WEBPACK_IMPORTED_MODULE_1__;
    raspadinha.alt = '빙수';
    raspadinha.classList.add('menu-img')
    itemDiv1.appendChild(raspadinha);
    itemDiv1.classList.add('text-div', 'text-div-grid-menu');

    //Second Item
    const itemDiv2 = document.createElement('div');
    const donut = document.createElement('img');
    donut.src = _assets_donut_jpg__WEBPACK_IMPORTED_MODULE_2__;
    donut.alt = '꽈배기';
    donut.classList.add('menu-img')
    itemDiv2.appendChild(donut);
    itemDiv2.classList.add('text-div', 'text-div-grid-menu');

    const items2 = ['Nome: Donut de pão torcido', 'Hangul: 꽈배기', 'R$10,00']
    const list2 = document.createElement('ul');
    for(let i =0; i<items.length; i++){
      const listItems = document.createElement('li');
      listItems.innerHTML = items2[i];
      list2.appendChild(listItems);
    }
    list2.style.borderLeft = '2px solid #fae6ef';
    list2.style.padding = '2em';
    itemDiv2.appendChild(list2);



    const box = document.createElement("div");
    box.setAttribute("id", "box");
    box.appendChild(header);
    box.appendChild(itemDiv1);
    box.appendChild(itemDiv2);
    content.appendChild(box);
    //adding 1 to menu counter
  menu.counter("add");
  }

  static remove(content) {
    const box = document.getElementById("box");
    content.removeChild(box);
    const menuBtn = document.getElementById("menu");
    menuBtn.classList.remove('selected');
    menu.counter("remove");
  }

  static counter(order) {
    if (order === "add") counter = 1;
    else if (order === "remove") counter = 0;
  }
}



/***/ }),

/***/ "./src/assets/candyBg.jpg":
/*!********************************!*\
  !*** ./src/assets/candyBg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "candyBg.jpg";

/***/ }),

/***/ "./src/assets/donut.jpg":
/*!******************************!*\
  !*** ./src/assets/donut.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "donut.jpg";

/***/ }),

/***/ "./src/assets/icons/cake.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/cake.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cake.svg";

/***/ }),

/***/ "./src/assets/icons/cupcake.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/cupcake.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cupcake.svg";

/***/ }),

/***/ "./src/assets/icons/gmail.png":
/*!************************************!*\
  !*** ./src/assets/icons/gmail.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "gmail.png";

/***/ }),

/***/ "./src/assets/icons/instagram.png":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "instagram.png";

/***/ }),

/***/ "./src/assets/icons/lolipop.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/lolipop.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "lolipop.svg";

/***/ }),

/***/ "./src/assets/icons/menu.png":
/*!***********************************!*\
  !*** ./src/assets/icons/menu.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu.png";

/***/ }),

/***/ "./src/assets/icons/whatsapp.png":
/*!***************************************!*\
  !*** ./src/assets/icons/whatsapp.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "whatsapp.png";

/***/ }),

/***/ "./src/assets/raspadinha.png":
/*!***********************************!*\
  !*** ./src/assets/raspadinha.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "raspadinha.png";

/***/ }),

/***/ "./src/assets/toast.jpg":
/*!******************************!*\
  !*** ./src/assets/toast.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "toast.jpg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contato__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contato */ "./src/modules/contato.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _assets_icons_cupcake_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/cupcake.svg */ "./src/assets/icons/cupcake.svg");
/* harmony import */ var _assets_icons_lolipop_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/lolipop.svg */ "./src/assets/icons/lolipop.svg");
/* harmony import */ var _assets_icons_cake_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/cake.svg */ "./src/assets/icons/cake.svg");












//icon loader
const cupcakeLeft = document.getElementById('cupcake-left');
const cupcakeRight = document.getElementById('cupcake-right');
cupcakeLeft.src = _assets_icons_cupcake_svg__WEBPACK_IMPORTED_MODULE_4__;
cupcakeRight.src = _assets_icons_cupcake_svg__WEBPACK_IMPORTED_MODULE_4__;
const cakeLeft = document.getElementById('cake-left');
const cakeRight = document.getElementById('cake-right');
cakeLeft.src = _assets_icons_cake_svg__WEBPACK_IMPORTED_MODULE_6__;
cakeRight.src = _assets_icons_cake_svg__WEBPACK_IMPORTED_MODULE_6__;
const lolipopLeft = document.getElementById('lolipop-left');
const lolipopRight = document.getElementById('lolipop-right');
lolipopLeft.src = _assets_icons_lolipop_svg__WEBPACK_IMPORTED_MODULE_5__;
lolipopRight.src = _assets_icons_lolipop_svg__WEBPACK_IMPORTED_MODULE_5__;


//content element to pass to load function
const content = document.getElementById("content");


//Home button
const homeBtn = document.getElementById("home");
//First page load is in home!
homeBtn.classList.add("selected");
_modules_home__WEBPACK_IMPORTED_MODULE_3__["default"].load(content);

//Home button eventListener
homeBtn.addEventListener("click", () => {
  //Só ira remover se tiver sido clicado anteriormente
  if(_modules_home__WEBPACK_IMPORTED_MODULE_3__.counter === 0) {
  if (_modules_contato__WEBPACK_IMPORTED_MODULE_2__.counter != 0) _modules_contato__WEBPACK_IMPORTED_MODULE_2__["default"].remove(content);
  if (_modules_menu__WEBPACK_IMPORTED_MODULE_1__.counter != 0) _modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"].remove(content);
  _modules_home__WEBPACK_IMPORTED_MODULE_3__["default"].load(content);
  homeBtn.classList.add("selected");
  }
});


//Menu button eventListener
const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    if(_modules_menu__WEBPACK_IMPORTED_MODULE_1__.counter === 0) {
  if (_modules_home__WEBPACK_IMPORTED_MODULE_3__.counter != 0) _modules_home__WEBPACK_IMPORTED_MODULE_3__["default"].remove(content);
  if (_modules_contato__WEBPACK_IMPORTED_MODULE_2__.counter != 0) _modules_contato__WEBPACK_IMPORTED_MODULE_2__["default"].remove(content);
  _modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"].load(content);
  menuBtn.classList.add("selected");
    }
});


//Contato button eventListener

const contatoBtn = document.getElementById("contato");
contatoBtn.addEventListener("click", () => {
    if(_modules_contato__WEBPACK_IMPORTED_MODULE_2__.counter === 0) {
  if (_modules_home__WEBPACK_IMPORTED_MODULE_3__.counter != 0) _modules_home__WEBPACK_IMPORTED_MODULE_3__["default"].remove(content);
  if (_modules_menu__WEBPACK_IMPORTED_MODULE_1__.counter != 0) _modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"].remove(content);
  _modules_contato__WEBPACK_IMPORTED_MODULE_2__["default"].load(content);
  contatoBtn.classList.add("selected");
    }
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map