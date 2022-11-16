/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactUs (){
    const contactUs = document.createElement("div");
    contactUs.classList.add("contactUs")
    const headline = document.createElement("h1");
    headline.textContent = "Contact Us";
    const subHeading = document.createElement("h2");
    subHeading.textContent = "Reach out to our team!";


    const wrapper = document.createElement("div");
    wrapper.classList.add("infoWrapper")
    const info = document.createElement("div");
    const employee = document.createElement("img");
    employee.classList.add("infoImage")
    employee.src = "../images/employee.jpg"
    const phone = document.createElement("p");
    phone.textContent = "Phone: 555-555-5555";
    const email = document.createElement("p");
    email.textContent = "Email: wine@vineyards.com";

    info.appendChild(phone);
    info.appendChild(email);
    wrapper.appendChild(info);
    wrapper.appendChild(employee);

    contactUs.appendChild(headline);
    contactUs.appendChild(subHeading);
    contactUs.appendChild(wrapper);

    return contactUs;
}

function loadContact (){
    const content = document.getElementById("content");
    content.appendChild(contactUs());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




// loadHome();
// loadMenu();
(0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3JDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3hCdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7OztVQzlDZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDRDtBQUNPOztBQUVwQztBQUNBO0FBQ0Esb0RBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb250YWN0VXMgKCl7XG4gICAgY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0VXMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RVc1wiKVxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgY29uc3Qgc3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBzdWJIZWFkaW5nLnRleHRDb250ZW50ID0gXCJSZWFjaCBvdXQgdG8gb3VyIHRlYW0hXCI7XG5cblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImluZm9XcmFwcGVyXCIpXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZW1wbG95ZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGVtcGxveWVlLmNsYXNzTGlzdC5hZGQoXCJpbmZvSW1hZ2VcIilcbiAgICBlbXBsb3llZS5zcmMgPSBcIi4uL2ltYWdlcy9lbXBsb3llZS5qcGdcIlxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSBcIlBob25lOiA1NTUtNTU1LTU1NTVcIjtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gXCJFbWFpbDogd2luZUB2aW5leWFyZHMuY29tXCI7XG5cbiAgICBpbmZvLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGluZm8pO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZW1wbG95ZWUpO1xuXG4gICAgY29udGFjdFVzLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZyk7XG4gICAgY29udGFjdFVzLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RVcztcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QgKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RVcygpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiZnVuY3Rpb24gaG9tZVBhZ2UgKCl7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1wYWdlXCIpXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGxpbmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUaGUgTGFyZ2VzdCBXaW5lIGFuZCBDaGFyY3V0ZXJpZSBzZWxlY3Rpb24gaW4gdGhlIFVTXCIpKTtcblxuICAgIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaGVyb0ltYWdlLnNyYyA9IFwiLi4vaW1hZ2VzL3dpbmVTdG9yZS5qcGdcIjtcbiAgICBoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZChcImhlcm8taW1hZ2VcIilcbiAgICBjb25zdCB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRhZ2xpbmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJzaW5jZSAyMDIyXCIpKTtcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHRhZ2xpbmUpO1xuICAgIFxuICAgIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSAoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIG1lbnUgKCl7XG5cbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZChcIm1lbnVMaXN0XCIpXG4gICAgY29uc3QgaXRlbXMgPSBbXVxuICAgIGNvbnN0IGZvb2RGYWN0b3J5ID0gKGl0ZW1OYW1lLCBwcmljZSwgaW1hZ2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHtpdGVtTmFtZSwgcHJpY2UsIGltYWdlfVxuICAgIH07XG5cbiAgICBjb25zdCBwaW5vdE5vaXIgPSBmb29kRmFjdG9yeShcIlBpbm90IE5vaXJcIiwgMTkuOTksIFwiLi4vaW1hZ2VzL3Bpbm90Tm9pci5qcGdcIik7XG4gICAgY29uc3QgbWVybG90ID0gZm9vZEZhY3RvcnkoXCJNZXJsb3RcIiwgMjQuOTksIFwiLi4vaW1hZ2VzL21lcmxvdC5qcGdcIik7XG4gICAgY29uc3Qgc2F2aW5nb25CbGFuYyA9IGZvb2RGYWN0b3J5KFwiU2F2aWdub24gQmxhbmNcIiwgMTUuOTksIFwiLi4vaW1hZ2VzL3NhdmluZ29uQmxhbmMuanBnXCIpO1xuICAgIGNvbnN0IHBpbm90R3JpZ2lvID0gZm9vZEZhY3RvcnkoXCJQaW5vdCBHcmlnaW9cIiwgMTIuOTksIFwiLi4vaW1hZ2VzL3Bpbm90R3JpZ2lvLmpwZ1wiKVxuICAgIGNvbnN0IHNhbGFtaSA9IGZvb2RGYWN0b3J5KFwiU2FsYW1pXCIsIDEwLCBcIi4uL2ltYWdlcy9zYWxhbWkuanBnXCIpXG4gICAgY29uc3QgY2hlZGRhciA9IGZvb2RGYWN0b3J5KFwiQ2hlZGRhclwiLCA1LCBcIi4uL2ltYWdlcy9jaGVkZGFyLmpwZ1wiKVxuICAgIGl0ZW1zLnB1c2gocGlub3ROb2lyLCBtZXJsb3QsIHNhdmluZ29uQmxhbmMsIHBpbm90R3JpZ2lvLCBzYWxhbWksIGNoZWRkYXIpXG5cbiAgICBpdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKVxuICAgICAgICBjb25zdCB3aW5lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB3aW5lSW1hZ2Uuc3JjID0gZWxlbWVudC5pbWFnZTtcbiAgICAgICAgd2luZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJ0aHVtYm5haWxcIik7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3aW5lV3JhcHBlclwiKTtcbiAgICAgICAgY29uc3Qgd2luZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHdpbmVOYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5pdGVtTmFtZTtcbiAgICAgICAgY29uc3Qgd2luZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHdpbmVQcmljZS50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQucHJpY2V9YDtcbiAgICAgICAgXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQod2luZU5hbWUpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdpbmVQcmljZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQod2luZUltYWdlKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfSlcblxuICAgIHJldHVybiBtZW51TGlzdDtcblxufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCJcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbi8vIGxvYWRIb21lKCk7XG4vLyBsb2FkTWVudSgpO1xubG9hZENvbnRhY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=