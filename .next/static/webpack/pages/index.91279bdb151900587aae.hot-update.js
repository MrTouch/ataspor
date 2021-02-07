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
  } //useEffect hook retrieves posts on initial load.


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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      pages = _useState[0],
      setImageLinks = _useState[1]; //useEffect hook retrieves posts on initial load.


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
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Next.js + Contentful")), __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }));
}

_s(HomePage, "mazzv9ahmpqpg0LZgj3nkav2PYg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoUGFnZUVudHJpZXMiLCJnZXRFbnRyaWVzIiwiZW50cmllcyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnRUeXBlIiwibmFtZSIsImZldGNoU2V0dGluZ3NFbnRyaWVzIiwidXNlRWZmZWN0IiwiZ2V0U2V0dGluZ3MiLCJhbGxTZXR0aW5ncyIsInNldEltYWdlU2V0dGluZ3NMaW5rcyIsInVzZVN0YXRlIiwicGFnZXMiLCJzZXRJbWFnZUxpbmtzIiwiZ2V0SW1hZ2VMaW5rcyIsImFsbFBhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMkVBQUQsQ0FBUCxDQUFzQkMsWUFBdEIsQ0FBbUM7QUFDaERDLE9BQUssRUFBRUMsY0FEeUM7QUFFaERDLGFBQVcsRUFBRUQsNkNBQStDRTtBQUZaLENBQW5DLENBQWY7O0FBS0EsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBLFdBQ0hDLGdCQURHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlNQUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN3QlIsTUFBTSxDQUFDUyxVQUFQLENBQWtCO0FBQ3RDLGdDQUFnQjtBQURzQixlQUFsQixDQUR4Qjs7QUFBQTtBQUNRQyxxQkFEUjs7QUFBQSxtQkFJTUEsT0FBTyxDQUFDQyxLQUpkO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQUk0QkQsT0FBTyxDQUFDQyxLQUpwQzs7QUFBQTtBQUtFQyxxQkFBTyxDQUFDQyxHQUFSLHFDQUF5Q0MsV0FBVyxDQUFDQyxJQUFyRDs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURrQjtBQUFBO0FBQUE7O0FBQUEsV0FTSEMsb0JBVEc7QUFBQTtBQUFBLElBaUJwQjs7O0FBakJvQjtBQUFBLDZNQVNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN3QmhCLE1BQU0sQ0FBQ1MsVUFBUCxDQUFrQjtBQUN4QyxnQ0FBZ0I7QUFEd0IsZUFBbEIsQ0FEeEI7O0FBQUE7QUFDUUMscUJBRFI7O0FBQUEsbUJBSU1BLE9BQU8sQ0FBQ0MsS0FKZDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFJNEJELE9BQU8sQ0FBQ0MsS0FKcEM7O0FBQUE7QUFLRUMscUJBQU8sQ0FBQ0MsR0FBUixxQ0FBeUNDLFdBQVcsQ0FBQ0MsSUFBckQ7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FUa0I7QUFBQTtBQUFBOztBQWtCcEJFLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLFdBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsc01BQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDMEJGLG9CQUFvQixFQUQ5Qzs7QUFBQTtBQUNNRywyQkFETjtBQUVBUCx1QkFBTyxDQUFDQyxHQUFSLENBQVlNLFdBQVo7QUFDQUMscUNBQXFCLENBQUMsNkZBQUlELFdBQUwsRUFBckI7O0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBTVpELGVBQVc7QUFDZCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQWxCb0Isa0JBMkJhRyxzREFBUSxDQUFDLEVBQUQsQ0EzQnJCO0FBQUEsTUEyQlhDLEtBM0JXO0FBQUEsTUEyQkpDLGFBM0JJLGlCQTRCbEI7OztBQUNBTix5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNDTyxhQUREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdNQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3lCaEIsZ0JBQWdCLEVBRHpDOztBQUFBO0FBQ1FpQix3QkFEUjtBQUVFYix1QkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRCx1QkFBTyxDQUFDQyxHQUFSLENBQVlZLFFBQVo7QUFDQUYsNkJBQWEsQ0FBQyw2RkFBSUUsUUFBTCxFQUFiOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQU9kRCxpQkFBYTtBQUNkLEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsQ0FERixFQUlFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREY7QUFRRDs7R0EvQ1FqQixROztLQUFBQSxRO0FBaURNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MTI3OWJkYjE1MTkwMDU4N2FhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlTGluayBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlTGluaydcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbidcblxuY29uc3QgY2xpZW50ID0gcmVxdWlyZSgnY29udGVudGZ1bCcpLmNyZWF0ZUNsaWVudCh7XG4gIHNwYWNlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX1NQQUNFX0lELFxuICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU5cbn0pXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBhc3luYyBmdW5jdGlvbiBmZXRjaFBhZ2VFbnRyaWVzKCkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgICAnY29udGVudF90eXBlJzogJ3BhZ2UnXG4gICAgfSlcbiAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXNcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFNldHRpbmdzRW50cmllcygpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICdjb250ZW50X3R5cGUnOiAnc2V0dGluZ3MnXG4gICAgfSlcbiAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXNcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXG59XG5cbi8vdXNlRWZmZWN0IGhvb2sgcmV0cmlldmVzIHBvc3RzIG9uIGluaXRpYWwgbG9hZC5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U2V0dGluZ3MoKSB7XG4gICAgY29uc3QgYWxsU2V0dGluZ3MgPSBhd2FpdCBmZXRjaFNldHRpbmdzRW50cmllcygpXG4gICAgY29uc29sZS5sb2coYWxsU2V0dGluZ3MpO1xuICAgIHNldEltYWdlU2V0dGluZ3NMaW5rcyhbLi4uYWxsU2V0dGluZ3NdKVxuICAgIH1cbiAgICBnZXRTZXR0aW5ncygpXG59LCBbXSlcblxuICBjb25zdCBbcGFnZXMsIHNldEltYWdlTGlua3NdID0gdXNlU3RhdGUoW10pXG4gIC8vdXNlRWZmZWN0IGhvb2sgcmV0cmlldmVzIHBvc3RzIG9uIGluaXRpYWwgbG9hZC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRJbWFnZUxpbmtzKCkge1xuICAgICAgY29uc3QgYWxsUGFnZXMgPSBhd2FpdCBmZXRjaFBhZ2VFbnRyaWVzKClcbiAgICAgIGNvbnNvbGUubG9nKFwiYWxscGFnZXNcIilcbiAgICAgIGNvbnNvbGUubG9nKGFsbFBhZ2VzKVxuICAgICAgc2V0SW1hZ2VMaW5rcyhbLi4uYWxsUGFnZXNdKVxuICAgIH1cbiAgICBnZXRJbWFnZUxpbmtzKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OZXh0LmpzICsgQ29udGVudGZ1bDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2aWdhdGlvbj48L05hdmlnYXRpb24+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9