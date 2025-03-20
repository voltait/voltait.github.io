/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/modules/acf_header/src/scripts/partials/header.js":
/*!***************************************************************!*\
  !*** ./lib/modules/acf_header/src/scripts/partials/header.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var win = $(window);
  var winW = win.width();
  var header = $('#header');
  var headerHeight = header.height();
  var nav = header.find('.header-menu');
  var navMenuContainer = nav.find('.menu-header-menu-container');
  var menu = nav.find('.menu');
  var headerLang = header.find('.header-lang');
  var headerSandwich = $('#header-sandwich');
  var subMenuWidth = menu.find('[sub-menu-width]');
  var search = header.find('.header-search');
  subMenuWidth.each(function () {
    var $this = $(this);
    var sectionWidth = $this.attr('sub-menu-width');
    var widthDifference = winW - $this.offset().left;
    var width = sectionWidth > widthDifference ? widthDifference : sectionWidth;
    $this.css('width', width + 'px');
  });
  win.on('scroll', function () {
    var scrollTop = win.scrollTop();
    if (scrollTop > headerHeight) {
      header.addClass('is-scroll');
    } else {
      header.removeClass('is-scroll');
    }
  });
  if (win.width() >= 768) {
    $('.menu > .menu-item, .header-lang').hover(function () {
      clearTimeout($.data(this, 'timer'));
      $.data(this, 'timer-mouseenter', setTimeout($.proxy(function () {
        $(this).stop(true, true).addClass('is-active');
      }, this), 100));
    }, function () {
      clearTimeout($.data(this, 'timer-mouseenter'));
      $.data(this, 'timer', setTimeout($.proxy(function () {
        $(this).stop(true, true).removeClass('is-active');
      }, this), 100));
    });
  } else {
    headerLang.on('click', function (e) {
      $(this).toggleClass('is-active');
    });
    menu.find('> .menu-item').on('click', function (e) {
      var target = $(e.target);
      var targetLink = target.closest('a');
      var clickPrevent = true;
      if (targetLink.length) {
        var href = targetLink.attr('href');
        clickPrevent = !href || href === '#';
      }
      if (target.closest('.elementor-tab-title').length) {
        clickPrevent = false;
      }
      if (clickPrevent) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('is-active');
        $this.find('.sub-menu').slideToggle(200);
      }
    });
    navMenuContainer.prepend(search);
    navMenuContainer.append(headerLang);
  }
  headerSandwich.on('click', function (e) {
    e.preventDefault();
    header.toggleClass('is-open');
  });
}

/***/ }),

/***/ "./lib/modules/acf_header/src/scripts/partials/lang-temp.js":
/*!******************************************************************!*\
  !*** ./lib/modules/acf_header/src/scripts/partials/lang-temp.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var langCurrent = $('.header-lang__current');
  var langHtml = $('html').attr('lang');
  var langString = langHtml.split('-')[0].toUpperCase();
  langCurrent.text(langString);
});

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
/*!******************************************************!*\
  !*** ./lib/modules/acf_header/src/scripts/script.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/header */ "./lib/modules/acf_header/src/scripts/partials/header.js");
/* harmony import */ var _partials_lang_temp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/lang-temp */ "./lib/modules/acf_header/src/scripts/partials/lang-temp.js");


$(document).ready(function () {
  (0,_partials_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_partials_lang_temp__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
})();

/******/ })()
;

    $(document).ready(function (){

        let $burgerMenu = $('.header__menu');
        let $buttonBurger = $('.header__burger');
        let $headerBody = $('.header__body');
        let $menuItemHasChildren = $('.menu-item-has-children>a');
        $buttonBurger.on('click', function (event) {
            $buttonBurger.toggleClass('active');
            $burgerMenu.toggleClass('active');
            $('body').toggleClass('lock');
            $headerBody.toggleClass('active');
            if($menuItemHasChildren.parent().hasClass('active')){
                $menuItemHasChildren.parent().removeClass('active');
                $menuItemHasChildren.parent().find('.sub-menu').slideUp(300);

            }
        });
        if ($menuItemHasChildren.length) {
            $menuItemHasChildren.each(function () {
                $(this).on('click', function (event) {
                    event.preventDefault();
                    $(this).parent().toggleClass('active');
                    $(this).parent().find('.sub-menu').slideToggle(300);
                });
            });
        }

        $(document).on('mouseup', function (e) {
            if (!$buttonBurger.is(e.target)
                && $buttonBurger.has(e.target).length === 0
                && $burgerMenu.has(e.target).length === 0
            ) {
                $burgerMenu.removeClass('active');
                $buttonBurger.removeClass('active');
                $('body').removeClass('lock');
                $headerBody.removeClass('active');
                if($menuItemHasChildren.parent().hasClass('active')){
                    $menuItemHasChildren.parent().removeClass('active');
                    $menuItemHasChildren.parent().find('.sub-menu').slideUp(300);

                }
            }
            e.preventDefault();
        });

        $('.belt-selector__results-list-item').each(function(){
            let markCount   = $(this).find('.belt-selector__results-list-item-marks>span').length;
            if (markCount > 3){
                $(this).find('.belt-selector__results-list-item-marks').addClass('more-3');
            }
        });
    });