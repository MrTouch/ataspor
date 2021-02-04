module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/imageLink.js":
/*!*********************************!*\
  !*** ./components/imageLink.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/aytac/repos/ataspor/components/imageLink.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ImageLink({
  alt,
  date,
  image,
  title,
  url
}) {
  return __jsx("div", {
    className: "jsx-3372940452" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: url,
    className: "jsx-3372940452",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("img", {
    alt: alt,
    src: image.fields,
    className: "jsx-3372940452",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3372940452" + " " + "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3372940452",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, title), __jsx("h4", {
    className: "jsx-3372940452",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, date)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3372940452",
    __self: this
  }, ".container.jsx-3372940452{cursor:pointer;height:453px;margin-bottom:48px;}a.jsx-3372940452{border-bottom:none;}a.jsx-3372940452:hover{border-bottom:none;}.text.jsx-3372940452{margin-top:-160px;padding:24px;position:absolute;}h2.jsx-3372940452{color:white;font-size:24px;margin-bottom:0;}h4.jsx-3372940452{color:rgba(255,255,255,0.8);font-size:16px;font-weight:500;margin-top:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F5dGFjL3JlcG9zL2F0YXNwb3IvY29tcG9uZW50cy9pbWFnZUxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW9CLEFBRzRCLEFBS0ksQUFHQSxBQUdELEFBS04sQUFLbUIsWUFKaEIsR0FoQkYsR0FXQSxDQU5mLEFBR0EsUUFTa0IsQ0FoQkcsQUFvQkosR0FURyxZQU1wQixBQUlrQixJQXBCbEIsRUFXQSxVQVVpQixlQUNqQiIsImZpbGUiOiIvaG9tZS9heXRhYy9yZXBvcy9hdGFzcG9yL2NvbXBvbmVudHMvaW1hZ2VMaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gSW1hZ2VMaW5rKHsgYWx0LCBkYXRlLCBpbWFnZSwgdGl0bGUsIHVybCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICAgICAgPGltZyBhbHQ9e2FsdH0gc3JjPXtpbWFnZS5maWVsZHN9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICAgIDxoND57ZGF0ZX08L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA0NTNweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgSW1hZ2VMaW5rIl19 */\n/*@ sourceURL=/home/aytac/repos/ataspor/components/imageLink.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageLink);

/***/ }),

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/aytac/repos/ataspor/components/navigation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Navigation({
  activeNavigation
}) {
  return __jsx("div", {
    id: "navigation",
    className: "jsx-1263812657" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/home",
    className: "jsx-1263812657",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, "Home"), __jsx("a", {
    href: "/mannschaften",
    className: "jsx-1263812657",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Mannschaften"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1263812657",
    __self: this
  }, "a.jsx-1263812657{border-bottom:none;}a.jsx-1263812657:hover{border-bottom:none;}.text.jsx-1263812657{margin-top:-160px;padding:24px;position:absolute;}h2.jsx-1263812657{color:white;font-size:24px;margin-bottom:0;}h4.jsx-1263812657{color:rgba(255,255,255,0.8);font-size:16px;font-weight:500;margin-top:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F5dGFjL3JlcG9zL2F0YXNwb3IvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNvQixBQUlnQyxBQUdBLEFBR0QsQUFLTixBQUttQixZQUpoQixNQUxGLENBTmYsQUFHQSxRQVNrQixDQUlELEdBVEcsWUFNcEIsQUFJa0IsTUFUbEIsVUFVaUIsZUFDakIiLCJmaWxlIjoiL2hvbWUvYXl0YWMvcmVwb3MvYXRhc3Bvci9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgYWN0aXZlTmF2aWdhdGlvbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPGEgaHJlZj1cIi9ob21lXCI+XG4gICAgICAgICAgSG9tZVxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIvbWFubnNjaGFmdGVuXCI+XG4gICAgICAgICAgTWFubnNjaGFmdGVuXG4gICAgICAgIDwvYT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbiJdfQ== */\n/*@ sourceURL=/home/aytac/repos/ataspor/components/navigation.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_imageLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/imageLink */ "./components/imageLink.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navigation */ "./components/navigation.js");
var _jsxFileName = "/home/aytac/repos/ataspor/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const client = __webpack_require__(/*! contentful */ "contentful").createClient({
  space: "vo9kunri3hbj",
  accessToken: "HY-RxC3V-rliPNV-AasprOVxu5GwtlGR3cKDDuPoWsM"
});

