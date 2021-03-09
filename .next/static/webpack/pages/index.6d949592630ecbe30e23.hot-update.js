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
/* harmony import */ var _components_bigImageTeaser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/bigImageTeaser */ "./components/bigImageTeaser.js");
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

  function fetchSettingsEntries() {
    return _fetchSettingsEntries.apply(this, arguments);
  }

  function _fetchSettingsEntries() {
    _fetchSettingsEntries = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client.getEntries({
                'content_type': 'settings'
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
    return _fetchSettingsEntries.apply(this, arguments);
  }

  function fetchBigImageTeasers() {
    return _fetchBigImageTeasers.apply(this, arguments);
  }

  function _fetchBigImageTeasers() {
    _fetchBigImageTeasers = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var bigImageTeasers;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return client.getEntries({
                'content_type': 'bigImageTeaser'
              });

            case 2:
              bigImageTeasers = _context4.sent;

              if (!bigImageTeasers.items) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", bigImageTeasers.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _fetchBigImageTeasers.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      settings = _useState[0],
      setImageSettingsLinks = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      bigImageTeasers = _useState2[0],
      setBigImageTeasers = _useState2[1]; //useEffect hook retrieves posts on initial load.


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

    function getBigImageTeasers() {
      return _getBigImageTeasers.apply(this, arguments);
    }

    function _getBigImageTeasers() {
      _getBigImageTeasers = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var allBigImageTeasers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetchBigImageTeasers();

              case 2:
                allBigImageTeasers = _context2.sent;
                console.log('allbigimageteasers', allBigImageTeasers);
                setBigImageTeasers(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allBigImageTeasers));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _getBigImageTeasers.apply(this, arguments);
    }

    getBigImageTeasers();
    getSettings();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Ataspor")), settings.length > 0 ? settings.map(function (p) {
    return __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
      activePage: "Home",
      logo: p.fields.logo.fields.file.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 12
      }
    });
  }) : null, bigImageTeasers.length > 0 ? bigImageTeasers.map(function (bIT) {
    return __jsx(_components_bigImageTeaser__WEBPACK_IMPORTED_MODULE_5__["default"], {
      displayTitle: bIT.fields.displayTitle,
      image: bIT.fields.image.fields.file.url,
      url: bIT.fields.url,
      description: bIT.fields.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 10
      }
    });
  }) : null);
}

