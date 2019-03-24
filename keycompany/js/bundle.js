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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// ANIME MAIN BLOCK\nvar bottomBlock = document.getElementById('bottomBlock');\nvar bottomProjects = document.getElementsByClassName('bottom-block__projects');\nvar bottomDone = document.getElementsByClassName('bottom-block__done');\nvar bottomDev = document.getElementsByClassName('bottom-block__develop');\nvar bottomIcon = document.getElementsByClassName('bottom-block__icon');\nvar projectPage = document.getElementsByClassName('project-page');\nvar headerProject = document.getElementById('headerProject');\nvar projectTitle = document.getElementsByClassName('project__title');\nvar projectDesc = document.getElementsByClassName('project__description');\nvar projectWpapperImg = document.getElementsByClassName('project-foto__wrapper-img');\nvar projectWpapperTitle = document.getElementsByClassName('project-foto__wrapper-title');\nvar projectCount = document.getElementsByClassName('project__count');\nvar tl = new TimelineMax();\nvar tl2 = new TimelineMax(); // **************************************************\n\nwindow.onload = function () {\n  function bodyShow() {\n    document.getElementById('body').style.display = 'block';\n  }\n\n  bodyShow(); // DECLARATE EVENT, WHEN PULL WHEEL START 2 PART OF ANIMATION BOTTOM-BLOCK\n\n  document.getElementById(\"body\").addEventListener(\"wheel\", startAnime); // START 2 PART OF BOTTOM-BLOCK ANIMATION AFTER PULL THE WHEEL (PART 2 OF ANIMATION)\n\n  function startAnime() {\n    document.getElementById(\"body\").removeEventListener(\"wheel\", startAnime);\n    tl2.to(bottomIcon, .15, {\n      opacity: 0,\n      x: 40,\n      y: 0,\n      ease: Power2.ease\n    }).to(bottomDev, .15, {\n      opacity: 0,\n      x: 40,\n      y: 0,\n      ease: Power2.ease\n    }).to(bottomDone, .15, {\n      opacity: 0,\n      x: 40,\n      y: 0,\n      ease: Power2.ease\n    }).to(bottomProjects, .15, {\n      opacity: 0,\n      x: 40,\n      y: 0,\n      ease: Power2.ease\n    }).to(bottomBlock, .5, {\n      opacity: 1,\n      x: '0%',\n      y: 0,\n      ease: Power2.ease\n    }).to(bottomBlock, .7, {\n      opacity: 1,\n      x: '0%',\n      height: '100vh',\n      ease: Power2.ease\n    }).to(projectPage, .2, {\n      opacity: 1,\n      x: 0,\n      visibility: 'visible',\n      ease: Power2.ease\n    }).from(headerProject, .4, {\n      opacity: 0,\n      x: 0,\n      ease: Power2.ease\n    }).from(projectTitle, .4, {\n      opacity: 0,\n      x: -20,\n      ease: Power2.ease\n    }).from(projectDesc, .4, {\n      opacity: 0,\n      x: -20,\n      ease: Power2.ease\n    }).from(projectWpapperImg, .4, {\n      opacity: 0,\n      x: 0,\n      y: 60,\n      ease: Power2.ease\n    }).from(projectWpapperTitle, .4, {\n      opacity: 0,\n      y: 60,\n      ease: Power2.ease\n    }, '-=.4').from(projectCount, .4, {\n      opacity: 0,\n      y: 60,\n      ease: Power2.ease\n    });\n  } // END START 2 PART OF BOTTOM-BLOCK ANIMATION AFTER PULL THE WHEEL (PART 2 OF ANIMATION)\n  // ON WINDOW LOAD BEGIN ANIMATION OF THE BOTTOM-BLOCK (PART 1 OF ANIMATION)\n\n\n  tl.to(bottomBlock, 1.5, {\n    opacity: 1,\n    x: '18.5%',\n    y: 0,\n    ease: Power2.ease\n  }).to(bottomProjects, .3, {\n    opacity: 1,\n    x: 20,\n    y: 0,\n    ease: Power2.ease\n  }).to(bottomDone, .3, {\n    opacity: 1,\n    x: 20,\n    y: 0,\n    ease: Power2.ease\n  }).to(bottomDev, .3, {\n    opacity: 1,\n    x: 20,\n    y: 0,\n    ease: Power2.ease\n  }).to(bottomIcon, .3, {\n    opacity: 1,\n    x: 20,\n    y: 0,\n    ease: Power2.ease\n  }); // END ON WINDOW LOAD BEGIN ANIMATION OF THE BOTTOM-BLOCK (PART 1 OF ANIMATION)\n};\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });