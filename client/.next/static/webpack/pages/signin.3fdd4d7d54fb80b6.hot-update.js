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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LinkButton; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar API_URL = \"http://localhost:1337/api/auth\";\nvar performLink = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(address, chain, uid) {\n        var linkData;\n        return _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    linkData = {\n                        network: \"evm\",\n                        address: \"0x0c01624e6D74132b5571Ee8a6A2dE63fbe7d20b7\",\n                        uid: uid\n                    };\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"\".concat(API_URL, \"/link-account\"), linkData, {\n                        headers: {\n                            \"content-type\": \"application/json\"\n                        }\n                    });\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function performLink(address, chain, uid) {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction LinkButton() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(), isConnected = ref.isConnected, address = ref.address;\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useNetwork)(), chain = ref1.chain, network = ref1.network;\n    var signMessageAsync = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage)().signMessageAsync;\n    var drawButton = false;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var currentAddress = localStorage.getItem(\"currentAddress\");\n        var doLink = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var userData, data, message, signature, sigData, resp, user;\n                return _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            userData = {\n                                address: address,\n                                chain: chain.id,\n                                network: \"evm\"\n                            };\n                            _ctx.next = 3;\n                            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"\".concat(API_URL, \"/request-message\"), userData, {\n                                headers: {\n                                    \"content-type\": \"application/json\"\n                                }\n                            });\n                        case 3:\n                            data = _ctx.sent.data;\n                            message = data.message;\n                            _ctx.next = 7;\n                            return signMessageAsync({\n                                message: message\n                            });\n                        case 7:\n                            signature = _ctx.sent;\n                            sigData = {\n                                network: \"evm\",\n                                signature: signature,\n                                message: message,\n                                address: address,\n                                uid: localStorage.get(\"currentUid\")\n                            };\n                            //network: string;\n                            signature: string;\n                            message: string;\n                            address: string;\n                            uid: string;\n                            _ctx.next = 15;\n                            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"\".concat(API_URL, \"/link-account\"), sigData, {\n                                headers: {\n                                    \"content-type\": \"application/json\"\n                                }\n                            });\n                        case 15:\n                            resp = _ctx.sent;\n                            user = resp.data.user;\n                            console.log(\"user\", user);\n                        case 18:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function doLink() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (currentAddress !== address) {\n            localStorage.setItem(\"currentAddress\", address);\n            console.log(\"account switched to \".concat(address));\n            if (confirm(\"This address is not linked to your account, would you like to link it?\")) {\n            //   do linking here\n            // Request link message\n            //   / Sign link message\n            //   / Send sigs/msg to /link-account endpoint\n            }\n        }\n    }, [\n        address\n    ]);\n    return;\n};\n_s(LinkButton, \"5wZYwPurtVUcFso0NPxZe1Nx/Sc=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useNetwork,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage\n    ];\n});\n_c = LinkButton;\nvar _c;\n$RefreshReg$(_c, \"LinkButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLEVBQUUsa0JBQWtCO2lDQUNuQzs2QkFDRixDQUFDOzs0QkFKSWMsSUFBSSxZQUlSOzRCQUVJQyxJQUFJLEdBQUdELElBQUksQ0FBQ0osSUFBSSxDQUFDSyxJQUFJLENBQUM7NEJBQzVCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVMLElBQUksQ0FBQyxDQUFDOzs7Ozs7YUFDM0I7NEJBcENLUCxNQUFNOzs7V0FvQ1g7UUFFRCxJQUFJSCxjQUFjLEtBQUtYLE9BQU8sRUFBRTtZQUM5QlksWUFBWSxDQUFDZSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUzQixPQUFPLENBQUMsQ0FBQztZQUNoRHlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFxQixDQUFVLE9BQVIxQixPQUFPLENBQUUsQ0FBQyxDQUFDO1lBRTlDLElBQUk0QixPQUFPLENBQUMsd0VBQXdFLENBQUMsRUFBRTtZQUNyRixvQkFBb0I7WUFDcEIsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtZQUN4Qiw4Q0FBOEM7YUFDL0M7U0FDRjtLQUNGLEVBQUU7UUFBQzVCLE9BQU87S0FBQyxDQUFDLENBQUM7SUFFZCxPQUFPO0NBQ1I7R0E5RHVCTyxVQUFVOztRQUNDZCw2Q0FBVTtRQUNoQkUsNkNBQVU7UUFDUkQsaURBQWM7OztBQUhyQmEsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpbmtCdXR0b24uanM/OGI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VTaWduTWVzc2FnZSwgdXNlTmV0d29yayB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9hdXRoJztcblxuY29uc3QgcGVyZm9ybUxpbmsgPSBhc3luYyAoYWRkcmVzcywgY2hhaW4sIHVpZCkgPT4ge1xuICAvLy8gbGluayB0byB1c2VyXG4gIGNvbnN0IGxpbmtEYXRhID0ge1xuICAgIG5ldHdvcms6ICdldm0nLFxuICAgIGFkZHJlc3M6ICcweDBjMDE2MjRlNkQ3NDEzMmI1NTcxRWU4YTZBMmRFNjNmYmU3ZDIwYjcnLFxuICAgIHVpZDogdWlkLFxuICB9O1xuXG4gIGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJX1VSTH0vbGluay1hY2NvdW50YCwgbGlua0RhdGEsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlua0J1dHRvbigpIHtcbiAgY29uc3QgeyBpc0Nvbm5lY3RlZCwgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCB7IGNoYWluLCBuZXR3b3JrIH0gPSB1c2VOZXR3b3JrKCk7XG4gIGNvbnN0IHsgc2lnbk1lc3NhZ2VBc3luYyB9ID0gdXNlU2lnbk1lc3NhZ2UoKTtcblxuICB2YXIgZHJhd0J1dHRvbiA9IGZhbHNlO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFkZHJlc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudEFkZHJlc3MnKTtcblxuICAgIGNvbnN0IGRvTGluayA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0geyBhZGRyZXNzLCBjaGFpbjogY2hhaW4uaWQsIG5ldHdvcms6ICdldm0nIH07XG5cbiAgICAgIC8vLyBSZXF1ZXN0IG1lc3NhZ2UgZnJvbSBvdXIgYmFja2VuZFxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSV9VUkx9L3JlcXVlc3QtbWVzc2FnZWAsIHVzZXJEYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuXG4gICAgICAvLy8gU2lnbiBtZXNzYWdlXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzaWduTWVzc2FnZUFzeW5jKHsgbWVzc2FnZSB9KTtcbiAgICAgIGNvbnN0IHNpZ0RhdGEgPSB7XG4gICAgICAgIG5ldHdvcms6ICdldm0nLFxuICAgICAgICBzaWduYXR1cmU6IHNpZ25hdHVyZSxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgdWlkOiBsb2NhbFN0b3JhZ2UuZ2V0KCdjdXJyZW50VWlkJyksXG4gICAgICB9O1xuXG4gICAgICAvL25ldHdvcms6IHN0cmluZztcbiAgICAgIHNpZ25hdHVyZTogc3RyaW5nO1xuICAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgICAgYWRkcmVzczogc3RyaW5nO1xuICAgICAgdWlkOiBzdHJpbmc7XG5cbiAgICAgIC8vLyBWZXJpZnkgc2lnbmF0dXJlIGFuZCBsb2dpbiB1c2VyXG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUElfVVJMfS9saW5rLWFjY291bnRgLCBzaWdEYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHVzZXIgPSByZXNwLmRhdGEudXNlcjtcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XG4gICAgfTtcblxuICAgIGlmIChjdXJyZW50QWRkcmVzcyAhPT0gYWRkcmVzcykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRBZGRyZXNzJywgYWRkcmVzcyk7XG4gICAgICBjb25zb2xlLmxvZyhgYWNjb3VudCBzd2l0Y2hlZCB0byAke2FkZHJlc3N9YCk7XG5cbiAgICAgIGlmIChjb25maXJtKCdUaGlzIGFkZHJlc3MgaXMgbm90IGxpbmtlZCB0byB5b3VyIGFjY291bnQsIHdvdWxkIHlvdSBsaWtlIHRvIGxpbmsgaXQ/JykpIHtcbiAgICAgICAgLy8gICBkbyBsaW5raW5nIGhlcmVcbiAgICAgICAgLy8gUmVxdWVzdCBsaW5rIG1lc3NhZ2VcbiAgICAgICAgLy8gICAvIFNpZ24gbGluayBtZXNzYWdlXG4gICAgICAgIC8vICAgLyBTZW5kIHNpZ3MvbXNnIHRvIC9saW5rLWFjY291bnQgZW5kcG9pbnRcbiAgICAgIH1cbiAgICB9XG4gIH0sIFthZGRyZXNzXSk7XG5cbiAgcmV0dXJuO1xufVxuIl0sIm5hbWVzIjpbInVzZUFjY291bnQiLCJ1c2VTaWduTWVzc2FnZSIsInVzZU5ldHdvcmsiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkFQSV9VUkwiLCJwZXJmb3JtTGluayIsImFkZHJlc3MiLCJjaGFpbiIsInVpZCIsImxpbmtEYXRhIiwibmV0d29yayIsInBvc3QiLCJoZWFkZXJzIiwiTGlua0J1dHRvbiIsImlzQ29ubmVjdGVkIiwic2lnbk1lc3NhZ2VBc3luYyIsImRyYXdCdXR0b24iLCJjdXJyZW50QWRkcmVzcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb0xpbmsiLCJ1c2VyRGF0YSIsImRhdGEiLCJtZXNzYWdlIiwic2lnbmF0dXJlIiwic2lnRGF0YSIsInJlc3AiLCJ1c2VyIiwiaWQiLCJnZXQiLCJzdHJpbmciLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImNvbmZpcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LinkButton.js\n"));

/***/ })

});