"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./components/LinkButton.js":
/*!**********************************!*\
  !*** ./components/LinkButton.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LinkButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nvar API_URL = \"http://localhost:1337/api/auth\";\nfunction LinkButton() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)(), isConnected = ref.isConnected, address = ref.address;\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useNetwork)(), chain = ref1.chain, network = ref1.network;\n    var signMessageAsync = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSignMessage)().signMessageAsync;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var currentAddress = localStorage.getItem(\"currentAddress\");\n        if (currentAddress !== address) {\n            localStorage.setItem(\"currentAddress\", address);\n            if (confirm(\"This address is not linked to your account, would you like to link it?\")) {\n            // do linking here\n            /// Request link message\n            /// Sign link message\n            /// Send sigs/msg to /link-account endpoint\n            }\n        }\n    }, [\n        address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        children: \"LINK\"\n    }, void 0, false, {\n        fileName: \"/Users/mattcarter/Studio/WORK/OMNI/Chapters/999/parse-server/client/components/LinkButton.js\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n};\n_s(LinkButton, \"5wZYwPurtVUcFso0NPxZe1Nx/Sc=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useNetwork,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useSignMessage\n    ];\n});\n_c = LinkButton;\nvar _c;\n$RefreshReg$(_c, \"LinkButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmtCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0Q7QUFDN0I7QUFDUjtBQUUxQixJQUFNSyxPQUFPLEdBQUcsZ0NBQWdDO0FBRWpDLFNBQVNDLFVBQVUsR0FBRzs7SUFDbkMsSUFBaUNOLEdBQVksR0FBWkEsaURBQVUsRUFBRSxFQUFyQ08sV0FBVyxHQUFjUCxHQUFZLENBQXJDTyxXQUFXLEVBQUVDLE9BQU8sR0FBS1IsR0FBWSxDQUF4QlEsT0FBTztJQUM1QixJQUEyQk4sSUFBWSxHQUFaQSxpREFBVSxFQUFFLEVBQS9CTyxLQUFLLEdBQWNQLElBQVksQ0FBL0JPLEtBQUssRUFBRUMsT0FBTyxHQUFLUixJQUFZLENBQXhCUSxPQUFPO0lBQ3RCLElBQU0sZ0JBQWtCLEdBQUtULHFEQUFjLEVBQUUsQ0FBckNVLGdCQUFnQjtJQUV4QlIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTVMsY0FBYyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUU3RCxJQUFJRixjQUFjLEtBQUtKLE9BQU8sRUFBRTtZQUM5QkssWUFBWSxDQUFDRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUVQLE9BQU8sQ0FBQyxDQUFDO1lBRWhELElBQUlRLE9BQU8sQ0FBQyx3RUFBd0UsQ0FBQyxFQUFFO1lBQ3JGLGtCQUFrQjtZQUNsQix3QkFBd0I7WUFDeEIscUJBQXFCO1lBQ3JCLDJDQUEyQzthQUM1QztTQUNGO0tBQ0YsRUFBRTtRQUFDUixPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBRWQscUJBQU8sOERBQUNTLFFBQU07a0JBQUMsTUFBSTs7Ozs7WUFBUyxDQUFDO0NBQzlCO0dBckJ1QlgsVUFBVTs7UUFDQ04sNkNBQVU7UUFDaEJFLDZDQUFVO1FBQ1JELGlEQUFjOzs7QUFIckJLLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5rQnV0dG9uLmpzPzhiOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlU2lnbk1lc3NhZ2UsIHVzZU5ldHdvcmsgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvYXV0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmtCdXR0b24oKSB7XG4gIGNvbnN0IHsgaXNDb25uZWN0ZWQsIGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgeyBjaGFpbiwgbmV0d29yayB9ID0gdXNlTmV0d29yaygpO1xuICBjb25zdCB7IHNpZ25NZXNzYWdlQXN5bmMgfSA9IHVzZVNpZ25NZXNzYWdlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50QWRkcmVzcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50QWRkcmVzcycpO1xuXG4gICAgaWYgKGN1cnJlbnRBZGRyZXNzICE9PSBhZGRyZXNzKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudEFkZHJlc3MnLCBhZGRyZXNzKTtcblxuICAgICAgaWYgKGNvbmZpcm0oJ1RoaXMgYWRkcmVzcyBpcyBub3QgbGlua2VkIHRvIHlvdXIgYWNjb3VudCwgd291bGQgeW91IGxpa2UgdG8gbGluayBpdD8nKSkge1xuICAgICAgICAvLyBkbyBsaW5raW5nIGhlcmVcbiAgICAgICAgLy8vIFJlcXVlc3QgbGluayBtZXNzYWdlXG4gICAgICAgIC8vLyBTaWduIGxpbmsgbWVzc2FnZVxuICAgICAgICAvLy8gU2VuZCBzaWdzL21zZyB0byAvbGluay1hY2NvdW50IGVuZHBvaW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbYWRkcmVzc10pO1xuXG4gIHJldHVybiA8YnV0dG9uPkxJTks8L2J1dHRvbj47XG59XG4iXSwibmFtZXMiOlsidXNlQWNjb3VudCIsInVzZVNpZ25NZXNzYWdlIiwidXNlTmV0d29yayIsInVzZUVmZmVjdCIsImF4aW9zIiwiQVBJX1VSTCIsIkxpbmtCdXR0b24iLCJpc0Nvbm5lY3RlZCIsImFkZHJlc3MiLCJjaGFpbiIsIm5ldHdvcmsiLCJzaWduTWVzc2FnZUFzeW5jIiwiY3VycmVudEFkZHJlc3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImNvbmZpcm0iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LinkButton.js\n"));

/***/ })

});