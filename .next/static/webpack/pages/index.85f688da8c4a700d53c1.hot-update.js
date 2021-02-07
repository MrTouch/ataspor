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
    _fetchPageEntries = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.getEntries({
                'content_type': 'page'
              });

            case 2:
              entries = _context2.sent;

              if (!entries.items) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchPageEntries.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      pages = _useState[0],
      setImageLinks = _useState[1]; //useEffect hook retrieves posts on initial load.


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getImageLinks() {
      return _getImageLinks.apply(this, arguments);
    }

    function _getImageLinks() {
      _getImageLinks = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var allPages;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchPageEntries();

              case 2:
                allPages = _context.sent;
                console.log("allpages");
                console.log(allPages);
                setImageLinks(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allPages));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getImageLinks.apply(this, arguments);
    }

    getImageLinks();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Next.js + Contentful")), __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
}

_s(HomePage, "AuNNG6J9wLQgm5mqUKNxY/iGLao=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoUGFnZUVudHJpZXMiLCJnZXRFbnRyaWVzIiwiZW50cmllcyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnRUeXBlIiwibmFtZSIsInVzZVN0YXRlIiwicGFnZXMiLCJzZXRJbWFnZUxpbmtzIiwidXNlRWZmZWN0IiwiZ2V0SW1hZ2VMaW5rcyIsImFsbFBhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMkVBQUQsQ0FBUCxDQUFzQkMsWUFBdEIsQ0FBbUM7QUFDaERDLE9BQUssRUFBRUMsY0FEeUM7QUFFaERDLGFBQVcsRUFBRUQsNkNBQStDRTtBQUZaLENBQW5DLENBQWY7O0FBS0EsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBLFdBQ0hDLGdCQURHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlNQUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN3QlIsTUFBTSxDQUFDUyxVQUFQLENBQWtCO0FBQ3RDLGdDQUFnQjtBQURzQixlQUFsQixDQUR4Qjs7QUFBQTtBQUNRQyxxQkFEUjs7QUFBQSxtQkFJTUEsT0FBTyxDQUFDQyxLQUpkO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQUk0QkQsT0FBTyxDQUFDQyxLQUpwQzs7QUFBQTtBQUtFQyxxQkFBTyxDQUFDQyxHQUFSLHFDQUF5Q0MsV0FBVyxDQUFDQyxJQUFyRDs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURrQjtBQUFBO0FBQUE7O0FBQUEsa0JBU2FDLHNEQUFRLENBQUMsRUFBRCxDQVRyQjtBQUFBLE1BU1hDLEtBVFc7QUFBQSxNQVNKQyxhQVRJLGlCQVVsQjs7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLGFBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUJaLGdCQUFnQixFQUR6Qzs7QUFBQTtBQUNRYSx3QkFEUjtBQUVFVCx1QkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRCx1QkFBTyxDQUFDQyxHQUFSLENBQVlRLFFBQVo7QUFDQUgsNkJBQWEsQ0FBQyw2RkFBSUcsUUFBTCxFQUFiOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQU9kRCxpQkFBYTtBQUNkLEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsQ0FERixFQUlFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREY7QUFRRDs7R0E3QlFiLFE7O0tBQUFBLFE7QUErQk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg1ZjY4OGRhOGM0YTcwMGQ1M2MxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2VMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VMaW5rJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJ1xuXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCdjb250ZW50ZnVsJykuY3JlYXRlQ2xpZW50KHtcbiAgc3BhY2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTlxufSlcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUGFnZUVudHJpZXMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgICdjb250ZW50X3R5cGUnOiAncGFnZSdcbiAgICB9KVxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYClcbiAgfVxuXG4gIGNvbnN0IFtwYWdlcywgc2V0SW1hZ2VMaW5rc10gPSB1c2VTdGF0ZShbXSlcbiAgLy91c2VFZmZlY3QgaG9vayByZXRyaWV2ZXMgcG9zdHMgb24gaW5pdGlhbCBsb2FkLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEltYWdlTGlua3MoKSB7XG4gICAgICBjb25zdCBhbGxQYWdlcyA9IGF3YWl0IGZldGNoUGFnZUVudHJpZXMoKVxuICAgICAgY29uc29sZS5sb2coXCJhbGxwYWdlc1wiKVxuICAgICAgY29uc29sZS5sb2coYWxsUGFnZXMpXG4gICAgICBzZXRJbWFnZUxpbmtzKFsuLi5hbGxQYWdlc10pXG4gICAgfVxuICAgIGdldEltYWdlTGlua3MoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5leHQuanMgKyBDb250ZW50ZnVsPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZpZ2F0aW9uPjwvTmF2aWdhdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=