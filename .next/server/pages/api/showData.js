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
exports.id = "pages/api/showData";
exports.ids = ["pages/api/showData"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "dotenv-safe":
/*!******************************!*\
  !*** external "dotenv-safe" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("dotenv-safe");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "../../../api-utils/node":
/*!*****************************************************!*\
  !*** external "next/dist/server/api-utils/node.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ "../route-module":
/*!************************************************************************!*\
  !*** external "next/dist/server/future/route-modules/route-module.js" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "@vercel/postgres":
/*!***********************************!*\
  !*** external "@vercel/postgres" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@vercel/postgres");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * Hoists a name from a module or promised module.\n *\n * @param module the module to hoist the name from\n * @param name the name to hoist\n * @returns the value on the module (or promised module)\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"hoist\", ({\n    enumerable: true,\n    get: function() {\n        return hoist;\n    }\n}));\nfunction hoist(module, name) {\n    // If the name is available in the module, return it.\n    if (name in module) {\n        return module[name];\n    }\n    // If a property called `then` exists, assume it's a promise and\n    // return a promise that resolves to the name.\n    if (\"then\" in module && typeof module.then === \"function\") {\n        return module.then((mod)=>hoist(mod, name));\n    }\n    // If we're trying to hoise the default export, and the module is a function,\n    // return the module itself.\n    if (typeof module === \"function\" && name === \"default\") {\n        return module;\n    }\n    // Otherwise, return undefined.\n    return undefined;\n}\n\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0UtY29tbWVyY2UgU2hvZXNTaG9vdGluZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2hlbHBlcnMuanM/MDcxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhvaXN0cyBhIG5hbWUgZnJvbSBhIG1vZHVsZSBvciBwcm9taXNlZCBtb2R1bGUuXG4gKlxuICogQHBhcmFtIG1vZHVsZSB0aGUgbW9kdWxlIHRvIGhvaXN0IHRoZSBuYW1lIGZyb21cbiAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIHRvIGhvaXN0XG4gKiBAcmV0dXJucyB0aGUgdmFsdWUgb24gdGhlIG1vZHVsZSAob3IgcHJvbWlzZWQgbW9kdWxlKVxuICovIFwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaG9pc3RcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGhvaXN0O1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gaG9pc3QobW9kdWxlLCBuYW1lKSB7XG4gICAgLy8gSWYgdGhlIG5hbWUgaXMgYXZhaWxhYmxlIGluIHRoZSBtb2R1bGUsIHJldHVybiBpdC5cbiAgICBpZiAobmFtZSBpbiBtb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZVtuYW1lXTtcbiAgICB9XG4gICAgLy8gSWYgYSBwcm9wZXJ0eSBjYWxsZWQgYHRoZW5gIGV4aXN0cywgYXNzdW1lIGl0J3MgYSBwcm9taXNlIGFuZFxuICAgIC8vIHJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmFtZS5cbiAgICBpZiAoXCJ0aGVuXCIgaW4gbW9kdWxlICYmIHR5cGVvZiBtb2R1bGUudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGUudGhlbigobW9kKT0+aG9pc3QobW9kLCBuYW1lKSk7XG4gICAgfVxuICAgIC8vIElmIHdlJ3JlIHRyeWluZyB0byBob2lzZSB0aGUgZGVmYXVsdCBleHBvcnQsIGFuZCB0aGUgbW9kdWxlIGlzIGEgZnVuY3Rpb24sXG4gICAgLy8gcmV0dXJuIHRoZSBtb2R1bGUgaXRzZWxmLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSBcImZ1bmN0aW9uXCIgJiYgbmFtZSA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gdW5kZWZpbmVkLlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FshowData&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5CshowData.tsx&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FshowData&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5CshowData.tsx&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-route-loader/helpers */ \"(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\");\n/* harmony import */ var _src_pages_api_showData_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src\\pages\\api\\showData.tsx */ \"(api)/./src/pages/api/showData.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_pages_api_showData_tsx__WEBPACK_IMPORTED_MODULE_3__]);\n_src_pages_api_showData_tsx__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n\nconst PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;\n// Import the userland code.\n// @ts-expect-error - replaced by webpack/turbopack loader\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_showData_tsx__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_showData_tsx__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/showData\",\n        pathname: \"/api/showData\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_showData_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnNob3dEYXRhJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGc3JjJTVDcGFnZXMlNUNhcGklNUNzaG93RGF0YS50c3gmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDaUY7QUFDbEI7QUFDbUI7QUFDbEYsNEJBQTRCLHVHQUEwQjtBQUN0RDtBQUNBO0FBQzREO0FBQzVEO0FBQ0EsaUVBQWUsZ0dBQUssQ0FBQyx3REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLGdHQUFLLENBQUMsd0RBQVE7QUFDcEM7QUFDTztBQUNQO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRS1jb21tZXJjZSBTaG9lc1Nob290aW5nLz9mN2Y4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmUgdGhpcyBuZWVkIHRvIGJlIGltcG9ydGVkIGZyb20gbmV4dC9kaXN0IHRvIGJlIGV4dGVybmFsXG5pbXBvcnQgKiBhcyBtb2R1bGUgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZVwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1yb3V0ZS1sb2FkZXIvaGVscGVyc1wiO1xuY29uc3QgUGFnZXNBUElSb3V0ZU1vZHVsZSA9IG1vZHVsZS5QYWdlc0FQSVJvdXRlTW9kdWxlO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlcGxhY2VkIGJ5IHdlYnBhY2svdHVyYm9wYWNrIGxvYWRlclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vc3JjXFxcXHBhZ2VzXFxcXGFwaVxcXFxzaG93RGF0YS50c3hcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zaG93RGF0YVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Nob3dEYXRhXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FshowData&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5CshowData.tsx&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/showData.tsx":
/*!************************************!*\
  !*** ./src/pages/api/showData.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv_safe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv-safe */ \"dotenv-safe\");\n/* harmony import */ var dotenv_safe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_safe__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vercel_postgres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vercel/postgres */ \"@vercel/postgres\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_postgres__WEBPACK_IMPORTED_MODULE_2__]);\n_vercel_postgres__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nasync function handler(req, res) {\n    dotenv_safe__WEBPACK_IMPORTED_MODULE_1___default().config();\n    const cookies = cookie__WEBPACK_IMPORTED_MODULE_4___default().parse(req.headers.cookie || \"\");\n    const { Pool } = (pg__WEBPACK_IMPORTED_MODULE_3___default());\n    const pool = new Pool({\n        connectionString: process.env.POSTGRES_URL + \"?sslmode=require\"\n    });\n    //Verify token for show data in database\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(cookies.token, process.env.SECRET + \"?sslmode=require\", async (err, decode)=>{\n        if (err) {\n            res.json({\n                message: \"This JWT don't exist!\",\n                erro: err\n            });\n        } else {\n            const data = await _vercel_postgres__WEBPACK_IMPORTED_MODULE_2__.sql.query(`SELECT users, id,email from Users WHERE id = '${decode.id}'`);\n            res.json({\n                data: data.rows\n            });\n        }\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Nob3dEYXRhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ0Q7QUFDUztBQUNsQjtBQUNPO0FBRVosZUFBZUssUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQjtJQUVwQk4seURBQVU7SUFDVixNQUFNUSxVQUFlTCxtREFBWSxDQUFDRSxJQUFJSyxPQUFPLENBQUNQLE1BQU0sSUFBSTtJQUN4RCxNQUFNLEVBQUVRLElBQUksRUFBRSxHQUFHVCwyQ0FBRUE7SUFDbkIsTUFBTVUsT0FBTyxJQUFJRCxLQUFLO1FBQ3BCRSxrQkFBa0JDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHO0lBQy9DO0lBRUEsd0NBQXdDO0lBQ3hDakIsMERBQVUsQ0FBQ1MsUUFBUVUsS0FBSyxFQUFFSixRQUFRQyxHQUFHLENBQUNJLE1BQU0sR0FBRyxvQkFBcUIsT0FBT0MsS0FBVUM7UUFDbkYsSUFBR0QsS0FBSTtZQUNIZCxJQUFJZ0IsSUFBSSxDQUFDO2dCQUFDQyxTQUFTO2dCQUF5QkMsTUFBTUo7WUFBRztRQUN6RCxPQUFLO1lBQ0QsTUFBTUssT0FBTyxNQUFNeEIsaURBQUdBLENBQUN5QixLQUFLLENBQUMsQ0FBQyw4Q0FBOEMsRUFBRUwsT0FBT00sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxRnJCLElBQUlnQixJQUFJLENBQUM7Z0JBQUNHLE1BQU1BLEtBQUtHLElBQUk7WUFBQTtRQUM3QjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FLWNvbW1lcmNlIFNob2VzU2hvb3RpbmcvLi9zcmMvcGFnZXMvYXBpL3Nob3dEYXRhLnRzeD9hMTI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSldUIGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCBFTlYgZnJvbSAnZG90ZW52LXNhZmUnXG5pbXBvcnQgeyBzcWwgfSBmcm9tICdAdmVyY2VsL3Bvc3RncmVzJ1xuaW1wb3J0IHBnIGZyb20gJ3BnJztcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIEVOVi5jb25maWcoKVxuICBjb25zdCBjb29raWVzOiBhbnkgPSBjb29raWUucGFyc2UocmVxLmhlYWRlcnMuY29va2llIHx8ICcnKTtcbiAgY29uc3QgeyBQb29sIH0gPSBwZztcbiAgY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbiAgICBjb25uZWN0aW9uU3RyaW5nOiBwcm9jZXNzLmVudi5QT1NUR1JFU19VUkwgKyBcIj9zc2xtb2RlPXJlcXVpcmVcIixcbiAgfSlcbiAgXG4gIC8vVmVyaWZ5IHRva2VuIGZvciBzaG93IGRhdGEgaW4gZGF0YWJhc2VcbiAgSldULnZlcmlmeShjb29raWVzLnRva2VuLCBwcm9jZXNzLmVudi5TRUNSRVQgKyBcIj9zc2xtb2RlPXJlcXVpcmVcIiAsIGFzeW5jIChlcnI6IGFueSwgZGVjb2RlOiBhbnkpID0+IHtcbiAgICBpZihlcnIpe1xuICAgICAgICByZXMuanNvbih7bWVzc2FnZTogXCJUaGlzIEpXVCBkb24ndCBleGlzdCFcIiwgZXJybzogZXJyfSk7IFxuICAgIH1lbHNle1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgc3FsLnF1ZXJ5KGBTRUxFQ1QgdXNlcnMsIGlkLGVtYWlsIGZyb20gVXNlcnMgV0hFUkUgaWQgPSAnJHtkZWNvZGUuaWR9J2ApXG4gICAgICAgIHJlcy5qc29uKHtkYXRhOiBkYXRhLnJvd3N9KTsgICAgXG4gICAgfVxuICB9KVxufVxuIl0sIm5hbWVzIjpbIkpXVCIsIkVOViIsInNxbCIsInBnIiwiY29va2llIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbmZpZyIsImNvb2tpZXMiLCJwYXJzZSIsImhlYWRlcnMiLCJQb29sIiwicG9vbCIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfVVJMIiwidmVyaWZ5IiwidG9rZW4iLCJTRUNSRVQiLCJlcnIiLCJkZWNvZGUiLCJqc29uIiwibWVzc2FnZSIsImVycm8iLCJkYXRhIiwicXVlcnkiLCJpZCIsInJvd3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/showData.tsx\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-kind.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-kind.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"RouteKind\", ({\n    enumerable: true,\n    get: function() {\n        return RouteKind;\n    }\n}));\nvar RouteKind;\n(function(RouteKind) {\n    RouteKind[/**\n   * `PAGES` represents all the React pages that are under `pages/`.\n   */ \"PAGES\"] = \"PAGES\";\n    RouteKind[/**\n   * `PAGES_API` represents all the API routes under `pages/api/`.\n   */ \"PAGES_API\"] = \"PAGES_API\";\n    RouteKind[/**\n   * `APP_PAGE` represents all the React pages that are under `app/` with the\n   * filename of `page.{j,t}s{,x}`.\n   */ \"APP_PAGE\"] = \"APP_PAGE\";\n    RouteKind[/**\n   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the\n   * filename of `route.{j,t}s{,x}`.\n   */ \"APP_ROUTE\"] = \"APP_ROUTE\";\n})(RouteKind || (RouteKind = {}));\n\n//# sourceMappingURL=route-kind.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksRUFBRSxHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJLEVBQUUsR0FBRztBQUNsQztBQUNBLENBQUMsOEJBQThCOztBQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovL0UtY29tbWVyY2UgU2hvZXNTaG9vdGluZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kLmpzP2EzNDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZUtpbmRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFJvdXRlS2luZDtcbiAgICB9XG59KTtcbnZhciBSb3V0ZUtpbmQ7XG4oZnVuY3Rpb24oUm91dGVLaW5kKSB7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgUEFHRVNgIHJlcHJlc2VudHMgYWxsIHRoZSBSZWFjdCBwYWdlcyB0aGF0IGFyZSB1bmRlciBgcGFnZXMvYC5cbiAgICovIFwiUEFHRVNcIl0gPSBcIlBBR0VTXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgUEFHRVNfQVBJYCByZXByZXNlbnRzIGFsbCB0aGUgQVBJIHJvdXRlcyB1bmRlciBgcGFnZXMvYXBpL2AuXG4gICAqLyBcIlBBR0VTX0FQSVwiXSA9IFwiUEFHRVNfQVBJXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgQVBQX1BBR0VgIHJlcHJlc2VudHMgYWxsIHRoZSBSZWFjdCBwYWdlcyB0aGF0IGFyZSB1bmRlciBgYXBwL2Agd2l0aCB0aGVcbiAgICogZmlsZW5hbWUgb2YgYHBhZ2Uue2osdH1zeyx4fWAuXG4gICAqLyBcIkFQUF9QQUdFXCJdID0gXCJBUFBfUEFHRVwiO1xuICAgIFJvdXRlS2luZFsvKipcbiAgICogYEFQUF9ST1VURWAgcmVwcmVzZW50cyBhbGwgdGhlIEFQSSByb3V0ZXMgYW5kIG1ldGFkYXRhIHJvdXRlcyB0aGF0IGFyZSB1bmRlciBgYXBwL2Agd2l0aCB0aGVcbiAgICogZmlsZW5hbWUgb2YgYHJvdXRlLntqLHR9c3sseH1gLlxuICAgKi8gXCJBUFBfUk9VVEVcIl0gPSBcIkFQUF9ST1VURVwiO1xufSkoUm91dGVLaW5kIHx8IChSb3V0ZUtpbmQgPSB7fSkpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1raW5kLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-kind.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-modules/pages-api/module.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    PagesAPIRouteModule: function() {\n        return PagesAPIRouteModule;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _routemodule = __webpack_require__(/*! ../route-module */ \"../route-module\");\nconst _node = __webpack_require__(/*! ../../../api-utils/node */ \"../../../api-utils/node\");\nclass PagesAPIRouteModule extends _routemodule.RouteModule {\n    /**\n   *\n   * @param req the incoming server request\n   * @param res the outgoing server response\n   * @param context the context for the render\n   */ async render(req, res, context) {\n        await (0, _node.apiResolver)(req, res, context.query, this.userland, {\n            ...context.previewProps,\n            revalidate: context.revalidate,\n            trustHostHeader: context.trustHostHeader,\n            allowedRevalidateHeaderKeys: context.allowedRevalidateHeaderKeys,\n            hostname: context.hostname\n        }, context.minimalMode, context.dev, context.page);\n    }\n}\nconst _default = PagesAPIRouteModule;\n\n//# sourceMappingURL=module.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsTUFBTSxDQUdMO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFCQUFxQixtQkFBTyxDQUFDLHdDQUFpQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsd0RBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0UtY29tbWVyY2UgU2hvZXNTaG9vdGluZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuanM/ZDU0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBhZ2VzQVBJUm91dGVNb2R1bGU6IG51bGwsXG4gICAgZGVmYXVsdDogbnVsbFxufSk7XG5mdW5jdGlvbiBfZXhwb3J0KHRhcmdldCwgYWxsKSB7XG4gICAgZm9yKHZhciBuYW1lIGluIGFsbClPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogYWxsW25hbWVdXG4gICAgfSk7XG59XG5fZXhwb3J0KGV4cG9ydHMsIHtcbiAgICBQYWdlc0FQSVJvdXRlTW9kdWxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFBhZ2VzQVBJUm91dGVNb2R1bGU7XG4gICAgfSxcbiAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0O1xuICAgIH1cbn0pO1xuY29uc3QgX3JvdXRlbW9kdWxlID0gcmVxdWlyZShcIi4uL3JvdXRlLW1vZHVsZVwiKTtcbmNvbnN0IF9ub2RlID0gcmVxdWlyZShcIi4uLy4uLy4uL2FwaS11dGlscy9ub2RlXCIpO1xuY2xhc3MgUGFnZXNBUElSb3V0ZU1vZHVsZSBleHRlbmRzIF9yb3V0ZW1vZHVsZS5Sb3V0ZU1vZHVsZSB7XG4gICAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSByZXEgdGhlIGluY29taW5nIHNlcnZlciByZXF1ZXN0XG4gICAqIEBwYXJhbSByZXMgdGhlIG91dGdvaW5nIHNlcnZlciByZXNwb25zZVxuICAgKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCBmb3IgdGhlIHJlbmRlclxuICAgKi8gYXN5bmMgcmVuZGVyKHJlcSwgcmVzLCBjb250ZXh0KSB7XG4gICAgICAgIGF3YWl0ICgwLCBfbm9kZS5hcGlSZXNvbHZlcikocmVxLCByZXMsIGNvbnRleHQucXVlcnksIHRoaXMudXNlcmxhbmQsIHtcbiAgICAgICAgICAgIC4uLmNvbnRleHQucHJldmlld1Byb3BzLFxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogY29udGV4dC5yZXZhbGlkYXRlLFxuICAgICAgICAgICAgdHJ1c3RIb3N0SGVhZGVyOiBjb250ZXh0LnRydXN0SG9zdEhlYWRlcixcbiAgICAgICAgICAgIGFsbG93ZWRSZXZhbGlkYXRlSGVhZGVyS2V5czogY29udGV4dC5hbGxvd2VkUmV2YWxpZGF0ZUhlYWRlcktleXMsXG4gICAgICAgICAgICBob3N0bmFtZTogY29udGV4dC5ob3N0bmFtZVxuICAgICAgICB9LCBjb250ZXh0Lm1pbmltYWxNb2RlLCBjb250ZXh0LmRldiwgY29udGV4dC5wYWdlKTtcbiAgICB9XG59XG5jb25zdCBfZGVmYXVsdCA9IFBhZ2VzQVBJUm91dGVNb2R1bGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FshowData&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5CshowData.tsx&middlewareConfigBase64=e30%3D!"));
module.exports = __webpack_exports__;

})();