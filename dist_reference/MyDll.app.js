/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var app_087992929a53505ab6ff;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dll/alpha.js":
/*!**********************!*\
  !*** ./dll/alpha.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = \"alpha\";\n\n//# sourceURL=webpack://%5Bname%5D_%5Bfullhash%5D/./dll/alpha.js?");

/***/ }),

/***/ "./src/index-ref.js":
/*!**************************!*\
  !*** ./src/index-ref.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var alpha = __webpack_require__(/*! ../dll/alpha */ \"./dll/alpha.js\");\r\n\r\nconsole.log(\"alpha111\");\r\nconsole.log(alpha);\n\n//# sourceURL=webpack://%5Bname%5D_%5Bfullhash%5D/./src/index-ref.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index-ref.js");
/******/ 	app_087992929a53505ab6ff = __webpack_exports__;
/******/ 	
/******/ })()
;