"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./components/LinkButton.js":
/*!**********************************!*\
  !*** ./components/LinkButton.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkButton)\n/* harmony export */ });\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst API_URL = \"http://localhost:1337/api/auth\";\nconst performLink = async (address, chain, uid)=>{\n    /// link to user\n    const linkData = {\n        network: \"evm\",\n        address: \"0x0c01624e6D74132b5571Ee8a6A2dE63fbe7d20b7\",\n        uid: uid\n    };\n    await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${API_URL}/link-account`, linkData, {\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    });\n};\nfunction LinkButton() {\n    const { isConnected , address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useAccount)();\n    const { chain , network  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useNetwork)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useSignMessage)();\n    var drawButton = false;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const currentAddress = localStorage.getItem(\"currentAddress\");\n        const currentUid = localStorage.getItem(\"currentUid\");\n        const doLink = async (uid)=>{\n            const userData = {\n                address,\n                chain: chain.id,\n                network: \"evm\"\n            };\n            /// Request message from our backend\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${API_URL}/request-message`, userData, {\n                headers: {\n                    \"content-type\": \"application/json\"\n                }\n            });\n            const message = data.message;\n            /// Sign message\n            const signature = await signMessageAsync({\n                message\n            });\n            const sigData = {\n                network: \"evm\",\n                signature: signature,\n                message: message,\n                address: address,\n                uid: uid\n            };\n            /// Verify signature and login user\n            const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${API_URL}/link-account`, sigData, {\n                headers: {\n                    \"content-type\": \"application/json\"\n                }\n            });\n            const user = resp.data.user;\n            console.log(\"user\", user);\n        };\n        if (currentAddress !== address) {\n            console.log(`account switched to ${address}`);\n            localStorage.setItem(\"currentAddress\", address);\n            if (confirm(\"This address is not linked to your account, would you like to link it?\") && currentUid) {\n                doLink(currentUid);\n            }\n        }\n    }, [\n        address\n    ]);\n    return;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7Z0JBQ25HQyxNQUFNLENBQUNELFVBQVUsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0Y7S0FDRixFQUFFO1FBQUNkLE9BQU87S0FBQyxDQUFDLENBQUM7SUFFZCxPQUFPO0NBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL0xpbmtCdXR0b24uanM/OGI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VTaWduTWVzc2FnZSwgdXNlTmV0d29yayB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9hdXRoJztcblxuY29uc3QgcGVyZm9ybUxpbmsgPSBhc3luYyAoYWRkcmVzcywgY2hhaW4sIHVpZCkgPT4ge1xuICAvLy8gbGluayB0byB1c2VyXG4gIGNvbnN0IGxpbmtEYXRhID0ge1xuICAgIG5ldHdvcms6ICdldm0nLFxuICAgIGFkZHJlc3M6ICcweDBjMDE2MjRlNkQ3NDEzMmI1NTcxRWU4YTZBMmRFNjNmYmU3ZDIwYjcnLFxuICAgIHVpZDogdWlkLFxuICB9O1xuXG4gIGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJX1VSTH0vbGluay1hY2NvdW50YCwgbGlua0RhdGEsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlua0J1dHRvbigpIHtcbiAgY29uc3QgeyBpc0Nvbm5lY3RlZCwgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCB7IGNoYWluLCBuZXR3b3JrIH0gPSB1c2VOZXR3b3JrKCk7XG4gIGNvbnN0IHsgc2lnbk1lc3NhZ2VBc3luYyB9ID0gdXNlU2lnbk1lc3NhZ2UoKTtcblxuICB2YXIgZHJhd0J1dHRvbiA9IGZhbHNlO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFkZHJlc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudEFkZHJlc3MnKTtcbiAgICBjb25zdCBjdXJyZW50VWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVaWQnKTtcblxuICAgIGNvbnN0IGRvTGluayA9IGFzeW5jICh1aWQpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0geyBhZGRyZXNzLCBjaGFpbjogY2hhaW4uaWQsIG5ldHdvcms6ICdldm0nIH07XG5cbiAgICAgIC8vLyBSZXF1ZXN0IG1lc3NhZ2UgZnJvbSBvdXIgYmFja2VuZFxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSV9VUkx9L3JlcXVlc3QtbWVzc2FnZWAsIHVzZXJEYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuXG4gICAgICAvLy8gU2lnbiBtZXNzYWdlXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzaWduTWVzc2FnZUFzeW5jKHsgbWVzc2FnZSB9KTtcbiAgICAgIGNvbnN0IHNpZ0RhdGEgPSB7XG4gICAgICAgIG5ldHdvcms6ICdldm0nLFxuICAgICAgICBzaWduYXR1cmU6IHNpZ25hdHVyZSxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgdWlkOiB1aWQsXG4gICAgICB9O1xuXG4gICAgICAvLy8gVmVyaWZ5IHNpZ25hdHVyZSBhbmQgbG9naW4gdXNlclxuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJX1VSTH0vbGluay1hY2NvdW50YCwgc2lnRGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1c2VyID0gcmVzcC5kYXRhLnVzZXI7XG4gICAgICBjb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xuICAgIH07XG5cbiAgICBpZiAoY3VycmVudEFkZHJlc3MgIT09IGFkZHJlc3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBhY2NvdW50IHN3aXRjaGVkIHRvICR7YWRkcmVzc31gKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50QWRkcmVzcycsIGFkZHJlc3MpO1xuXG4gICAgICBpZiAoY29uZmlybSgnVGhpcyBhZGRyZXNzIGlzIG5vdCBsaW5rZWQgdG8geW91ciBhY2NvdW50LCB3b3VsZCB5b3UgbGlrZSB0byBsaW5rIGl0PycpICYmIGN1cnJlbnRVaWQpIHtcbiAgICAgICAgZG9MaW5rKGN1cnJlbnRVaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2FkZHJlc3NdKTtcblxuICByZXR1cm47XG59XG4iXSwibmFtZXMiOlsidXNlQWNjb3VudCIsInVzZVNpZ25NZXNzYWdlIiwidXNlTmV0d29yayIsInVzZUVmZmVjdCIsImF4aW9zIiwiQVBJX1VSTCIsInBlcmZvcm1MaW5rIiwiYWRkcmVzcyIsImNoYWluIiwidWlkIiwibGlua0RhdGEiLCJuZXR3b3JrIiwicG9zdCIsImhlYWRlcnMiLCJMaW5rQnV0dG9uIiwiaXNDb25uZWN0ZWQiLCJzaWduTWVzc2FnZUFzeW5jIiwiZHJhd0J1dHRvbiIsImN1cnJlbnRBZGRyZXNzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1cnJlbnRVaWQiLCJkb0xpbmsiLCJ1c2VyRGF0YSIsImlkIiwiZGF0YSIsIm1lc3NhZ2UiLCJzaWduYXR1cmUiLCJzaWdEYXRhIiwicmVzcCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImNvbmZpcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LinkButton.js\n");

