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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LinkButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nvar API_URL = \"http://localhost:1337/api/auth\";\nfunction LinkButton() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)(), isConnected = ref.isConnected, address = ref.address;\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useNetwork)(), chain = ref1.chain, network = ref1.network;\n    var signMessageAsync = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSignMessage)().signMessageAsync;\n    var didAddressChange = false;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var currentAddress = localStorage.getItem(\"currentAddress\");\n        if (currentAddress !== address) {\n            localStorage.setItem(\"currentAddress\", address);\n            if (confirm(\"This address is not linked to your account, would you like to link it?\")) {\n            // do linking here\n            /// Request link message\n            /// Sign link message\n            /// Send sigs/msg to /link-account endpoint\n            }\n        }\n    }, [\n        address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        children: \"LINK\"\n    }, void 0, false, {\n        fileName: \"/Users/mattcarter/Studio/WORK/OMNI/Chapters/999/parse-server/client/components/LinkButton.js\",\n        lineNumber: 29,\n        columnNumber: 10\n    }, this);\n};\n_s(LinkButton, \"5wZYwPurtVUcFso0NPxZe1Nx/Sc=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useNetwork,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useSignMessage\n    ];\n});\n_c = LinkButton;\nvar _c;\n$RefreshReg$(_c, \"LinkButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmtCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0Q7QUFDN0I7QUFDUjtBQUUxQixJQUFNSyxPQUFPLEdBQUcsZ0NBQWdDO0FBRWpDLFNBQVNDLFVBQVUsR0FBRzs7SUFDbkMsSUFBaUNOLEdBQVksR0FBWkEsaURBQVUsRUFBRSxFQUFyQ08sV0FBVyxHQUFjUCxHQUFZLENBQXJDTyxXQUFXLEVBQUVDLE9BQU8sR0FBS1IsR0FBWSxDQUF4QlEsT0FBTztJQUM1QixJQUEyQk4sSUFBWSxHQUFaQSxpREFBVSxFQUFFLEVBQS9CTyxLQUFLLEdBQWNQLElBQVksQ0FBL0JPLEtBQUssRUFBRUMsT0FBTyxHQUFLUixJQUFZLENBQXhCUSxPQUFPO0lBQ3RCLElBQU0sZ0JBQWtCLEdBQUtULHFEQUFjLEVBQUUsQ0FBckNVLGdCQUFnQjtJQUV4QixJQUFJQyxnQkFBZ0IsR0FBRyxLQUFLO0lBRTVCVCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNVSxjQUFjLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBRTdELElBQUlGLGNBQWMsS0FBS0wsT0FBTyxFQUFFO1lBQzlCTSxZQUFZLENBQUNFLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRVIsT0FBTyxDQUFDLENBQUM7WUFFaEQsSUFBSVMsT0FBTyxDQUFDLHdFQUF3RSxDQUFDLEVBQUU7WUFDckYsa0JBQWtCO1lBQ2xCLHdCQUF3QjtZQUN4QixxQkFBcUI7WUFDckIsMkNBQTJDO2FBQzVDO1NBQ0Y7S0FDRixFQUFFO1FBQUNULE9BQU87S0FBQyxDQUFDLENBQUM7SUFFZCxxQkFBTyw4REFBQ1UsUUFBTTtrQkFBQyxNQUFJOzs7OztZQUFTLENBQUM7Q0FDOUI7R0F2QnVCWixVQUFVOztRQUNDTiw2Q0FBVTtRQUNoQkUsNkNBQVU7UUFDUkQsaURBQWM7OztBQUhyQkssS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpbmtCdXR0b24uanM/OGI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VTaWduTWVzc2FnZSwgdXNlTmV0d29yayB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9hdXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlua0J1dHRvbigpIHtcbiAgY29uc3QgeyBpc0Nvbm5lY3RlZCwgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCB7IGNoYWluLCBuZXR3b3JrIH0gPSB1c2VOZXR3b3JrKCk7XG4gIGNvbnN0IHsgc2lnbk1lc3NhZ2VBc3luYyB9ID0gdXNlU2lnbk1lc3NhZ2UoKTtcblxuICB2YXIgZGlkQWRkcmVzc0NoYW5nZSA9IGZhbHNlO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFkZHJlc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudEFkZHJlc3MnKTtcblxuICAgIGlmIChjdXJyZW50QWRkcmVzcyAhPT0gYWRkcmVzcykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRBZGRyZXNzJywgYWRkcmVzcyk7XG5cbiAgICAgIGlmIChjb25maXJtKCdUaGlzIGFkZHJlc3MgaXMgbm90IGxpbmtlZCB0byB5b3VyIGFjY291bnQsIHdvdWxkIHlvdSBsaWtlIHRvIGxpbmsgaXQ/JykpIHtcbiAgICAgICAgLy8gZG8gbGlua2luZyBoZXJlXG4gICAgICAgIC8vLyBSZXF1ZXN0IGxpbmsgbWVzc2FnZVxuICAgICAgICAvLy8gU2lnbiBsaW5rIG1lc3NhZ2VcbiAgICAgICAgLy8vIFNlbmQgc2lncy9tc2cgdG8gL2xpbmstYWNjb3VudCBlbmRwb2ludFxuICAgICAgfVxuICAgIH1cbiAgfSwgW2FkZHJlc3NdKTtcblxuICByZXR1cm4gPGJ1dHRvbj5MSU5LPC9idXR0b24+O1xufVxuIl0sIm5hbWVzIjpbInVzZUFjY291bnQiLCJ1c2VTaWduTWVzc2FnZSIsInVzZU5ldHdvcmsiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkFQSV9VUkwiLCJMaW5rQnV0dG9uIiwiaXNDb25uZWN0ZWQiLCJhZGRyZXNzIiwiY2hhaW4iLCJuZXR3b3JrIiwic2lnbk1lc3NhZ2VBc3luYyIsImRpZEFkZHJlc3NDaGFuZ2UiLCJjdXJyZW50QWRkcmVzcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiY29uZmlybSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LinkButton.js\n"));

/***/ })

});