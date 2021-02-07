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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/aytac/repos/ataspor/components/navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Navigation({
  activePage,
  logo
}) {
  return __jsx("nav", {
    className: "bg-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative flex items-center justify-between h-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: function () {
      alert('click');
    },
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
    "aria-expanded": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }, "Open main menu"), __jsx("svg", {
    className: "block h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 6h16M4 12h16M4 18h16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  })), __jsx("svg", {
    className: "hidden h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, __jsx("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex-shrink-0 flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "block lg:hidden h-8 w-auto",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
    alt: "Workflow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }), __jsx("img", {
    className: "hidden lg:block h-8 w-auto",
    src: logo,
    alt: "Workflow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "hidden sm:block sm:ml-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    className: "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, "Home"), __jsx("a", {
    href: "/mannschaften",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  }, "Mannschaften"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, "Gallery"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, "Kalender")))), __jsx("div", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, "View notifications"), __jsx("svg", {
    className: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, __jsx("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "ml-3 relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    id: "user-menu",
    "aria-haspopup": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, "Open user menu"), __jsx("img", {
    className: "h-8 w-8 rounded-full",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "user-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }, "Your Profile"), __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, "Settings"), __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, "Sign out")))))), __jsx("div", {
    className: "hidden sm:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "px-2 pt-2 pb-3 space-y-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    className: "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, "Dashboard"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "Team"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "Projects"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, "Calendar"))));
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

  async function fetchSettingsEntries() {
    const entries = await client.getEntries({
      'content_type': 'settings'
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const {
    0: settings,
    1: setImageSettingsLinks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); //useEffect hook retrieves posts on initial load.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getSettings() {
      const allSettings = await fetchSettingsEntries();
      console.log(allSettings);
      setImageSettingsLinks([...allSettings]);
    }

    getSettings();
  }, []);
  const {
    0: pages,
    1: setImageLinks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); //useEffect hook retrieves posts on initial load.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getImageLinks() {
      const allPages = await fetchPageEntries();
      console.log("allpages");
      console.log(allPages);
      setImageLinks([...allPages]);
    }

    getImageLinks();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Next.js + Contentful")), console.log("settings 2", settings), settings.length > 0 ? settings.map(p => __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activePage: "home",
    logo: p.fields.logo.fields.file.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 12
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbWFnZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbnRlbnRmdWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJJbWFnZUxpbmsiLCJhbHQiLCJkYXRlIiwiaW1hZ2UiLCJ0aXRsZSIsInVybCIsImZpZWxkcyIsIk5hdmlnYXRpb24iLCJhY3RpdmVQYWdlIiwibG9nbyIsImFsZXJ0IiwiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoUGFnZUVudHJpZXMiLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnRUeXBlIiwibmFtZSIsImZldGNoU2V0dGluZ3NFbnRyaWVzIiwic2V0dGluZ3MiLCJzZXRJbWFnZVNldHRpbmdzTGlua3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldFNldHRpbmdzIiwiYWxsU2V0dGluZ3MiLCJwYWdlcyIsInNldEltYWdlTGlua3MiLCJnZXRJbWFnZUxpbmtzIiwiYWxsUGFnZXMiLCJsZW5ndGgiLCJtYXAiLCJwIiwiZmlsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7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QWtCLENBQWxCLEdBQ0VWLFFBQVEsQ0FBQ1csR0FBVCxDQUFhQyxDQUFDLElBQ2IsTUFBQyw4REFBRDtBQUFZLGNBQVUsRUFBQyxNQUF2QjtBQUE4QixRQUFJLEVBQUVBLENBQUMsQ0FBQ2xDLE1BQUYsQ0FBU0csSUFBVCxDQUFjSCxNQUFkLENBQXFCbUMsSUFBckIsQ0FBMEJwQyxHQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERixHQUlFLElBVE4sQ0FERjtBQWNEOztBQUVjYSx1RUFBZixFOzs7Ozs7Ozs7OztBQ2xFQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBJbWFnZUxpbmsoeyBhbHQsIGRhdGUsIGltYWdlLCB0aXRsZSwgdXJsIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGEgaHJlZj17dXJsfT5cbiAgICAgICAgICA8aW1nIGFsdD17YWx0fSBzcmM9e2ltYWdlLmZpZWxkc30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPGg0PntkYXRlfTwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1M3B4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBJbWFnZUxpbmsiLCJmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgYWN0aXZlUGFnZSwgbG9nbyB9KSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTIgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgc206aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE1vYmlsZSBtZW51IGJ1dHRvbi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Z1bmN0aW9uKCkgeyBhbGVydCgnY2xpY2snKTsgfX0gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByb3VuZGVkLW1kIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy13aGl0ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJY29uIHdoZW4gbWVudSBpcyBjbG9zZWQuIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXJvaWNvbiBuYW1lOiBvdXRsaW5lL21lbnVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudSBvcGVuOiBcImhpZGRlblwiLCBNZW51IGNsb3NlZDogXCJibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiYmxvY2sgaC02IHctNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSWNvbiB3aGVuIG1lbnUgaXMgb3Blbi4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlcm9pY29uIG5hbWU6IG91dGxpbmUveFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51IG9wZW46IFwiYmxvY2tcIiwgTWVudSBjbG9zZWQ6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJoaWRkZW4gaC02IHctNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNtOml0ZW1zLXN0cmV0Y2ggc206anVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW4gaC04IHctYXV0b1wiIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LW1hcmstaW5kaWdvLTUwMC5zdmdcIiBhbHQ9XCJXb3JrZmxvd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgaC04IHctYXV0b1wiIHNyYz17bG9nb30gYWx0PVwiV29ya2Zsb3dcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9jayBzbTptbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8IS0tIEN1cnJlbnQ6IFwiYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiLCBEZWZhdWx0OiBcInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZVwiIC0tPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbWFubnNjaGFmdGVuXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIj5NYW5uc2NoYWZ0ZW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIj5HYWxsZXJ5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+S2FsZW5kZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHItMiBzbTpzdGF0aWMgc206aW5zZXQtYXV0byBzbTptbC02IHNtOnByLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcC0xIHJvdW5kZWQtZnVsbCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VmlldyBub3RpZmljYXRpb25zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwhLS0gSGVyb2ljb24gbmFtZTogb3V0bGluZS9iZWxsIC0tPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaC02IHctNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMTUgMTdoNWwtMS40MDUtMS40MDVBMi4wMzIgMi4wMzIgMCAwMTE4IDE0LjE1OFYxMWE2LjAwMiA2LjAwMiAwIDAwLTQtNS42NTlWNWEyIDIgMCAxMC00IDB2LjM0MUM3LjY3IDYuMTY1IDYgOC4zODggNiAxMXYzLjE1OWMwIC41MzgtLjIxNCAxLjA1NS0uNTk1IDEuNDM2TDQgMTdoNW02IDB2MWEzIDMgMCAxMS02IDB2LTFtNiAwSDlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPCEtLSBQcm9maWxlIGRyb3Bkb3duIC0tPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBmbGV4IHRleHQtc20gcm91bmRlZC1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLXdoaXRlXCIgaWQ9XCJ1c2VyLW1lbnVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gdXNlciBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTggdy04IHJvdW5kZWQtZnVsbFwiIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcyMDk5NjQ1Nzg1LTU2NThhYmY0ZmY0ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVByb2ZpbGUgZHJvcGRvd24gcGFuZWwsIHNob3cvaGlkZSBiYXNlZCBvbiBkcm9wZG93biBzdGF0ZS5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRlcmluZzogXCJ0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyb206IFwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvOiBcInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWF2aW5nOiBcInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyb206IFwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvOiBcInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSByaWdodC0wIG10LTIgdy00OCByb3VuZGVkLW1kIHNoYWRvdy1sZyBweS0xIGJnLXdoaXRlIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01XCIgcm9sZT1cIm1lbnVcIiBhcmlhLW9yaWVudGF0aW9uPVwidmVydGljYWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJ1c2VyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwXCIgcm9sZT1cIm1lbnVpdGVtXCI+WW91ciBQcm9maWxlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDBcIiByb2xlPVwibWVudWl0ZW1cIj5TZXR0aW5nczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwXCIgcm9sZT1cIm1lbnVpdGVtXCI+U2lnbiBvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgIDwhLS1cbiAgICAgICAgICAgICAgICBNb2JpbGUgbWVudSwgdG9nZ2xlIGNsYXNzZXMgYmFzZWQgb24gbWVudSBzdGF0ZS5cblxuICAgICAgICAgICAgICAgIE1lbnUgb3BlbjogXCJibG9ja1wiLCBNZW51IGNsb3NlZDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgey8qICAgICAgPCEtLSBDdXJyZW50OiBcImJnLWdyYXktOTAwIHRleHQtd2hpdGVcIiwgRGVmYXVsdDogXCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIiAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+VGVhbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+UHJvamVjdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPkNhbGVuZGFyPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2VMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VMaW5rJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJ1xuXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCdjb250ZW50ZnVsJykuY3JlYXRlQ2xpZW50KHtcbiAgc3BhY2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTlxufSlcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUGFnZUVudHJpZXMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgICdjb250ZW50X3R5cGUnOiAncGFnZSdcbiAgICB9KVxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYClcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoU2V0dGluZ3NFbnRyaWVzKCkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgJ2NvbnRlbnRfdHlwZSc6ICdzZXR0aW5ncydcbiAgICB9KVxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYClcbn1cblxuY29uc3QgW3NldHRpbmdzLCBzZXRJbWFnZVNldHRpbmdzTGlua3NdID0gdXNlU3RhdGUoW10pXG4vL3VzZUVmZmVjdCBob29rIHJldHJpZXZlcyBwb3N0cyBvbiBpbml0aWFsIGxvYWQuXG51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNldHRpbmdzKCkge1xuICAgIGNvbnN0IGFsbFNldHRpbmdzID0gYXdhaXQgZmV0Y2hTZXR0aW5nc0VudHJpZXMoKVxuICAgIGNvbnNvbGUubG9nKGFsbFNldHRpbmdzKTtcbiAgICBzZXRJbWFnZVNldHRpbmdzTGlua3MoWy4uLmFsbFNldHRpbmdzXSlcbiAgICB9XG4gICAgZ2V0U2V0dGluZ3MoKVxufSwgW10pXG5cbiAgY29uc3QgW3BhZ2VzLCBzZXRJbWFnZUxpbmtzXSA9IHVzZVN0YXRlKFtdKVxuICAvL3VzZUVmZmVjdCBob29rIHJldHJpZXZlcyBwb3N0cyBvbiBpbml0aWFsIGxvYWQuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2VMaW5rcygpIHtcbiAgICAgIGNvbnN0IGFsbFBhZ2VzID0gYXdhaXQgZmV0Y2hQYWdlRW50cmllcygpXG4gICAgICBjb25zb2xlLmxvZyhcImFsbHBhZ2VzXCIpXG4gICAgICBjb25zb2xlLmxvZyhhbGxQYWdlcylcbiAgICAgIHNldEltYWdlTGlua3MoWy4uLmFsbFBhZ2VzXSlcbiAgICB9XG4gICAgZ2V0SW1hZ2VMaW5rcygpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmV4dC5qcyArIENvbnRlbnRmdWw8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAge2NvbnNvbGUubG9nKFwic2V0dGluZ3MgMlwiLHNldHRpbmdzKX17XG4gICAgICAgIHNldHRpbmdzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBzZXR0aW5ncy5tYXAocCA9PiAoXG4gICAgICAgICAgIDxOYXZpZ2F0aW9uIGFjdGl2ZVBhZ2U9XCJob21lXCIgbG9nbz17cC5maWVsZHMubG9nby5maWVsZHMuZmlsZS51cmx9ID48L05hdmlnYXRpb24+XG4gICAgICAgICAgKSlcbiAgICAgICAgOiBudWxsfVxuICAgICAgXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb250ZW50ZnVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=