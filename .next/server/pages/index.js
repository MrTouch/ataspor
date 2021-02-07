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
  const menuOpenIcon = document.getElementById("menuOpenIcon");
  const menuClosedIcon = document.getElementById("menuClosedIcon");
  const mobileMenu = document.getElementById("mobileMenu");
  var navigationOpen = false;
  var isHomeActive = activePage == "Home" ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-white px-3 py-2 rounded-md text-sm font-medium';
  var isMannschaftActive = activePage == "Mannschaft" ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-white px-3 py-2 rounded-md text-sm font-medium';
  var isGalleryActive = activePage == "Gallery" ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-white px-3 py-2 rounded-md text-sm font-medium';
  var isKalenderActive = activePage == "Kalender" ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-white px-3 py-2 rounded-md text-sm font-medium';

  const toggleNavIcon = () => {
    navigationOpen = !navigationOpen;

    if (!navigationOpen) {
      console.log(menuOpenIcon);
      menuOpenIcon.classList.add("hidden");
      menuOpenIcon.remove("block");
      menuClosedIcon.classList.add("block");
      menuClosedIcon.classList.remove("hidden");
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("block");
    } else {
      menuOpenIcon.classList.add("block");
      menuOpenIcon.remove("hidden");
      menuClosedIcon.classList.add("hidden");
      menuClosedIcon.classList.remove("block");
      mobileMenu.classList.add("block");
      mobileMenu.classList.remove("hidden");
    }
  };

  return __jsx("nav", {
    className: "bg-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative flex items-center justify-between h-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: e => {
      toggleNavIcon();
    },
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
    "aria-expanded": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, "Open main menu"), __jsx("svg", {
    id: "menuClosedIcon",
    className: "block h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 33
    }
  })), __jsx("svg", {
    id: "menuOpenIcon",
    className: "hidden h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 64,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex-shrink-0 flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "block lg:hidden h-8 w-auto",
    src: logo,
    alt: "Workflow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }), __jsx("img", {
    className: "hidden lg:block h-8 w-auto",
    src: logo,
    alt: "Workflow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "hidden sm:block sm:ml-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx("a", {
    id: "menuHome",
    href: "/",
    className: isHomeActive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, "Home"), __jsx("a", {
    id: "menuMannschaft",
    href: "/mannschaften",
    className: isMannschaftActive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, "Mannschaften"), __jsx("a", {
    id: "menuGallery",
    href: "#",
    className: isGalleryActive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, "Gallery"), __jsx("a", {
    id: "menuKalender",
    href: "#",
    className: isKalenderActive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, "Kalender")))), __jsx("div", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "ml-3 relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    id: "user-menu",
    "aria-haspopup": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }, "Open user menu"), __jsx("img", {
    className: "h-8 w-8 rounded-full",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 112,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, "Your Profile"), __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  }, "Settings"), __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, "Sign out")))))), __jsx("div", {
    id: "mobileMenu",
    className: "hidden sm:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "px-2 pt-2 pb-3 space-y-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    className: "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, "Dashboard"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, "Team"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, "Projects"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
    activePage: "Home",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbWFnZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbnRlbnRmdWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJJbWFnZUxpbmsiLCJhbHQiLCJkYXRlIiwiaW1hZ2UiLCJ0aXRsZSIsInVybCIsImZpZWxkcyIsIk5hdmlnYXRpb24iLCJhY3RpdmVQYWdlIiwibG9nbyIsIm1lbnVPcGVuSWNvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51Q2xvc2VkSWNvbiIsIm1vYmlsZU1lbnUiLCJuYXZpZ2F0aW9uT3BlbiIsImlzSG9tZUFjdGl2ZSIsImlzTWFubnNjaGFmdEFjdGl2ZSIsImlzR2FsbGVyeUFjdGl2ZSIsImlzS2FsZW5kZXJBY3RpdmUiLCJ0b2dnbGVOYXZJY29uIiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImUiLCJjbGllbnQiLCJyZXF1aXJlIiwiY3JlYXRlQ2xpZW50Iiwic3BhY2UiLCJwcm9jZXNzIiwiYWNjZXNzVG9rZW4iLCJORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTiIsIkhvbWVQYWdlIiwiZmV0Y2hQYWdlRW50cmllcyIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiaXRlbXMiLCJjb250ZW50VHlwZSIsIm5hbWUiLCJmZXRjaFNldHRpbmdzRW50cmllcyIsInNldHRpbmdzIiwic2V0SW1hZ2VTZXR0aW5nc0xpbmtzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRTZXR0aW5ncyIsImFsbFNldHRpbmdzIiwicGFnZXMiLCJzZXRJbWFnZUxpbmtzIiwiZ2V0SW1hZ2VMaW5rcyIsImFsbFBhZ2VzIiwibGVuZ3RoIiwibWFwIiwicCIsImZpbGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBLFNBQVNBLFNBQVQsQ0FBbUI7QUFBRUMsS0FBRjtBQUFPQyxNQUFQO0FBQWFDLE9BQWI7QUFBb0JDLE9BQXBCO0FBQTJCQztBQUEzQixDQUFuQixFQUFxRDtBQUNqRCxTQUNFO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUVBLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVK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Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBJbWFnZUxpbmsoeyBhbHQsIGRhdGUsIGltYWdlLCB0aXRsZSwgdXJsIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGEgaHJlZj17dXJsfT5cbiAgICAgICAgICA8aW1nIGFsdD17YWx0fSBzcmM9e2ltYWdlLmZpZWxkc30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPGg0PntkYXRlfTwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1M3B4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBJbWFnZUxpbmsiLCJmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgYWN0aXZlUGFnZSwgbG9nbyB9KSB7XG5cbiAgICBjb25zdCBtZW51T3Blbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVPcGVuSWNvblwiKTtcbiAgICBjb25zdCBtZW51Q2xvc2VkSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUNsb3NlZEljb25cIik7XG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9iaWxlTWVudVwiKTtcblxuICAgIHZhciBuYXZpZ2F0aW9uT3BlbiA9IGZhbHNlO1xuXG4gICAgdmFyIGlzSG9tZUFjdGl2ZSA9IGFjdGl2ZVBhZ2U9PVwiSG9tZVwiID8gJ2JnLWdyYXktOTAwIHRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bScgOiAndGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJztcbiAgICB2YXIgaXNNYW5uc2NoYWZ0QWN0aXZlID0gYWN0aXZlUGFnZT09XCJNYW5uc2NoYWZ0XCIgPyAnYmctZ3JheS05MDAgdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJyA6ICd0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0nO1xuICAgIHZhciBpc0dhbGxlcnlBY3RpdmUgPSBhY3RpdmVQYWdlPT1cIkdhbGxlcnlcIiA/ICdiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0nIDogJ3RleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSc7XG4gICAgdmFyIGlzS2FsZW5kZXJBY3RpdmUgPSBhY3RpdmVQYWdlPT1cIkthbGVuZGVyXCIgPyAnYmctZ3JheS05MDAgdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJyA6ICd0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0nO1xuXG4gICAgY29uc3QgdG9nZ2xlTmF2SWNvbiA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdGlvbk9wZW4gPSAhbmF2aWdhdGlvbk9wZW47XG4gICAgICAgIGlmKCFuYXZpZ2F0aW9uT3Blbil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZW51T3Blbkljb24pXG4gICAgICAgICAgICBtZW51T3Blbkljb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1lbnVPcGVuSWNvbi5yZW1vdmUoXCJibG9ja1wiKTtcbiAgICAgICAgICAgIG1lbnVDbG9zZWRJY29uLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiKTtcbiAgICAgICAgICAgIG1lbnVDbG9zZWRJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IFxuICAgICAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvY2tcIik7IFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1lbnVPcGVuSWNvbi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIik7XG4gICAgICAgICAgICBtZW51T3Blbkljb24ucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgbWVudUNsb3NlZEljb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1lbnVDbG9zZWRJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJibG9ja1wiKTsgXG4gICAgICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiKTtcbiAgICAgICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTsgXG4gICAgICAgIH1cbiAgICB9XG4gICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTIgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgc206aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE1vYmlsZSBtZW51IGJ1dHRvbi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKT0+IHsgdG9nZ2xlTmF2SWNvbigpOyB9IH0gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByb3VuZGVkLW1kIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy13aGl0ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJY29uIHdoZW4gbWVudSBpcyBjbG9zZWQuIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXJvaWNvbiBuYW1lOiBvdXRsaW5lL21lbnVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudSBvcGVuOiBcImhpZGRlblwiLCBNZW51IGNsb3NlZDogXCJibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJtZW51Q2xvc2VkSWNvblwiIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEljb24gd2hlbiBtZW51IGlzIG9wZW4uIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXJvaWNvbiBuYW1lOiBvdXRsaW5lL3hcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudSBvcGVuOiBcImJsb2NrXCIsIE1lbnUgY2xvc2VkOiBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJtZW51T3Blbkljb25cIiBjbGFzc05hbWU9XCJoaWRkZW4gaC02IHctNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNtOml0ZW1zLXN0cmV0Y2ggc206anVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW4gaC04IHctYXV0b1wiIHNyYz17bG9nb30gYWx0PVwiV29ya2Zsb3dcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGgtOCB3LWF1dG9cIiBzcmM9e2xvZ299IGFsdD1cIldvcmtmbG93XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206YmxvY2sgc206bWwtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPCEtLSBDdXJyZW50OiBcImJnLWdyYXktOTAwIHRleHQtd2hpdGVcIiwgRGVmYXVsdDogXCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIiAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51SG9tZVwiIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSB7aXNIb21lQWN0aXZlfSA+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51TWFubnNjaGFmdFwiIGhyZWY9XCIvbWFubnNjaGFmdGVuXCIgY2xhc3NOYW1lPXtpc01hbm5zY2hhZnRBY3RpdmV9Pk1hbm5zY2hhZnRlbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51R2FsbGVyeVwiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtpc0dhbGxlcnlBY3RpdmV9PkdhbGxlcnk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwibWVudUthbGVuZGVyXCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzS2FsZW5kZXJBY3RpdmV9PkthbGVuZGVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHByLTIgc206c3RhdGljIHNtOmluc2V0LWF1dG8gc206bWwtNiBzbTpwci0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHAtMSByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlZpZXcgbm90aWZpY2F0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8IS0tIEhlcm9pY29uIG5hbWU6IG91dGxpbmUvYmVsbCAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImgtNiB3LTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTE1IDE3aDVsLTEuNDA1LTEuNDA1QTIuMDMyIDIuMDMyIDAgMDExOCAxNC4xNThWMTFhNi4wMDIgNi4wMDIgMCAwMC00LTUuNjU5VjVhMiAyIDAgMTAtNCAwdi4zNDFDNy42NyA2LjE2NSA2IDguMzg4IDYgMTF2My4xNTljMCAuNTM4LS4yMTQgMS4wNTUtLjU5NSAxLjQzNkw0IDE3aDVtNiAwdjFhMyAzIDAgMTEtNiAwdi0xbTYgMEg5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogIDwhLS0gUHJvZmlsZSBkcm9wZG93biAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMyByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgZmxleCB0ZXh0LXNtIHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS04MDAgZm9jdXM6cmluZy13aGl0ZVwiIGlkPVwidXNlci1tZW51XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIHVzZXIgbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC04IHctOCByb3VuZGVkLWZ1bGxcIiBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1Qcm9maWxlIGRyb3Bkb3duIHBhbmVsLCBzaG93L2hpZGUgYmFzZWQgb24gZHJvcGRvd24gc3RhdGUuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50ZXJpbmc6IFwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tOiBcInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbzogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVhdmluZzogXCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tOiBcInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbzogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yaWdpbi10b3AtcmlnaHQgYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNDggcm91bmRlZC1tZCBzaGFkb3ctbGcgcHktMSBiZy13aGl0ZSByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNVwiIHJvbGU9XCJtZW51XCIgYXJpYS1vcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgYXJpYS1sYWJlbGxlZGJ5PVwidXNlci1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMFwiIHJvbGU9XCJtZW51aXRlbVwiPllvdXIgUHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwXCIgcm9sZT1cIm1lbnVpdGVtXCI+U2V0dGluZ3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMFwiIHJvbGU9XCJtZW51aXRlbVwiPlNpZ24gb3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogXG4gICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgTW9iaWxlIG1lbnUsIHRvZ2dsZSBjbGFzc2VzIGJhc2VkIG9uIG1lbnUgc3RhdGUuXG5cbiAgICAgICAgICAgICAgICBNZW51IG9wZW46IFwiYmxvY2tcIiwgTWVudSBjbG9zZWQ6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgKi99XG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9iaWxlTWVudVwiIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgIHsvKiAgICAgIDwhLS0gQ3VycmVudDogXCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCIsIERlZmF1bHQ6IFwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlXCIgLS0+Ki99XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5EYXNoYm9hcmQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPlRlYW08L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPlByb2plY3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5DYWxlbmRhcjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlTGluayBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlTGluaydcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbidcblxuY29uc3QgY2xpZW50ID0gcmVxdWlyZSgnY29udGVudGZ1bCcpLmNyZWF0ZUNsaWVudCh7XG4gIHNwYWNlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX1NQQUNFX0lELFxuICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU5cbn0pXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBhc3luYyBmdW5jdGlvbiBmZXRjaFBhZ2VFbnRyaWVzKCkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgICAnY29udGVudF90eXBlJzogJ3BhZ2UnXG4gICAgfSlcbiAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXNcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFNldHRpbmdzRW50cmllcygpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICdjb250ZW50X3R5cGUnOiAnc2V0dGluZ3MnXG4gICAgfSlcbiAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXNcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXG59XG5cbmNvbnN0IFtzZXR0aW5ncywgc2V0SW1hZ2VTZXR0aW5nc0xpbmtzXSA9IHVzZVN0YXRlKFtdKVxuLy91c2VFZmZlY3QgaG9vayByZXRyaWV2ZXMgcG9zdHMgb24gaW5pdGlhbCBsb2FkLlxudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTZXR0aW5ncygpIHtcbiAgICBjb25zdCBhbGxTZXR0aW5ncyA9IGF3YWl0IGZldGNoU2V0dGluZ3NFbnRyaWVzKClcbiAgICBjb25zb2xlLmxvZyhhbGxTZXR0aW5ncyk7XG4gICAgc2V0SW1hZ2VTZXR0aW5nc0xpbmtzKFsuLi5hbGxTZXR0aW5nc10pXG4gICAgfVxuICAgIGdldFNldHRpbmdzKClcbn0sIFtdKVxuXG4gIGNvbnN0IFtwYWdlcywgc2V0SW1hZ2VMaW5rc10gPSB1c2VTdGF0ZShbXSlcbiAgLy91c2VFZmZlY3QgaG9vayByZXRyaWV2ZXMgcG9zdHMgb24gaW5pdGlhbCBsb2FkLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEltYWdlTGlua3MoKSB7XG4gICAgICBjb25zdCBhbGxQYWdlcyA9IGF3YWl0IGZldGNoUGFnZUVudHJpZXMoKVxuICAgICAgY29uc29sZS5sb2coXCJhbGxwYWdlc1wiKVxuICAgICAgY29uc29sZS5sb2coYWxsUGFnZXMpXG4gICAgICBzZXRJbWFnZUxpbmtzKFsuLi5hbGxQYWdlc10pXG4gICAgfVxuICAgIGdldEltYWdlTGlua3MoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5leHQuanMgKyBDb250ZW50ZnVsPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtjb25zb2xlLmxvZyhcInNldHRpbmdzIDJcIixzZXR0aW5ncyl9e1xuICAgICAgICBzZXR0aW5ncy5sZW5ndGggPiAwXG4gICAgICAgID8gc2V0dGluZ3MubWFwKHAgPT4gKFxuICAgICAgICAgICA8TmF2aWdhdGlvbiBhY3RpdmVQYWdlPVwiSG9tZVwiIGxvZ289e3AuZmllbGRzLmxvZ28uZmllbGRzLmZpbGUudXJsfSA+PC9OYXZpZ2F0aW9uPlxuICAgICAgICAgICkpXG4gICAgICAgIDogbnVsbH1cbiAgICAgIFxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9