_s(HomePage, "k6jX0NPQsHKIkYYFvw1itApJT9w=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoU2V0dGluZ3NFbnRyaWVzIiwiZ2V0RW50cmllcyIsImVudHJpZXMiLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50VHlwZSIsIm5hbWUiLCJmZXRjaEJpZ0ltYWdlVGVhc2VycyIsImJpZ0ltYWdlVGVhc2VycyIsInVzZVN0YXRlIiwic2V0dGluZ3MiLCJzZXRJbWFnZVNldHRpbmdzTGlua3MiLCJzZXRCaWdJbWFnZVRlYXNlcnMiLCJ1c2VFZmZlY3QiLCJnZXRTZXR0aW5ncyIsImFsbFNldHRpbmdzIiwiZ2V0QmlnSW1hZ2VUZWFzZXJzIiwiYWxsQmlnSW1hZ2VUZWFzZXJzIiwibGVuZ3RoIiwibWFwIiwicCIsImZpZWxkcyIsImxvZ28iLCJmaWxlIiwidXJsIiwiYklUIiwiZGlzcGxheVRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDJFQUFELENBQVAsQ0FBc0JDLFlBQXRCLENBQW1DO0FBQ2hEQyxPQUFLLEVBQUVDLGNBRHlDO0FBRWhEQyxhQUFXLEVBQUVELDZDQUErQ0U7QUFGWixDQUFuQyxDQUFmOztBQUtBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxXQUVIQyxvQkFGRztBQUFBO0FBQUE7O0FBQUE7QUFBQSw2TUFFbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDd0JSLE1BQU0sQ0FBQ1MsVUFBUCxDQUFrQjtBQUN0Qyxn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SixDQUFXSyxZQUF6QztBQUF1RCxXQUFLLEVBQUVELEdBQUcsQ0FBQ0osTUFBSixDQUFXTSxLQUFYLENBQWlCTixNQUFqQixDQUF3QkUsSUFBeEIsQ0FBNkJDLEdBQTNGO0FBQWdHLFNBQUcsRUFBRUMsR0FBRyxDQUFDSixNQUFKLENBQVdHLEdBQWhIO0FBQXFILGlCQUFXLEVBQUVDLEdBQUcsQ0FBQ0osTUFBSixDQUFXTyxXQUE3STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRHdCO0FBQUEsR0FBdkIsQ0FERixHQUlFLElBaEJOLENBREY7QUF1QkQ7O0dBakVROUIsUTs7S0FBQUEsUTtBQW1FTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmQ5NDk1OTI2MzBlY2JlMzBlMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBCaWdJbWFnZVRlYXNlciBmcm9tICcuLi9jb21wb25lbnRzL2JpZ0ltYWdlVGVhc2VyJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJ1xuXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCdjb250ZW50ZnVsJykuY3JlYXRlQ2xpZW50KHtcbiAgc3BhY2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTlxufSlcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hTZXR0aW5nc0VudHJpZXMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgICdjb250ZW50X3R5cGUnOiAnc2V0dGluZ3MnXG4gICAgfSlcbiAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXNcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXG4gIH1cbiAgXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoQmlnSW1hZ2VUZWFzZXJzKCkge1xuICAgIGNvbnN0IGJpZ0ltYWdlVGVhc2VycyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgICdjb250ZW50X3R5cGUnOiAnYmlnSW1hZ2VUZWFzZXInXG4gICAgfSlcbiAgICBpZiAoYmlnSW1hZ2VUZWFzZXJzLml0ZW1zKSByZXR1cm4gYmlnSW1hZ2VUZWFzZXJzLml0ZW1zXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxuICB9XG5cbiAgY29uc3QgW3NldHRpbmdzLCBzZXRJbWFnZVNldHRpbmdzTGlua3NdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtiaWdJbWFnZVRlYXNlcnMsIHNldEJpZ0ltYWdlVGVhc2Vyc10gPSB1c2VTdGF0ZShbXSlcblxuICAvL3VzZUVmZmVjdCBob29rIHJldHJpZXZlcyBwb3N0cyBvbiBpbml0aWFsIGxvYWQuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNldHRpbmdzKCkge1xuICAgICAgICBjb25zdCBhbGxTZXR0aW5ncyA9IGF3YWl0IGZldGNoU2V0dGluZ3NFbnRyaWVzKClcbiAgICAgICAgY29uc29sZS5sb2coYWxsU2V0dGluZ3MpO1xuICAgICAgICBzZXRJbWFnZVNldHRpbmdzTGlua3MoWy4uLmFsbFNldHRpbmdzXSlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0QmlnSW1hZ2VUZWFzZXJzKCkge1xuICAgICAgICBjb25zdCBhbGxCaWdJbWFnZVRlYXNlcnMgPSBhd2FpdCBmZXRjaEJpZ0ltYWdlVGVhc2VycygpXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGxiaWdpbWFnZXRlYXNlcnMnLCBhbGxCaWdJbWFnZVRlYXNlcnMpO1xuICAgICAgICBzZXRCaWdJbWFnZVRlYXNlcnMoWy4uLmFsbEJpZ0ltYWdlVGVhc2Vyc10pXG4gICAgICB9XG5cbiAgICAgIGdldEJpZ0ltYWdlVGVhc2VycygpXG4gICAgICBnZXRTZXR0aW5ncygpXG5cbiAgfSwgW10pXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkF0YXNwb3I8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICB7XG4gICAgICAgIHNldHRpbmdzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBzZXR0aW5ncy5tYXAocCA9PiAoXG4gICAgICAgICAgIDxOYXZpZ2F0aW9uIGFjdGl2ZVBhZ2U9XCJIb21lXCIgbG9nbz17cC5maWVsZHMubG9nby5maWVsZHMuZmlsZS51cmx9PjwvTmF2aWdhdGlvbj5cbiAgICAgICAgICApKVxuICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgYmlnSW1hZ2VUZWFzZXJzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBiaWdJbWFnZVRlYXNlcnMubWFwKGJJVCA9PiAoXG4gICAgICAgICA8QmlnSW1hZ2VUZWFzZXIgZGlzcGxheVRpdGxlPXtiSVQuZmllbGRzLmRpc3BsYXlUaXRsZX0gaW1hZ2U9e2JJVC5maWVsZHMuaW1hZ2UuZmllbGRzLmZpbGUudXJsfSB1cmw9e2JJVC5maWVsZHMudXJsfSBkZXNjcmlwdGlvbj17YklULmZpZWxkcy5kZXNjcmlwdGlvbn0+PC9CaWdJbWFnZVRlYXNlcj5cbiAgICAgICAgKSlcbiAgICAgICAgOiBudWxsXG4gICAgICB9XG5cbiAgICAgIFxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==