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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LinkButton; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar API_URL = \"http://localhost:1337/api/auth\";\nvar performLink = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(address, chain, uid) {\n        var linkData;\n        return _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    linkData = {\n                        network: \"evm\",\n                        address: \"0x0c01624e6D74132b5571Ee8a6A2dE63fbe7d20b7\",\n                        uid: uid\n                    };\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"\".concat(API_URL, \"/link-account\"), linkData, {\n                        headers: {\n                            \"content-type\": \"application/json\"\n                        }\n                    });\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function performLink(address, chain, uid) {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction LinkButton() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(), isConnected = ref.isConnected, address = ref.address;\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useNetwork)(), chain = ref1.chain, network = ref1.network;\n    var signMessageAsync = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage)().signMessageAsync;\n    var drawButton = false;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var currentAddress = localStorage.getItem(\"currentAddress\");\n        var currentUid = localStorage.getItem(\"currentUid\");\n        var doLink = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(uid) {\n                var userData, data, message, signature, sigData, resp, user;\n                return _Users_mattcarter_Studio_WORK_OMNI_Chapters_999_parse_server_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            userData = {\n                                address: address,\n                                chain: chain.id,\n                                network: \"evm\"\n                            };\n                            _ctx.next = 3;\n                            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"\".concat(API_URL, \"/request-message\"), userData, {\n                                headers: {\n                                    \"content-type\": \"application/json\"\n                                }\n                            });\n                        case 3:\n                            data = _ctx.sent.data;\n                            message = data.message;\n                            _ctx.next = 7;\n                            return signMessageAsync({\n                                message: message\n                            });\n                        case 7:\n                            signature = _ctx.sent;\n                            sigData = {\n                                network: \"evm\",\n                                signature: signature,\n                                message: message,\n                                address: address,\n                                uid: uid\n                            };\n                            _ctx.next = 11;\n                            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"\".concat(API_URL, \"/link-account\"), sigData, {\n                                headers: {\n                                    \"content-type\": \"application/json\"\n                                }\n                            });\n                        case 11:\n                            resp = _ctx.sent;\n                            user = resp.data.user;\n                            console.log(\"user\", user);\n                        case 14:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function doLink(uid) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (currentAddress !== address) {\n            localStorage.setItem(\"currentAddress\", address);\n            console.log(\"account switched to \".concat(address));\n            if (confirm(\"This address is not linked to your account, would you like to link it?\") && currentUid) {\n                doLink(currentUid);\n            //   do linking here\n            // Request link message\n            //   / Sign link message\n            //   / Send sigs/msg to /link-account endpoint\n            }\n        }\n    }, [\n        address\n    ]);\n    return;\n};\n_s(LinkButton, \"5wZYwPurtVUcFso0NPxZe1Nx/Sc=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useNetwork,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage\n    ];\n});\n_c = LinkButton;\nvar _c;\n$RefreshReg$(_c, \"LinkButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUM7NEJBQzVCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVILElBQUksQ0FBQyxDQUFDOzs7Ozs7YUFDM0I7NEJBOUJLUCxNQUFNLENBQVViLEdBQUc7OztXQThCeEI7UUFFRCxJQUFJUyxjQUFjLEtBQUtYLE9BQU8sRUFBRTtZQUM5QlksWUFBWSxDQUFDYyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUxQixPQUFPLENBQUMsQ0FBQztZQUNoRHdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFxQixDQUFVLE9BQVJ6QixPQUFPLENBQUUsQ0FBQyxDQUFDO1lBRTlDLElBQUkyQixPQUFPLENBQUMsd0VBQXdFLENBQUMsSUFBSWIsVUFBVSxFQUFFO2dCQUNuR0MsTUFBTSxDQUFDRCxVQUFVLENBQUMsQ0FBQztZQUNuQixvQkFBb0I7WUFDcEIsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtZQUN4Qiw4Q0FBOEM7YUFDL0M7U0FDRjtLQUNGLEVBQUU7UUFBQ2QsT0FBTztLQUFDLENBQUMsQ0FBQztJQUVkLE9BQU87Q0FDUjtHQTFEdUJPLFVBQVU7O1FBQ0NkLDZDQUFVO1FBQ2hCRSw2Q0FBVTtRQUNSRCxpREFBYzs7O0FBSHJCYSxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlua0J1dHRvbi5qcz84YjkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFjY291bnQsIHVzZVNpZ25NZXNzYWdlLCB1c2VOZXR3b3JrIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQVBJX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2F1dGgnO1xuXG5jb25zdCBwZXJmb3JtTGluayA9IGFzeW5jIChhZGRyZXNzLCBjaGFpbiwgdWlkKSA9PiB7XG4gIC8vLyBsaW5rIHRvIHVzZXJcbiAgY29uc3QgbGlua0RhdGEgPSB7XG4gICAgbmV0d29yazogJ2V2bScsXG4gICAgYWRkcmVzczogJzB4MGMwMTYyNGU2RDc0MTMyYjU1NzFFZThhNkEyZEU2M2ZiZTdkMjBiNycsXG4gICAgdWlkOiB1aWQsXG4gIH07XG5cbiAgYXdhaXQgYXhpb3MucG9zdChgJHtBUElfVVJMfS9saW5rLWFjY291bnRgLCBsaW5rRGF0YSwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rQnV0dG9uKCkge1xuICBjb25zdCB7IGlzQ29ubmVjdGVkLCBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XG4gIGNvbnN0IHsgY2hhaW4sIG5ldHdvcmsgfSA9IHVzZU5ldHdvcmsoKTtcbiAgY29uc3QgeyBzaWduTWVzc2FnZUFzeW5jIH0gPSB1c2VTaWduTWVzc2FnZSgpO1xuXG4gIHZhciBkcmF3QnV0dG9uID0gZmFsc2U7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50QWRkcmVzcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50QWRkcmVzcycpO1xuICAgIGNvbnN0IGN1cnJlbnRVaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVpZCcpO1xuXG4gICAgY29uc3QgZG9MaW5rID0gYXN5bmMgKHVpZCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRhdGEgPSB7IGFkZHJlc3MsIGNoYWluOiBjaGFpbi5pZCwgbmV0d29yazogJ2V2bScgfTtcblxuICAgICAgLy8vIFJlcXVlc3QgbWVzc2FnZSBmcm9tIG91ciBiYWNrZW5kXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJX1VSTH0vcmVxdWVzdC1tZXNzYWdlYCwgdXNlckRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG5cbiAgICAgIC8vLyBTaWduIG1lc3NhZ2VcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25NZXNzYWdlQXN5bmMoeyBtZXNzYWdlIH0pO1xuICAgICAgY29uc3Qgc2lnRGF0YSA9IHtcbiAgICAgICAgbmV0d29yazogJ2V2bScsXG4gICAgICAgIHNpZ25hdHVyZTogc2lnbmF0dXJlLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICB1aWQ6IHVpZCxcbiAgICAgIH07XG5cbiAgICAgIC8vLyBWZXJpZnkgc2lnbmF0dXJlIGFuZCBsb2dpbiB1c2VyXG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUElfVVJMfS9saW5rLWFjY291bnRgLCBzaWdEYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHVzZXIgPSByZXNwLmRhdGEudXNlcjtcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XG4gICAgfTtcblxuICAgIGlmIChjdXJyZW50QWRkcmVzcyAhPT0gYWRkcmVzcykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRBZGRyZXNzJywgYWRkcmVzcyk7XG4gICAgICBjb25zb2xlLmxvZyhgYWNjb3VudCBzd2l0Y2hlZCB0byAke2FkZHJlc3N9YCk7XG5cbiAgICAgIGlmIChjb25maXJtKCdUaGlzIGFkZHJlc3MgaXMgbm90IGxpbmtlZCB0byB5b3VyIGFjY291bnQsIHdvdWxkIHlvdSBsaWtlIHRvIGxpbmsgaXQ/JykgJiYgY3VycmVudFVpZCkge1xuICAgICAgICBkb0xpbmsoY3VycmVudFVpZCk7XG4gICAgICAgIC8vICAgZG8gbGlua2luZyBoZXJlXG4gICAgICAgIC8vIFJlcXVlc3QgbGluayBtZXNzYWdlXG4gICAgICAgIC8vICAgLyBTaWduIGxpbmsgbWVzc2FnZVxuICAgICAgICAvLyAgIC8gU2VuZCBzaWdzL21zZyB0byAvbGluay1hY2NvdW50IGVuZHBvaW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbYWRkcmVzc10pO1xuXG4gIHJldHVybjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VBY2NvdW50IiwidXNlU2lnbk1lc3NhZ2UiLCJ1c2VOZXR3b3JrIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJBUElfVVJMIiwicGVyZm9ybUxpbmsiLCJhZGRyZXNzIiwiY2hhaW4iLCJ1aWQiLCJsaW5rRGF0YSIsIm5ldHdvcmsiLCJwb3N0IiwiaGVhZGVycyIsIkxpbmtCdXR0b24iLCJpc0Nvbm5lY3RlZCIsInNpZ25NZXNzYWdlQXN5bmMiLCJkcmF3QnV0dG9uIiwiY3VycmVudEFkZHJlc3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY3VycmVudFVpZCIsImRvTGluayIsInVzZXJEYXRhIiwiZGF0YSIsIm1lc3NhZ2UiLCJzaWduYXR1cmUiLCJzaWdEYXRhIiwicmVzcCIsInVzZXIiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LinkButton.js\n"));

/***/ })

});