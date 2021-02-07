webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/aytac/repos/ataspor/components/navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Navigation(_ref) {
  var activePage = _ref.activePage,
      logo = _ref.logo;
  var menuOpenIcon = document.getElementById("menuOpenIcon");
  var menuClosedIcon = document.getElementById("menuClosedIcon");
  var mobileMenu = document.getElementById("mobileMenu");
  var menuKalender = document.getElementById("menuKalender");
  var menuHome = document.getElementById("menuHome");
  var menuMannschaften = document.getElementById("menuMannschaft");
  var menuGallery = document.getElementById("menuGallery");
  /*
          if(activePage == "Home"){
              menuHome.classList.add("bg-gray-900");
              menuMannschaften.classList.remove("bg-gray-900");
              menuGallery.classList.remove("bg-gray-900");
              menuKalender.classList.remove("bg-gray-900");
          }else if( activePage == "Mannschaften"){
              menuHome.classList.remove("bg-gray-900");
              menuMannschaften.classList.add("bg-gray-900");
              menuGallery.classList.remove("bg-gray-900");
              menuKalender.classList.remove("bg-gray-900");
          }else if( activePage == "Gallery"){
              menuHome.classList.remove("bg-gray-900");
              menuMannschaften.classList.remove("bg-gray-900");
              menuGallery.classList.add("bg-gray-900");
              menuKalender.classList.remove("bg-gray-900");
          }else if( activePage == "Kalender"){
              menuHome.classList.remove("bg-gray-900");
              menuMannschaften.classList.remove("bg-gray-900");
              menuGallery.classList.remove("bg-gray-900");
              menuKalender.classList.add("bg-gray-900");
          }
  */

  var navigationOpen = false;

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
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative flex items-center justify-between h-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 76,
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
      lineNumber: 77,
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
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex-shrink-0 flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "block lg:hidden h-8 w-auto",
    src: logo,
    alt: "Workflow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }), __jsx("img", {
    className: "hidden lg:block h-8 w-auto",
    src: logo,
    alt: "Workflow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "hidden sm:block sm:ml-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, __jsx("a", {
    id: "menuHome",
    href: "/",
    className: "text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, "Home"), __jsx("a", {
    id: "menuMannschaft",
    href: "/mannschaften",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }, "Mannschaften"), __jsx("a", {
    id: "menuGallery",
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, "Gallery"), __jsx("a", {
    id: "menuKalender",
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  }, "Kalender")))), __jsx("div", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 111,
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
      lineNumber: 112,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "ml-3 relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    id: "user-menu",
    "aria-haspopup": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  }, "Open user menu"), __jsx("img", {
    className: "h-8 w-8 rounded-full",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 136,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }, "Your Profile"), __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  }, "Settings"), __jsx("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }, "Sign out")))))), __jsx("div", {
    id: "mobileMenu",
    className: "hidden sm:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "px-2 pt-2 pb-3 space-y-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    className: "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }, "Dashboard"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, "Team"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, "Projects"), __jsx("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJhY3RpdmVQYWdlIiwibG9nbyIsIm1lbnVPcGVuSWNvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51Q2xvc2VkSWNvbiIsIm1vYmlsZU1lbnUiLCJtZW51S2FsZW5kZXIiLCJtZW51SG9tZSIsIm1lbnVNYW5uc2NoYWZ0ZW4iLCJtZW51R2FsbGVyeSIsIm5hdmlnYXRpb25PcGVuIiwidG9nZ2xlTmF2SWNvbiIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFVBQVQsT0FBMEM7QUFBQSxNQUFwQkMsVUFBb0IsUUFBcEJBLFVBQW9CO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBRXRDLE1BQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQXJCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXZCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbkI7QUFDQSxNQUFNRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFyQjtBQUNBLE1BQU1JLFFBQVEsR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWpCO0FBQ0EsTUFBTUssZ0JBQWdCLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBekI7QUFDQSxNQUFNTSxXQUFXLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkksTUFBSU8sY0FBYyxHQUFHLEtBQXJCOztBQUVBLE1BQU1DLGFB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QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyxtR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixDQURKLENBN0ZKLENBREo7QUEwR0g7O0tBbktRRixVO0FBcUtNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYjdlNGYyMTU2ODFkMjYxNzE5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTmF2aWdhdGlvbih7IGFjdGl2ZVBhZ2UsIGxvZ28gfSkge1xuXG4gICAgY29uc3QgbWVudU9wZW5JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51T3Blbkljb25cIik7XG4gICAgY29uc3QgbWVudUNsb3NlZEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVDbG9zZWRJY29uXCIpO1xuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZU1lbnVcIik7XG4gICAgY29uc3QgbWVudUthbGVuZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51S2FsZW5kZXJcIik7XG4gICAgY29uc3QgbWVudUhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVIb21lXCIpO1xuICAgIGNvbnN0IG1lbnVNYW5uc2NoYWZ0ZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVNYW5uc2NoYWZ0XCIpO1xuICAgIGNvbnN0IG1lbnVHYWxsZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51R2FsbGVyeVwiKTtcbiAgICBcbi8qXG4gICAgICAgIGlmKGFjdGl2ZVBhZ2UgPT0gXCJIb21lXCIpe1xuICAgICAgICAgICAgbWVudUhvbWUuY2xhc3NMaXN0LmFkZChcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICAgICAgbWVudU1hbm5zY2hhZnRlbi5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51R2FsbGVyeS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51S2FsZW5kZXIuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICB9ZWxzZSBpZiggYWN0aXZlUGFnZSA9PSBcIk1hbm5zY2hhZnRlblwiKXtcbiAgICAgICAgICAgIG1lbnVIb21lLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1ncmF5LTkwMFwiKTtcbiAgICAgICAgICAgIG1lbnVNYW5uc2NoYWZ0ZW4uY2xhc3NMaXN0LmFkZChcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICAgICAgbWVudUdhbGxlcnkuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICAgICAgbWVudUthbGVuZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1ncmF5LTkwMFwiKTtcbiAgICAgICAgfWVsc2UgaWYoIGFjdGl2ZVBhZ2UgPT0gXCJHYWxsZXJ5XCIpe1xuICAgICAgICAgICAgbWVudUhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICAgICAgbWVudU1hbm5zY2hhZnRlbi5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51R2FsbGVyeS5jbGFzc0xpc3QuYWRkKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51S2FsZW5kZXIuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICB9ZWxzZSBpZiggYWN0aXZlUGFnZSA9PSBcIkthbGVuZGVyXCIpe1xuICAgICAgICAgICAgbWVudUhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICAgICAgbWVudU1hbm5zY2hhZnRlbi5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51R2FsbGVyeS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JheS05MDBcIik7XG4gICAgICAgICAgICBtZW51S2FsZW5kZXIuY2xhc3NMaXN0LmFkZChcImJnLWdyYXktOTAwXCIpO1xuICAgICAgICB9XG4qL1xuXG5cbiAgICB2YXIgbmF2aWdhdGlvbk9wZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRvZ2dsZU5hdkljb24gPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRpb25PcGVuID0gIW5hdmlnYXRpb25PcGVuO1xuICAgICAgICBpZighbmF2aWdhdGlvbk9wZW4pe1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWVudU9wZW5JY29uKVxuICAgICAgICAgICAgbWVudU9wZW5JY29uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBtZW51T3Blbkljb24ucmVtb3ZlKFwiYmxvY2tcIik7XG4gICAgICAgICAgICBtZW51Q2xvc2VkSWNvbi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIik7XG4gICAgICAgICAgICBtZW51Q2xvc2VkSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpOyBcbiAgICAgICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImJsb2NrXCIpOyBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtZW51T3Blbkljb24uY2xhc3NMaXN0LmFkZChcImJsb2NrXCIpO1xuICAgICAgICAgICAgbWVudU9wZW5JY29uLnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1lbnVDbG9zZWRJY29uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBtZW51Q2xvc2VkSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvY2tcIik7IFxuICAgICAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIik7XG4gICAgICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IFxuICAgICAgICB9XG4gICAgfVxuICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC0yIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHNtOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBNb2JpbGUgbWVudSBidXR0b24tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PiB7IHRvZ2dsZU5hdkljb24oKTsgfSB9IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIgcm91bmRlZC1tZCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctd2hpdGVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSWNvbiB3aGVuIG1lbnUgaXMgY2xvc2VkLiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVyb2ljb24gbmFtZTogb3V0bGluZS9tZW51XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnUgb3BlbjogXCJoaWRkZW5cIiwgTWVudSBjbG9zZWQ6IFwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwibWVudUNsb3NlZEljb25cIiBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJY29uIHdoZW4gbWVudSBpcyBvcGVuLiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVyb2ljb24gbmFtZTogb3V0bGluZS94XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnUgb3BlbjogXCJibG9ja1wiLCBNZW51IGNsb3NlZDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwibWVudU9wZW5JY29uXCIgY2xhc3NOYW1lPVwiaGlkZGVuIGgtNiB3LTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzbTppdGVtcy1zdHJldGNoIHNtOmp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuIGgtOCB3LWF1dG9cIiBzcmM9e2xvZ299IGFsdD1cIldvcmtmbG93XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBoLTggdy1hdXRvXCIgc3JjPXtsb2dvfSBhbHQ9XCJXb3JrZmxvd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrIHNtOm1sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwhLS0gQ3VycmVudDogXCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCIsIERlZmF1bHQ6IFwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlXCIgLS0+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwibWVudUhvbWVcIiBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwibWVudU1hbm5zY2hhZnRcIiBocmVmPVwiL21hbm5zY2hhZnRlblwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+TWFubnNjaGFmdGVuPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBpZD1cIm1lbnVHYWxsZXJ5XCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiPkdhbGxlcnk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwibWVudUthbGVuZGVyXCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiPkthbGVuZGVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHByLTIgc206c3RhdGljIHNtOmluc2V0LWF1dG8gc206bWwtNiBzbTpwci0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHAtMSByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlZpZXcgbm90aWZpY2F0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8IS0tIEhlcm9pY29uIG5hbWU6IG91dGxpbmUvYmVsbCAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImgtNiB3LTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTE1IDE3aDVsLTEuNDA1LTEuNDA1QTIuMDMyIDIuMDMyIDAgMDExOCAxNC4xNThWMTFhNi4wMDIgNi4wMDIgMCAwMC00LTUuNjU5VjVhMiAyIDAgMTAtNCAwdi4zNDFDNy42NyA2LjE2NSA2IDguMzg4IDYgMTF2My4xNTljMCAuNTM4LS4yMTQgMS4wNTUtLjU5NSAxLjQzNkw0IDE3aDVtNiAwdjFhMyAzIDAgMTEtNiAwdi0xbTYgMEg5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogIDwhLS0gUHJvZmlsZSBkcm9wZG93biAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMyByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgZmxleCB0ZXh0LXNtIHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS04MDAgZm9jdXM6cmluZy13aGl0ZVwiIGlkPVwidXNlci1tZW51XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIHVzZXIgbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC04IHctOCByb3VuZGVkLWZ1bGxcIiBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1Qcm9maWxlIGRyb3Bkb3duIHBhbmVsLCBzaG93L2hpZGUgYmFzZWQgb24gZHJvcGRvd24gc3RhdGUuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50ZXJpbmc6IFwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tOiBcInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbzogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVhdmluZzogXCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tOiBcInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbzogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yaWdpbi10b3AtcmlnaHQgYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNDggcm91bmRlZC1tZCBzaGFkb3ctbGcgcHktMSBiZy13aGl0ZSByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNVwiIHJvbGU9XCJtZW51XCIgYXJpYS1vcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgYXJpYS1sYWJlbGxlZGJ5PVwidXNlci1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMFwiIHJvbGU9XCJtZW51aXRlbVwiPllvdXIgUHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwXCIgcm9sZT1cIm1lbnVpdGVtXCI+U2V0dGluZ3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMFwiIHJvbGU9XCJtZW51aXRlbVwiPlNpZ24gb3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogXG4gICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgTW9iaWxlIG1lbnUsIHRvZ2dsZSBjbGFzc2VzIGJhc2VkIG9uIG1lbnUgc3RhdGUuXG5cbiAgICAgICAgICAgICAgICBNZW51IG9wZW46IFwiYmxvY2tcIiwgTWVudSBjbG9zZWQ6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgKi99XG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9iaWxlTWVudVwiIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgIHsvKiAgICAgIDwhLS0gQ3VycmVudDogXCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCIsIERlZmF1bHQ6IFwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlXCIgLS0+Ki99XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5EYXNoYm9hcmQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPlRlYW08L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPlByb2plY3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5DYWxlbmRhcjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==