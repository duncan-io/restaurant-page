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




function heading (){
    const header = document.createElement("div");
    header.classList.add("header")
    const logo = document.createElement("h1");
    logo.textContent = "Grand Wine";
    const menuItems = ["Home", "Our Menu", "Contact Us"];
    const navMenu = document.createElement("ul");
    navMenu.classList.add("navMenu")
    menuItems.forEach(element => {
        const item = document.createElement("li");
        item.textContent = element;
        navMenu.appendChild(item);
    })

    header.appendChild(logo);
    header.appendChild(navMenu)

    return header
}
function loadMe (item){
    const content = document.getElementById("content");
    content.appendChild(item);
}

loadMe(heading());

(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3JDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3hCdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7OztVQzlDZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDRDtBQUNPOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlEQUFRO0FBQ1IsaURBQVE7QUFDUixvREFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnRhY3RVcyAoKXtcbiAgICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RVcy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFVzXCIpXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBjb25zdCBzdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHN1YkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlJlYWNoIG91dCB0byBvdXIgdGVhbSFcIjtcblxuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaW5mb1dyYXBwZXJcIilcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBlbXBsb3llZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZW1wbG95ZWUuY2xhc3NMaXN0LmFkZChcImluZm9JbWFnZVwiKVxuICAgIGVtcGxveWVlLnNyYyA9IFwiLi4vaW1hZ2VzL2VtcGxveWVlLmpwZ1wiXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmU6IDU1NS01NTUtNTU1NVwiO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOiB3aW5lQHZpbmV5YXJkcy5jb21cIjtcblxuICAgIGluZm8uYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbXBsb3llZSk7XG5cbiAgICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIGNvbnRhY3RVcy5hcHBlbmRDaGlsZChzdWJIZWFkaW5nKTtcbiAgICBjb250YWN0VXMuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgICByZXR1cm4gY29udGFjdFVzO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCAoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFVzKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJmdW5jdGlvbiBob21lUGFnZSAoKXtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2VcIilcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkbGluZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlRoZSBMYXJnZXN0IFdpbmUgYW5kIENoYXJjdXRlcmllIHNlbGVjdGlvbiBpbiB0aGUgVVNcIikpO1xuXG4gICAgY29uc3QgaGVyb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBoZXJvSW1hZ2Uuc3JjID0gXCIuLi9pbWFnZXMvd2luZVN0b3JlLmpwZ1wiO1xuICAgIGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaGVyby1pbWFnZVwiKVxuICAgIGNvbnN0IHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGFnbGluZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcInNpbmNlIDIwMjJcIikpO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQodGFnbGluZSk7XG4gICAgXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lICgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lUGFnZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiZnVuY3Rpb24gbWVudSAoKXtcblxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKFwibWVudUxpc3RcIilcbiAgICBjb25zdCBpdGVtcyA9IFtdXG4gICAgY29uc3QgZm9vZEZhY3RvcnkgPSAoaXRlbU5hbWUsIHByaWNlLCBpbWFnZSkgPT4ge1xuICAgICAgICByZXR1cm4ge2l0ZW1OYW1lLCBwcmljZSwgaW1hZ2V9XG4gICAgfTtcblxuICAgIGNvbnN0IHBpbm90Tm9pciA9IGZvb2RGYWN0b3J5KFwiUGlub3QgTm9pclwiLCAxOS45OSwgXCIuLi9pbWFnZXMvcGlub3ROb2lyLmpwZ1wiKTtcbiAgICBjb25zdCBtZXJsb3QgPSBmb29kRmFjdG9yeShcIk1lcmxvdFwiLCAyNC45OSwgXCIuLi9pbWFnZXMvbWVybG90LmpwZ1wiKTtcbiAgICBjb25zdCBzYXZpbmdvbkJsYW5jID0gZm9vZEZhY3RvcnkoXCJTYXZpZ25vbiBCbGFuY1wiLCAxNS45OSwgXCIuLi9pbWFnZXMvc2F2aW5nb25CbGFuYy5qcGdcIik7XG4gICAgY29uc3QgcGlub3RHcmlnaW8gPSBmb29kRmFjdG9yeShcIlBpbm90IEdyaWdpb1wiLCAxMi45OSwgXCIuLi9pbWFnZXMvcGlub3RHcmlnaW8uanBnXCIpXG4gICAgY29uc3Qgc2FsYW1pID0gZm9vZEZhY3RvcnkoXCJTYWxhbWlcIiwgMTAsIFwiLi4vaW1hZ2VzL3NhbGFtaS5qcGdcIilcbiAgICBjb25zdCBjaGVkZGFyID0gZm9vZEZhY3RvcnkoXCJDaGVkZGFyXCIsIDUsIFwiLi4vaW1hZ2VzL2NoZWRkYXIuanBnXCIpXG4gICAgaXRlbXMucHVzaChwaW5vdE5vaXIsIG1lcmxvdCwgc2F2aW5nb25CbGFuYywgcGlub3RHcmlnaW8sIHNhbGFtaSwgY2hlZGRhcilcblxuICAgIGl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpXG4gICAgICAgIGNvbnN0IHdpbmVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHdpbmVJbWFnZS5zcmMgPSBlbGVtZW50LmltYWdlO1xuICAgICAgICB3aW5lSW1hZ2UuY2xhc3NMaXN0LmFkZChcInRodW1ibmFpbFwiKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndpbmVXcmFwcGVyXCIpO1xuICAgICAgICBjb25zdCB3aW5lTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgd2luZU5hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lml0ZW1OYW1lO1xuICAgICAgICBjb25zdCB3aW5lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgd2luZVByaWNlLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC5wcmljZX1gO1xuICAgICAgICBcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3aW5lTmFtZSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQod2luZVByaWNlKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh3aW5lSW1hZ2UpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIG1lbnVMaXN0O1xuXG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIlxuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gaGVhZGluZyAoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJHcmFuZCBXaW5lXCI7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1wiSG9tZVwiLCBcIk91ciBNZW51XCIsIFwiQ29udGFjdCBVc1wiXTtcbiAgICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdk1lbnVcIilcbiAgICBtZW51SXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG4gICAgICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSlcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2TWVudSlcblxuICAgIHJldHVybiBoZWFkZXJcbn1cbmZ1bmN0aW9uIGxvYWRNZSAoaXRlbSl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW0pO1xufVxuXG5sb2FkTWUoaGVhZGluZygpKTtcblxubG9hZEhvbWUoKTtcbmxvYWRNZW51KCk7XG5sb2FkQ29udGFjdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==