/***/ }),

/***/ "./pages/signin.jsx":
/*!**************************!*\
  !*** ./pages/signin.jsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_LinkButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LinkButton */ \"./components/LinkButton.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst API_URL = \"http://localhost:1337/api/auth\";\nfunction SignIn() {\n    const { isConnected , address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const { chain , network  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useNetwork)();\n    const { status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleAuth = async ()=>{\n            /// Save current address to local storage to detect changes (for linking)\n            if (address) {\n                localStorage.setItem(\"currentAddress\", address);\n            }\n            const userData = {\n                address,\n                chain: chain.id,\n                network: \"evm\"\n            };\n            /// Request message from our backend\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6___default().post(`${API_URL}/request-message`, userData, {\n                headers: {\n                    \"content-type\": \"application/json\"\n                }\n            });\n            const message = data.message;\n            /// Sign message\n            const signature = await signMessageAsync({\n                message\n            });\n            const sigData = {\n                network: \"evm\",\n                signature: signature,\n                message: message,\n                address: address\n            };\n            /// Verify signature and login user\n            const resp = await axios__WEBPACK_IMPORTED_MODULE_6___default().post(`${API_URL}/sign-message`, sigData, {\n                headers: {\n                    \"content-type\": \"application/json\"\n                }\n            });\n            const user = resp.data.user;\n            console.log(\"user\", user);\n            localStorage.setItem(\"currentUid\", user.objectId);\n            //   await doALink('0xdcFcDdDfdccf0882E8149ad9de3b112B8a55258d', chain, user.objectId);\n            return;\n            // Not working, i think it has something to do with the linking\n            // redirect user after success authentication to '/user' page\n            const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"credentials\", {\n                message,\n                signature,\n                redirect: false,\n                callbackUrl: \"/user\"\n            });\n            /**\n       * instead of using signIn(..., redirect: \"/user\")\n       * we get the url from callback and push it to the router to avoid page refreshing\n       */ console.log(url);\n            push(url);\n        };\n        if (status === \"unauthenticated\" && isConnected) {\n            handleAuth();\n        }\n    }, [\n        status,\n        isConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"/Users/mattcarter/Studio/WORK/OMNI/Chapters/999/parse-server/client/pages/signin.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.ConnectButton, {}, void 0, false, {\n                fileName: \"/Users/mattcarter/Studio/WORK/OMNI/Chapters/999/parse-server/client/pages/signin.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LinkButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mattcarter/Studio/WORK/OMNI/Chapters/999/parse-server/client/pages/signin.jsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mattcarter/Studio/WORK/OMNI/Chapters/999/parse-server/client/pages/signin.jsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0UsOERBQUMwQixLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxxQkFBbUI7Ozs7O29CQUFLOzBCQUM1Qiw4REFBQ3hDLGlFQUFhOzs7O29CQUFHOzBCQUNqQiw4REFBQ1UsOERBQVU7Ozs7b0JBQUc7Ozs7OztZQUVWLENBQ047Q0FDSDtBQUVELGlFQUFlRSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9zaWduaW4uanN4PzA1M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHsgc2lnbkluLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZVNpZ25NZXNzYWdlLCB1c2VOZXR3b3JrIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0xpbmtCdXR0b24nO1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvYXV0aCc7XG5cbmZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgY29uc3QgeyBpc0Nvbm5lY3RlZCwgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCB7IGNoYWluLCBuZXR3b3JrIH0gPSB1c2VOZXR3b3JrKCk7XG4gIGNvbnN0IHsgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHsgc2lnbk1lc3NhZ2VBc3luYyB9ID0gdXNlU2lnbk1lc3NhZ2UoKTtcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUF1dGggPSBhc3luYyAoKSA9PiB7XG4gICAgICAvLy8gU2F2ZSBjdXJyZW50IGFkZHJlc3MgdG8gbG9jYWwgc3RvcmFnZSB0byBkZXRlY3QgY2hhbmdlcyAoZm9yIGxpbmtpbmcpXG4gICAgICBpZiAoYWRkcmVzcykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudEFkZHJlc3MnLCBhZGRyZXNzKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXNlckRhdGEgPSB7IGFkZHJlc3MsIGNoYWluOiBjaGFpbi5pZCwgbmV0d29yazogJ2V2bScgfTtcblxuICAgICAgLy8vIFJlcXVlc3QgbWVzc2FnZSBmcm9tIG91ciBiYWNrZW5kXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJX1VSTH0vcmVxdWVzdC1tZXNzYWdlYCwgdXNlckRhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG5cbiAgICAgIC8vLyBTaWduIG1lc3NhZ2VcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25NZXNzYWdlQXN5bmMoeyBtZXNzYWdlIH0pO1xuICAgICAgY29uc3Qgc2lnRGF0YSA9IHtcbiAgICAgICAgbmV0d29yazogJ2V2bScsXG4gICAgICAgIHNpZ25hdHVyZTogc2lnbmF0dXJlLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgfTtcblxuICAgICAgLy8vIFZlcmlmeSBzaWduYXR1cmUgYW5kIGxvZ2luIHVzZXJcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSV9VUkx9L3NpZ24tbWVzc2FnZWAsIHNpZ0RhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdXNlciA9IHJlc3AuZGF0YS51c2VyO1xuICAgICAgY29uc29sZS5sb2coJ3VzZXInLCB1c2VyKTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVaWQnLCB1c2VyLm9iamVjdElkKTtcblxuICAgICAgLy8gICBhd2FpdCBkb0FMaW5rKCcweGRjRmNEZERmZGNjZjA4ODJFODE0OWFkOWRlM2IxMTJCOGE1NTI1OGQnLCBjaGFpbiwgdXNlci5vYmplY3RJZCk7XG5cbiAgICAgIHJldHVybjtcblxuICAgICAgLy8gTm90IHdvcmtpbmcsIGkgdGhpbmsgaXQgaGFzIHNvbWV0aGluZyB0byBkbyB3aXRoIHRoZSBsaW5raW5nXG5cbiAgICAgIC8vIHJlZGlyZWN0IHVzZXIgYWZ0ZXIgc3VjY2VzcyBhdXRoZW50aWNhdGlvbiB0byAnL3VzZXInIHBhZ2VcbiAgICAgIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBzaWduSW4oXG4gICAgICAgICdjcmVkZW50aWFscycsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgIHNpZ25hdHVyZSxcbiAgICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICAgICAgY2FsbGJhY2tVcmw6ICcvdXNlcicsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHsgdWlkOiB1c2VyLm9iamVjdElkIH0sXG4gICAgICApO1xuICAgICAgLyoqXG4gICAgICAgKiBpbnN0ZWFkIG9mIHVzaW5nIHNpZ25JbiguLi4sIHJlZGlyZWN0OiBcIi91c2VyXCIpXG4gICAgICAgKiB3ZSBnZXQgdGhlIHVybCBmcm9tIGNhbGxiYWNrIGFuZCBwdXNoIGl0IHRvIHRoZSByb3V0ZXIgdG8gYXZvaWQgcGFnZSByZWZyZXNoaW5nXG4gICAgICAgKi9cbiAgICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgICBwdXNoKHVybCk7XG4gICAgfTtcbiAgICBpZiAoc3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJyAmJiBpc0Nvbm5lY3RlZCkge1xuICAgICAgaGFuZGxlQXV0aCgpO1xuICAgIH1cbiAgfSwgW3N0YXR1cywgaXNDb25uZWN0ZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+V2ViMyBBdXRoZW50aWNhdGlvbjwvaDM+XG4gICAgICA8Q29ubmVjdEJ1dHRvbiAvPlxuICAgICAgPExpbmtCdXR0b24gLz5cbiAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2RvQUxpbmsoKX0+PC9idXR0b24+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XG4iXSwibmFtZXMiOlsiQ29ubmVjdEJ1dHRvbiIsInNpZ25JbiIsInVzZVNlc3Npb24iLCJ1c2VBY2NvdW50IiwidXNlU2lnbk1lc3NhZ2UiLCJ1c2VOZXR3b3JrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkxpbmtCdXR0b24iLCJBUElfVVJMIiwiU2lnbkluIiwiaXNDb25uZWN0ZWQiLCJhZGRyZXNzIiwiY2hhaW4iLCJuZXR3b3JrIiwic3RhdHVzIiwic2lnbk1lc3NhZ2VBc3luYyIsInB1c2giLCJoYW5kbGVBdXRoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInVzZXJEYXRhIiwiaWQiLCJkYXRhIiwicG9zdCIsImhlYWRlcnMiLCJtZXNzYWdlIiwic2lnbmF0dXJlIiwic2lnRGF0YSIsInJlc3AiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsIm9iamVjdElkIiwidXJsIiwicmVkaXJlY3QiLCJjYWxsYmFja1VybCIsImRpdiIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.jsx"));
module.exports = __webpack_exports__;

})();