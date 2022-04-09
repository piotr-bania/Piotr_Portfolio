/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/animated_text.js":
/*!**************************************!*\
  !*** ./src/scripts/animated_text.js ***!
  \**************************************/
/***/ (() => {

// ----------------- Header animation -----------------
var words = ["develop apps", "shape Metaverse", "design in 3D", "build websites", "create things"];
var cursor = gsap.to('.cursor', {
  opacity: 0,
  ease: "power2.inOut",
  repeat: -1
});
var masterTL = gsap.timeline({
  repeat: -1
});
words.forEach(function (word) {
  var tl = gsap.timeline({
    repeat: 1,
    yoyo: true,
    repeatDelay: 2
  });
  tl.to('.text', {
    duration: 1,
    text: word
  });
  masterTL.add(tl);
}); // // ----------------- Text animation -----------------
// const textReveal = gsap.timeline()
// textReveal.from(".line", 1.8, {
//     y: 100, ease: "power4.out", delay: 1, skewY: 10, stagger: {
//         amount: 0.4
//     }
// })

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ (() => {

var hamburgerMenu = document.querySelector('.open-menu');
var navContent = document.querySelector('#nav-content');
var closeNavContent = document.querySelector('#nav-content');
hamburgerMenu.addEventListener('click', function () {
  navContent.classList.add('show');
  document.body.style.overflow = "hidden";
});
closeNavContent.addEventListener('click', function () {
  navContent.classList.remove('show');
  document.body.style.overflow = "auto";
});

/***/ }),

/***/ "./src/scripts/progress_bar.js":
/*!*************************************!*\
  !*** ./src/scripts/progress_bar.js ***!
  \*************************************/
/***/ (() => {

// Progress bar
var progressSection = document.querySelector('.progressSection');
var progressBar = document.querySelector('.progressBar');
var progressNum = document.querySelector('.progressNum');
var x, y;

function updateProgressBar() {
  progressBar.style.height = "".concat(getScrollPercentage(), "%");
  progressNum.innerText = "".concat(Math.ceil(getScrollPercentage()), "%");
  requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage() {
  return window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
}

updateProgressBar();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/fonts/Expansiva/Expansiva.otf */ "./src/assets/fonts/Expansiva/Expansiva.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/fonts/Expansiva/Expansiva-bold.otf */ "./src/assets/fonts/Expansiva/Expansiva-bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/fonts/Arkitech/Arkitech-Light.ttf */ "./src/assets/fonts/Arkitech/Arkitech-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/fonts/Arkitech/Arkitech-Medium.ttf */ "./src/assets/fonts/Arkitech/Arkitech-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/images/backgrounds/PiotrBania.svg */ "./src/assets/images/backgrounds/PiotrBania.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/images/backgrounds/Portfolio.svg */ "./src/assets/images/backgrounds/Portfolio.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/images/backgrounds/Lab.svg */ "./src/assets/images/backgrounds/Lab.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/images/backgrounds/Skills.svg */ "./src/assets/images/backgrounds/Skills.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/images/backgrounds/About.svg */ "./src/assets/images/backgrounds/About.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/images/backgrounds/contact.svg */ "./src/assets/images/backgrounds/contact.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Expansiva\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Expansiva Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n  font-family: \"Arkitech Light\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n@font-face {\n  font-family: \"Arkitech Medium\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n:root {\n  --purple: #7161F5;\n  --green: #61F570;\n  --red: #F57061;\n  --darker: #040117;\n  --dark: #07032E;\n  --light: #EBE8FE;\n  --lighter: #FFFFFF;\n  --background-text: rgba(113, 97, 245, 0.05);\n  --grey-text: #ABABAB;\n  --body-font: \"obvia\";\n  --header-font: \"Arkitech Light\";\n  --header-font-bold: \"Arkitech Medium\";\n  --header-alternative: \"Expansiva\";\n  --header-alternative-bold: \"Expansiva Bold\";\n  --links-font-size: 12px;\n  --text-font-size: 16px;\n  --main-shadow:\n      2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),\n      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05),\n      12.5px 12.5px 10px rgba(0, 0, 0, 0.042),\n      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.035),\n      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.028),\n      100px 100px 80px rgba(0, 0, 0, 0.02);\n  --hover-shadow:\n      2.8px 2.8px 2.2px rgba(0, 0, 0, 0.1),\n      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.072),\n      12.5px 12.5px 10px rgba(0, 0, 0, 0.06),\n      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.05),\n      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.04),\n      100px 100px 80px rgba(0, 0, 0, 0.028);\n  --animate-duration: 1s;\n  --animate-delay: 1s;\n  --animate-repeat: 1;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  list-style: none;\n}\n\nhtml {\n  box-sizing: inherit;\n  scroll-behavior: smooth;\n  margin: auto;\n}\n\nbody {\n  font-family: var(--body-font);\n  font-size: var(--text-font-size);\n  line-height: 1.6;\n  color: var(--light);\n  user-select: none;\n}\n\nh1 {\n  font-family: var(--header-alternative);\n  font-size: 2.074rem;\n  line-height: 1.2;\n  color: var(--light);\n  padding-bottom: 10px;\n}\n\nh2 {\n  font-family: var(--header-alternative);\n  font-size: 1.728rem;\n  line-height: 1.2;\n  color: var(--grey-text);\n  padding-bottom: 10px;\n}\n\nh3 {\n  font-family: var(--header-alternative);\n  font-size: 1.44rem;\n  line-height: 1.2;\n  color: var(--red);\n  padding-bottom: 10px;\n}\n\np {\n  font-family: var(--body-font);\n  font-size: var(--text-font-size);\n  line-height: 1.6;\n}\n\na {\n  text-shadow: var(--main-shadow);\n  font-family: var(--header-font);\n  font-size: var(--links-font-size);\n  color: var(--grey-text);\n  transition: all 0.3s ease-in-out;\n}\n\na:hover {\n  color: var(--green);\n}\n\nsection {\n  min-height: 100vh;\n  min-width: 100vw;\n  overflow: hidden;\n  display: flex;\n  padding: 75px 0;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.container {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 80%;\n  margin: 0 auto;\n  max-width: 1468px;\n  z-index: 80;\n}\n\n#section-a {\n  height: 100vh;\n}\n#section-a .container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n#section-a h1 {\n  color: var(--light);\n}\n\n#section-b .container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n#section-c .container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n\n#section-d .container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n\n#section-e .container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n\n#section-f .container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n\n#section-a {\n  background: linear-gradient(to right, var(--darker), var(--dark));\n}\n#section-a .container {\n  background-position: left;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#section-b,\n#section-d,\n#section-f {\n  background: linear-gradient(to left, var(--darker), var(--dark));\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n#section-b .container,\n#section-d .container,\n#section-f .container {\n  background-position: left;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#section-c,\n#section-e {\n  background-image: linear-gradient(to left, var(--lighter), var(--light));\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n#section-c .container,\n#section-e .container {\n  background-position: right;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n#section-c h1,\n#section-c p,\n#section-e h1,\n#section-e p {\n  color: var(--dark);\n}\n\n.logo {\n  position: fixed;\n  width: 70px;\n  height: 70px;\n  left: 5%;\n  top: 5%;\n  z-index: 100;\n}\n\n.menu {\n  position: fixed;\n  width: 100%;\n  right: 10vw;\n  top: 57px;\n  z-index: 90;\n  display: flex;\n  justify-content: end;\n  align-content: center;\n  visibility: visible;\n}\n.menu ul {\n  display: flex;\n  padding-top: 9px;\n}\n.menu ul li {\n  padding-right: 3vw;\n}\n\n.open-menu {\n  position: fixed;\n  right: 5%;\n  top: 5%;\n  width: 60px;\n  height: 60px;\n  padding: 7px;\n  cursor: pointer;\n  z-index: 98;\n  visibility: hidden;\n}\n\n.closed-menu {\n  position: fixed;\n  right: 5%;\n  top: 5%;\n  width: 60px;\n  height: 60px;\n  padding: 7px;\n  cursor: pointer;\n  z-index: 98;\n  visibility: hidden;\n}\n\n#nav-content {\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 75%;\n  height: 100%;\n  max-width: 600px;\n  z-index: 99;\n  background: linear-gradient(90deg, var(--dark) 0%, var(--darker) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  transform: translateX(105%);\n  transition: 0.5s ease transform;\n  visibility: hidden;\n}\n#nav-content a {\n  display: inline-block;\n  width: 100%;\n  color: var(--light);\n  transition: all 0.3s ease-in-out;\n}\n#nav-content a:hover {\n  color: var(--green);\n}\n\n#nav-content.show {\n  transform: translateX(0);\n  box-shadow: 0px 0px 7.8px rgba(0, 0, 0, 0.053), 0px 0px 17.2px rgba(0, 0, 0, 0.078), 0px 0px 28.8px rgba(0, 0, 0, 0.096), 0px 0px 43.4px rgba(0, 0, 0, 0.111), 0px 0px 62.6px rgba(0, 0, 0, 0.125), 0px 0px 88.6px rgba(0, 0, 0, 0.139), 0px 0px 125.7px rgba(0, 0, 0, 0.154), 0px 0px 182.5px rgba(0, 0, 0, 0.172), 0px 0px 281.3px rgba(0, 0, 0, 0.197), 0px 0px 500px rgba(0, 0, 0, 0.25);\n}\n\n#nav-content .section-heading {\n  text-align: left;\n  font-size: 1.65rem;\n  font-family: var(--header-font);\n  color: var(--purple);\n  padding-bottom: 20px;\n}\n\n#nav-content .wrapper {\n  width: 70%;\n  position: relative;\n}\n\n#nav-content .closed-menu {\n  position: absolute;\n  left: 5%;\n  top: 5%;\n  transition: 0.3s ease-in-out;\n}\n\n.canvas-1 {\n  position: fixed;\n  top: 0;\n  max-width: 100%;\n  max-height: 100%;\n}\n\nstrong {\n  font-family: var(--header-alternative);\n  color: var(--green);\n}\n\nb {\n  font-family: var(--header-alternative-bold);\n  color: var(--green);\n}\n\nspan {\n  color: var(--purple);\n}\n\n.text {\n  color: var(--light);\n}\n\n.cursor {\n  color: var(--green);\n}\n\n#section-a .container {\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n}\n#section-a .container .heroText {\n  grid-area: 2/2/3/9;\n}\n#section-a .container .upper-heading {\n  padding-bottom: 10px;\n}\n#section-a .container .lower-heading {\n  padding-bottom: 20px;\n}\n\n#section-b .container {\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(11);\n}\n#section-b .container .current,\n#section-b .container .other {\n  padding-top: 50px;\n  padding-bottom: 100px;\n}\n#section-b .container .project {\n  padding-bottom: 50px;\n  z-index: 50;\n}\n#section-b .container .project img {\n  width: 80%;\n  margin-left: 20%;\n  border: 1px solid var(--purple);\n  border-radius: 20px;\n  opacity: 0.66;\n  filter: grayscale(100%);\n  transition: all 0.3s ease-in-out;\n}\n#section-b .container .project img:hover {\n  opacity: 1;\n  filter: grayscale(0%);\n  border-color: var(--green);\n}\n#section-b .container .project ul {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 10%;\n  word-spacing: 5px;\n}\n#section-b .container .project ul a {\n  padding-left: 50px;\n}\n#section-b .container .current {\n  grid-area: 1/3/2/12;\n}\n#section-b .container .project1 {\n  grid-area: 2/1/4/5;\n}\n#section-b .container .project2 {\n  grid-area: 3/9/5/15;\n}\n#section-b .container .project3 {\n  grid-area: 4/4/6/8;\n}\n#section-b .container .other {\n  grid-area: 6/3/7/12;\n}\n#section-b .container .project4 {\n  grid-area: 7/1/9/5;\n}\n#section-b .container .project5 {\n  grid-area: 8/9/10/15;\n}\n#section-b .container .project6 {\n  grid-area: 9/4/11/8;\n}\n\n#section-c .container {\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(2);\n}\n#section-c .container .lab {\n  grid-area: 1/3/2/12;\n  padding-top: 50px;\n  padding-bottom: 100px;\n}\n#section-c .container .labProject {\n  padding-bottom: 50px;\n  margin: auto;\n}\n#section-c .container .labProject img {\n  width: 80%;\n  margin-left: 10%;\n  border: 1px solid var(--purple);\n  border-radius: 20px;\n  opacity: 0.66;\n  filter: grayscale(100%);\n  transition: all 0.3s ease-in-out;\n}\n#section-c .container .labProject img:hover {\n  opacity: 1;\n  filter: grayscale(0%);\n  border-color: var(--green);\n}\n#section-c .container .labProject ul {\n  display: flex;\n  justify-content: space-between;\n  margin-right: 10%;\n  word-spacing: 5px;\n}\n#section-c .container .labProject ul a {\n  padding-left: 50px;\n}\n#section-c .container .lab1 {\n  grid-area: 2/1/3/5;\n}\n#section-c .container .lab2 {\n  grid-area: 2/5/3/9;\n}\n#section-c .container .lab3 {\n  grid-area: 2/9/3/14;\n}\n\n#section-e .vl {\n  border-left: 2px solid var(--purple);\n  height: 300px;\n  position: absolute;\n}\n#section-e p {\n  position: relative;\n  left: 20px;\n  max-width: 80%;\n  display: inline;\n}\n#section-e .purple {\n  color: var(--purple);\n}\n#section-e .purple-blue {\n  color: var(--purple-blue);\n}\n#section-e .blue-turquoise {\n  color: var(--blue-turquoise);\n}\n#section-e .red {\n  color: var(--red);\n}\n#section-e .green {\n  color: var(--green);\n}\n#section-e .grey {\n  color: var(--grey-text);\n}\n\nbutton {\n  font-family: var(--header-font);\n  font-size: var(--links-font-size);\n  color: var(--light);\n  border-radius: 30px 10px 20px 10px;\n  padding: 15px 30px;\n  justify-content: center;\n  text-align: center;\n  text-shadow: var(--main-shadow);\n  white-space: nowrap;\n  border: 1px solid var(--dark);\n  background: linear-gradient(-45deg, #7161F5 0%, #0E065C 100%);\n  background-size: 400% 400%;\n  animation: animate 5s ease-in-out infinite;\n  transition: all 0.3s ease-in-out;\n  box-shadow: var(--main-shadow);\n}\nbutton:hover {\n  cursor: pointer;\n  border: 1px solid #0AA119;\n  background: linear-gradient(-45deg, #61F570 0%, #0AA119 100%);\n  box-shadow: var(--hover-shadow);\n  text-shadow: var(--hover-shadow);\n}\n\n@keyframes animate {\n  0% {\n    background-position: 0 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.progressSection {\n  position: fixed;\n  right: 5%;\n  bottom: 5%;\n  width: 1px;\n  height: 150px;\n  display: flex;\n  justify-content: space-between;\n  will-change: transform;\n  transition: 0.3s ease-in-out;\n  z-index: 90;\n}\n\n.progressBarWrap {\n  position: relative;\n  width: 1px;\n  border: none;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: var(--purple);\n  box-shadow: var(--main-shadow);\n}\n\n.progressBar {\n  position: absolute;\n  transform: translateX(-1px);\n  bottom: 0;\n  width: 3px;\n  border: 1px solid var(--green);\n  border-radius: 10px;\n  height: 0%;\n  background-color: var(--green);\n  box-shadow: var(--main-shadow);\n}\n\n.progressNum {\n  font-family: var(--header-font);\n  font-size: var(--links-font-size);\n  color: var(--grey-text);\n  position: fixed;\n  right: 10px;\n  bottom: 0;\n}\n\n.strip {\n  position: fixed;\n  width: 1px;\n  height: 100vh;\n  background: linear-gradient(0deg, rgba(113, 97, 245, 0) 0%, rgba(113, 97, 245, 0.3019607843) 100%);\n  z-index: 50;\n}\n\n.one {\n  left: 26.66%;\n  top: 0;\n}\n\n.two {\n  left: 50%;\n  top: 0;\n}\n\n.three {\n  right: 26.66%;\n  top: 0;\n}\n\n@media screen and (min-width: 769px) and (max-width: 1279px) {\n  h1 {\n    font-size: 1.602rem;\n  }\n\n  h2 {\n    font-size: 1.424rem;\n  }\n\n  h3 {\n    font-size: 1.266rem;\n  }\n\n  p {\n    font-size: calc(var(--text-font-size) - 1px);\n  }\n\n  button {\n    font-size: calc(var(--links-font-size) - 1px);\n    border-radius: 28px 9px 18px 9px;\n    padding: 13px 26px;\n  }\n\n  #section-a .container {\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n  }\n  #section-a .container .heroText {\n    grid-area: 2/1/3/12;\n  }\n\n  #section-b .container {\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12);\n  }\n  #section-b .container .current,\n#section-b .container .other {\n    padding-bottom: 100px;\n  }\n  #section-b .container .project {\n    padding-bottom: 50px;\n  }\n  #section-b .container .current {\n    grid-area: 1/2/2/12;\n  }\n  #section-b .container .project1 {\n    grid-area: 2/1/3/8;\n  }\n  #section-b .container .project2 {\n    grid-area: 3/6/4/15;\n  }\n  #section-b .container .project3 {\n    grid-area: 4/4/5/11;\n  }\n  #section-b .container .other {\n    grid-area: 5/2/6/12;\n  }\n  #section-b .container .project4 {\n    grid-area: 6/1/7/8;\n  }\n  #section-b .container .project5 {\n    grid-area: 7/6/8/15;\n  }\n  #section-b .container .project6 {\n    grid-area: 8/4/9/11;\n  }\n\n  #section-c .container {\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(6);\n  }\n  #section-c .container .lab1 {\n    grid-area: 2/1/3/7;\n  }\n  #section-c .container .lab2 {\n    grid-area: 2/7/3/13;\n  }\n  #section-c .container .lab3 {\n    grid-area: 3/4/4/10;\n  }\n\n  #section-c .container {\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(6);\n  }\n  #section-c .container .lab1 {\n    grid-area: 2/1/3/7;\n  }\n  #section-c .container .lab2 {\n    grid-area: 2/7/3/13;\n  }\n  #section-c .container .lab3 {\n    grid-area: 3/4/4/10;\n  }\n}\n@media screen and (max-width: 768px) {\n  .logo {\n    width: 50px;\n    height: 50px;\n  }\n\n  .menu {\n    visibility: hidden;\n  }\n\n  .open-menu,\n.closed-menu {\n    width: 50px;\n    height: 50px;\n    visibility: visible;\n  }\n\n  #nav-content {\n    visibility: visible;\n  }\n\n  #nav-content a {\n    font-size: 1.5rem;\n  }\n\n  h1 {\n    font-size: 1.296rem;\n  }\n\n  h2 {\n    font-size: 1.215rem;\n  }\n\n  h3 {\n    font-size: 1.138rem;\n  }\n\n  p {\n    font-size: calc(var(--text-font-size) - 2px);\n  }\n\n  button {\n    font-size: calc(var(--links-font-size) - 2px);\n    border-radius: 26px 8px 16px 8px;\n    padding: 12px 24px;\n  }\n\n  .heading {\n    width: 80%;\n    left: 10%;\n  }\n\n  .heroText {\n    left: 11%;\n    bottom: 16%;\n  }\n\n  .upper-heading {\n    padding-bottom: 10px;\n  }\n\n  .lower-heading {\n    padding-bottom: 20px;\n  }\n\n  #section-a .container {\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n  }\n  #section-a .container .heroText {\n    grid-area: 2/1/3/15;\n  }\n\n  #section-b .container {\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12);\n  }\n  #section-b .container .current,\n#section-b .container .other {\n    padding-bottom: 100px;\n  }\n  #section-b .container .project {\n    padding-bottom: 50px;\n  }\n  #section-b .container .project img {\n    margin-left: 10%;\n    opacity: 1;\n  }\n  #section-b .container .project ul {\n    margin-left: 0%;\n    margin-right: 10%;\n  }\n  #section-b .container .current {\n    grid-area: 1/1/2/15;\n  }\n  #section-b .container .project1 {\n    grid-area: 2/1/3/15;\n  }\n  #section-b .container .project2 {\n    grid-area: 3/1/4/15;\n  }\n  #section-b .container .project3 {\n    grid-area: 4/1/5/15;\n  }\n  #section-b .container .other {\n    grid-area: 5/1/6/15;\n  }\n  #section-b .container .project4 {\n    grid-area: 6/1/7/15;\n  }\n  #section-b .container .project5 {\n    grid-area: 7/1/8/15;\n  }\n  #section-b .container .project6 {\n    grid-area: 8/1/9/15;\n  }\n\n  #section-c .container {\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12);\n  }\n  #section-c .container .lab1 {\n    grid-area: 2/1/3/15;\n  }\n  #section-c .container .lab2 {\n    grid-area: 3/1/4/15;\n  }\n  #section-c .container .lab3 {\n    grid-area: 4/1/5/15;\n  }\n  #section-c .container .labProject {\n    padding-bottom: 50px;\n  }\n  #section-c .container .labProject img {\n    margin-left: 10%;\n    opacity: 1;\n  }\n  #section-c .container .labProject ul {\n    margin-left: 0%;\n    margin-right: 10%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;EACI,wBAAA;EACA,4CAAA;AACJ;AAEA;EACI,6BAAA;EACA,4CAAA;AAAJ;AAIA;EACI,6BAAA;EACA,4CAAA;AAFJ;AAKA;EACI,8BAAA;EACA,4CAAA;AAHJ;AAQA;EAEI,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,2CAAA;EACA,oBAAA;EAGA,oBAAA;EACA,+BAAA;EACA,qCAAA;EACA,iCAAA;EACA,2CAAA;EAGA,uBAAA;EACA,sBAAA;EAGA;;;;;;0CAAA;EAOA;;;;;;2CAAA;EASA,sBAAA;EACA,mBAAA;EACA,mBAAA;AAfJ;;AAkBA;;;EAGI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;EACA,gBAAA;AAfJ;;AAkBA;EACI,mBAAA;EACA,uBAAA;EACA,YAAA;AAfJ;;AAkBA;EACI,6BAAA;EACA,gCAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;AAfJ;;AAoBA;EACI,sCAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;AAjBJ;;AAoBA;EACI,sCAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;AAjBJ;;AAoBA;EACI,sCAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;AAjBJ;;AAoBA;EACI,6BAAA;EACA,gCAAA;EACA,gBAAA;AAjBJ;;AAoBA;EACI,+BAAA;EACA,+BAAA;EACA,iCAAA;EACA,uBAAA;EACA,gCAAA;AAjBJ;;AAoBA;EACI,mBAAA;AAjBJ;;AAsBA;EACI,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;AAnBJ;;AAsBA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,UAAA;EACA,cAAA;EACA,iBAAA;EACA,WAAA;AAnBJ;;AAsBA;EACI,aAAA;AAnBJ;AAqBI;EACI,yDAAA;AAnBR;AAsBI;EACI,mBAAA;AApBR;;AAyBI;EACI,yDAAA;AAtBR;;AA2BI;EACI,yDAAA;AAxBR;;AA6BI;EACI,yDAAA;AA1BR;;AA+BI;EACI,yDAAA;AA5BR;;AAiCI;EACI,yDAAA;AA9BR;;AAkCA;EACI,iEAAA;AA/BJ;AAiCI;EACI,yBAAA;EACA,4BAAA;EACA,wBAAA;AA/BR;;AAmCA;;;EAGI,gEAAA;EACA,kBAAA;EACA,qBAAA;AAhCJ;AAkCI;;;EACI,yBAAA;EACA,4BAAA;EACA,wBAAA;AA9BR;;AAkCA;;EAEI,wEAAA;EACA,kBAAA;EACA,qBAAA;AA/BJ;AAiCI;;EACI,0BAAA;EACA,4BAAA;EACA,wBAAA;AA9BR;AAiCI;;;;EAEI,kBAAA;AA7BR;;AAmCA;EACI,eAAA;EACA,WAAA;EACA,YAAA;EACA,QAAA;EACA,OAAA;EACA,YAAA;AAhCJ;;AAmCA;EACI,eAAA;EACA,WAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;EACA,oBAAA;EACA,qBAAA;EACA,mBAAA;AAhCJ;AAkCI;EACI,aAAA;EACA,gBAAA;AAhCR;AAkCQ;EACI,kBAAA;AAhCZ;;AAqCA;EACI,eAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AAlCJ;;AAqCA;EACI,eAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AAlCJ;;AAqCA;EACI,eAAA;EACA,QAAA;EACA,MAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;EACA,sEAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,2BAAA;EACA,+BAAA;EACA,kBAAA;AAlCJ;AAoCI;EACI,qBAAA;EACA,WAAA;EACA,mBAAA;EACA,gCAAA;AAlCR;AAqCI;EACI,mBAAA;AAnCR;;AAuCA;EACI,wBAAA;EACA,4XACI;AArCR;;AAiDA;EACI,gBAAA;EACA,kBAAA;EACA,+BAAA;EACA,oBAAA;EACA,oBAAA;AA9CJ;;AAiDA;EACI,UAAA;EACA,kBAAA;AA9CJ;;AAiDA;EACI,kBAAA;EACA,QAAA;EACA,OAAA;EACA,4BAAA;AA9CJ;;AAmDA;EACI,eAAA;EACA,MAAA;EACA,eAAA;EACA,gBAAA;AAhDJ;;AAqDA;EACI,sCAAA;EACA,mBAAA;AAlDJ;;AAqDA;EACI,2CAAA;EACA,mBAAA;AAlDJ;;AAqDA;EACI,oBAAA;AAlDJ;;AAqDA;EACI,mBAAA;AAlDJ;;AAqDA;EACI,mBAAA;AAlDJ;;AAsDI;EACI,sCAAA;EACA,kCAAA;AAnDR;AAqDQ;EACI,kBAAA;AAnDZ;AAsDQ;EACI,oBAAA;AApDZ;AAuDQ;EACI,oBAAA;AArDZ;;AA6DI;EACI,sCAAA;EACA,8BAAA;AA1DR;AA4DQ;;EAEI,iBAAA;EACA,qBAAA;AA1DZ;AA6DQ;EACI,oBAAA;EACA,WAAA;AA3DZ;AA6DY;EACI,UAAA;EACA,gBAAA;EACA,+BAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,gCAAA;AA3DhB;AA8DY;EACI,UAAA;EACA,qBAAA;EACA,0BAAA;AA5DhB;AA+DY;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,iBAAA;AA7DhB;AA+DgB;EACI,kBAAA;AA7DpB;AAkEQ;EACI,mBAAA;AAhEZ;AAmEQ;EACI,kBAAA;AAjEZ;AAoEQ;EACI,mBAAA;AAlEZ;AAqEQ;EACI,kBAAA;AAnEZ;AAsEQ;EACI,mBAAA;AApEZ;AAuEQ;EACI,kBAAA;AArEZ;AAwEQ;EACI,oBAAA;AAtEZ;AAyEQ;EACI,mBAAA;AAvEZ;;AA+EI;EACI,sCAAA;EACA,6BAAA;AA5ER;AA8EQ;EACI,mBAAA;EACA,iBAAA;EACA,qBAAA;AA5EZ;AA+EQ;EACI,oBAAA;EACA,YAAA;AA7EZ;AA+EY;EACI,UAAA;EACA,gBAAA;EACA,+BAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,gCAAA;AA7EhB;AAgFY;EACI,UAAA;EACA,qBAAA;EACA,0BAAA;AA9EhB;AAiFY;EACI,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,iBAAA;AA/EhB;AAiFgB;EACI,kBAAA;AA/EpB;AAoFQ;EACI,kBAAA;AAlFZ;AAqFQ;EACI,kBAAA;AAnFZ;AAsFQ;EACI,mBAAA;AApFZ;;AA4FI;EACI,oCAAA;EACA,aAAA;EACA,kBAAA;AAzFR;AA4FI;EACI,kBAAA;EACA,UAAA;EACA,cAAA;EACA,eAAA;AA1FR;AA8FI;EACI,oBAAA;AA5FR;AA+FI;EACI,yBAAA;AA7FR;AAgGI;EACI,4BAAA;AA9FR;AAiGI;EACI,iBAAA;AA/FR;AAkGI;EACI,mBAAA;AAhGR;AAmGI;EACI,uBAAA;AAjGR;;AAuGA;EACI,+BAAA;EACA,iCAAA;EACA,mBAAA;EACA,kCAAA;EACA,kBAAA;EACA,uBAAA;EACA,kBAAA;EACA,+BAAA;EACA,mBAAA;EACA,6BAAA;EACA,6DAAA;EACA,0BAAA;EACA,0CAAA;EACA,gCAAA;EACA,8BAAA;AApGJ;AAsGI;EACI,eAAA;EACA,yBAAA;EACA,6DAAA;EACA,+BAAA;EACA,gCAAA;AApGR;;AAwGA;EACI;IACI,0BAAA;EArGN;EAwGE;IACI,6BAAA;EAtGN;EAyGE;IACI,0BAAA;EAvGN;AACF;AA4GA;EACI,eAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;EACA,aAAA;EACA,8BAAA;EACA,sBAAA;EACA,4BAAA;EACA,WAAA;AA1GJ;;AA6GA;EACI,kBAAA;EACA,UAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;EACA,+BAAA;EACA,8BAAA;AA1GJ;;AA6GA;EACI,kBAAA;EACA,2BAAA;EACA,SAAA;EACA,UAAA;EACA,8BAAA;EACA,mBAAA;EACA,UAAA;EACA,8BAAA;EACA,8BAAA;AA1GJ;;AA6GA;EACI,+BAAA;EACA,iCAAA;EACA,uBAAA;EACA,eAAA;EACA,WAAA;EACA,SAAA;AA1GJ;;AA+GA;EACI,eAAA;EACA,UAAA;EACA,aAAA;EACA,kGAAA;EACA,WAAA;AA5GJ;;AA+GA;EACI,YAAA;EACA,MAAA;AA5GJ;;AA+GA;EACI,SAAA;EACA,MAAA;AA5GJ;;AA+GA;EACI,aAAA;EACA,MAAA;AA5GJ;;AAiHA;EACI;IACI,mBAAA;EA9GN;;EAiHE;IACI,mBAAA;EA9GN;;EAiHE;IACI,mBAAA;EA9GN;;EAiHE;IACI,4CAAA;EA9GN;;EAiHE;IACI,6CAAA;IACA,gCAAA;IACA,kBAAA;EA9GN;;EAkHM;IACI,sCAAA;IACA,kCAAA;EA/GV;EAiHU;IACI,mBAAA;EA/Gd;;EAqHM;IACI,sCAAA;IACA,8BAAA;EAlHV;EAoHU;;IAEI,qBAAA;EAlHd;EAqHU;IACI,oBAAA;EAnHd;EAsHU;IACI,mBAAA;EApHd;EAuHU;IACI,kBAAA;EArHd;EAwHU;IACI,mBAAA;EAtHd;EAyHU;IACI,mBAAA;EAvHd;EA0HU;IACI,mBAAA;EAxHd;EA2HU;IACI,kBAAA;EAzHd;EA4HU;IACI,mBAAA;EA1Hd;EA6HU;IACI,mBAAA;EA3Hd;;EAiIM;IACI,sCAAA;IACA,6BAAA;EA9HV;EAgIU;IACI,kBAAA;EA9Hd;EAiIU;IACI,mBAAA;EA/Hd;EAkIU;IACI,mBAAA;EAhId;;EAsIM;IACI,sCAAA;IACA,6BAAA;EAnIV;EAqIU;IACI,kBAAA;EAnId;EAsIU;IACI,mBAAA;EApId;EAuIU;IACI,mBAAA;EArId;AACF;AA0IA;EACI;IACI,WAAA;IACA,YAAA;EAxIN;;EA2IE;IACI,kBAAA;EAxIN;;EA2IE;;IAEI,WAAA;IACA,YAAA;IACA,mBAAA;EAxIN;;EA2IE;IACI,mBAAA;EAxIN;;EA2IE;IACI,iBAAA;EAxIN;;EA2IE;IACI,mBAAA;EAxIN;;EA2IE;IACI,mBAAA;EAxIN;;EA2IE;IACI,mBAAA;EAxIN;;EA2IE;IACI,4CAAA;EAxIN;;EA2IE;IACI,6CAAA;IACA,gCAAA;IACA,kBAAA;EAxIN;;EA2IE;IACI,UAAA;IACA,SAAA;EAxIN;;EA2IE;IACI,SAAA;IACA,WAAA;EAxIN;;EA2IE;IACI,oBAAA;EAxIN;;EA2IE;IACI,oBAAA;EAxIN;;EA4IM;IACI,sCAAA;IACA,kCAAA;EAzIV;EA2IU;IACI,mBAAA;EAzId;;EA+IM;IACI,sCAAA;IACA,8BAAA;EA5IV;EA8IU;;IAEI,qBAAA;EA5Id;EA+IU;IACI,oBAAA;EA7Id;EA+Ic;IACI,gBAAA;IACA,UAAA;EA7IlB;EAgJc;IACI,eAAA;IACA,iBAAA;EA9IlB;EAkJU;IACI,mBAAA;EAhJd;EAmJU;IACI,mBAAA;EAjJd;EAoJU;IACI,mBAAA;EAlJd;EAqJU;IACI,mBAAA;EAnJd;EAsJU;IACI,mBAAA;EApJd;EAuJU;IACI,mBAAA;EArJd;EAwJU;IACI,mBAAA;EAtJd;EAyJU;IACI,mBAAA;EAvJd;;EA6JM;IACI,sCAAA;IACA,8BAAA;EA1JV;EA4JU;IACI,mBAAA;EA1Jd;EA6JU;IACI,mBAAA;EA3Jd;EA8JU;IACI,mBAAA;EA5Jd;EA+JU;IACI,oBAAA;EA7Jd;EA+Jc;IACI,gBAAA;IACA,UAAA;EA7JlB;EAgKc;IACI,eAAA;IACA,iBAAA;EA9JlB;AACF","sourcesContent":["@font-face {\r\n    font-family: \"Expansiva\";\r\n    src: url(/src/assets/fonts/Expansiva/Expansiva.otf);\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Expansiva Bold\";\r\n    src: url(/src/assets/fonts/Expansiva/Expansiva-bold.otf);\r\n\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Arkitech Light\";\r\n    src: url(/src/assets/fonts/Arkitech/Arkitech-Light.ttf);\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Arkitech Medium\";\r\n    src: url(/src/assets/fonts/Arkitech/Arkitech-Medium.ttf);\r\n}\r\n\r\n// ------------------------------ Variables ------------------------------\r\n\r\n:root {\r\n    // Colors\r\n    --purple: #7161F5;\r\n    --green: #61F570;\r\n    --red: #F57061;\r\n    --darker: #040117;\r\n    --dark: #07032E;\r\n    --light: #EBE8FE;\r\n    --lighter: #FFFFFF;\r\n    --background-text: rgba(113, 97, 245, 0.05);\r\n    --grey-text: #ABABAB;\r\n\r\n    // Font tyoe\r\n    --body-font: 'obvia';\r\n    --header-font: 'Arkitech Light';\r\n    --header-font-bold: 'Arkitech Medium';\r\n    --header-alternative: 'Expansiva';\r\n    --header-alternative-bold: 'Expansiva Bold';\r\n\r\n    // Font size\r\n    --links-font-size: 12px;\r\n    --text-font-size: 16px;\r\n\r\n    // Shadows\r\n    --main-shadow:\r\n        2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),\r\n        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05),\r\n        12.5px 12.5px 10px rgba(0, 0, 0, 0.042),\r\n        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.035),\r\n        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.028),\r\n        100px 100px 80px rgba(0, 0, 0, 0.02);\r\n    --hover-shadow:\r\n        2.8px 2.8px 2.2px rgba(0, 0, 0, 0.1),\r\n        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.072),\r\n        12.5px 12.5px 10px rgba(0, 0, 0, 0.06),\r\n        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.05),\r\n        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.04),\r\n        100px 100px 80px rgba(0, 0, 0, 0.028);\r\n\r\n    // Animation\r\n    --animate-duration: 1s;\r\n    --animate-delay: 1s;\r\n    --animate-repeat: 1;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-decoration: none;\r\n    list-style: none;\r\n}\r\n\r\nhtml {\r\n    box-sizing: inherit;\r\n    scroll-behavior: smooth;\r\n    margin: auto;\r\n}\r\n\r\nbody {\r\n    font-family: var(--body-font);\r\n    font-size: var(--text-font-size);\r\n    line-height: 1.6;\r\n    color: var(--light);\r\n    user-select: none;\r\n}\r\n\r\n// ------------------------------ Fonts ------------------------------\r\n\r\nh1 {\r\n    font-family: var(--header-alternative);\r\n    font-size: 2.074rem;\r\n    line-height: 1.2;\r\n    color: var(--light);\r\n    padding-bottom: 10px;\r\n}\r\n\r\nh2 {\r\n    font-family: var(--header-alternative);\r\n    font-size: 1.728rem;\r\n    line-height: 1.2;\r\n    color: var(--grey-text);\r\n    padding-bottom: 10px;\r\n}\r\n\r\nh3 {\r\n    font-family: var(--header-alternative);\r\n    font-size: 1.44rem;\r\n    line-height: 1.2;\r\n    color: var(--red);\r\n    padding-bottom: 10px;\r\n}\r\n\r\np {\r\n    font-family: var(--body-font);\r\n    font-size: var(--text-font-size);\r\n    line-height: 1.6;\r\n}\r\n\r\na {\r\n    text-shadow: var(--main-shadow);\r\n    font-family: var(--header-font);\r\n    font-size: var(--links-font-size);\r\n    color: var(--grey-text);\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\na:hover {\r\n    color: var(--green);\r\n}\r\n\r\n// ------------------------------ Sections ------------------------------\r\n\r\nsection {\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n    overflow: hidden;\r\n    display: flex;\r\n    padding: 75px 0;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    position: relative;\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    max-width: 1468px;\r\n    z-index: 80;\r\n}\r\n\r\n#section-a {\r\n    height: 100vh;\r\n\r\n    .container {\r\n        background-image: url(/src/assets/images/backgrounds/PiotrBania.svg);\r\n    }\r\n\r\n    h1 {\r\n        color: var(--light);\r\n    }\r\n}\r\n\r\n#section-b {\r\n    .container {\r\n        background-image: url(/src/assets/images/backgrounds/Portfolio.svg);\r\n    }\r\n}\r\n\r\n#section-c {\r\n    .container {\r\n        background-image: url(/src/assets/images/backgrounds/Lab.svg);\r\n    }\r\n}\r\n\r\n#section-d {\r\n    .container {\r\n        background-image: url(/src/assets/images/backgrounds/Skills.svg);\r\n    }\r\n}\r\n\r\n#section-e {\r\n    .container {\r\n        background-image: url(/src/assets/images/backgrounds/About.svg);\r\n    }\r\n}\r\n\r\n#section-f {\r\n    .container {\r\n        background-image: url(/src/assets/images/backgrounds/contact.svg);\r\n    }\r\n}\r\n\r\n#section-a {\r\n    background: linear-gradient(to right, var(--darker), var(--dark));\r\n\r\n    .container {\r\n        background-position: left;\r\n        background-repeat: no-repeat;\r\n        background-size: contain;\r\n    }\r\n}\r\n\r\n#section-b,\r\n#section-d,\r\n#section-f {\r\n    background: linear-gradient(to left, var(--darker), var(--dark));\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n\r\n    .container {\r\n        background-position: left;\r\n        background-repeat: no-repeat;\r\n        background-size: contain;\r\n    }\r\n}\r\n\r\n#section-c,\r\n#section-e {\r\n    background-image: linear-gradient(to left, var(--lighter), var(--light));\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n\r\n    .container {\r\n        background-position: right;\r\n        background-repeat: no-repeat;\r\n        background-size: contain;\r\n    }\r\n\r\n    h1,\r\n    p {\r\n        color: var(--dark);\r\n    }\r\n}\r\n\r\n// ------------------------------ Header ------------------------------\r\n\r\n.logo {\r\n    position: fixed;\r\n    width: 70px;\r\n    height: 70px;\r\n    left: 5%;\r\n    top: 5%;\r\n    z-index: 100;\r\n}\r\n\r\n.menu {\r\n    position: fixed;\r\n    width: 100%;\r\n    right: 10vw;\r\n    top: 57px;\r\n    z-index: 90;\r\n    display: flex;\r\n    justify-content: end;\r\n    align-content: center;\r\n    visibility: visible;\r\n\r\n    ul {\r\n        display: flex;\r\n        padding-top: 9px;\r\n\r\n        li {\r\n            padding-right: 3vw;\r\n        }\r\n    }\r\n}\r\n\r\n.open-menu {\r\n    position: fixed;\r\n    right: 5%;\r\n    top: 5%;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding: 7px;\r\n    cursor: pointer;\r\n    z-index: 98;\r\n    visibility: hidden;\r\n}\r\n\r\n.closed-menu {\r\n    position: fixed;\r\n    right: 5%;\r\n    top: 5%;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding: 7px;\r\n    cursor: pointer;\r\n    z-index: 98;\r\n    visibility: hidden;\r\n}\r\n\r\n#nav-content {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    width: 75%;\r\n    height: 100%;\r\n    max-width: 600px;\r\n    z-index: 99;\r\n    background: linear-gradient(90deg, var(--dark) 0%, var(--darker) 100%);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    transform: translateX(105%);\r\n    transition: 0.5s ease transform;\r\n    visibility: hidden;\r\n\r\n    a {\r\n        display: inline-block;\r\n        width: 100%;\r\n        color: var(--light);\r\n        transition: all 0.3s ease-in-out;\r\n    }\r\n\r\n    a:hover {\r\n        color: var(--green);\r\n    }\r\n}\r\n\r\n#nav-content.show {\r\n    transform: translateX(0);\r\n    box-shadow:\r\n        0px 0px 7.8px rgba(0, 0, 0, 0.053),\r\n        0px 0px 17.2px rgba(0, 0, 0, 0.078),\r\n        0px 0px 28.8px rgba(0, 0, 0, 0.096),\r\n        0px 0px 43.4px rgba(0, 0, 0, 0.111),\r\n        0px 0px 62.6px rgba(0, 0, 0, 0.125),\r\n        0px 0px 88.6px rgba(0, 0, 0, 0.139),\r\n        0px 0px 125.7px rgba(0, 0, 0, 0.154),\r\n        0px 0px 182.5px rgba(0, 0, 0, 0.172),\r\n        0px 0px 281.3px rgba(0, 0, 0, 0.197),\r\n        0px 0px 500px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n#nav-content .section-heading {\r\n    text-align: left;\r\n    font-size: 1.65rem;\r\n    font-family: var(--header-font);\r\n    color: var(--purple);\r\n    padding-bottom: 20px;\r\n}\r\n\r\n#nav-content .wrapper {\r\n    width: 70%;\r\n    position: relative;\r\n}\r\n\r\n#nav-content .closed-menu {\r\n    position: absolute;\r\n    left: 5%;\r\n    top: 5%;\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\n// ------------------------------ Canvas ------------------------------\r\n\r\n.canvas-1 {\r\n    position: fixed;\r\n    top: 0;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n// ------------------------------ Hero section ------------------------------\r\n\r\nstrong {\r\n    font-family: var(--header-alternative);\r\n    color: var(--green);\r\n}\r\n\r\nb {\r\n    font-family: var(--header-alternative-bold);\r\n    color: var(--green);\r\n}\r\n\r\nspan {\r\n    color: var(--purple);\r\n}\r\n\r\n.text {\r\n    color: var(--light);\r\n}\r\n\r\n.cursor {\r\n    color: var(--green);\r\n}\r\n\r\n#section-a {\r\n    .container {\r\n        grid-template-columns: repeat(12, 1fr);\r\n        grid-template-rows: repeat(2, 1fr);\r\n\r\n        .heroText {\r\n            grid-area: 2 / 2 / 3 / 9;\r\n        }\r\n\r\n        .upper-heading {\r\n            padding-bottom: 10px;\r\n        }\r\n\r\n        .lower-heading {\r\n            padding-bottom: 20px;\r\n        }\r\n    }\r\n}\r\n\r\n// ------------------------------ Portfolio section ------------------------------\r\n\r\n#section-b {\r\n    .container {\r\n        grid-template-columns: repeat(12, 1fr);\r\n        grid-template-rows: repeat(11);\r\n\r\n        .current,\r\n        .other {\r\n            padding-top: 50px;\r\n            padding-bottom: 100px;\r\n        }\r\n\r\n        .project {\r\n            padding-bottom: 50px;\r\n            z-index: 50;\r\n\r\n            img {\r\n                width: 80%;\r\n                margin-left: 20%;\r\n                border: 1px solid var(--purple);\r\n                border-radius: 20px;\r\n                opacity: 0.66;\r\n                filter: grayscale(100%);\r\n                transition: all 0.3s ease-in-out;\r\n            }\r\n\r\n            img:hover {\r\n                opacity: 1;\r\n                filter: grayscale(0%);\r\n                border-color: var(--green);\r\n            }\r\n\r\n            ul {\r\n                display: flex;\r\n                justify-content: space-between;\r\n                margin-left: 10%;\r\n                word-spacing: 5px;\r\n\r\n                a {\r\n                    padding-left: 50px;\r\n                }\r\n            }\r\n        }\r\n\r\n        .current {\r\n            grid-area: 1 / 3 / 2 / 12;\r\n        }\r\n\r\n        .project1 {\r\n            grid-area: 2 / 1 / 4 / 5;\r\n        }\r\n\r\n        .project2 {\r\n            grid-area: 3 / 9 / 5 / 15;\r\n        }\r\n\r\n        .project3 {\r\n            grid-area: 4 / 4 / 6 / 8;\r\n        }\r\n\r\n        .other {\r\n            grid-area: 6 / 3 / 7 / 12;\r\n        }\r\n\r\n        .project4 {\r\n            grid-area: 7 / 1 / 9 / 5;\r\n        }\r\n\r\n        .project5 {\r\n            grid-area: 8 / 9 / 10 / 15;\r\n        }\r\n\r\n        .project6 {\r\n            grid-area: 9 / 4 / 11 / 8;\r\n        }\r\n    }\r\n}\r\n\r\n// ------------------------------ Lab section ------------------------------\r\n\r\n#section-c {\r\n    .container {\r\n        grid-template-columns: repeat(12, 1fr);\r\n        grid-template-rows: repeat(2);\r\n\r\n        .lab {\r\n            grid-area: 1 / 3 / 2 / 12;\r\n            padding-top: 50px;\r\n            padding-bottom: 100px;\r\n        }\r\n\r\n        .labProject {\r\n            padding-bottom: 50px;\r\n            margin: auto;\r\n\r\n            img {\r\n                width: 80%;\r\n                margin-left: 10%;\r\n                border: 1px solid var(--purple);\r\n                border-radius: 20px;\r\n                opacity: 0.66;\r\n                filter: grayscale(100%);\r\n                transition: all 0.3s ease-in-out;\r\n            }\r\n\r\n            img:hover {\r\n                opacity: 1;\r\n                filter: grayscale(0%);\r\n                border-color: var(--green);\r\n            }\r\n\r\n            ul {\r\n                display: flex;\r\n                justify-content: space-between;\r\n                margin-right: 10%;\r\n                word-spacing: 5px;\r\n\r\n                a {\r\n                    padding-left: 50px;\r\n                }\r\n            }\r\n        }\r\n\r\n        .lab1 {\r\n            grid-area: 2 / 1 / 3 / 5;\r\n        }\r\n\r\n        .lab2 {\r\n            grid-area: 2 / 5 / 3 / 9;\r\n        }\r\n\r\n        .lab3 {\r\n            grid-area: 2 / 9 / 3 / 14;\r\n        }\r\n    }\r\n}\r\n\r\n// ------------------------------ About section ------------------------------\r\n\r\n#section-e {\r\n    .vl {\r\n        border-left: 2px solid var(--purple);\r\n        height: 300px;\r\n        position: absolute;\r\n    }\r\n\r\n    p {\r\n        position: relative;\r\n        left: 20px;\r\n        max-width: 80%;\r\n        display: inline;\r\n\r\n    }\r\n\r\n    .purple {\r\n        color: var(--purple);\r\n    }\r\n\r\n    .purple-blue {\r\n        color: var(--purple-blue);\r\n    }\r\n\r\n    .blue-turquoise {\r\n        color: var(--blue-turquoise);\r\n    }\r\n\r\n    .red {\r\n        color: var(--red);\r\n    }\r\n\r\n    .green {\r\n        color: var(--green);\r\n    }\r\n\r\n    .grey {\r\n        color: var(--grey-text);\r\n    }\r\n}\r\n\r\n// ------------------------------ Buttons ------------------------------\r\n\r\nbutton {\r\n    font-family: var(--header-font);\r\n    font-size: var(--links-font-size);\r\n    color: var(--light);\r\n    border-radius: 30px 10px 20px 10px;\r\n    padding: 15px 30px;\r\n    justify-content: center;\r\n    text-align: center;\r\n    text-shadow: var(--main-shadow);\r\n    white-space: nowrap;\r\n    border: 1px solid var(--dark);\r\n    background: linear-gradient(-45deg, #7161F5 0%, #0E065C 100%);\r\n    background-size: 400% 400%;\r\n    animation: animate 5s ease-in-out infinite;\r\n    transition: all 0.3s ease-in-out;\r\n    box-shadow: var(--main-shadow);\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n        border: 1px solid #0AA119;\r\n        background: linear-gradient(-45deg, #61F570 0%, #0AA119 100%);\r\n        box-shadow: var(--hover-shadow);\r\n        text-shadow: var(--hover-shadow);\r\n    }\r\n}\r\n\r\n@keyframes animate {\r\n    0% {\r\n        background-position: 0 50%;\r\n    }\r\n\r\n    50% {\r\n        background-position: 100% 50%;\r\n    }\r\n\r\n    100% {\r\n        background-position: 0 50%;\r\n    }\r\n}\r\n\r\n// ------------------------------ Progress bar ------------------------------\r\n\r\n.progressSection {\r\n    position: fixed;\r\n    right: 5%;\r\n    bottom: 5%;\r\n    width: 1px;\r\n    height: 150px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    will-change: transform;\r\n    transition: 0.3s ease-in-out;\r\n    z-index: 90;\r\n}\r\n\r\n.progressBarWrap {\r\n    position: relative;\r\n    width: 1px;\r\n    border: none;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    background-color: var(--purple);\r\n    box-shadow: var(--main-shadow);\r\n}\r\n\r\n.progressBar {\r\n    position: absolute;\r\n    transform: translateX(-1px);\r\n    bottom: 0;\r\n    width: 3px;\r\n    border: 1px solid var(--green);\r\n    border-radius: 10px;\r\n    height: 0%;\r\n    background-color: var(--green);\r\n    box-shadow: var(--main-shadow);\r\n}\r\n\r\n.progressNum {\r\n    font-family: var(--header-font);\r\n    font-size: var(--links-font-size);\r\n    color: var(--grey-text);\r\n    position: fixed;\r\n    right: 10px;\r\n    bottom: 0;\r\n}\r\n\r\n// ------------------------------ Strips ------------------------------\r\n\r\n.strip {\r\n    position: fixed;\r\n    width: 1px;\r\n    height: 100vh;\r\n    background: linear-gradient(0deg, #7161F500 0%, #7161F54D 100%);\r\n    z-index: 50;\r\n}\r\n\r\n.one {\r\n    left: 26.66%;\r\n    top: 0;\r\n}\r\n\r\n.two {\r\n    left: 50%;\r\n    top: 0;\r\n}\r\n\r\n.three {\r\n    right: 26.66%;\r\n    top: 0;\r\n}\r\n\r\n// ------------------------------ Media queries ------------------------------\r\n\r\n@media screen and (min-width: 769px) and (max-width: 1279px) {\r\n    h1 {\r\n        font-size: 1.602rem;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 1.424rem;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1.266rem;\r\n    }\r\n\r\n    p {\r\n        font-size: calc(var(--text-font-size) - 1px);\r\n    }\r\n\r\n    button {\r\n        font-size: calc(var(--links-font-size) - 1px);\r\n        border-radius: 28px 9px 18px 9px;\r\n        padding: 13px 26px;\r\n    }\r\n\r\n    #section-a {\r\n        .container {\r\n            grid-template-columns: repeat(12, 1fr);\r\n            grid-template-rows: repeat(2, 1fr);\r\n\r\n            .heroText {\r\n                grid-area: 2 / 1 / 3 / 12;\r\n            }\r\n        }\r\n    }\r\n\r\n    #section-b {\r\n        .container {\r\n            grid-template-columns: repeat(12, 1fr);\r\n            grid-template-rows: repeat(12);\r\n\r\n            .current,\r\n            .other {\r\n                padding-bottom: 100px;\r\n            }\r\n\r\n            .project {\r\n                padding-bottom: 50px;\r\n            }\r\n\r\n            .current {\r\n                grid-area: 1 / 2 / 2 / 12;\r\n            }\r\n\r\n            .project1 {\r\n                grid-area: 2 / 1 / 3 / 8;\r\n            }\r\n\r\n            .project2 {\r\n                grid-area: 3 / 6 / 4 / 15;\r\n            }\r\n\r\n            .project3 {\r\n                grid-area: 4 / 4 / 5 / 11;\r\n            }\r\n\r\n            .other {\r\n                grid-area: 5 / 2 / 6 / 12;\r\n            }\r\n\r\n            .project4 {\r\n                grid-area: 6 / 1 / 7 / 8;\r\n            }\r\n\r\n            .project5 {\r\n                grid-area: 7 / 6 / 8 / 15;\r\n            }\r\n\r\n            .project6 {\r\n                grid-area: 8 / 4 / 9 / 11;\r\n            }\r\n        }\r\n    }\r\n\r\n    #section-c {\r\n        .container {\r\n            grid-template-columns: repeat(12, 1fr);\r\n            grid-template-rows: repeat(6);\r\n\r\n            .lab1 {\r\n                grid-area: 2 / 1 / 3 / 7;\r\n            }\r\n    \r\n            .lab2 {\r\n                grid-area: 2 / 7 / 3 / 13;\r\n            }\r\n    \r\n            .lab3 {\r\n                grid-area: 3 / 4 / 4 / 10;\r\n            }\r\n        }\r\n    }\r\n\r\n    #section-c {\r\n        .container {\r\n            grid-template-columns: repeat(12, 1fr);\r\n            grid-template-rows: repeat(6);\r\n\r\n            .lab1 {\r\n                grid-area: 2 / 1 / 3 / 7;\r\n            }\r\n    \r\n            .lab2 {\r\n                grid-area: 2 / 7 / 3 / 13;\r\n            }\r\n    \r\n            .lab3 {\r\n                grid-area: 3 / 4 / 4 / 10;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .logo {\r\n        width: 50px;\r\n        height: 50px;\r\n    }\r\n\r\n    .menu {\r\n        visibility: hidden;\r\n    }\r\n\r\n    .open-menu,\r\n    .closed-menu {\r\n        width: 50px;\r\n        height: 50px;\r\n        visibility: visible;\r\n    }\r\n\r\n    #nav-content {\r\n        visibility: visible;\r\n    }\r\n\r\n    #nav-content a {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    h1 {\r\n        font-size: 1.296rem;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 1.215rem;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1.138rem;\r\n    }\r\n\r\n    p {\r\n        font-size: calc(var(--text-font-size) - 2px);\r\n    }\r\n\r\n    button {\r\n        font-size: calc(var(--links-font-size) - 2px);\r\n        border-radius: 26px 8px 16px 8px;\r\n        padding: 12px 24px;\r\n    }\r\n\r\n    .heading {\r\n        width: 80%;\r\n        left: 10%;\r\n    }\r\n\r\n    .heroText {\r\n        left: 11%;\r\n        bottom: 16%;\r\n    }\r\n\r\n    .upper-heading {\r\n        padding-bottom: 10px;\r\n    }\r\n\r\n    .lower-heading {\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    #section-a {\r\n        .container {\r\n            grid-template-columns: repeat(12, 1fr);\r\n            grid-template-rows: repeat(2, 1fr);\r\n\r\n            .heroText {\r\n                grid-area: 2 / 1 / 3 / 15;\r\n            }\r\n        }\r\n    }\r\n\r\n    #section-b {\r\n        .container {\r\n            grid-template-columns: repeat(12, 1fr);\r\n            grid-template-rows: repeat(12);\r\n\r\n            .current,\r\n            .other {\r\n                padding-bottom: 100px;\r\n            }\r\n\r\n            .project {\r\n                padding-bottom: 50px;\r\n\r\n                img {\r\n                    margin-left: 10%;\r\n                    opacity: 1;\r\n                }\r\n\r\n                ul {\r\n                    margin-left: 0%;\r\n                    margin-right: 10%;\r\n                }\r\n            }\r\n\r\n            .current {\r\n                grid-area: 1 / 1 / 2 / 15;\r\n            }\r\n\r\n            .project1 {\r\n                grid-area: 2 / 1 / 3 / 15;\r\n            }\r\n\r\n            .project2 {\r\n                grid-area: 3 / 1 / 4 / 15;\r\n            }\r\n\r\n            .project3 {\r\n                grid-area: 4 / 1 / 5 / 15;\r\n            }\r\n\r\n            .other {\r\n                grid-area: 5 / 1 / 6 / 15;\r\n            }\r\n\r\n            .project4 {\r\n                grid-area: 6 / 1 / 7 / 15;\r\n            }\r\n\r\n            .project5 {\r\n                grid-area: 7 / 1 / 8 / 15;\r\n            }\r\n\r\n            .project6 {\r\n                grid-area: 8 / 1 / 9 / 15;\r\n            }\r\n        }\r\n    }\r\n\r\n    #section-c {\r\n        .container {\r\n            grid-template-columns: repeat(12, 1fr);\r\n            grid-template-rows: repeat(12);\r\n\r\n            .lab1 {\r\n                grid-area: 2 / 1 / 3 / 15;\r\n            }\r\n    \r\n            .lab2 {\r\n                grid-area: 3 / 1 / 4 / 15;\r\n            }\r\n    \r\n            .lab3 {\r\n                grid-area: 4 / 1 / 5 / 15;\r\n            }\r\n\r\n            .labProject {\r\n                padding-bottom: 50px;\r\n\r\n                img {\r\n                    margin-left: 10%;\r\n                    opacity: 1;\r\n                }\r\n\r\n                ul {\r\n                    margin-left: 0%;\r\n                    margin-right: 10%;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Arkitech/Arkitech-Light.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/Arkitech/Arkitech-Light.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Arkitech-Light.ttf";

/***/ }),

/***/ "./src/assets/fonts/Arkitech/Arkitech-Medium.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Arkitech/Arkitech-Medium.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Arkitech-Medium.ttf";

/***/ }),

/***/ "./src/assets/fonts/Expansiva/Expansiva-bold.otf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Expansiva/Expansiva-bold.otf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Expansiva-bold.otf";

/***/ }),