function HomePage() {
  async function fetchPageEntries() {
    const entries = await client.getEntries({
      'content_type': 'page'
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const {
    0: pages,
    1: setImageLinks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); //useEffect hook retrieves posts on initial load.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getImageLinks() {
      const allPages = await fetchPageEntries();
      setImageLinks([...allPages]);
    }

    getImageLinks();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Next.js + Contentful"), __jsx("link", {
    rel: "stylesheet",
    href: "https://css.zeit.sh/v1.css",
    type: "text/css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), pages.length > 0 ? pages.map(p => __jsx(_components_imageLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    alt: p.fields.alt,
    date: p.fields.date,
    key: p.fields.title,
    image: p.fields.image,
    title: p.fields.title,
    url: p.fields.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  })) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbWFnZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbnRlbnRmdWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJJbWFnZUxpbmsiLCJhbHQiLCJkYXRlIiwiaW1hZ2UiLCJ0aXRsZSIsInVybCIsImZpZWxkcyIsIk5hdmlnYXRpb24iLCJhY3RpdmVOYXZpZ2F0aW9uIiwiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoUGFnZUVudHJpZXMiLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnRUeXBlIiwibmFtZSIsInBhZ2VzIiwic2V0SW1hZ2VMaW5rcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0SW1hZ2VMaW5rcyIsImFsbFBhZ2VzIiwibGVuZ3RoIiwibWFwIiwicCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBJbWFnZUxpbmsoeyBhbHQsIGRhdGUsIGltYWdlLCB0aXRsZSwgdXJsIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGEgaHJlZj17dXJsfT5cbiAgICAgICAgICA8aW1nIGFsdD17YWx0fSBzcmM9e2ltYWdlLmZpZWxkc30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPGg0PntkYXRlfTwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1M3B4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBJbWFnZUxpbmsiLCJmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgYWN0aXZlTmF2aWdhdGlvbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPGEgaHJlZj1cIi9ob21lXCI+XG4gICAgICAgICAgSG9tZVxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIvbWFubnNjaGFmdGVuXCI+XG4gICAgICAgICAgTWFubnNjaGFmdGVuXG4gICAgICAgIDwvYT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZUxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZUxpbmsnXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24nXG5cbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKS5jcmVhdGVDbGllbnQoe1xuICBzcGFjZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOXG59KVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQYWdlRW50cmllcygpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICAgJ2NvbnRlbnRfdHlwZSc6ICdwYWdlJ1xuICAgIH0pXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxuICB9XG5cbiAgY29uc3QgW3BhZ2VzLCBzZXRJbWFnZUxpbmtzXSA9IHVzZVN0YXRlKFtdKVxuICAvL3VzZUVmZmVjdCBob29rIHJldHJpZXZlcyBwb3N0cyBvbiBpbml0aWFsIGxvYWQuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2VMaW5rcygpIHtcbiAgICAgIGNvbnN0IGFsbFBhZ2VzID0gYXdhaXQgZmV0Y2hQYWdlRW50cmllcygpXG4gICAgICBzZXRJbWFnZUxpbmtzKFsuLi5hbGxQYWdlc10pXG4gICAgfVxuICAgIGdldEltYWdlTGlua3MoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5leHQuanMgKyBDb250ZW50ZnVsPC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jc3MuemVpdC5zaC92MS5jc3NcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiIFxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdmlnYXRpb24+PC9OYXZpZ2F0aW9uPlxuICAgICAge3BhZ2VzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBwYWdlcy5tYXAocCA9PiAoXG4gICAgICAgICAgICA8SW1hZ2VMaW5rXG4gICAgICAgICAgICAgIGFsdD17cC5maWVsZHMuYWx0fVxuICAgICAgICAgICAgICBkYXRlPXtwLmZpZWxkcy5kYXRlfVxuICAgICAgICAgICAgICBrZXk9e3AuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICBpbWFnZT17cC5maWVsZHMuaW1hZ2V9XG4gICAgICAgICAgICAgIHRpdGxlPXtwLmZpZWxkcy50aXRsZX1cbiAgICAgICAgICAgICAgdXJsPXtwLmZpZWxkcy51cmx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgIDogbnVsbH1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbnRlbnRmdWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==