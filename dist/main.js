/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/display_library.js":
/*!********************************!*\
  !*** ./src/display_library.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ \"./src/library.js\");\n\n\n// Display logic\n\n//  Handle form\nconst form = document.getElementById('form');\nlet formButton = document.getElementById('button-form');\nformButton.onclick  =  () => {\n  console.log(\"form working\");\n    form.style.display = 'block'\n\n};\n\n// Get all inputs fields from the form\n// Add all the to Book object\n/// Add to library Array\n// Save the library to database\n// and the we are cool!\n\nfunction handleForm() {\n  let title = document.getElementById('title').value;\n  let author = document.getElementById('author').value;\n  let pages = document.getElementById('pages').value;\n  let read = document.getElementById('read').value;\n  let book = new _library_js__WEBPACK_IMPORTED_MODULE_0__[\"Book\"](title, author, pages, read);\n\n  Object(_library_js__WEBPACK_IMPORTED_MODULE_0__[\"AddBookToLibrary\"])(book);\n  console.log(_library_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flat());\n  Object(_library_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"])().store('library', JSON.stringify(_library_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flat()));\n}\n\nlet handleSubmit = document.getElementById('form');\nhandleSubmit.onsubmit = (e) => {\n\n  console.log(\"Testing submit button\");\n  handleForm();\n};\n\n\n//# sourceURL=webpack:///./src/display_library.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/library.js\");\n/* harmony import */ var _display_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display_library */ \"./src/display_library.js\");\nconsole.log(\"I am up and running\")\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/*! exports provided: Book, AddBookToLibrary, render, default, db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Book\", function() { return Book; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddBookToLibrary\", function() { return AddBookToLibrary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"db\", function() { return db; });\nconsole.log('library is working now');\n\nconst library = [];\n\n// console.log(library);\nfunction Book(title, author,pages, read) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n    this.read = read;\n\n}\n\n// add to library\nfunction AddBookToLibrary(book) {\n  library.push(book)\n}\n\n//  Database\nconst db = () => {\n    const  store = (key,value) => {\n        return localStorage.setItem(key,value)\n    };\n\n    const getData = async (dbKey) => {\n        let data = await localStorage.getItem(dbKey);\n        return data\n    };\n    return {store, getData}\n};\n\n// display library\nfunction render(data) {\n    const container = document.getElementById(\"lib-container\");\n    console.log(data);\n    data.flat().map((book, i) => {\n        let ul = document.createElement('ul');\n        let li = document.createElement('li');\n        li.innerHTML = `<p>Title: ${book.title}</p>\n                        <p>Author: ${book.author}</p>\n                        <p>Pages: ${book.pages}</p>\n                        <p>Finished: ${book.read}</p>\n                        <button id='toggle-read'>Read</button>`;\n        ul.appendChild(li);\n        container.appendChild(ul);\n    });\n}\n\n\n// When DOM loads\nconst setup = () => {\n    const {getData, store} = db();\n\n   getData('library').then( data => {\n\n       if(data === null) {\n           let bookOne = new Book(\"Batman\", \"Sergio\", 40, false);\n           let bookTwo = new Book(\"Superman\", \"Isaac\", 40, false);\n           library.push([bookOne, bookTwo]);\n           store('library',JSON.stringify(library.flat()))\n            window.location.reload()\n       }\n\n       if(data !== null){\n           getData('library').then(data => {\n\n              library.push(JSON.parse(data));\n               render(library)\n           })\n       }\n   });\n\n};\n\nsetup();\n\n\n\n\n// Add data to database\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (library);\n\n\n\n//# sourceURL=webpack:///./src/library.js?");

/***/ })

/******/ });