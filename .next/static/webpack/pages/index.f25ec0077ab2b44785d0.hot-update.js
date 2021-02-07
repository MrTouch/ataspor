webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "/home/aytac/repos/ataspor/components/navigation.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function Navigation(_ref) {
  _s();

  var activePage = _ref.activePage,
      logo = _ref.logo;
  var menuOpenIcon = document.getElementById("menuOpenIcon");
  var menuClosedIcon = document.getElementById("menuClosedIcon");
  var mobileMenu = document.getElementById("mobileMenu");
  var menuKalender = document.getElementById("menuKalender");
  var menuHome = document.getElementById("menuHome");
  var menuMannschaften = document.getElementById("menuMannschaft");
  var menuGallery = document.getElementById("menuGallery");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      pages = _useState[0],
      setImageLinks = _useState[1]; //useEffect hook retrieves posts on initial load.


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function setNav() {
      return _setNav.apply(this, arguments);
    }

    function _setNav() {
      _setNav = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (activePage == "Home") {
                  menuHome.classList.add("bg-gray-900");
                  menuMannschaften.classList.remove("bg-gray-900");
                  menuGallery.classList.remove("bg-gray-900");
                  menuKalender.classList.remove("bg-gray-900");
                } else if (activePage == "Mannschaften") {
                  menuHome.classList.remove("bg-gray-900");
                  menuMannschaften.classList.add("bg-gray-900");
                  menuGallery.classList.remove("bg-gray-900");
                  menuKalender.classList.remove("bg-gray-900");
                } else if (activePage == "Gallery") {
                  menuHome.classList.remove("bg-gray-900");
                  menuMannschaften.classList.remove("bg-gray-900");
                  menuGallery.classList.add("bg-gray-900");
                  menuKalender.classList.remove("bg-gray-900");
                } else if (activePage == "Kalender") {
                  menuHome.classList.remove("bg-gray-900");
                  menuMannschaften.classList.remove("bg-gray-900");
                  menuGallery.classList.remove("bg-gray-900");
                  menuKalender.classList.add("bg-gray-900");
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _setNav.apply(this, arguments);
    }

    setNav();
  }, []);
  var navigationOpen = false;

  var toggleNavIcon = function toggleNavIcon() {
    navigationOpen = !navigationOpen;

    if (!navigationOpen) {
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
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative flex items-center justify-between h-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 84,
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
      lineNumber: 85,
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
      lineNumber: 95,
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
      lineNumber: 96,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex-shrink-0 flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "block lg:hidden h-8 w-auto",
    src: logo,
    alt: "Workflow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }), __jsx("img", {
    className: "hidden lg:block h-8 w-auto",
    src: logo,
    alt: "Workflow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "hidden sm:block sm:ml-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }, __jsx("a", {
    id: "menuHome",
    href: "/",
    className: "text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }, "Home"), __jsx("a", {
    id: "menuMannschaft",
    href: "/mannschaften",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 33
    }
  }, "Mannschaften"), __jsx("a", {
    id: "menuGallery",
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, "Gallery"), __jsx("a", {
    id: "menuKalender",
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 33
    }
  }, "Kalender")))), __jsx("div", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 119,
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
      lineNumber: 120,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "ml-3 relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    id: "user-menu",
    "aria-haspopup": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 37
    }
  }, "Open user menu"), __jsx("img", {
    className: "h-8 w-8 rounded-full",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 144,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 33
    }
  }, "Your Profile"), __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 33
    }
  }, "Settings"), __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  }, "Sign out")))))), __jsx("div", {
    id: "mobileMenu",
    className: "hidden sm:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "px-2 pt-2 pb-3 space-y-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    className: "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, "Dashboard"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, "Team"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, "Projects"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }, "Calendar"))));
}

_s(Navigation, "AuNNG6J9wLQgm5mqUKNxY/iGLao=");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJhY3RpdmVQYWdlIiwibG9nbyIsIm1lbnVPcGVuSWNvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51Q2xvc2VkSWNvbiIsIm1vYmlsZU1lbnUiLCJtZW51S2FsZW5kZXIiLCJtZW51SG9tZSIsIm1lbnVNYW5uc2NoYWZ0ZW4iLCJtZW51R2FsbGVyeSIsInVzZVN0YXRlIiwicGFnZXMiLCJzZXRJbWFnZUxpbmtzIiwidXNlRWZmZWN0Iiwic2V0TmF2IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibmF2aWdhdGlvbk9wZW4iLCJ0b2dnbGVOYXZJY29uIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsU0FBU0EsVUFBVCxPQUEwQztBQUFBOztBQUFBLE1BQXBCQyxVQUFvQixRQUFwQkEsVUFBb0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFFdEMsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBckI7QUFDQSxNQUFNQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdkI7QUFDQSxNQUFNRSxVQUFVLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFuQjtBQUNBLE1BQU1HLFlBQVksR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQXJCO0FBQ0EsTUFBTUksUUFBUSxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQSxNQUFNSyxnQkFBZ0IsR0FBR04sUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF6QjtBQUNBLE1BQU1NLFdBQVcsR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCOztBQVJzQyxrQkFX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LEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUMseUVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosRUFHSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDLG1HQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosRUFJSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDLG1HQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLEVBS0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyxtR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixDQURKLENBN0ZKLENBREo7QUEwR0g7O0dBMUtRRixVOztLQUFBQSxVO0FBNEtNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMjVlYzAwNzdhYjJiNDQ3ODVkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuZnVuY3Rpb24gTmF2aWdhdGlvbih7IGFjdGl2ZVBhZ2UsIGxvZ28gfSkge1xuXG4gICAgY29uc3QgbWVudU9wZW5JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51T3Blbkljb25cIik7XG4gICAgY29uc3QgbWVudUNsb3NlZEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVDbG9zZWRJY29uXCIpO1xuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZU1lbnVcIik7XG4gICAgY29uc3QgbWVudUthbGVuZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51S2FsZW5kZXJcIik7XG4gICAgY29uc3QgbWVudUhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVIb21lXCIpO1xuICAgIGNvbnN0IG1lbnVNYW5uc2NoYWZ0ZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVNYW5uc2NoYWZ0XCIpO1xuICAgIGNvbnN0IG1lbnVHYWxsZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51R2FsbGVyeVwiKTtcblxuICAgIFxuICBjb25zdCBbcGFnZXMsIHNldEltYWdlTGlua3NdID0gdXNlU3RhdGUoW10pXG4gIC8vdXNlRWZmZWN0IGhvb2sgcmV0cmlldmVzIHBvc3RzIG9uIGluaXRpYWwgbG9hZC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBzZXROYXYoKSB7XG4gICAgICAgXG4gICAgICAgIGlmKGFjdGl2ZVBhZ2UgPT0gXCJIb21lXCIpe1xuICAgICAgICAgICAgbWVudUhvbWUuY2xhc3NMaXN0LmFkZChcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICAgICAgbWVudU1hbm5zY2hhZnRlbi5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51R2FsbGVyeS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51S2FsZW5kZXIuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICB9ZWxzZSBpZiggYWN0aXZlUGFnZSA9PSBcIk1hbm5zY2hhZnRlblwiKXtcbiAgICAgICAgICAgIG1lbnVIb21lLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1ncmF5LTkwMFwiKTtcbiAgICAgICAgICAgIG1lbnVNYW5uc2NoYWZ0ZW4uY2xhc3NMaXN0LmFkZChcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICAgICAgbWVudUdhbGxlcnkuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICAgICAgbWVudUthbGVuZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1ncmF5LTkwMFwiKTtcbiAgICAgICAgfWVsc2UgaWYoIGFjdGl2ZVBhZ2UgPT0gXCJHYWxsZXJ5XCIpe1xuICAgICAgICAgICAgbWVudUhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICAgICAgbWVudU1hbm5zY2hhZnRlbi5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51R2FsbGVyeS5jbGFzc0xpc3QuYWRkKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51S2FsZW5kZXIuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICB9ZWxzZSBpZiggYWN0aXZlUGFnZSA9PSBcIkthbGVuZGVyXCIpe1xuICAgICAgICAgICAgbWVudUhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICAgICAgbWVudU1hbm5zY2hhZnRlbi5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51R2FsbGVyeS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51S2FsZW5kZXIuY2xhc3NMaXN0LmFkZChcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldE5hdigpXG4gIH0sIFtdKVxuXG5cblxuICAgIHZhciBuYXZpZ2F0aW9uT3BlbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9nZ2xlTmF2SWNvbiA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdGlvbk9wZW4gPSAhbmF2aWdhdGlvbk9wZW47XG4gICAgICAgIGlmKCFuYXZpZ2F0aW9uT3Blbil7XG4gICAgICAgICAgICBtZW51T3Blbkljb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1lbnVPcGVuSWNvbi5yZW1vdmUoXCJibG9ja1wiKTtcbiAgICAgICAgICAgIG1lbnVDbG9zZWRJY29uLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiKTtcbiAgICAgICAgICAgIG1lbnVDbG9zZWRJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IFxuICAgICAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvY2tcIik7IFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1lbnVPcGVuSWNvbi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIik7XG4gICAgICAgICAgICBtZW51T3Blbkljb24ucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgbWVudUNsb3NlZEljb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1lbnVDbG9zZWRJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJibG9ja1wiKTsgXG4gICAgICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiKTtcbiAgICAgICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTsgXG4gICAgICAgIH1cbiAgICB9XG4gICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTIgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgc206aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE1vYmlsZSBtZW51IGJ1dHRvbi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKT0+IHsgdG9nZ2xlTmF2SWNvbigpOyB9IH0gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByb3VuZGVkLW1kIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy13aGl0ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJY29uIHdoZW4gbWVudSBpcyBjbG9zZWQuIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXJvaWNvbiBuYW1lOiBvdXRsaW5lL21lbnVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudSBvcGVuOiBcImhpZGRlblwiLCBNZW51IGNsb3NlZDogXCJibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJtZW51Q2xvc2VkSWNvblwiIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEljb24gd2hlbiBtZW51IGlzIG9wZW4uIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXJvaWNvbiBuYW1lOiBvdXRsaW5lL3hcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudSBvcGVuOiBcImJsb2NrXCIsIE1lbnUgY2xvc2VkOiBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJtZW51T3Blbkljb25cIiBjbGFzc05hbWU9XCJoaWRkZW4gaC02IHctNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNtOml0ZW1zLXN0cmV0Y2ggc206anVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW4gaC04IHctYXV0b1wiIHNyYz17bG9nb30gYWx0PVwiV29ya2Zsb3dcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGgtOCB3LWF1dG9cIiBzcmM9e2xvZ299IGFsdD1cIldvcmtmbG93XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206YmxvY2sgc206bWwtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPCEtLSBDdXJyZW50OiBcImJnLWdyYXktOTAwIHRleHQtd2hpdGVcIiwgRGVmYXVsdDogXCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIiAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51SG9tZVwiIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51TWFubnNjaGFmdFwiIGhyZWY9XCIvbWFubnNjaGFmdGVuXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIj5NYW5uc2NoYWZ0ZW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwibWVudUdhbGxlcnlcIiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+R2FsbGVyeTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51S2FsZW5kZXJcIiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+S2FsZW5kZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHItMiBzbTpzdGF0aWMgc206aW5zZXQtYXV0byBzbTptbC02IHNtOnByLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcC0xIHJvdW5kZWQtZnVsbCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VmlldyBub3RpZmljYXRpb25zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwhLS0gSGVyb2ljb24gbmFtZTogb3V0bGluZS9iZWxsIC0tPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaC02IHctNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMTUgMTdoNWwtMS40MDUtMS40MDVBMi4wMzIgMi4wMzIgMCAwMTE4IDE0LjE1OFYxMWE2LjAwMiA2LjAwMiAwIDAwLTQtNS42NTlWNWEyIDIgMCAxMC00IDB2LjM0MUM3LjY3IDYuMTY1IDYgOC4zODggNiAxMXYzLjE1OWMwIC41MzgtLjIxNCAxLjA1NS0uNTk1IDEuNDM2TDQgMTdoNW02IDB2MWEzIDMgMCAxMS02IDB2LTFtNiAwSDlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPCEtLSBQcm9maWxlIGRyb3Bkb3duIC0tPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBmbGV4IHRleHQtc20gcm91bmRlZC1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLXdoaXRlXCIgaWQ9XCJ1c2VyLW1lbnVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gdXNlciBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTggdy04IHJvdW5kZWQtZnVsbFwiIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcyMDk5NjQ1Nzg1LTU2NThhYmY0ZmY0ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVByb2ZpbGUgZHJvcGRvd24gcGFuZWwsIHNob3cvaGlkZSBiYXNlZCBvbiBkcm9wZG93biBzdGF0ZS5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRlcmluZzogXCJ0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyb206IFwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvOiBcInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWF2aW5nOiBcInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyb206IFwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvOiBcInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSByaWdodC0wIG10LTIgdy00OCByb3VuZGVkLW1kIHNoYWRvdy1sZyBweS0xIGJnLXdoaXRlIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01XCIgcm9sZT1cIm1lbnVcIiBhcmlhLW9yaWVudGF0aW9uPVwidmVydGljYWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJ1c2VyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwXCIgcm9sZT1cIm1lbnVpdGVtXCI+WW91ciBQcm9maWxlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDBcIiByb2xlPVwibWVudWl0ZW1cIj5TZXR0aW5nczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwXCIgcm9sZT1cIm1lbnVpdGVtXCI+U2lnbiBvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgIDwhLS1cbiAgICAgICAgICAgICAgICBNb2JpbGUgbWVudSwgdG9nZ2xlIGNsYXNzZXMgYmFzZWQgb24gbWVudSBzdGF0ZS5cblxuICAgICAgICAgICAgICAgIE1lbnUgb3BlbjogXCJibG9ja1wiLCBNZW51IGNsb3NlZDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICAqL31cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2JpbGVNZW51XCIgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgey8qICAgICAgPCEtLSBDdXJyZW50OiBcImJnLWdyYXktOTAwIHRleHQtd2hpdGVcIiwgRGVmYXVsdDogXCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIiAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+VGVhbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+UHJvamVjdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPkNhbGVuZGFyPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9