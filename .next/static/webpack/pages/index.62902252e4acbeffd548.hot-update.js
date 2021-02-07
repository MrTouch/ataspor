webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
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
    _fetchPageEntries = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
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
  } //const [settings, setImageSettingsLinks] = useState([])
  //useEffect hook retrieves posts on initial load.


  function _fetchSettingsEntries() {
    _fetchSettingsEntries = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
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
      _getSettings = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var allSettings;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchSettingsEntries();

              case 2:
                allSettings = _context.sent;
                console.log(allSettings); //setImageSettingsLinks([...allSettings])

              case 4:
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
      _getImageLinks = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var allPages;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetchPageEntries();

              case 2:
                allPages = _context2.sent;
                console.log("allpages");
                console.log(allPages);
                setImageLinks(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allPages));

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
  }, "Next.js + Contentful")), __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoUGFnZUVudHJpZXMiLCJnZXRFbnRyaWVzIiwiZW50cmllcyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnRUeXBlIiwibmFtZSIsImZldGNoU2V0dGluZ3NFbnRyaWVzIiwidXNlRWZmZWN0IiwiZ2V0U2V0dGluZ3MiLCJhbGxTZXR0aW5ncyIsInVzZVN0YXRlIiwicGFnZXMiLCJzZXRJbWFnZUxpbmtzIiwiZ2V0SW1hZ2VMaW5rcyIsImFsbFBhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMkVBQUQsQ0FBUCxDQUFzQkMsWUFBdEIsQ0FBbUM7QUFDaERDLE9BQUssRUFBRUMsY0FEeUM7QUFFaERDLGFBQVcsRUFBRUQsNkNBQStDRTtBQUZaLENBQW5DLENBQWY7O0FBS0EsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBLFdBQ0hDLGdCQURHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlNQUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN3QlIsTUFBTSxDQUFDUyxVQUFQLENBQWtCO0FBQ3RDLGdDQUFnQjtBQURzQixlQUFsQixDQUR4Qjs7QUFBQTtBQUNRQyxxQkFEUjs7QUFBQSxtQkFJTUEsT0FBTyxDQUFDQyxLQUpkO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQUk0QkQsT0FBTyxDQUFDQyxLQUpwQzs7QUFBQTtBQUtFQyxxQkFBTyxDQUFDQyxHQUFSLHFDQUF5Q0MsV0FBVyxDQUFDQyxJQUFyRDs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURrQjtBQUFBO0FBQUE7O0FBQUEsV0FTSEMsb0JBVEc7QUFBQTtBQUFBLElBaUJwQjtBQUNBOzs7QUFsQm9CO0FBQUEsNk1BU2xCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3dCaEIsTUFBTSxDQUFDUyxVQUFQLENBQWtCO0FBQ3hDLGdDQUFnQjtBQUR3QixlQUFsQixDQUR4Qjs7QUFBQTtBQUNRQyxxQkFEUjs7QUFBQSxtQkFJTUEsT0FBTyxDQUFDQyxLQUpkO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQUk0QkQsT0FBTyxDQUFDQyxLQUpwQzs7QUFBQTtBQUtFQyxxQkFBTyxDQUFDQyxHQUFSLHFDQUF5Q0MsV0FBVyxDQUFDQyxJQUFyRDs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVRrQjtBQUFBO0FBQUE7O0FBbUJwQkUseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR0MsV0FESDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxzTUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUMwQkYsb0JBQW9CLEVBRDlDOztBQUFBO0FBQ01HLDJCQUROO0FBRUFQLHVCQUFPLENBQUNDLEdBQVIsQ0FBWU0sV0FBWixFQUZBLENBR0E7O0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBTVpELGVBQVc7QUFDZCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQW5Cb0Isa0JBNEJhRSxzREFBUSxDQUFDLEVBQUQsQ0E1QnJCO0FBQUEsTUE0QlhDLEtBNUJXO0FBQUEsTUE0QkpDLGFBNUJJLGlCQTZCbEI7OztBQUNBTCx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNDTSxhQUREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdNQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3lCZixnQkFBZ0IsRUFEekM7O0FBQUE7QUFDUWdCLHdCQURSO0FBRUVaLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0FELHVCQUFPLENBQUNDLEdBQVIsQ0FBWVcsUUFBWjtBQUNBRiw2QkFBYSxDQUFDLDZGQUFJRSxRQUFMLEVBQWI7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYztBQUFBO0FBQUE7O0FBT2RELGlCQUFhO0FBQ2QsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQURGLEVBSUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQVFEOztHQWhEUWhCLFE7O0tBQUFBLFE7QUFrRE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYyOTAyMjUyZTRhY2JlZmZkNTQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2VMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VMaW5rJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJ1xuXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCdjb250ZW50ZnVsJykuY3JlYXRlQ2xpZW50KHtcbiAgc3BhY2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTlxufSlcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUGFnZUVudHJpZXMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgICdjb250ZW50X3R5cGUnOiAncGFnZSdcbiAgICB9KVxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYClcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoU2V0dGluZ3NFbnRyaWVzKCkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgJ2NvbnRlbnRfdHlwZSc6ICdzZXR0aW5ncydcbiAgICB9KVxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYClcbn1cblxuLy9jb25zdCBbc2V0dGluZ3MsIHNldEltYWdlU2V0dGluZ3NMaW5rc10gPSB1c2VTdGF0ZShbXSlcbi8vdXNlRWZmZWN0IGhvb2sgcmV0cmlldmVzIHBvc3RzIG9uIGluaXRpYWwgbG9hZC5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U2V0dGluZ3MoKSB7XG4gICAgY29uc3QgYWxsU2V0dGluZ3MgPSBhd2FpdCBmZXRjaFNldHRpbmdzRW50cmllcygpXG4gICAgY29uc29sZS5sb2coYWxsU2V0dGluZ3MpO1xuICAgIC8vc2V0SW1hZ2VTZXR0aW5nc0xpbmtzKFsuLi5hbGxTZXR0aW5nc10pXG4gICAgfVxuICAgIGdldFNldHRpbmdzKClcbn0sIFtdKVxuXG4gIGNvbnN0IFtwYWdlcywgc2V0SW1hZ2VMaW5rc10gPSB1c2VTdGF0ZShbXSlcbiAgLy91c2VFZmZlY3QgaG9vayByZXRyaWV2ZXMgcG9zdHMgb24gaW5pdGlhbCBsb2FkLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEltYWdlTGlua3MoKSB7XG4gICAgICBjb25zdCBhbGxQYWdlcyA9IGF3YWl0IGZldGNoUGFnZUVudHJpZXMoKVxuICAgICAgY29uc29sZS5sb2coXCJhbGxwYWdlc1wiKVxuICAgICAgY29uc29sZS5sb2coYWxsUGFnZXMpXG4gICAgICBzZXRJbWFnZUxpbmtzKFsuLi5hbGxQYWdlc10pXG4gICAgfVxuICAgIGdldEltYWdlTGlua3MoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5leHQuanMgKyBDb250ZW50ZnVsPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZpZ2F0aW9uPjwvTmF2aWdhdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=