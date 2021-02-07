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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/mannschaften.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/players.js":
/*!*******************************!*\
  !*** ./components/players.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/aytac/repos/ataspor/components/players.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Players({
  image,
  name,
  nummer
}) {
  return __jsx("div", {
    className: "jsx-3762637060" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("img", {
    alt: name,
    src: image.fields.file.url,
    className: "jsx-3762637060",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-3762637060" + " " + "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-3762637060",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, nummer, name)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3762637060",
    __self: this
  }, ".container.jsx-3762637060{height:453px;margin-bottom:48px;}a.jsx-3762637060{border-bottom:none;}a.jsx-3762637060:hover{border-bottom:none;}.text.jsx-3762637060{margin-top:-160px;padding:24px;position:absolute;}h2.jsx-3762637060{color:white;font-size:24px;margin-bottom:0;}h4.jsx-3762637060{color:rgba(255,255,255,0.8);font-size:16px;font-weight:500;margin-top:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F5dGFjL3JlcG9zL2F0YXNwb3IvY29tcG9uZW50cy9wbGF5ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9rQixBQUd3QixBQUlNLEFBR0EsQUFHRCxBQUtOLEFBS21CLFlBSmhCLENBZkksS0FVTixDQU5mLEFBR0EsUUFTa0IsQ0FJRCxHQVRHLENBVnBCLFdBZ0JBLEFBSWtCLE1BVGxCLFVBVWlCLGVBQ2pCIiwiZmlsZSI6Ii9ob21lL2F5dGFjL3JlcG9zL2F0YXNwb3IvY29tcG9uZW50cy9wbGF5ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gUGxheWVycyh7IGltYWdlLCBuYW1lLCBudW1tZXIgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxpbWcgYWx0PXtuYW1lfSBzcmM9e2ltYWdlLmZpZWxkcy5maWxlLnVybH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICA8aDI+e251bW1lcn17bmFtZX08L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogNDUzcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcnMiXX0= */\n/*@ sourceURL=/home/aytac/repos/ataspor/components/players.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Players);

/***/ }),

/***/ "./pages/mannschaften.js":
/*!*******************************!*\
  !*** ./pages/mannschaften.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/players */ "./components/players.js");
var _jsxFileName = "/home/aytac/repos/ataspor/pages/mannschaften.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const client = __webpack_require__(/*! contentful */ "contentful").createClient({
  space: "vo9kunri3hbj",
  accessToken: "HY-RxC3V-rliPNV-AasprOVxu5GwtlGR3cKDDuPoWsM"
});

function Mannschaften() {
  async function fetchPlayerEntries() {
    const entries = await client.getEntries({
      'content_type': 'players'
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const {
    0: players,
    1: setImageLinks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); //useEffect hook retrieves posts on initial load.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getPlayers() {
      const allPlayers = await fetchPlayerEntries();
      console.log(allPlayers);
      var teams = {
        MainTeam: [],
        SeniorTeam: []
      };
      allPlayers.forEach(player => {
        console.log(player);
        console.log(teams.MainTeam);

        if (player.fields.mannschaft == "1. Mannschaft") {
          teams.MainTeam.push(player);
        }

        if (player.fields.mannschaft == "Senioren 30+") {
          teams.SeniorTeam.push(player);
        }
      });
      console.log(teams);
      setImageLinks([...allPlayers]);
    }

    getPlayers();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Spieler"), __jsx("link", {
    rel: "stylesheet",
    href: "https://css.zeit.sh/v1.css",
    type: "text/css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, "1. Mannschaft"), players.length > 0 ? players.map(p => __jsx(_components_players__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: p.fields.id,
    name: p.fields.name,
    image: p.fields.image,
    nummer: p.fields.nummer,
    mannschaft: p.fields.mannschaft,
    active: p.fields.active,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  })) : null, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Senioren"));
}

