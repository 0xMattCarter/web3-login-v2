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

/***/ "./pages/signin.jsx":
/*!**************************!*\
  !*** ./pages/signin.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar API_URL = \"http://localhost:1337/api/auth\";\nfunction SignIn() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useAccount)(), isConnected = ref.isConnected, address = ref.address;\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useNetwork)(), chain = ref1.chain, network = ref1.network;\n    var status = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)().status;\n    var signMessageAsync = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useSignMessage)().signMessageAsync;\n    var push = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().push;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleAuth = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var userData, data, message, signature, sigData, resp, user, url;\n                return _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            /// Save current address to local storage to detect changes (for linking)\n                            if (address) {\n                                localStorage.setItem(\"currentAddress\", address);\n                            }\n                            userData = {\n                                address: address,\n                                chain: chain.id,\n                                network: \"evm\"\n                            };\n                            _ctx.next = 4;\n                            return axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"\".concat(API_URL, \"/request-message\"), userData, {\n                                headers: {\n                                    \"content-type\": \"application/json\"\n                                }\n                            });\n                        case 4:\n                            data = _ctx.sent.data;\n                            message = data.message;\n                            _ctx.next = 8;\n                            return signMessageAsync({\n                                message: message\n                            });\n                        case 8:\n                            signature = _ctx.sent;\n                            sigData = {\n                                network: \"evm\",\n                                signature: signature,\n                                message: message,\n                                address: address\n                            };\n                            _ctx.next = 12;\n                            return axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"\".concat(API_URL, \"/sign-message\"), sigData, {\n                                headers: {\n                                    \"content-type\": \"application/json\"\n                                }\n                            });\n                        case 12:\n                            resp = _ctx.sent;\n                            user = resp.data.user;\n                            console.log(\"user\", user);\n                            return _ctx.abrupt(\"return\");\n                        case 18:\n                            url = _ctx.sent.url;\n                            /**\n       * instead of using signIn(..., redirect: \"/user\")\n       * we get the url from callback and push it to the router to avoid page refreshing\n       */ console.log(url);\n                            push(url);\n                        case 21:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function handleAuth() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (status === \"unauthenticated\" && isConnected) {\n            handleAuth();\n        }\n    }, [\n        status,\n        isConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"/Users/mattcarter/Studio/WORK/OMNI/Chapters/999/parse-server/client/pages/signin.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.ConnectButton, {}, void 0, false, {\n                fileName: \"/Users/mattcarter/Studio/WORK/OMNI/Chapters/999/parse-server/client/pages/signin.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mattcarter/Studio/WORK/OMNI/Chapters/999/parse-server/client/pages/signin.jsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(SignIn, \"jF2TISWJeoExGEDSmggE2u7VBWs=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useNetwork,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useSignMessage,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = SignIn;\nvar doALink = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(address, chain, uid) {\n        var linkData;\n        return _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    linkData = {\n                        network: \"evm\",\n                        address: \"0x0c01624e6D74132b5571Ee8a6A2dE63fbe7d20b7\",\n                        uid: uid\n                    };\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"\".concat(API_URL, \"/link-account\"), linkData, {\n                        headers: {\n                            \"content-type\": \"application/json\"\n                        }\n                    });\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function doALink(address, chain, uid) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUNFLDhEQUFDdUIsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMscUJBQW1COzs7OztvQkFBSzswQkFDNUIsOERBQUNuQyxpRUFBYTs7OztvQkFBRzs7Ozs7O1lBRWIsQ0FDTjtDQUNIO0dBL0VRVSxNQUFNOztRQUNvQlAsNkNBQVU7UUFDaEJFLDZDQUFVO1FBQ2xCSCx1REFBVTtRQUNBRSxpREFBYztRQUMxQkcsa0RBQVM7OztBQUxuQkcsS0FBQUEsTUFBTTtBQWlGZixJQUFNMEIsT0FBTztlQUFHLG9SQUFPeEIsT0FBTyxFQUFFQyxLQUFLLEVBQUV3QixHQUFHLEVBQUs7WUFFdkNDLFFBQVE7Ozs7b0JBQVJBLFFBQVEsR0FBRzt3QkFDZnhCLE9BQU8sRUFBRSxLQUFLO3dCQUNkRixPQUFPLEVBQUUsNENBQTRDO3dCQUNyRHlCLEdBQUcsRUFBRUEsR0FBRztxQkFDVCxDQUFDOzsyQkFFSTdCLGlEQUFVLENBQUMsRUFBQyxDQUFVLE1BQWEsQ0FBckJDLE9BQU8sRUFBQyxlQUFhLENBQUMsRUFBRTZCLFFBQVEsRUFBRTt3QkFDcERQLE9BQU8sRUFBRTs0QkFDUCxjQUFjLEVBQUUsa0JBQWtCO3lCQUNuQztxQkFDRixDQUFDOzs7Ozs7S0FDSDtvQkFiS0ssT0FBTyxDQUFVeEIsT0FBTyxFQUFFQyxLQUFLLEVBQUV3QixHQUFHOzs7R0FhekM7QUFFRCwrREFBZTNCLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduaW4uanN4PzA1M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHsgc2lnbkluLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZVNpZ25NZXNzYWdlLCB1c2VOZXR3b3JrIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQVBJX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2F1dGgnO1xuXG5mdW5jdGlvbiBTaWduSW4oKSB7XG4gIGNvbnN0IHsgaXNDb25uZWN0ZWQsIGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgeyBjaGFpbiwgbmV0d29yayB9ID0gdXNlTmV0d29yaygpO1xuICBjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCB7IHNpZ25NZXNzYWdlQXN5bmMgfSA9IHVzZVNpZ25NZXNzYWdlKCk7XG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVBdXRoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgLy8vIFNhdmUgY3VycmVudCBhZGRyZXNzIHRvIGxvY2FsIHN0b3JhZ2UgdG8gZGV0ZWN0IGNoYW5nZXMgKGZvciBsaW5raW5nKVxuICAgICAgaWYgKGFkZHJlc3MpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRBZGRyZXNzJywgYWRkcmVzcyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVzZXJEYXRhID0geyBhZGRyZXNzLCBjaGFpbjogY2hhaW4uaWQsIG5ldHdvcms6ICdldm0nIH07XG5cbiAgICAgIC8vLyBSZXF1ZXN0IG1lc3NhZ2UgZnJvbSBvdXIgYmFja2VuZFxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSV9VUkx9L3JlcXVlc3QtbWVzc2FnZWAsIHVzZXJEYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuXG4gICAgICAvLy8gU2lnbiBtZXNzYWdlXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzaWduTWVzc2FnZUFzeW5jKHsgbWVzc2FnZSB9KTtcbiAgICAgIGNvbnN0IHNpZ0RhdGEgPSB7XG4gICAgICAgIG5ldHdvcms6ICdldm0nLFxuICAgICAgICBzaWduYXR1cmU6IHNpZ25hdHVyZSxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIH07XG5cbiAgICAgIC8vLyBWZXJpZnkgc2lnbmF0dXJlIGFuZCBsb2dpbiB1c2VyXG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUElfVVJMfS9zaWduLW1lc3NhZ2VgLCBzaWdEYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHVzZXIgPSByZXNwLmRhdGEudXNlcjtcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XG5cbiAgICAgIC8vICAgYXdhaXQgZG9BTGluaygnMHhkY0ZjRGREZmRjY2YwODgyRTgxNDlhZDlkZTNiMTEyQjhhNTUyNThkJywgY2hhaW4sIHVzZXIub2JqZWN0SWQpO1xuXG4gICAgICByZXR1cm47XG5cbiAgICAgIC8vIE5vdCB3b3JraW5nLCBpIHRoaW5rIGl0IGhhcyBzb21ldGhpbmcgdG8gZG8gd2l0aCB0aGUgbGlua2luZ1xuXG4gICAgICAvLyByZWRpcmVjdCB1c2VyIGFmdGVyIHN1Y2Nlc3MgYXV0aGVudGljYXRpb24gdG8gJy91c2VyJyBwYWdlXG4gICAgICBjb25zdCB7IHVybCB9ID0gYXdhaXQgc2lnbkluKFxuICAgICAgICAnY3JlZGVudGlhbHMnLFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICBzaWduYXR1cmUsXG4gICAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxuICAgICAgICAgIGNhbGxiYWNrVXJsOiAnL3VzZXInLFxuICAgICAgICB9LFxuICAgICAgICAvLyB7IHVpZDogdXNlci5vYmplY3RJZCB9LFxuICAgICAgKTtcbiAgICAgIC8qKlxuICAgICAgICogaW5zdGVhZCBvZiB1c2luZyBzaWduSW4oLi4uLCByZWRpcmVjdDogXCIvdXNlclwiKVxuICAgICAgICogd2UgZ2V0IHRoZSB1cmwgZnJvbSBjYWxsYmFjayBhbmQgcHVzaCBpdCB0byB0aGUgcm91dGVyIHRvIGF2b2lkIHBhZ2UgcmVmcmVzaGluZ1xuICAgICAgICovXG4gICAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgICAgcHVzaCh1cmwpO1xuICAgIH07XG4gICAgaWYgKHN0YXR1cyA9PT0gJ3VuYXV0aGVudGljYXRlZCcgJiYgaXNDb25uZWN0ZWQpIHtcbiAgICAgIGhhbmRsZUF1dGgoKTtcbiAgICB9XG4gIH0sIFtzdGF0dXMsIGlzQ29ubmVjdGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPldlYjMgQXV0aGVudGljYXRpb248L2gzPlxuICAgICAgPENvbm5lY3RCdXR0b24gLz5cbiAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2RvQUxpbmsoKX0+PC9idXR0b24+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBkb0FMaW5rID0gYXN5bmMgKGFkZHJlc3MsIGNoYWluLCB1aWQpID0+IHtcbiAgLy8vIGxpbmsgdG8gdXNlclxuICBjb25zdCBsaW5rRGF0YSA9IHtcbiAgICBuZXR3b3JrOiAnZXZtJyxcbiAgICBhZGRyZXNzOiAnMHgwYzAxNjI0ZTZENzQxMzJiNTU3MUVlOGE2QTJkRTYzZmJlN2QyMGI3JyxcbiAgICB1aWQ6IHVpZCxcbiAgfTtcblxuICBhd2FpdCBheGlvcy5wb3N0KGAke0FQSV9VUkx9L2xpbmstYWNjb3VudGAsIGxpbmtEYXRhLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcbiJdLCJuYW1lcyI6WyJDb25uZWN0QnV0dG9uIiwic2lnbkluIiwidXNlU2Vzc2lvbiIsInVzZUFjY291bnQiLCJ1c2VTaWduTWVzc2FnZSIsInVzZU5ldHdvcmsiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkFQSV9VUkwiLCJTaWduSW4iLCJpc0Nvbm5lY3RlZCIsImFkZHJlc3MiLCJjaGFpbiIsIm5ldHdvcmsiLCJzdGF0dXMiLCJzaWduTWVzc2FnZUFzeW5jIiwicHVzaCIsImhhbmRsZUF1dGgiLCJ1c2VyRGF0YSIsImRhdGEiLCJtZXNzYWdlIiwic2lnbmF0dXJlIiwic2lnRGF0YSIsInJlc3AiLCJ1c2VyIiwidXJsIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImlkIiwicG9zdCIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDMiLCJkb0FMaW5rIiwidWlkIiwibGlua0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signin.jsx\n"));

/***/ })

});