/***/ "./src/assets/fonts/Expansiva/Expansiva.otf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Expansiva/Expansiva.otf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Expansiva.otf";

/***/ }),

/***/ "./src/assets/images/backgrounds/About.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/backgrounds/About.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "About.svg";

/***/ }),

/***/ "./src/assets/images/backgrounds/Lab.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/backgrounds/Lab.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Lab.svg";

/***/ }),

/***/ "./src/assets/images/backgrounds/PiotrBania.svg":
/*!******************************************************!*\
  !*** ./src/assets/images/backgrounds/PiotrBania.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "PiotrBania.svg";

/***/ }),

/***/ "./src/assets/images/backgrounds/Portfolio.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/backgrounds/Portfolio.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Portfolio.svg";

/***/ }),

/***/ "./src/assets/images/backgrounds/Skills.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/backgrounds/Skills.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Skills.svg";

/***/ }),

/***/ "./src/assets/images/backgrounds/contact.svg":
/*!***************************************************!*\
  !*** ./src/assets/images/backgrounds/contact.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "contact.svg";

/***/ }),

/***/ "./src/assets/images/icons/menu-closed.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icons/menu-closed.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "menu-closed.svg";

/***/ }),

/***/ "./src/assets/images/icons/menu-open.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icons/menu-open.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "menu-open.svg";

