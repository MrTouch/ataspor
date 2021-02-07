webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/aytac/repos/ataspor/components/navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Navigation(_ref) {
  var _jsx, _jsx2, _jsx3;

  var activePage = _ref.activePage,
      logo = _ref.logo;
  var menuOpenIcon = document.getElementById("menuOpenIcon");
  var menuClosedIcon = document.getElementById("menuClosedIcon");
  var mobileMenu = document.getElementById("mobileMenu");
  var navigationOpen = false;
  var isHomeActive = activePage == "Home" ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'px-3 py-2 rounded-md text-sm font-medium';
  var isMannschaftActive = activePage == "Mannschaft" ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'px-3 py-2 rounded-md text-sm font-medium';
  var isGalleryActive = activePage == "Gallery" ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'px-3 py-2 rounded-md text-sm font-medium';
  var isKalenderActive = activePage == "Kalender" ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'px-3 py-2 rounded-md text-sm font-medium';

  var toggleNavIcon = function toggleNavIcon() {
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
    onClick: function onClick(e) {
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
  }, "Home"), __jsx("a", (_jsx = {
    id: "menuMannschaft",
    href: "/mannschaften",
    className: isMannschaftActive
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 33
  }), _jsx), "Mannschaften"), __jsx("a", (_jsx2 = {
    id: "menuGallery",
    href: "#",
    className: isGalleryActive
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "className", "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 33
  }), _jsx2), "Gallery"), __jsx("a", (_jsx3 = {
    id: "menuKalender",
    href: "#",
    className: isKalenderActive
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "className", "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__source", {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 33
  }), _jsx3), "Kalender")))), __jsx("div", {
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

_c = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var _c;

$RefreshReg$(_c, "Navigation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJhY3RpdmVQYWdlIiwibG9nbyIsIm1lbnVPcGVuSWNvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51Q2xvc2VkSWNvbiIsIm1vYmlsZU1lbnUiLCJuYXZpZ2F0aW9uT3BlbiIsImlzSG9tZUFjdGl2ZSIsImlzTWFubnNjaGFmdEFjdGl2ZSIsImlzR2FsbGVyeUFjdGl2ZSIsImlzS2FsZW5kZXJBY3RpdmUiLCJ0b2dnbGVOYXZJY29uIiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxVQUFULE9BQTBDO0FBQUE7O0FBQUEsTUFBcEJDLFVBQW9CLFFBQXBCQSxVQUFvQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUV0QyxNQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFyQjtBQUNBLE1BQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF2QjtBQUNBLE1BQU1FLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQW5CO0FBRUEsTUFBSUcsY0FBYyxHQUFHLEtBQXJCO0FBRUEsTUFBSUMsWUFBWSxHQUFHUixVQUFVLElBQUUsTUFBWixHQUFxQixpRUFBckIsR0FBeUYsMENBQTVHO0FBQ0EsTUFBSVMsa0JBQWtCLEdBQUdULFVBQVUsSUFBRSxZQUFaLEdBQTJCLGlFQUEzQixHQUErRiwwQ0FBeEg7QUFDQSxNQUFJVSxlQUFlLEdBQUdWLFVBQVUsSUFBRSxTQUFaLEdBQXdCLGlFQUF4QixHQUE0RiwwQ0FBbEg7QUFDQSxNQUFJVyxnQkFBZ0IsR0FBR1gsVUFBVSxJQUFFLFVBQVosR0FBeUIsaUVBQXpCLEdBQTZG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QUFBO0FBQUEsZ0JBSkosRUFLSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDLG1HQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLENBREosQ0E3RkosQ0FESjtBQTBHSDs7S0EzSVFaLFU7QUE2SU1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRkZTRjNmQ2Y2RjMTYxMWVjZWI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgYWN0aXZlUGFnZSwgbG9nbyB9KSB7XG5cbiAgICBjb25zdCBtZW51T3Blbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVPcGVuSWNvblwiKTtcbiAgICBjb25zdCBtZW51Q2xvc2VkSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUNsb3NlZEljb25cIik7XG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9iaWxlTWVudVwiKTtcblxuICAgIHZhciBuYXZpZ2F0aW9uT3BlbiA9IGZhbHNlO1xuXG4gICAgdmFyIGlzSG9tZUFjdGl2ZSA9IGFjdGl2ZVBhZ2U9PVwiSG9tZVwiID8gJ2JnLWdyYXktOTAwIHRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bScgOiAncHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSc7XG4gICAgdmFyIGlzTWFubnNjaGFmdEFjdGl2ZSA9IGFjdGl2ZVBhZ2U9PVwiTWFubnNjaGFmdFwiID8gJ2JnLWdyYXktOTAwIHRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bScgOiAncHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSc7XG4gICAgdmFyIGlzR2FsbGVyeUFjdGl2ZSA9IGFjdGl2ZVBhZ2U9PVwiR2FsbGVyeVwiID8gJ2JnLWdyYXktOTAwIHRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bScgOiAncHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSc7XG4gICAgdmFyIGlzS2FsZW5kZXJBY3RpdmUgPSBhY3RpdmVQYWdlPT1cIkthbGVuZGVyXCIgPyAnYmctZ3JheS05MDAgdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJyA6ICdweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJztcblxuICAgIGNvbnN0IHRvZ2dsZU5hdkljb24gPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRpb25PcGVuID0gIW5hdmlnYXRpb25PcGVuO1xuICAgICAgICBpZighbmF2aWdhdGlvbk9wZW4pe1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWVudU9wZW5JY29uKVxuICAgICAgICAgICAgbWVudU9wZW5JY29uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBtZW51T3Blbkljb24ucmVtb3ZlKFwiYmxvY2tcIik7XG4gICAgICAgICAgICBtZW51Q2xvc2VkSWNvbi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIik7XG4gICAgICAgICAgICBtZW51Q2xvc2VkSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpOyBcbiAgICAgICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImJsb2NrXCIpOyBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtZW51T3Blbkljb24uY2xhc3NMaXN0LmFkZChcImJsb2NrXCIpO1xuICAgICAgICAgICAgbWVudU9wZW5JY29uLnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1lbnVDbG9zZWRJY29uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBtZW51Q2xvc2VkSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvY2tcIik7IFxuICAgICAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIik7XG4gICAgICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IFxuICAgICAgICB9XG4gICAgfVxuICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC0yIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHNtOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBNb2JpbGUgbWVudSBidXR0b24tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PiB7IHRvZ2dsZU5hdkljb24oKTsgfSB9IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIgcm91bmRlZC1tZCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctd2hpdGVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSWNvbiB3aGVuIG1lbnUgaXMgY2xvc2VkLiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVyb2ljb24gbmFtZTogb3V0bGluZS9tZW51XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnUgb3BlbjogXCJoaWRkZW5cIiwgTWVudSBjbG9zZWQ6IFwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwibWVudUNsb3NlZEljb25cIiBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJY29uIHdoZW4gbWVudSBpcyBvcGVuLiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVyb2ljb24gbmFtZTogb3V0bGluZS94XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnUgb3BlbjogXCJibG9ja1wiLCBNZW51IGNsb3NlZDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwibWVudU9wZW5JY29uXCIgY2xhc3NOYW1lPVwiaGlkZGVuIGgtNiB3LTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzbTppdGVtcy1zdHJldGNoIHNtOmp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuIGgtOCB3LWF1dG9cIiBzcmM9e2xvZ299IGFsdD1cIldvcmtmbG93XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBoLTggdy1hdXRvXCIgc3JjPXtsb2dvfSBhbHQ9XCJXb3JrZmxvd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrIHNtOm1sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwhLS0gQ3VycmVudDogXCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCIsIERlZmF1bHQ6IFwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlXCIgLS0+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwibWVudUhvbWVcIiBocmVmPVwiL1wiIGNsYXNzTmFtZT0ge2lzSG9tZUFjdGl2ZX0gPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwibWVudU1hbm5zY2hhZnRcIiBocmVmPVwiL21hbm5zY2hhZnRlblwiIGNsYXNzTmFtZT17aXNNYW5uc2NoYWZ0QWN0aXZlfSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiPk1hbm5zY2hhZnRlbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51R2FsbGVyeVwiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtpc0dhbGxlcnlBY3RpdmV9ICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiPkdhbGxlcnk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwibWVudUthbGVuZGVyXCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzS2FsZW5kZXJBY3RpdmV9IGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+S2FsZW5kZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHItMiBzbTpzdGF0aWMgc206aW5zZXQtYXV0byBzbTptbC02IHNtOnByLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcC0xIHJvdW5kZWQtZnVsbCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VmlldyBub3RpZmljYXRpb25zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwhLS0gSGVyb2ljb24gbmFtZTogb3V0bGluZS9iZWxsIC0tPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaC02IHctNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMTUgMTdoNWwtMS40MDUtMS40MDVBMi4wMzIgMi4wMzIgMCAwMTE4IDE0LjE1OFYxMWE2LjAwMiA2LjAwMiAwIDAwLTQtNS42NTlWNWEyIDIgMCAxMC00IDB2LjM0MUM3LjY3IDYuMTY1IDYgOC4zODggNiAxMXYzLjE1OWMwIC41MzgtLjIxNCAxLjA1NS0uNTk1IDEuNDM2TDQgMTdoNW02IDB2MWEzIDMgMCAxMS02IDB2LTFtNiAwSDlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPCEtLSBQcm9maWxlIGRyb3Bkb3duIC0tPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBmbGV4IHRleHQtc20gcm91bmRlZC1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLXdoaXRlXCIgaWQ9XCJ1c2VyLW1lbnVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gdXNlciBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTggdy04IHJvdW5kZWQtZnVsbFwiIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcyMDk5NjQ1Nzg1LTU2NThhYmY0ZmY0ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVByb2ZpbGUgZHJvcGRvd24gcGFuZWwsIHNob3cvaGlkZSBiYXNlZCBvbiBkcm9wZG93biBzdGF0ZS5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRlcmluZzogXCJ0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyb206IFwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvOiBcInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWF2aW5nOiBcInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyb206IFwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvOiBcInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSByaWdodC0wIG10LTIgdy00OCByb3VuZGVkLW1kIHNoYWRvdy1sZyBweS0xIGJnLXdoaXRlIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01XCIgcm9sZT1cIm1lbnVcIiBhcmlhLW9yaWVudGF0aW9uPVwidmVydGljYWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJ1c2VyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwXCIgcm9sZT1cIm1lbnVpdGVtXCI+WW91ciBQcm9maWxlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDBcIiByb2xlPVwibWVudWl0ZW1cIj5TZXR0aW5nczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwXCIgcm9sZT1cIm1lbnVpdGVtXCI+U2lnbiBvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgIDwhLS1cbiAgICAgICAgICAgICAgICBNb2JpbGUgbWVudSwgdG9nZ2xlIGNsYXNzZXMgYmFzZWQgb24gbWVudSBzdGF0ZS5cblxuICAgICAgICAgICAgICAgIE1lbnUgb3BlbjogXCJibG9ja1wiLCBNZW51IGNsb3NlZDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICAqL31cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2JpbGVNZW51XCIgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgey8qICAgICAgPCEtLSBDdXJyZW50OiBcImJnLWdyYXktOTAwIHRleHQtd2hpdGVcIiwgRGVmYXVsdDogXCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIiAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+VGVhbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+UHJvamVjdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPkNhbGVuZGFyPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9