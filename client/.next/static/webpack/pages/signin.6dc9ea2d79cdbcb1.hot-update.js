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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LinkButton; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar API_URL = \"http://localhost:1337/api/auth\";\nvar performLink = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(address, chain, uid) {\n        var linkData;\n        return _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    linkData = {\n                        network: \"evm\",\n                        address: \"0x0c01624e6D74132b5571Ee8a6A2dE63fbe7d20b7\",\n                        uid: uid\n                    };\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"\".concat(API_URL, \"/link-account\"), linkData, {\n                        headers: {\n                            \"content-type\": \"application/json\"\n                        }\n                    });\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function performLink(address, chain, uid) {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction LinkButton() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(), isConnected = ref.isConnected, address = ref.address;\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useNetwork)(), chain = ref1.chain, network = ref1.network;\n    var signMessageAsync = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage)().signMessageAsync;\n    var drawButton = false;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var currentAddress = localStorage.getItem(\"currentAddress\");\n        var currentUid = localStorage.getItem(\"currentUid\");\n        var doLink = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(uid) {\n                var userData, data, message, signature, sigData, resp, user;\n                return _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            userData = {\n                                address: address,\n                                chain: chain.id,\n                                network: \"evm\"\n                            };\n                            _ctx.next = 3;\n                            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"\".concat(API_URL, \"/request-message\"), userData, {\n                                headers: {\n                                    \"content-type\": \"application/json\"\n                                }\n                            });\n                        case 3:\n                            data = _ctx.sent.data;\n                            message = data.message;\n                            _ctx.next = 7;\n                            return signMessageAsync({\n                                message: message\n                            });\n                        case 7:\n                            signature = _ctx.sent;\n                            sigData = {\n                                network: \"evm\",\n                                signature: signature,\n                                message: message,\n                                address: address,\n                                uid: uid\n                            };\n                            //network: string;\n                            signature: string;\n                            message: string;\n                            address: string;\n                            uid: string;\n                            _ctx.next = 15;\n                            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"\".concat(API_URL, \"/link-account\"), sigData, {\n                                headers: {\n                                    \"content-type\": \"application/json\"\n                                }\n                            });\n                        case 15:\n                            resp = _ctx.sent;\n                            user = resp.data.user;\n                            console.log(\"user\", user);\n                        case 18:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function doLink(uid) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (currentAddress !== address) {\n            localStorage.setItem(\"currentAddress\", address);\n            console.log(\"account switched to \".concat(address));\n            if (confirm(\"This address is not linked to your account, would you like to link it?\") && currentUid) {\n                doLink(currentUid);\n            //   do linking here\n            // Request link message\n            //   / Sign link message\n            //   / Send sigs/msg to /link-account endpoint\n            }\n        }\n    }, [\n        address\n    ]);\n    return;\n};\n_s(LinkButton, \"5wZYwPurtVUcFso0NPxZe1Nx/Sc=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useNetwork,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage\n    ];\n});\n_c = LinkButton;\nvar _c;\n$RefreshReg$(_c, \"LinkButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFc0IsT0FBTyxFQUFFO2dDQUNoRWQsT0FBTyxFQUFFO29DQUNQLGNBQWMsRUFBRSxrQkFBa0I7aUNBQ25DOzZCQUNGLENBQUM7OzRCQUpJZSxJQUFJLFlBSVI7NEJBRUlDLElBQUksR0FBR0QsSUFBSSxDQUFDSixJQUFJLENBQUNLLElBQUksQ0FBQzs0QkFDNUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUosSUFBSSxDQUFDLENBQUM7Ozs7OzthQUMzQjs0QkFwQ0tQLE1BQU0sQ0FBVWIsR0FBRzs7O1dBb0N4QjtRQUVELElBQUlTLGNBQWMsS0FBS1gsT0FBTyxFQUFFO1lBQzlCWSxZQUFZLENBQUNlLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTNCLE9BQU8sQ0FBQyxDQUFDO1lBQ2hEeUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXFCLENBQVUsT0FBUjFCLE9BQU8sQ0FBRSxDQUFDLENBQUM7WUFFOUMsSUFBSTRCLE9BQU8sQ0FBQyx3RUFBd0UsQ0FBQyxJQUFJZCxVQUFVLEVBQUU7Z0JBQ25HQyxNQUFNLENBQUNELFVBQVUsQ0FBQyxDQUFDO1lBQ25CLG9CQUFvQjtZQUNwQix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLDhDQUE4QzthQUMvQztTQUNGO0tBQ0YsRUFBRTtRQUFDZCxPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBRWQsT0FBTztDQUNSO0dBaEV1Qk8sVUFBVTs7UUFDQ2QsNkNBQVU7UUFDaEJFLDZDQUFVO1FBQ1JELGlEQUFjOzs7QUFIckJhLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5rQnV0dG9uLmpzPzhiOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlU2lnbk1lc3NhZ2UsIHVzZU5ldHdvcmsgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvYXV0aCc7XG5cbmNvbnN0IHBlcmZvcm1MaW5rID0gYXN5bmMgKGFkZHJlc3MsIGNoYWluLCB1aWQpID0+IHtcbiAgLy8vIGxpbmsgdG8gdXNlclxuICBjb25zdCBsaW5rRGF0YSA9IHtcbiAgICBuZXR3b3JrOiAnZXZtJyxcbiAgICBhZGRyZXNzOiAnMHgwYzAxNjI0ZTZENzQxMzJiNTU3MUVlOGE2QTJkRTYzZmJlN2QyMGI3JyxcbiAgICB1aWQ6IHVpZCxcbiAgfTtcblxuICBhd2FpdCBheGlvcy5wb3N0KGAke0FQSV9VUkx9L2xpbmstYWNjb3VudGAsIGxpbmtEYXRhLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmtCdXR0b24oKSB7XG4gIGNvbnN0IHsgaXNDb25uZWN0ZWQsIGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgeyBjaGFpbiwgbmV0d29yayB9ID0gdXNlTmV0d29yaygpO1xuICBjb25zdCB7IHNpZ25NZXNzYWdlQXN5bmMgfSA9IHVzZVNpZ25NZXNzYWdlKCk7XG5cbiAgdmFyIGRyYXdCdXR0b24gPSBmYWxzZTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBZGRyZXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRBZGRyZXNzJyk7XG4gICAgY29uc3QgY3VycmVudFVpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VWlkJyk7XG5cbiAgICBjb25zdCBkb0xpbmsgPSBhc3luYyAodWlkKSA9PiB7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IHsgYWRkcmVzcywgY2hhaW46IGNoYWluLmlkLCBuZXR3b3JrOiAnZXZtJyB9O1xuXG4gICAgICAvLy8gUmVxdWVzdCBtZXNzYWdlIGZyb20gb3VyIGJhY2tlbmRcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUElfVVJMfS9yZXF1ZXN0LW1lc3NhZ2VgLCB1c2VyRGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcblxuICAgICAgLy8vIFNpZ24gbWVzc2FnZVxuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2lnbk1lc3NhZ2VBc3luYyh7IG1lc3NhZ2UgfSk7XG4gICAgICBjb25zdCBzaWdEYXRhID0ge1xuICAgICAgICBuZXR3b3JrOiAnZXZtJyxcbiAgICAgICAgc2lnbmF0dXJlOiBzaWduYXR1cmUsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgIHVpZDogdWlkLFxuICAgICAgfTtcblxuICAgICAgLy9uZXR3b3JrOiBzdHJpbmc7XG4gICAgICBzaWduYXR1cmU6IHN0cmluZztcbiAgICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICAgIHVpZDogc3RyaW5nO1xuXG4gICAgICAvLy8gVmVyaWZ5IHNpZ25hdHVyZSBhbmQgbG9naW4gdXNlclxuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJX1VSTH0vbGluay1hY2NvdW50YCwgc2lnRGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1c2VyID0gcmVzcC5kYXRhLnVzZXI7XG4gICAgICBjb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xuICAgIH07XG5cbiAgICBpZiAoY3VycmVudEFkZHJlc3MgIT09IGFkZHJlc3MpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50QWRkcmVzcycsIGFkZHJlc3MpO1xuICAgICAgY29uc29sZS5sb2coYGFjY291bnQgc3dpdGNoZWQgdG8gJHthZGRyZXNzfWApO1xuXG4gICAgICBpZiAoY29uZmlybSgnVGhpcyBhZGRyZXNzIGlzIG5vdCBsaW5rZWQgdG8geW91ciBhY2NvdW50LCB3b3VsZCB5b3UgbGlrZSB0byBsaW5rIGl0PycpICYmIGN1cnJlbnRVaWQpIHtcbiAgICAgICAgZG9MaW5rKGN1cnJlbnRVaWQpO1xuICAgICAgICAvLyAgIGRvIGxpbmtpbmcgaGVyZVxuICAgICAgICAvLyBSZXF1ZXN0IGxpbmsgbWVzc2FnZVxuICAgICAgICAvLyAgIC8gU2lnbiBsaW5rIG1lc3NhZ2VcbiAgICAgICAgLy8gICAvIFNlbmQgc2lncy9tc2cgdG8gL2xpbmstYWNjb3VudCBlbmRwb2ludFxuICAgICAgfVxuICAgIH1cbiAgfSwgW2FkZHJlc3NdKTtcblxuICByZXR1cm47XG59XG4iXSwibmFtZXMiOlsidXNlQWNjb3VudCIsInVzZVNpZ25NZXNzYWdlIiwidXNlTmV0d29yayIsInVzZUVmZmVjdCIsImF4aW9zIiwiQVBJX1VSTCIsInBlcmZvcm1MaW5rIiwiYWRkcmVzcyIsImNoYWluIiwidWlkIiwibGlua0RhdGEiLCJuZXR3b3JrIiwicG9zdCIsImhlYWRlcnMiLCJMaW5rQnV0dG9uIiwiaXNDb25uZWN0ZWQiLCJzaWduTWVzc2FnZUFzeW5jIiwiZHJhd0J1dHRvbiIsImN1cnJlbnRBZGRyZXNzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1cnJlbnRVaWQiLCJkb0xpbmsiLCJ1c2VyRGF0YSIsImRhdGEiLCJtZXNzYWdlIiwic2lnbmF0dXJlIiwic2lnRGF0YSIsInJlc3AiLCJ1c2VyIiwiaWQiLCJzdHJpbmciLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImNvbmZpcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LinkButton.js\n"));

/***/ })

});