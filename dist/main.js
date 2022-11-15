/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homePage (){
    const home = document.createElement("div");
    home.classList.add("home-page")
    const headline = document.createElement("h1");
    headline.appendChild(document.createTextNode("The Largest Wine and Charcuterie selection in the US"));

    const heroImage = document.createElement("img");
    heroImage.src = "../images/wineStore.jpg";
    heroImage.classList.add("hero-image")
    const tagline = document.createElement("h2");
    tagline.appendChild(document.createTextNode("since 2022"));

    home.appendChild(headline);
    home.appendChild(heroImage);
    home.appendChild(tagline);
    
    return home;
}

function loadHome (){
    const content = document.getElementById("content");
    content.appendChild(homePage());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu (){

    const menuList = document.createElement("div");
    menuList.classList.add("menuList")
    const items = []
    const foodFactory = (itemName, price, image) => {
        return {itemName, price, image}
    };

    const pinotNoir = foodFactory("Pinot Noir", 19.99, "../images/pinotNoir.jpg");
    const merlot = foodFactory("Merlot", 24.99, "../images/merlot.jpg");
    const savingonBlanc = foodFactory("Savignon Blanc", 15.99, "../images/savingonBlanc.jpg");
    const pinotGrigio = foodFactory("Pinot Grigio", 12.99, "../images/pinotGrigio.jpg")
    const salami = foodFactory("Salami", 10, "../images/salami.jpg")
    const cheddar = foodFactory("Cheddar", 5, "../images/cheddar.jpg")
    items.push(pinotNoir, merlot, savingonBlanc, pinotGrigio, salami, cheddar)

    items.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card")
        const wineImage = document.createElement("img");
        wineImage.src = element.image;
        wineImage.classList.add("thumbnail");
        const wrapper = document.createElement("div");
        wrapper.classList.add("wineWrapper");
        const wineName = document.createElement("h3");
        wineName.textContent = element.itemName;
        const winePrice = document.createElement("p");
        winePrice.textContent = `${element.price}`;
        
        wrapper.appendChild(wineName);
        wrapper.appendChild(winePrice);
        card.appendChild(wineImage);
        card.appendChild(wrapper);
        menuList.appendChild(card);
    })

    return menuList;

}

function loadMenu(){
    const content = document.getElementById("content");
    content.appendChild(menu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



// loadHome();
// loadMenu();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUN4QnZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7VUM5Q2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDRDs7QUFFN0I7QUFDQSxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGhvbWVQYWdlICgpe1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZVwiKVxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVGhlIExhcmdlc3QgV2luZSBhbmQgQ2hhcmN1dGVyaWUgc2VsZWN0aW9uIGluIHRoZSBVU1wiKSk7XG5cbiAgICBjb25zdCBoZXJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGhlcm9JbWFnZS5zcmMgPSBcIi4uL2ltYWdlcy93aW5lU3RvcmUuanBnXCI7XG4gICAgaGVyb0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJoZXJvLWltYWdlXCIpXG4gICAgY29uc3QgdGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0YWdsaW5lLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwic2luY2UgMjAyMlwiKSk7XG5cbiAgICBob21lLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZCh0YWdsaW5lKTtcbiAgICBcbiAgICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUgKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJmdW5jdGlvbiBtZW51ICgpe1xuXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoXCJtZW51TGlzdFwiKVxuICAgIGNvbnN0IGl0ZW1zID0gW11cbiAgICBjb25zdCBmb29kRmFjdG9yeSA9IChpdGVtTmFtZSwgcHJpY2UsIGltYWdlKSA9PiB7XG4gICAgICAgIHJldHVybiB7aXRlbU5hbWUsIHByaWNlLCBpbWFnZX1cbiAgICB9O1xuXG4gICAgY29uc3QgcGlub3ROb2lyID0gZm9vZEZhY3RvcnkoXCJQaW5vdCBOb2lyXCIsIDE5Ljk5LCBcIi4uL2ltYWdlcy9waW5vdE5vaXIuanBnXCIpO1xuICAgIGNvbnN0IG1lcmxvdCA9IGZvb2RGYWN0b3J5KFwiTWVybG90XCIsIDI0Ljk5LCBcIi4uL2ltYWdlcy9tZXJsb3QuanBnXCIpO1xuICAgIGNvbnN0IHNhdmluZ29uQmxhbmMgPSBmb29kRmFjdG9yeShcIlNhdmlnbm9uIEJsYW5jXCIsIDE1Ljk5LCBcIi4uL2ltYWdlcy9zYXZpbmdvbkJsYW5jLmpwZ1wiKTtcbiAgICBjb25zdCBwaW5vdEdyaWdpbyA9IGZvb2RGYWN0b3J5KFwiUGlub3QgR3JpZ2lvXCIsIDEyLjk5LCBcIi4uL2ltYWdlcy9waW5vdEdyaWdpby5qcGdcIilcbiAgICBjb25zdCBzYWxhbWkgPSBmb29kRmFjdG9yeShcIlNhbGFtaVwiLCAxMCwgXCIuLi9pbWFnZXMvc2FsYW1pLmpwZ1wiKVxuICAgIGNvbnN0IGNoZWRkYXIgPSBmb29kRmFjdG9yeShcIkNoZWRkYXJcIiwgNSwgXCIuLi9pbWFnZXMvY2hlZGRhci5qcGdcIilcbiAgICBpdGVtcy5wdXNoKHBpbm90Tm9pciwgbWVybG90LCBzYXZpbmdvbkJsYW5jLCBwaW5vdEdyaWdpbywgc2FsYW1pLCBjaGVkZGFyKVxuXG4gICAgaXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIilcbiAgICAgICAgY29uc3Qgd2luZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgd2luZUltYWdlLnNyYyA9IGVsZW1lbnQuaW1hZ2U7XG4gICAgICAgIHdpbmVJbWFnZS5jbGFzc0xpc3QuYWRkKFwidGh1bWJuYWlsXCIpO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid2luZVdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IHdpbmVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICB3aW5lTmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuaXRlbU5hbWU7XG4gICAgICAgIGNvbnN0IHdpbmVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB3aW5lUHJpY2UudGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LnByaWNlfWA7XG4gICAgICAgIFxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdpbmVOYW1lKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3aW5lUHJpY2UpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHdpbmVJbWFnZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gbWVudUxpc3Q7XG5cbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiXG5cbi8vIGxvYWRIb21lKCk7XG4vLyBsb2FkTWVudSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==