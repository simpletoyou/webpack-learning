/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/title.js":
/*!**********************!*\
  !*** ./src/title.js ***!
  \**********************/
/***/ ((module) => {

module.exports = "前端开发";
console.log('-------这里是titlejs------');
console.log(aa);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

var foo = function foo() {
  console.log('This is foo function.');
};

console.log(bb);
module.exports = foo;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title */ "./src/title.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_title__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_1__);
/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-02-11 10:15:49
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-02-14 14:13:03
 */
// const getData = require('./js/api');
// import { sum, square} from "./js/utils"
// import './js/login'
// import './js/lg'
// console.log(sum(4,5))
// console.log(square(7))
// console.log(getData())
// import './js/image'
// import './js/font'
// 在没有经过babel处理之前，打包后下方代码会作为拷贝输出
// @babel/core (babel核心,将非js代码处理后交由浏览器识别)
// @babel/cli (可以在命令行使用babel相关命令：npx babel src --out-dir build)
// @babel/plugin-transform-arrow-functions. 使用命令：npx babel src/index.js --out-dir build --plugins=@babel/plugin-transform-arrow-functions（实现将箭头函数转化为普通函数）
// @babel/plugin-transform-block-scoping(处理块作用域,将const转化为var等):npx babel src/index.js --out-dir build --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping
// 以上命令可以整合为一个：npm i @babel/preset-env -D(指定命令为：npx babel src/index.js --out-dir build --presets=@babel/preset-env)
// import "core-js/stable"
// import "regenerator-runtime/runtime"
// const title = '前端babel学习'
// const foo = () => {
//     console.log('-----',title)
// }
// foo()
// const p1 = new Promise((resolve, reject)=> {
//     console.log(111)
// })
// console.log(p1)
// console.log(' HMR');
// import './title.js'
// import Vue from 'vue';
// import App from './App.vue'
// // 需要实现热更新功能
// if(module.hot) {
//     // 指定模块热更新
//     module.hot.accept(['./title.js'],()=>{
//         console.log('titlejs模块已更新');
//     })
// }
// new Vue({
//     render: h => h(App)
// }).$mount('#root')


console.log('入口js');
console.log((_title__WEBPACK_IMPORTED_MODULE_0___default()));
_utils__WEBPACK_IMPORTED_MODULE_1___default()();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLE1BQWpCO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxFQUFaOzs7Ozs7Ozs7O0FDRkEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtFQUNkSCxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNILENBRkQ7O0FBR0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxFQUFaO0FBQ0FOLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkksR0FBakI7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBSCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSwrQ0FBWjtBQUNBRiw2Q0FBRyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDN3ZWJwYWNrLy4vc3JjL3RpdGxlLmpzIiwid2VicGFjazovLzAzd2VicGFjay8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8wM3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMDN3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLzAzd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMDN3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMDN3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMDN3ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCLliY3nq6/lvIDlj5FcIlxuY29uc29sZS5sb2coJy0tLS0tLS3ov5nph4zmmK90aXRsZWpzLS0tLS0tJyk7XG5jb25zb2xlLmxvZyhhYSkiLCJjb25zdCBmb28gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1RoaXMgaXMgZm9vIGZ1bmN0aW9uLicpXG59XG5jb25zb2xlLmxvZyhiYik7XG5tb2R1bGUuZXhwb3J0cyA9IGZvbyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEB2ZXJzaW9uOiBcbiAqIEBBdXRob3I6IHNpbXBsZXRveW91XG4gKiBARGF0ZTogMjAyMi0wMi0xMSAxMDoxNTo0OVxuICogQExhc3RFZGl0b3JzOiBzaW1wbGV0b3lvdVxuICogQExhc3RFZGl0VGltZTogMjAyMi0wMi0xNCAxNDoxMzowM1xuICovXG5cbi8vIGNvbnN0IGdldERhdGEgPSByZXF1aXJlKCcuL2pzL2FwaScpO1xuLy8gaW1wb3J0IHsgc3VtLCBzcXVhcmV9IGZyb20gXCIuL2pzL3V0aWxzXCJcblxuLy8gaW1wb3J0ICcuL2pzL2xvZ2luJ1xuLy8gaW1wb3J0ICcuL2pzL2xnJ1xuXG4vLyBjb25zb2xlLmxvZyhzdW0oNCw1KSlcbi8vIGNvbnNvbGUubG9nKHNxdWFyZSg3KSlcblxuLy8gY29uc29sZS5sb2coZ2V0RGF0YSgpKVxuXG4vLyBpbXBvcnQgJy4vanMvaW1hZ2UnXG4vLyBpbXBvcnQgJy4vanMvZm9udCdcblxuXG4vLyDlnKjmsqHmnInnu4/ov4diYWJlbOWkhOeQhuS5i+WJje+8jOaJk+WMheWQjuS4i+aWueS7o+eggeS8muS9nOS4uuaLt+i0nei+k+WHulxuLy8gQGJhYmVsL2NvcmUgKGJhYmVs5qC45b+DLOWwhumdnmpz5Luj56CB5aSE55CG5ZCO5Lqk55Sx5rWP6KeI5Zmo6K+G5YirKVxuLy8gQGJhYmVsL2NsaSAo5Y+v5Lul5Zyo5ZG95Luk6KGM5L2/55SoYmFiZWznm7jlhbPlkb3ku6TvvJpucHggYmFiZWwgc3JjIC0tb3V0LWRpciBidWlsZClcbi8vIEBiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLWFycm93LWZ1bmN0aW9ucy4g5L2/55So5ZG95Luk77yabnB4IGJhYmVsIHNyYy9pbmRleC5qcyAtLW91dC1kaXIgYnVpbGQgLS1wbHVnaW5zPUBiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLWFycm93LWZ1bmN0aW9uc++8iOWunueOsOWwhueureWktOWHveaVsOi9rOWMluS4uuaZrumAmuWHveaVsO+8iVxuLy8gQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tYmxvY2stc2NvcGluZyjlpITnkIblnZfkvZznlKjln58s5bCGY29uc3TovazljJbkuLp2YXLnrYkpOm5weCBiYWJlbCBzcmMvaW5kZXguanMgLS1vdXQtZGlyIGJ1aWxkIC0tcGx1Z2lucz1AYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1hcnJvdy1mdW5jdGlvbnMsQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tYmxvY2stc2NvcGluZ1xuXG4vLyDku6XkuIrlkb3ku6Tlj6/ku6XmlbTlkIjkuLrkuIDkuKrvvJpucG0gaSBAYmFiZWwvcHJlc2V0LWVudiAtRCjmjIflrprlkb3ku6TkuLrvvJpucHggYmFiZWwgc3JjL2luZGV4LmpzIC0tb3V0LWRpciBidWlsZCAtLXByZXNldHM9QGJhYmVsL3ByZXNldC1lbnYpXG5cbi8vIGltcG9ydCBcImNvcmUtanMvc3RhYmxlXCJcbi8vIGltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiXG4vLyBjb25zdCB0aXRsZSA9ICfliY3nq69iYWJlbOWtpuS5oCdcbi8vIGNvbnN0IGZvbyA9ICgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0nLHRpdGxlKVxuLy8gfVxuLy8gZm9vKClcblxuLy8gY29uc3QgcDEgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbi8vICAgICBjb25zb2xlLmxvZygxMTEpXG4vLyB9KVxuLy8gY29uc29sZS5sb2cocDEpXG4vLyBjb25zb2xlLmxvZygnIEhNUicpO1xuLy8gaW1wb3J0ICcuL3RpdGxlLmpzJ1xuLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuLy8gaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5cbi8vIC8vIOmcgOimgeWunueOsOeDreabtOaWsOWKn+iDvVxuLy8gaWYobW9kdWxlLmhvdCkge1xuLy8gICAgIC8vIOaMh+WumuaooeWdl+eDreabtOaWsFxuLy8gICAgIG1vZHVsZS5ob3QuYWNjZXB0KFsnLi90aXRsZS5qcyddLCgpPT57XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZWpz5qih5Z2X5bey5pu05pawJyk7XG4vLyAgICAgfSlcbi8vIH1cblxuLy8gbmV3IFZ1ZSh7XG4vLyAgICAgcmVuZGVyOiBoID0+IGgoQXBwKVxuLy8gfSkuJG1vdW50KCcjcm9vdCcpXG5cblxuaW1wb3J0IHRpdGxlIGZyb20gXCIuL3RpdGxlXCI7XG5pbXBvcnQgZm9vIGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnNvbGUubG9nKCflhaXlj6NqcycpXG5jb25zb2xlLmxvZyh0aXRsZSk7XG5mb28oKSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY29uc29sZSIsImxvZyIsImFhIiwiZm9vIiwiYmIiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=