/***/ }),

/***/ "./src/assets/images/logo/PB logo.svg":
/*!********************************************!*\
  !*** ./src/assets/images/logo/PB logo.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "PB logo.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _scripts_animated_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/animated_text */ "./src/scripts/animated_text.js");
/* harmony import */ var _scripts_animated_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_animated_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/menu */ "./src/scripts/menu.js");
/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/progress_bar */ "./src/scripts/progress_bar.js");
/* harmony import */ var _scripts_progress_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_progress_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_logo_PB_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/logo/PB logo.svg */ "./src/assets/images/logo/PB logo.svg");
/* harmony import */ var _assets_images_icons_menu_closed_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/icons/menu-closed.svg */ "./src/assets/images/icons/menu-closed.svg");
/* harmony import */ var _assets_images_icons_menu_open_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/icons/menu-open.svg */ "./src/assets/images/icons/menu-open.svg");






var logoPB = document.getElementById('logo');
logoPB.src = _assets_images_logo_PB_logo_svg__WEBPACK_IMPORTED_MODULE_4__;

var open_menu = document.getElementById('open-menu');
open_menu.src = _assets_images_icons_menu_closed_svg__WEBPACK_IMPORTED_MODULE_5__;

var close_menu = document.getElementById('closed-menu');
close_menu.src = _assets_images_icons_menu_open_svg__WEBPACK_IMPORTED_MODULE_6__;
})();

/******/ })()
;
//# sourceMappingURL=bundle2db8e58ab01c5a4b9b46.js.map