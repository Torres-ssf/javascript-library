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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/library.js\");\n\n\n// Display logic\n\n//  Handle form\nconst form = document.getElementById(\"form\");\nconst formButton = document.getElementById(\"button-form\");\nconst overlayContainer = document.querySelector(\".overlay\");\nformButton.onclick = () => {\n  overlayContainer.style.display = 'block';\n  form.style.display = \"block\";\n};\n\nform.addEventListener('animationend', (event) => {\n  if(event.animationName == 'form-hiding') {\n    form.style.display = 'none';\n    form.classList.remove('form-hide');\n  }\n});\n\noverlayContainer.onclick = () => {\n  overlayContainer.classList.add('overlay-fade-out');\n  form.classList.add('form-hide');\n}\n\noverlayContainer.addEventListener('animationend', (event) => {\n  if(event.animationName == 'fade-out') {\n    overlayContainer.style.display = 'none';\n    overlayContainer.classList.remove('overlay-fade-out');\n  }\n});\n\nfunction handleForm() {\n  const title = document.getElementById(\"title\").value;\n  const author = document.getElementById(\"author\").value;\n  const pages = document.getElementById(\"pages\").value;\n  const read = document.getElementById(\"read\").value;\n  const book = new _library__WEBPACK_IMPORTED_MODULE_0__[\"Book\"](title, author, pages, read);\n\n  Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"AddBookToLibrary\"])(book);\n\n  Object(_library__WEBPACK_IMPORTED_MODULE_0__[\"db\"])().store(\"library\", JSON.stringify(_library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flat()));\n}\n\nconst handleSubmit = document.getElementById(\"form\");\nhandleSubmit.onsubmit = () => {\n  handleForm();\n};\n\n\n//# sourceURL=webpack:///./src/display_library.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Book\", function() { return Book; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddBookToLibrary\", function() { return AddBookToLibrary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"db\", function() { return db; });\nconst library = [];\n\nfunction Book(title, author, pages, read) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n    this.read = read;\n    this.status = this.read === \"on\" ? (this.read = \"off\") : (this.read = \"on\");\n}\n\n// add to library\nfunction AddBookToLibrary(book) {\n    library.push(book);\n}\n\n//  Database\nconst db = () => {\n    const store = (key, value) => {\n        return localStorage.setItem(key, value);\n    };\n\n    const getData = async dbKey => {\n        let data = await localStorage.getItem(dbKey);\n        return data;\n    };\n    return {\n        store,\n        getData\n    };\n};\n\n// display library\nfunction render(data) {\n    const container = document.getElementById(\"lib-container\");\n    let ul = document.createElement(\"ul\");\n    ul.className = \"book-list\";\n\n    data.flat().map((book, i) => {\n        let li = document.createElement(\"li\");\n        li.className = \"book-item\";\n        let editButton = document.createElement(\"button\");\n        editButton.setAttribute(\"class\", \"toggle-read\");\n        editButton.innerText = \"Read\";\n        editButton.onclick = e => editBook(e);\n\n        let deleteButton = document.createElement(\"button\");\n        deleteButton.setAttribute(\"class\", \"toggle-delete\");\n        deleteButton.innerText = \"Delete\";\n        deleteButton.onclick = e => deleteBook(e);\n\n        li.setAttribute(\"data-book-index\", i);\n        li.innerHTML = `<img class=\"book-cover\" src=\"./images/image.jpg\">\n                    <h4 class=\"book-title\">${book.title}</h4>\n                    <p class=\"book-author\">${book.author}</p>\n                    <p class=\"book-pages\">${book.pages} pages.</p>\n                    <p>Read: ${book.read}</p>\n                    `;\n\n        li.appendChild(editButton);\n        li.appendChild(deleteButton);\n        ul.appendChild(li);\n        container.appendChild(ul);\n    });\n}\nconst getBookIndex = index => {\n    return library.flat()[index];\n};\n\nconst editBook = e => {\n    let setStatus = e.target.previousSibling.previousSibling;\n    let index = e.target.parentNode.getAttribute(\"data-book-index\");\n    let status = getBookIndex(index).read;\n\n    if (status === \"on\") {\n        getBookIndex(index).read = \"off\";\n        e.target.innerText = \"Read\";\n        setStatus.innerText = \"Read: No\";\n    }\n    if (status === \"off\") {\n        getBookIndex(index).read = \"on\";\n        e.target.innerText = \"Unread\";\n        setStatus.innerText = \"Read: Yes\";\n    }\n\n    db().store(\"library\", JSON.stringify(library.flat()));\n    //window.location.reload();\n};\n\nconst deleteBook = e => {\n    let index = e.target.parentNode.getAttribute(\"data-book-index\");\n    library[0].splice(index, 1);\n    db().store(\"library\", JSON.stringify(library.flat()));\n    window.location.reload();\n};\n\n// When DOM loads\nconst setup = () => {\n    const { getData, store } = db();\n\n    getData(\"library\").then(data => {\n        if (data === null || data.length === 2) {\n            let bookOne = new Book(\"Batman\", \"Sergio\", 40, \"on\");\n            let bookTwo = new Book(\"Superman\", \"Isaac\", 40, \"off\");\n            library.push([bookOne, bookTwo]);\n            store(\"library\", JSON.stringify(library.flat()));\n            window.location.reload();\n        }\n\n        if (data !== null) {\n            getData(\"library\").then(data => {\n                library.push(JSON.parse(data));\n                render(library);\n            });\n        }\n    });\n};\n\nsetup();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (library);\n\n\n//# sourceURL=webpack:///./src/library.js?");

/***/ })

/******/ });