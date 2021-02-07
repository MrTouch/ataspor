webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_imageLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/imageLink */ "./components/imageLink.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navigation */ "./components/navigation.js");




var _jsxFileName = "/home/aytac/repos/ataspor/pages/index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "vo9kunri3hbj",
  accessToken: "HY-RxC3V-rliPNV-AasprOVxu5GwtlGR3cKDDuPoWsM"
});

function HomePage() {
  _s();

  var _this = this;

  function fetchPageEntries() {
    return _fetchPageEntries.apply(this, arguments);
  }

  function _fetchPageEntries() {
    _fetchPageEntries = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client.getEntries({
                'content_type': 'page'
              });

            case 2:
              entries = _context3.sent;

              if (!entries.items) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _fetchPageEntries.apply(this, arguments);
  }

  function fetchSettingsEntries() {
    return _fetchSettingsEntries.apply(this, arguments);
  }

  function _fetchSettingsEntries() {
    _fetchSettingsEntries = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return client.getEntries({
                'content_type': 'settings'
              });

            case 2:
              entries = _context4.sent;

              if (!entries.items) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _fetchSettingsEntries.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      settings = _useState[0],
      setImageSettingsLinks = _useState[1]; //useEffect hook retrieves posts on initial load.


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getSettings() {
      return _getSettings.apply(this, arguments);
    }

    function _getSettings() {
      _getSettings = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var allSettings;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchSettingsEntries();

              case 2:
                allSettings = _context.sent;
                console.log(allSettings);
                setImageSettingsLinks(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allSettings));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getSettings.apply(this, arguments);
    }

    getSettings();
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      pages = _useState2[0],
      setImageLinks = _useState2[1]; //useEffect hook retrieves posts on initial load.


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getImageLinks() {
      return _getImageLinks.apply(this, arguments);
    }

    function _getImageLinks() {
      _getImageLinks = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var allPages;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetchPageEntries();

              case 2:
                allPages = _context2.sent;
                console.log("allpages");
                console.log(allPages);
                setImageLinks(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allPages));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _getImageLinks.apply(this, arguments);
    }

    getImageLinks();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, "Next.js + Contentful")), console.log("settings 2", settings), settings.length > 0 ? settings.map(function (p) {
    return __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
      active: "home",
      logo: p.fields.logo.fields.file.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 12
      }
    });
  }) : null);
}

_s(HomePage, "xc164Z1nh+hklXZEIV7nhXp0iOQ=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoUGFnZUVudHJpZXMiLCJnZXRFbnRyaWVzIiwiZW50cmllcyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnRUeXBlIiwibmFtZSIsImZldGNoU2V0dGluZ3NFbnRyaWVzIiwidXNlU3RhdGUiLCJzZXR0aW5ncyIsInNldEltYWdlU2V0dGluZ3NMaW5rcyIsInVzZUVmZmVjdCIsImdldFNldHRpbmdzIiwiYWxsU2V0dGluZ3MiLCJwYWdlcyIsInNldEltYWdlTGlua3MiLCJnZXRJbWFnZUxpbmtzIiwiYWxsUGFnZXMiLCJsZW5ndGgiLCJtYXAiLCJwIiwiZmllbGRzIiwibG9nbyIsImZpbGUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQywyRUFBRCxDQUFQLENBQXNCQyxZQUF0QixDQUFtQztBQUNoREMsT0FBSyxFQUFFQyxjQUR5QztBQUVoREMsYUFBVyxFQUFFRCw2Q0FBK0NFO0FBRlosQ0FBbkMsQ0FBZjs7QUFLQSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsV0FDSEMsZ0JBREc7QUFBQTtBQUFBOztBQUFBO0FBQUEseU1BQ2xCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3dCUixNQUFNLENBQUNTLFVBQVAsQ0FBa0I7QUFDdEMsZ0NBQWdCO0FBRHNCLGVBQWxCLENBRHhCOztBQUFBO0FBQ1FDLHFCQURSOztBQUFBLG1CQUlNQSxPQUFPLENBQUNDLEtBSmQ7QUFBQTtB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YjkzY2Q1Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZUxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZUxpbmsnXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24nXG5cbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKS5jcmVhdGVDbGllbnQoe1xuICBzcGFjZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOXG59KVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQYWdlRW50cmllcygpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICAgJ2NvbnRlbnRfdHlwZSc6ICdwYWdlJ1xuICAgIH0pXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hTZXR0aW5nc0VudHJpZXMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAnY29udGVudF90eXBlJzogJ3NldHRpbmdzJ1xuICAgIH0pXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxufVxuXG5jb25zdCBbc2V0dGluZ3MsIHNldEltYWdlU2V0dGluZ3NMaW5rc10gPSB1c2VTdGF0ZShbXSlcbi8vdXNlRWZmZWN0IGhvb2sgcmV0cmlldmVzIHBvc3RzIG9uIGluaXRpYWwgbG9hZC5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U2V0dGluZ3MoKSB7XG4gICAgY29uc3QgYWxsU2V0dGluZ3MgPSBhd2FpdCBmZXRjaFNldHRpbmdzRW50cmllcygpXG4gICAgY29uc29sZS5sb2coYWxsU2V0dGluZ3MpO1xuICAgIHNldEltYWdlU2V0dGluZ3NMaW5rcyhbLi4uYWxsU2V0dGluZ3NdKVxuICAgIH1cbiAgICBnZXRTZXR0aW5ncygpXG59LCBbXSlcblxuICBjb25zdCBbcGFnZXMsIHNldEltYWdlTGlua3NdID0gdXNlU3RhdGUoW10pXG4gIC8vdXNlRWZmZWN0IGhvb2sgcmV0cmlldmVzIHBvc3RzIG9uIGluaXRpYWwgbG9hZC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRJbWFnZUxpbmtzKCkge1xuICAgICAgY29uc3QgYWxsUGFnZXMgPSBhd2FpdCBmZXRjaFBhZ2VFbnRyaWVzKClcbiAgICAgIGNvbnNvbGUubG9nKFwiYWxscGFnZXNcIilcbiAgICAgIGNvbnNvbGUubG9nKGFsbFBhZ2VzKVxuICAgICAgc2V0SW1hZ2VMaW5rcyhbLi4uYWxsUGFnZXNdKVxuICAgIH1cbiAgICBnZXRJbWFnZUxpbmtzKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OZXh0LmpzICsgQ29udGVudGZ1bDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7Y29uc29sZS5sb2coXCJzZXR0aW5ncyAyXCIsc2V0dGluZ3MpfXtcbiAgICAgICAgc2V0dGluZ3MubGVuZ3RoID4gMFxuICAgICAgICA/IHNldHRpbmdzLm1hcChwID0+IChcbiAgICAgICAgICAgPE5hdmlnYXRpb24gYWN0aXZlPVwiaG9tZVwiIGxvZ289e3AuZmllbGRzLmxvZ28uZmllbGRzLmZpbGUudXJsfSA+PC9OYXZpZ2F0aW9uPlxuICAgICAgICAgICkpXG4gICAgICAgIDogbnVsbH1cbiAgICAgIFxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==