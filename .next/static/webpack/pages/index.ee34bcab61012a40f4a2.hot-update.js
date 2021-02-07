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

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJhY3RpdmVQYWdlIiwibG9nbyIsIm1lbnVPcGVuSWNvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51Q2xvc2VkSWNvbiIsIm1vYmlsZU1lbnUiLCJuYXZpZ2F0aW9uT3BlbiIsImlzSG9tZUFjdGl2ZSIsImlzTWFubnNjaGFmdEFjdGl2ZSIsImlzR2FsbGVyeUFjdGl2ZSIsImlzS2FsZW5kZXJBY3RpdmUiLCJ0b2dnbGVOYXZJY29uIiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsVUFBVCxPQUEwQztBQUFBLE1BQXBCQyxVQUFvQixRQUFwQkEsVUFBb0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFFdEMsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBckI7QUFDQSxNQUFNQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdkI7QUFDQSxNQUFNRSxVQUFVLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFuQjtBQUVBLE1BQUlHLGNBQWMsR0FBRyxLQUFyQjtBQUVBLE1BQUlDLFlBQVksR0FBR1IsVUFBVSxJQUFFLE1BQVosR0FBcUIsaUVBQXJCLEdBQXlGLDBDQUE1RztBQUNBLE1BQUlTLGtCQUFrQixHQUFHVCxVQUFVLElBQUUsWUFBWixHQUEyQixpRUFBM0IsR0FBK0YsMENBQXhIO0FBQ0EsTUFBSVUsZUFBZSxHQUFHVixVQUFVLElBQUUsU0FBWixHQUF3QixpRUFBeEIsR0FBNEYsMENBQWxIO0FBQ0EsTUFBSVcsZ0JBQWdCLEdBQUdYLFVBQVUsSUFBRSxVQUFaLEdBQXlCLGlFQUF6QixHQUE2RiwwQ0FBcEg7O0FBRUEsTUFBTVksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCTCxrQkFBYyxHQUFHLENBQUNBLGNBQWxCOztBQUNBLFFBQUcsQ0FBQ0EsY0FBSixFQUFtQjtBQUNmTSxhQUFPLENBQUNDLEdBQVIsQ0FBWVosWUFBWjtBQUNBQSxrQkFBWSxDQUFDYSxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixRQUEzQjtBQUNBZCxrQkFBWSxDQUFDZSxNQUFiLENBQW9CLE9BQXBCO0FBQ0FaLG9CQUFjLENBQUNVLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLE9BQTdCO0FBQ0FYLG9CQUFjLENBQUNVLFNBQWYsQ0FBeUJFLE1BQXpCLENBQWdDLFFBQWhDO0FBQ0FYLGdCQUFVLENBQUNTLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0FWLGdCQUFVLENBQUNTLFNBQVgsQ0FBcUJFLE1BQXJCLENBQTRCLE9BQTVCO0FBQ0gsS0FSRCxNQVFLO0FBQ0RmLGtCQUFZLENBQUNhLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLE9BQTNCO0FBQ0FkLGtCQUFZLENBQUNlLE1BQWIsQ0FBb0IsUUFBcEI7QUFDQVosb0JBQWMsQ0FBQ1UsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0I7QUFDQVgsb0JBQWMsQ0FBQ1UsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsT0FBaEM7QUFDQVgsZ0JBQVUsQ0FBQ1MsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsT0FBekI7QUFDQVYsZ0JBQVUsQ0FBQ1MsU0FBWCxDQUFxQkUsTUFBckIsQ0FBNEIsUUFBNUI7QUFDSDtBQUNKLEdBbEJEOztBQW9CQSxTQUNJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxpREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsdURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJO0FBQVEsV0FBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU07QUFBRU4sbUJBQWE7QUFBSyxLQUEzQztBQUE4QyxhQUFTLEVBQUMsMktBQXhEO0FBQW9PLHFCQUFjLE9BQWxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLEVBVUk7QUFBSyxNQUFFLEVBQUMsZ0JBQVI7QUFBeUIsYUFBUyxFQUFDLGVBQW5DO0FBQW1ELFNBQUssRUFBQyw0QkFBekQ7QUFBc0YsUUFBSSxFQUFDLE1BQTNGO0FBQWtHLFdBQU8sRUFBQyxXQUExRztBQUFzSCxVQUFNLEVBQUMsY0FBN0g7QUFBNEksbUJBQVksTUFBeEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sc0JBQWUsT0FBckI7QUFBNkIsdUJBQWdCLE9BQTdDO0FBQXFELG9CQUFhLEdBQWxFO0FBQXNFLEtBQUMsRUFBQyx5QkFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBVkosRUFxQkk7QUFBSyxNQUFFLEVBQUMsY0FBUjtBQUF1QixhQUFTLEVBQUMsZ0JBQWpDO0FBQWtELFNBQUssRUFBQyw0QkFBeEQ7QUFBcUYsUUFBSSxFQUFDLE1BQTFGO0FBQWlHLFdBQU8sRUFBQyxXQUF6RztBQUFxSCxVQUFNLEVBQUMsY0FBNUg7QUFBMkksbUJBQVksTUFBdko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sc0JBQWUsT0FBckI7QUFBNkIsdUJBQWdCLE9BQTdDO0FBQXFELG9CQUFhLEdBQWxFO0FBQXNFLEtBQUMsRUFBQyxzQkFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBckJKLENBSkosQ0FESixFQStCSTtBQUFLLGFBQVMsRUFBQywyRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQTRDLE9BQUcsRUFBRVgsSUFBakQ7QUFBdUQsT0FBRyxFQUFDLFVBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQTRDLE9BQUcsRUFBRUEsSUFBakQ7QUFBdUQsT0FBRyxFQUFDLFVBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFHLE1BQUUsRUFBQyxVQUFOO0FBQWlCLFFBQUksRUFBQyxHQUF0QjtBQUEwQixhQUFTLEVBQUdPLFlBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUdJO0FBQUcsTUFBRSxFQUFDLGdCQUFOO0FBQXVCLFFBQUksRUFBQyxlQUE1QjtBQUE0QyxhQUFTLEVBQUVDLGtCQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKLEVBSUk7QUFBRyxNQUFFLEVBQUMsYUFBTjtBQUFvQixRQUFJLEVBQUMsR0FBekI7QUFBNkIsYUFBUyxFQUFFQyxlQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosRUFLSTtBQUFHLE1BQUUsRUFBQyxjQUFOO0FBQXFCLFFBQUksRUFBQyxHQUExQjtBQUE4QixhQUFTLEVBQUVDLGdCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLENBREosQ0FMSixDQS9CSixFQThDSTtBQUFLLGFBQVMsRUFBQywyRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUMsNkpBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLEVBR0k7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUF5QixTQUFLLEVBQUMsNEJBQS9CO0FBQTRELFFBQUksRUFBQyxNQUFqRTtBQUF3RSxXQUFPLEVBQUMsV0FBaEY7QUFBNEYsVUFBTSxFQUFDLGNBQW5HO0FBQWtILG1CQUFZLE1BQTlIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLHNCQUFlLE9BQXJCO0FBQTZCLHVCQUFnQixPQUE3QztBQUFxRCxvQkFBYSxHQUFsRTtBQUFzRSxLQUFDLEVBQUMsK0xBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUhKLENBREosRUFVSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUMsdUlBQWxCO0FBQTBKLE1BQUUsRUFBQyxXQUE3SjtBQUF5SyxxQkFBYyxNQUF2TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQXNDLE9BQUcsRUFBQywySkFBMUM7QUFBc00sT0FBRyxFQUFDLEVBQTFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLENBREosRUFtQkk7QUFBSyxhQUFTLEVBQUMsaUhBQWY7QUFBaUksUUFBSSxFQUFDLE1BQXRJO0FBQTZJLHdCQUFpQixVQUE5SjtBQUF5Syx1QkFBZ0IsV0FBekw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUMseURBQXRCO0FBQWdGLFFBQUksRUFBQyxVQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyx5REFBdEI7QUFBZ0YsUUFBSSxFQUFDLFVBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosRUFHSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDLHlEQUF0QjtBQUFnRixRQUFJLEVBQUMsVUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixDQW5CSixDQVZKLENBOUNKLENBREosQ0FESixFQTZGSTtBQUFLLE1BQUUsRUFBQyxZQUFSO0FBQXFCLGFBQVMsRUFBQyxrQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDLHlFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBR0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyxtR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLEVBSUk7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyxtR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixFQUtJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUMsbUdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosQ0FESixDQTdGSixDQURKO0FBMEdIOztLQTNJUVosVTtBQTZJTUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWUzNGJjYWI2MTAxMmE0MGY0YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIE5hdmlnYXRpb24oeyBhY3RpdmVQYWdlLCBsb2dvIH0pIHtcblxuICAgIGNvbnN0IG1lbnVPcGVuSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudU9wZW5JY29uXCIpO1xuICAgIGNvbnN0IG1lbnVDbG9zZWRJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51Q2xvc2VkSWNvblwiKTtcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGVNZW51XCIpO1xuXG4gICAgdmFyIG5hdmlnYXRpb25PcGVuID0gZmFsc2U7XG5cbiAgICB2YXIgaXNIb21lQWN0aXZlID0gYWN0aXZlUGFnZT09XCJIb21lXCIgPyAnYmctZ3JheS05MDAgdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJyA6ICdweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJztcbiAgICB2YXIgaXNNYW5uc2NoYWZ0QWN0aXZlID0gYWN0aXZlUGFnZT09XCJNYW5uc2NoYWZ0XCIgPyAnYmctZ3JheS05MDAgdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJyA6ICdweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJztcbiAgICB2YXIgaXNHYWxsZXJ5QWN0aXZlID0gYWN0aXZlUGFnZT09XCJHYWxsZXJ5XCIgPyAnYmctZ3JheS05MDAgdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJyA6ICdweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtJztcbiAgICB2YXIgaXNLYWxlbmRlckFjdGl2ZSA9IGFjdGl2ZVBhZ2U9PVwiS2FsZW5kZXJcIiA/ICdiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0nIDogJ3B4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0nO1xuXG4gICAgY29uc3QgdG9nZ2xlTmF2SWNvbiA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdGlvbk9wZW4gPSAhbmF2aWdhdGlvbk9wZW47XG4gICAgICAgIGlmKCFuYXZpZ2F0aW9uT3Blbil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZW51T3Blbkljb24pXG4gICAgICAgICAgICBtZW51T3Blbkljb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1lbnVPcGVuSWNvbi5yZW1vdmUoXCJibG9ja1wiKTtcbiAgICAgICAgICAgIG1lbnVDbG9zZWRJY29uLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiKTtcbiAgICAgICAgICAgIG1lbnVDbG9zZWRJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IFxuICAgICAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvY2tcIik7IFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1lbnVPcGVuSWNvbi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIik7XG4gICAgICAgICAgICBtZW51T3Blbkljb24ucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgbWVudUNsb3NlZEljb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1lbnVDbG9zZWRJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJibG9ja1wiKTsgXG4gICAgICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiKTtcbiAgICAgICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTsgXG4gICAgICAgIH1cbiAgICB9XG4gICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTIgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgc206aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE1vYmlsZSBtZW51IGJ1dHRvbi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKT0+IHsgdG9nZ2xlTmF2SWNvbigpOyB9IH0gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByb3VuZGVkLW1kIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy13aGl0ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJY29uIHdoZW4gbWVudSBpcyBjbG9zZWQuIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXJvaWNvbiBuYW1lOiBvdXRsaW5lL21lbnVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudSBvcGVuOiBcImhpZGRlblwiLCBNZW51IGNsb3NlZDogXCJibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJtZW51Q2xvc2VkSWNvblwiIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEljb24gd2hlbiBtZW51IGlzIG9wZW4uIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXJvaWNvbiBuYW1lOiBvdXRsaW5lL3hcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudSBvcGVuOiBcImJsb2NrXCIsIE1lbnUgY2xvc2VkOiBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJtZW51T3Blbkljb25cIiBjbGFzc05hbWU9XCJoaWRkZW4gaC02IHctNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNtOml0ZW1zLXN0cmV0Y2ggc206anVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW4gaC04IHctYXV0b1wiIHNyYz17bG9nb30gYWx0PVwiV29ya2Zsb3dcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGgtOCB3LWF1dG9cIiBzcmM9e2xvZ299IGFsdD1cIldvcmtmbG93XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206YmxvY2sgc206bWwtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPCEtLSBDdXJyZW50OiBcImJnLWdyYXktOTAwIHRleHQtd2hpdGVcIiwgRGVmYXVsdDogXCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIiAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51SG9tZVwiIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSB7aXNIb21lQWN0aXZlfSA+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51TWFubnNjaGFmdFwiIGhyZWY9XCIvbWFubnNjaGFmdGVuXCIgY2xhc3NOYW1lPXtpc01hbm5zY2hhZnRBY3RpdmV9Pk1hbm5zY2hhZnRlbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51R2FsbGVyeVwiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtpc0dhbGxlcnlBY3RpdmV9PkdhbGxlcnk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwibWVudUthbGVuZGVyXCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzS2FsZW5kZXJBY3RpdmV9PkthbGVuZGVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHByLTIgc206c3RhdGljIHNtOmluc2V0LWF1dG8gc206bWwtNiBzbTpwci0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHAtMSByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlZpZXcgbm90aWZpY2F0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8IS0tIEhlcm9pY29uIG5hbWU6IG91dGxpbmUvYmVsbCAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImgtNiB3LTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTE1IDE3aDVsLTEuNDA1LTEuNDA1QTIuMDMyIDIuMDMyIDAgMDExOCAxNC4xNThWMTFhNi4wMDIgNi4wMDIgMCAwMC00LTUuNjU5VjVhMiAyIDAgMTAtNCAwdi4zNDFDNy42NyA2LjE2NSA2IDguMzg4IDYgMTF2My4xNTljMCAuNTM4LS4yMTQgMS4wNTUtLjU5NSAxLjQzNkw0IDE3aDVtNiAwdjFhMyAzIDAgMTEtNiAwdi0xbTYgMEg5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogIDwhLS0gUHJvZmlsZSBkcm9wZG93biAtLT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMyByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgZmxleCB0ZXh0LXNtIHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS04MDAgZm9jdXM6cmluZy13aGl0ZVwiIGlkPVwidXNlci1tZW51XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIHVzZXIgbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC04IHctOCByb3VuZGVkLWZ1bGxcIiBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1Qcm9maWxlIGRyb3Bkb3duIHBhbmVsLCBzaG93L2hpZGUgYmFzZWQgb24gZHJvcGRvd24gc3RhdGUuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50ZXJpbmc6IFwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tOiBcInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbzogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVhdmluZzogXCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tOiBcInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbzogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yaWdpbi10b3AtcmlnaHQgYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNDggcm91bmRlZC1tZCBzaGFkb3ctbGcgcHktMSBiZy13aGl0ZSByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNVwiIHJvbGU9XCJtZW51XCIgYXJpYS1vcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgYXJpYS1sYWJlbGxlZGJ5PVwidXNlci1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMFwiIHJvbGU9XCJtZW51aXRlbVwiPllvdXIgUHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwXCIgcm9sZT1cIm1lbnVpdGVtXCI+U2V0dGluZ3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMFwiIHJvbGU9XCJtZW51aXRlbVwiPlNpZ24gb3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogXG4gICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgTW9iaWxlIG1lbnUsIHRvZ2dsZSBjbGFzc2VzIGJhc2VkIG9uIG1lbnUgc3RhdGUuXG5cbiAgICAgICAgICAgICAgICBNZW51IG9wZW46IFwiYmxvY2tcIiwgTWVudSBjbG9zZWQ6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgKi99XG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9iaWxlTWVudVwiIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgIHsvKiAgICAgIDwhLS0gQ3VycmVudDogXCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCIsIERlZmF1bHQ6IFwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlXCIgLS0+Ki99XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5EYXNoYm9hcmQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPlRlYW08L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPlByb2plY3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5DYWxlbmRhcjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==