/* harmony default export */ __webpack_exports__["default"] = (Mannschaften);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wbGF5ZXJzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21hbm5zY2hhZnRlbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb250ZW50ZnVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiUGxheWVycyIsImltYWdlIiwibmFtZSIsIm51bW1lciIsImZpZWxkcyIsImZpbGUiLCJ1cmwiLCJjbGllbnQiLCJyZXF1aXJlIiwiY3JlYXRlQ2xpZW50Iiwic3BhY2UiLCJwcm9jZXNzIiwiYWNjZXNzVG9rZW4iLCJORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTiIsIk1hbm5zY2hhZnRlbiIsImZldGNoUGxheWVyRW50cmllcyIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudFR5cGUiLCJwbGF5ZXJzIiwic2V0SW1hZ2VMaW5rcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0UGxheWVycyIsImFsbFBsYXllcnMiLCJ0ZWFtcyIsIk1haW5UZWFtIiwiU2VuaW9yVGVhbSIsImZvckVhY2giLCJwbGF5ZXIiLCJtYW5uc2NoYWZ0IiwicHVzaCIsImxlbmd0aCIsIm1hcCIsInAiLCJpZCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVB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REY7QUEwQkQ7O0FBRWN6QiwyRUFBZixFOzs7Ozs7Ozs7OztBQ3JFQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9tYW5uc2NoYWZ0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL21hbm5zY2hhZnRlbi5qc1wiKTtcbiIsImZ1bmN0aW9uIFBsYXllcnMoeyBpbWFnZSwgbmFtZSwgbnVtbWVyIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIGFsdD17bmFtZX0gc3JjPXtpbWFnZS5maWVsZHMuZmlsZS51cmx9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgPGgyPntudW1tZXJ9e25hbWV9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDQ1M3B4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTYwcHg7XG4gICAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBoNCB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJzIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFBsYXllcnMgZnJvbSAnLi4vY29tcG9uZW50cy9wbGF5ZXJzJ1xuXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCdjb250ZW50ZnVsJykuY3JlYXRlQ2xpZW50KHtcbiAgc3BhY2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTlxufSlcblxuZnVuY3Rpb24gTWFubnNjaGFmdGVuKCkge1xuICBhc3luYyBmdW5jdGlvbiBmZXRjaFBsYXllckVudHJpZXMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgICdjb250ZW50X3R5cGUnOiAncGxheWVycydcbiAgICB9KVxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYClcbiAgfVxuXG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRJbWFnZUxpbmtzXSA9IHVzZVN0YXRlKFtdKVxuICAvL3VzZUVmZmVjdCBob29rIHJldHJpZXZlcyBwb3N0cyBvbiBpbml0aWFsIGxvYWQuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWVycygpIHtcbiAgICAgIGNvbnN0IGFsbFBsYXllcnMgPSBhd2FpdCBmZXRjaFBsYXllckVudHJpZXMoKVxuICAgICAgY29uc29sZS5sb2coYWxsUGxheWVycyk7XG4gICAgICB2YXIgdGVhbXMgPSB7TWFpblRlYW06IFtdLCBTZW5pb3JUZWFtOiBbXX07XG4gICAgICBhbGxQbGF5ZXJzLmZvckVhY2goIHBsYXllciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcilcbiAgICAgICAgY29uc29sZS5sb2codGVhbXMuTWFpblRlYW0pXG4gICAgICAgIGlmKHBsYXllci5maWVsZHMubWFubnNjaGFmdD09XCIxLiBNYW5uc2NoYWZ0XCIpe1xuICAgICAgICAgICAgdGVhbXMuTWFpblRlYW0ucHVzaChwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHBsYXllci5maWVsZHMubWFubnNjaGFmdD09XCJTZW5pb3JlbiAzMCtcIil7XG4gICAgICAgICAgICB0ZWFtcy5TZW5pb3JUZWFtLnB1c2gocGxheWVyKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGVhbXMpXG4gICAgICBzZXRJbWFnZUxpbmtzKFsuLi5hbGxQbGF5ZXJzXSlcbiAgICB9XG4gICAgZ2V0UGxheWVycygpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3BpZWxlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY3NzLnplaXQuc2gvdjEuY3NzXCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIiBcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMT4xLiBNYW5uc2NoYWZ0PC9oMT5cbiAgICAgIHtwbGF5ZXJzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBwbGF5ZXJzLm1hcChwID0+IChcbiAgICAgICAgICAgIDxQbGF5ZXJzXG4gICAgICAgICAgICAgIGtleT17cC5maWVsZHMuaWR9XG4gICAgICAgICAgICAgIG5hbWU9e3AuZmllbGRzLm5hbWV9XG4gICAgICAgICAgICAgIGltYWdlPXtwLmZpZWxkcy5pbWFnZX1cbiAgICAgICAgICAgICAgbnVtbWVyPXtwLmZpZWxkcy5udW1tZXJ9XG4gICAgICAgICAgICAgIG1hbm5zY2hhZnQ9e3AuZmllbGRzLm1hbm5zY2hhZnR9XG4gICAgICAgICAgICAgIGFjdGl2ZT17cC5maWVsZHMuYWN0aXZlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICA6IG51bGx9XG4gICAgICAgIDxoMT5TZW5pb3JlbjwvaDE+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFubnNjaGFmdGVuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9