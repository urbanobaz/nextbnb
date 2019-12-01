module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DateRangePicker.js":
/*!***************************************!*\
  !*** ./components/DateRangePicker.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-day-picker/DayPickerInput */ "react-day-picker/DayPickerInput");
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/format */ "date-fns/format");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/parse */ "date-fns/parse");
/* harmony import */ var date_fns_parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_parse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-day-picker */ "react-day-picker");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/urbanobaz/Desktop/projects/nextbnb/components/DateRangePicker.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const parseDate = (str, format, locale) => {
  const parsed = date_fns_parse__WEBPACK_IMPORTED_MODULE_5___default()(str, format, new Date(), {
    locale
  });
  return react_day_picker__WEBPACK_IMPORTED_MODULE_6__["DateUtils"].isDate(parsed) ? parsed : null;
};

const formatDate = (date, format, locale) => date_fns_format__WEBPACK_IMPORTED_MODULE_4___default()(date, format, {
  locale
});

const format = "dd MMM yyyy";
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const numberOfNightsBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let dayCount = 0;

  while (end > start) {
    dayCount++;
    start.setDate(start.getDate() + 1);
  }

  return dayCount;
};

/* harmony default export */ __webpack_exports__["default"] = (({
  datesChanged
}) => {
  const {
    0: startDate,
    1: setStateDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date());
  const {
    0: endDate,
    1: setEndDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date());
  return __jsx("div", {
    className: "jsx-2233285091" + " " + "date-range-picker-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2233285091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("label", {
    className: "jsx-2233285091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "From:"), __jsx(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_2___default.a, {
    formatDate: formatDate,
    format: format,
    parseDate: parseDate,
    placeholder: `${date_fns_format__WEBPACK_IMPORTED_MODULE_4___default()(new Date(), format)}`,
    dayPickerProps: {
      modifiers: {
        disabled: {
          before: new Date()
        }
      }
    },
    onDayChange: day => {
      setStateDate(day);
      const newEndDate = new Date(day);

      if (numberOfNightsBetweenDates(day, endDate) < 1) {
        newEndDate.setDate(newEndDate.getDate() + 1);
        setEndDate(newEndDate);
      }

      datesChanged(day, newEndDate);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-2233285091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("label", {
    className: "jsx-2233285091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "To:"), __jsx(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_2___default.a, {
    formatDate: formatDate,
    format: format,
    parseDate: parseDate,
    placeholder: `${date_fns_format__WEBPACK_IMPORTED_MODULE_4___default()(new Date(), format)}`,
    dayPickerProps: {
      modifiers: {
        disabled: [startDate, {
          before: startDate
        }]
      }
    },
    onDayChange: day => {
      setEndDate(day);
      datesChanged(startDate, day);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1123662568",
    __self: undefined
  }, ".date-range-picker-container.jsx-2233285091 div.jsx-2233285091{display:grid;border:1px solid #ddd;grid-template-columns:30% 70%;padding:10px;}label.jsx-2233285091{padding-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cmJhbm9iYXovRGVza3RvcC9wcm9qZWN0cy9uZXh0Ym5iL2NvbXBvbmVudHMvRGF0ZVJhbmdlUGlja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGa0IsQUFHd0IsQUFNSSxhQUxLLElBTXhCLGtCQUxnQyw4QkFDakIsYUFDZiIsImZpbGUiOiIvVXNlcnMvdXJiYW5vYmF6L0Rlc2t0b3AvcHJvamVjdHMvbmV4dGJuYi9jb21wb25lbnRzL0RhdGVSYW5nZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF5UGlja2VySW5wdXQgZnJvbSBcInJlYWN0LWRheS1waWNrZXIvRGF5UGlja2VySW5wdXRcIjtcbmltcG9ydCBcInJlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGRhdGVGbnNGb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0IGRhdGVGbnNQYXJzZSBmcm9tIFwiZGF0ZS1mbnMvcGFyc2VcIjtcbmltcG9ydCB7IERhdGVVdGlscyB9IGZyb20gXCJyZWFjdC1kYXktcGlja2VyXCI7XG5cbmNvbnN0IHBhcnNlRGF0ZSA9IChzdHIsIGZvcm1hdCwgbG9jYWxlKSA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IGRhdGVGbnNQYXJzZShzdHIsIGZvcm1hdCwgbmV3IERhdGUoKSwgeyBsb2NhbGUgfSk7XG4gIHJldHVybiBEYXRlVXRpbHMuaXNEYXRlKHBhcnNlZCkgPyBwYXJzZWQgOiBudWxsO1xufTtcblxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlLCBmb3JtYXQsIGxvY2FsZSkgPT5cbiAgZGF0ZUZuc0Zvcm1hdChkYXRlLCBmb3JtYXQsIHsgbG9jYWxlIH0pO1xuXG5jb25zdCBmb3JtYXQgPSBcImRkIE1NTSB5eXl5XCI7XG5cbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbmNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUodG9kYXkpO1xudG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcblxuY29uc3QgbnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMgPSAoc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc3RhcnREYXRlKTtcbiAgY29uc3QgZW5kID0gbmV3IERhdGUoZW5kRGF0ZSk7XG4gIGxldCBkYXlDb3VudCA9IDA7XG5cbiAgd2hpbGUgKGVuZCA+IHN0YXJ0KSB7XG4gICAgZGF5Q291bnQrKztcbiAgICBzdGFydC5zZXREYXRlKHN0YXJ0LmdldERhdGUoKSArIDEpO1xuICB9XG5cbiAgcmV0dXJuIGRheUNvdW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHsgZGF0ZXNDaGFuZ2VkIH0pID0+IHtcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhdGVEYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1yYW5nZS1waWNrZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+RnJvbTo8L2xhYmVsPlxuICAgICAgICA8RGF5UGlja2VySW5wdXRcbiAgICAgICAgICBmb3JtYXREYXRlPXtmb3JtYXREYXRlfVxuICAgICAgICAgIGZvcm1hdD17Zm9ybWF0fVxuICAgICAgICAgIHBhcnNlRGF0ZT17cGFyc2VEYXRlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHtkYXRlRm5zRm9ybWF0KG5ldyBEYXRlKCksIGZvcm1hdCl9YH1cbiAgICAgICAgICBkYXlQaWNrZXJQcm9wcz17e1xuICAgICAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICAgICAgYmVmb3JlOiBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRGF5Q2hhbmdlPXtkYXkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdGVEYXRlKGRheSk7XG4gICAgICAgICAgICBjb25zdCBuZXdFbmREYXRlID0gbmV3IERhdGUoZGF5KTtcbiAgICAgICAgICAgIGlmIChudW1iZXJPZk5pZ2h0c0JldHdlZW5EYXRlcyhkYXksIGVuZERhdGUpIDwgMSkge1xuICAgICAgICAgICAgICBuZXdFbmREYXRlLnNldERhdGUobmV3RW5kRGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICAgICAgc2V0RW5kRGF0ZShuZXdFbmREYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGVzQ2hhbmdlZChkYXksIG5ld0VuZERhdGUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5Ubzo8L2xhYmVsPlxuICAgICAgICA8RGF5UGlja2VySW5wdXRcbiAgICAgICAgICBmb3JtYXREYXRlPXtmb3JtYXREYXRlfVxuICAgICAgICAgIGZvcm1hdD17Zm9ybWF0fVxuICAgICAgICAgIHBhcnNlRGF0ZT17cGFyc2VEYXRlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHtkYXRlRm5zRm9ybWF0KG5ldyBEYXRlKCksIGZvcm1hdCl9YH1cbiAgICAgICAgICBkYXlQaWNrZXJQcm9wcz17e1xuICAgICAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZm9yZTogc3RhcnREYXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkRheUNoYW5nZT17ZGF5ID0+IHtcbiAgICAgICAgICAgIHNldEVuZERhdGUoZGF5KTtcbiAgICAgICAgICAgIGRhdGVzQ2hhbmdlZChzdGFydERhdGUsIGRheSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5kYXRlLXJhbmdlLXBpY2tlci1jb250YWluZXIgZGl2IHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5EYXlQaWNrZXJJbnB1dCBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/urbanobaz/Desktop/projects/nextbnb/components/DateRangePicker.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2975770914",
    __self: undefined
  }, ".DayPickerInput input{width:120px;padding:10px;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cmJhbm9iYXovRGVza3RvcC9wcm9qZWN0cy9uZXh0Ym5iL2NvbXBvbmVudHMvRGF0ZVJhbmdlUGlja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHeUIsQUFHdUIsWUFDQyxhQUNFLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy91cmJhbm9iYXovRGVza3RvcC9wcm9qZWN0cy9uZXh0Ym5iL2NvbXBvbmVudHMvRGF0ZVJhbmdlUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXlQaWNrZXJJbnB1dCBmcm9tIFwicmVhY3QtZGF5LXBpY2tlci9EYXlQaWNrZXJJbnB1dFwiO1xuaW1wb3J0IFwicmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzXCI7XG5pbXBvcnQgZGF0ZUZuc0Zvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XG5pbXBvcnQgZGF0ZUZuc1BhcnNlIGZyb20gXCJkYXRlLWZucy9wYXJzZVwiO1xuaW1wb3J0IHsgRGF0ZVV0aWxzIH0gZnJvbSBcInJlYWN0LWRheS1waWNrZXJcIjtcblxuY29uc3QgcGFyc2VEYXRlID0gKHN0ciwgZm9ybWF0LCBsb2NhbGUpID0+IHtcbiAgY29uc3QgcGFyc2VkID0gZGF0ZUZuc1BhcnNlKHN0ciwgZm9ybWF0LCBuZXcgRGF0ZSgpLCB7IGxvY2FsZSB9KTtcbiAgcmV0dXJuIERhdGVVdGlscy5pc0RhdGUocGFyc2VkKSA/IHBhcnNlZCA6IG51bGw7XG59O1xuXG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGUsIGZvcm1hdCwgbG9jYWxlKSA9PlxuICBkYXRlRm5zRm9ybWF0KGRhdGUsIGZvcm1hdCwgeyBsb2NhbGUgfSk7XG5cbmNvbnN0IGZvcm1hdCA9IFwiZGQgTU1NIHl5eXlcIjtcblxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XG50b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuXG5jb25zdCBudW1iZXJPZk5pZ2h0c0JldHdlZW5EYXRlcyA9IChzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbiAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgbGV0IGRheUNvdW50ID0gMDtcblxuICB3aGlsZSAoZW5kID4gc3RhcnQpIHtcbiAgICBkYXlDb3VudCsrO1xuICAgIHN0YXJ0LnNldERhdGUoc3RhcnQuZ2V0RGF0ZSgpICsgMSk7XG4gIH1cblxuICByZXR1cm4gZGF5Q291bnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoeyBkYXRlc0NoYW5nZWQgfSkgPT4ge1xuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGF0ZURhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG4gIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXJhbmdlLXBpY2tlci1jb250YWluZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5Gcm9tOjwvbGFiZWw+XG4gICAgICAgIDxEYXlQaWNrZXJJbnB1dFxuICAgICAgICAgIGZvcm1hdERhdGU9e2Zvcm1hdERhdGV9XG4gICAgICAgICAgZm9ybWF0PXtmb3JtYXR9XG4gICAgICAgICAgcGFyc2VEYXRlPXtwYXJzZURhdGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake2RhdGVGbnNGb3JtYXQobmV3IERhdGUoKSwgZm9ybWF0KX1gfVxuICAgICAgICAgIGRheVBpY2tlclByb3BzPXt7XG4gICAgICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgICAgICBiZWZvcmU6IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25EYXlDaGFuZ2U9e2RheSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0ZURhdGUoZGF5KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0VuZERhdGUgPSBuZXcgRGF0ZShkYXkpO1xuICAgICAgICAgICAgaWYgKG51bWJlck9mTmlnaHRzQmV0d2VlbkRhdGVzKGRheSwgZW5kRGF0ZSkgPCAxKSB7XG4gICAgICAgICAgICAgIG5ld0VuZERhdGUuc2V0RGF0ZShuZXdFbmREYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICAgICAgICBzZXRFbmREYXRlKG5ld0VuZERhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0ZXNDaGFuZ2VkKGRheSwgbmV3RW5kRGF0ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlRvOjwvbGFiZWw+XG4gICAgICAgIDxEYXlQaWNrZXJJbnB1dFxuICAgICAgICAgIGZvcm1hdERhdGU9e2Zvcm1hdERhdGV9XG4gICAgICAgICAgZm9ybWF0PXtmb3JtYXR9XG4gICAgICAgICAgcGFyc2VEYXRlPXtwYXJzZURhdGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake2RhdGVGbnNGb3JtYXQobmV3IERhdGUoKSwgZm9ybWF0KX1gfVxuICAgICAgICAgIGRheVBpY2tlclByb3BzPXt7XG4gICAgICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVmb3JlOiBzdGFydERhdGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRGF5Q2hhbmdlPXtkYXkgPT4ge1xuICAgICAgICAgICAgc2V0RW5kRGF0ZShkYXkpO1xuICAgICAgICAgICAgZGF0ZXNDaGFuZ2VkKHN0YXJ0RGF0ZSwgZGF5KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmRhdGUtcmFuZ2UtcGlja2VyLWNvbnRhaW5lciBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA3MCU7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLkRheVBpY2tlcklucHV0IGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/urbanobaz/Desktop/projects/nextbnb/components/DateRangePicker.js */"));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/urbanobaz/Desktop/projects/nextbnb/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Header = () => {
  const setShowLoginModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["useStoreActions"])(actions => actions.modals.setShowLoginModal);
  const setShowRegistrationModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_3__["useStoreActions"])(actions => actions.modals.setShowRegistrationModal);
  return __jsx("div", {
    className: "jsx-3190357189" + " " + 'nav-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-3190357189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("img", {
    src: "/img/logo.png",
    alt: "",
    className: "jsx-3190357189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }))), __jsx("nav", {
    className: "jsx-3190357189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-3190357189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-3190357189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: () => setShowRegistrationModal(),
    className: "jsx-3190357189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Sign up")), __jsx("li", {
    className: "jsx-3190357189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: () => setShowLoginModal(),
    className: "jsx-3190357189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Log in")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3190357189",
    __self: undefined
  }, "ul.jsx-3190357189{margin:0;padding:0;}li.jsx-3190357189{display:block;float:left;}a.jsx-3190357189{-webkit-text-decoration:none;text-decoration:none;display:block;margin-right:15px;color:#333;}nav.jsx-3190357189 a.jsx-3190357189{padding:1em 0.5em;}.nav-container.jsx-3190357189{border-bottom:1px solid #eee;height:50px;}img.jsx-3190357189{float:left;}ul.jsx-3190357189{float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cmJhbm9iYXovRGVza3RvcC9wcm9qZWN0cy9uZXh0Ym5iL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFHb0IsQUFLSyxBQUtPLEFBT0gsQUFJVyxBQUtsQixBQUlDLFNBN0JGLEVBMEJaLENBSUEsRUF6QmEsSUFZYixDQWhCQSxNQUtBLElBZWMsWUFDZCxTQVpnQixjQUNJLGtCQUNQLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3VyYmFub2Jhei9EZXNrdG9wL3Byb2plY3RzL25leHRibmIvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU3RvcmVBY3Rpb25zIH0gZnJvbSAnZWFzeS1wZWFzeSc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgc2V0U2hvd0xvZ2luTW9kYWwgPSB1c2VTdG9yZUFjdGlvbnMoXG4gICAgYWN0aW9ucyA9PiBhY3Rpb25zLm1vZGFscy5zZXRTaG93TG9naW5Nb2RhbFxuICApXG4gIGNvbnN0IHNldFNob3dSZWdpc3RyYXRpb25Nb2RhbCA9IHVzZVN0b3JlQWN0aW9ucyhcbiAgICBhY3Rpb25zID0+IGFjdGlvbnMubW9kYWxzLnNldFNob3dSZWdpc3RyYXRpb25Nb2RhbFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWNvbnRhaW5lcic+XG4gICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGltZyBzcmM9Jy9pbWcvbG9nby5wbmcnIGFsdD0nJyAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPScjJyBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UmVnaXN0cmF0aW9uTW9kYWwoKX0+XG4gICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9JyMnIG9uQ2xpY2s9eygpID0+IHNldFNob3dMb2dpbk1vZGFsKCl9PlxuICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgdWwge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdiBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAxZW0gMC41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/urbanobaz/Desktop/projects/nextbnb/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginModal */ "./components/LoginModal.js");
/* harmony import */ var _RegistrationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RegistrationModal */ "./components/RegistrationModal.js");
var _jsxFileName = "/Users/urbanobaz/Desktop/projects/nextbnb/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Layout = props => {
  const showModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.modals.showModal);
  const showLoginModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.modals.showLoginModal);
  const showRegistrationModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.modals.showRegistrationModal);
  const setHideModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreActions"])(actions => actions.modals.setHideModal);
  const setShowRegistrationModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreActions"])(actions => actions.modals.setShowRegistrationModal);
  const setShowLoginModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreActions"])(actions => actions.modals.setShowLoginModal);
  return __jsx("div", {
    className: "jsx-309110194",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("main", {
    className: "jsx-309110194",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, props.content), showModal && __jsx(_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    close: () => setHideModal(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, showLoginModal && __jsx(_LoginModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showSignup: () => {
      setShowLoginModal();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), showRegistrationModal && __jsx(_RegistrationModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    showLogin: () => {
      setShowRegistrationModal();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2677224730",
    __self: undefined
  }, "body{margin:0;font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;font-size:14px;line-height:1.5;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cmJhbm9iYXovRGVza3RvcC9wcm9qZWN0cy9uZXh0Ym5iL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDeUIsQUFHb0IsU0FHRyxzSUFDRyxlQUNDLGdCQUNMLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3VyYmFub2Jhei9EZXNrdG9wL3Byb2plY3RzL25leHRibmIvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RvcmVTdGF0ZSwgdXNlU3RvcmVBY3Rpb25zIH0gZnJvbSBcImVhc3ktcGVhc3lcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gXCIuL0xvZ2luTW9kYWxcIjtcbmltcG9ydCBSZWdpc3RyYXRpb25Nb2RhbCBmcm9tIFwiLi9SZWdpc3RyYXRpb25Nb2RhbFwiO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHNob3dNb2RhbCA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUubW9kYWxzLnNob3dNb2RhbCk7XG4gIGNvbnN0IHNob3dMb2dpbk1vZGFsID0gdXNlU3RvcmVTdGF0ZShzdGF0ZSA9PiBzdGF0ZS5tb2RhbHMuc2hvd0xvZ2luTW9kYWwpO1xuICBjb25zdCBzaG93UmVnaXN0cmF0aW9uTW9kYWwgPSB1c2VTdG9yZVN0YXRlKHN0YXRlID0+IHN0YXRlLm1vZGFscy5zaG93UmVnaXN0cmF0aW9uTW9kYWwpO1xuICBjb25zdCBzZXRIaWRlTW9kYWwgPSB1c2VTdG9yZUFjdGlvbnMoYWN0aW9ucyA9PiBhY3Rpb25zLm1vZGFscy5zZXRIaWRlTW9kYWwpO1xuICBjb25zdCBzZXRTaG93UmVnaXN0cmF0aW9uTW9kYWwgPSB1c2VTdG9yZUFjdGlvbnMoYWN0aW9ucyA9PiBhY3Rpb25zLm1vZGFscy5zZXRTaG93UmVnaXN0cmF0aW9uTW9kYWwpO1xuICBjb25zdCBzZXRTaG93TG9naW5Nb2RhbCA9IHVzZVN0b3JlQWN0aW9ucyhhY3Rpb25zID0+IGFjdGlvbnMubW9kYWxzLnNldFNob3dMb2dpbk1vZGFsKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbj57cHJvcHMuY29udGVudH08L21haW4+XG4gICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgPE1vZGFsIGNsb3NlPXsoKSA9PiBzZXRIaWRlTW9kYWwoKX0+XG4gICAgICAgICAge3Nob3dMb2dpbk1vZGFsICYmIChcbiAgICAgICAgICAgIDxMb2dpbk1vZGFsXG4gICAgICAgICAgICAgIHNob3dTaWdudXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93TG9naW5Nb2RhbCgpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Nob3dSZWdpc3RyYXRpb25Nb2RhbCAmJiAoXG4gICAgICAgICAgICA8UmVnaXN0cmF0aW9uTW9kYWxcbiAgICAgICAgICAgICAgc2hvd0xvZ2luPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd1JlZ2lzdHJhdGlvbk1vZGFsKClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDU2ZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/urbanobaz/Desktop/projects/nextbnb/components/Layout.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "103826465",
    __self: undefined
  }, "main{position:relative;max-width:56em;background-color:white;padding:2em;margin:0 auto;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cmJhbm9iYXovRGVza3RvcC9wcm9qZWN0cy9uZXh0Ym5iL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEeUIsQUFHNkIsa0JBQ0gsZUFDUSx1QkFDWCxZQUNFLGNBQ1Esc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy91cmJhbm9iYXovRGVza3RvcC9wcm9qZWN0cy9uZXh0Ym5iL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0b3JlU3RhdGUsIHVzZVN0b3JlQWN0aW9ucyB9IGZyb20gXCJlYXN5LXBlYXN5XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tIFwiLi9Mb2dpbk1vZGFsXCI7XG5pbXBvcnQgUmVnaXN0cmF0aW9uTW9kYWwgZnJvbSBcIi4vUmVnaXN0cmF0aW9uTW9kYWxcIjtcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4ge1xuICBjb25zdCBzaG93TW9kYWwgPSB1c2VTdG9yZVN0YXRlKHN0YXRlID0+IHN0YXRlLm1vZGFscy5zaG93TW9kYWwpO1xuICBjb25zdCBzaG93TG9naW5Nb2RhbCA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUubW9kYWxzLnNob3dMb2dpbk1vZGFsKTtcbiAgY29uc3Qgc2hvd1JlZ2lzdHJhdGlvbk1vZGFsID0gdXNlU3RvcmVTdGF0ZShzdGF0ZSA9PiBzdGF0ZS5tb2RhbHMuc2hvd1JlZ2lzdHJhdGlvbk1vZGFsKTtcbiAgY29uc3Qgc2V0SGlkZU1vZGFsID0gdXNlU3RvcmVBY3Rpb25zKGFjdGlvbnMgPT4gYWN0aW9ucy5tb2RhbHMuc2V0SGlkZU1vZGFsKTtcbiAgY29uc3Qgc2V0U2hvd1JlZ2lzdHJhdGlvbk1vZGFsID0gdXNlU3RvcmVBY3Rpb25zKGFjdGlvbnMgPT4gYWN0aW9ucy5tb2RhbHMuc2V0U2hvd1JlZ2lzdHJhdGlvbk1vZGFsKTtcbiAgY29uc3Qgc2V0U2hvd0xvZ2luTW9kYWwgPSB1c2VTdG9yZUFjdGlvbnMoYWN0aW9ucyA9PiBhY3Rpb25zLm1vZGFscy5zZXRTaG93TG9naW5Nb2RhbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4+e3Byb3BzLmNvbnRlbnR9PC9tYWluPlxuICAgICAge3Nob3dNb2RhbCAmJiAoXG4gICAgICAgIDxNb2RhbCBjbG9zZT17KCkgPT4gc2V0SGlkZU1vZGFsKCl9PlxuICAgICAgICAgIHtzaG93TG9naW5Nb2RhbCAmJiAoXG4gICAgICAgICAgICA8TG9naW5Nb2RhbFxuICAgICAgICAgICAgICBzaG93U2lnbnVwPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd0xvZ2luTW9kYWwoKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzaG93UmVnaXN0cmF0aW9uTW9kYWwgJiYgKFxuICAgICAgICAgICAgPFJlZ2lzdHJhdGlvbk1vZGFsXG4gICAgICAgICAgICAgIHNob3dMb2dpbj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNob3dSZWdpc3RyYXRpb25Nb2RhbCgpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1NmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/urbanobaz/Desktop/projects/nextbnb/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/LoginModal.js":
/*!**********************************!*\
  !*** ./components/LoginModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/urbanobaz/Desktop/projects/nextbnb/components/LoginModal.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "Log in"), __jsx("div", {
  className: "jsx-1483308331",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("form", {
  onSubmit: event => {
    alert("Log in!");
    event.preventDefault();
  },
  className: "jsx-1483308331",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("input", {
  id: "email",
  type: "email",
  placeholder: "Email Address",
  className: "jsx-1483308331",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("input", {
  id: "password",
  type: "password",
  placeholder: "Password",
  className: "jsx-1483308331",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("button", {
  className: "jsx-1483308331",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Log in"), __jsx("p", {
  className: "jsx-1483308331",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Don't have an account yet?", " ", __jsx("a", {
  href: "javascript:;",
  onClick: () => props.showSignup(),
  className: "jsx-1483308331",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Sign up"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1483308331",
  __self: undefined
}, "button{background-color:rgb(255,90,95);color:white;font-size:13px;width:100%;border:none;height:40px;border-radius:4px;cursor:pointer;}input[type=\"text\"],input[type=\"email\"],input[type=\"password\"]{display:block;padding:20px;font-size:20px !important;width:100%;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cmJhbm9iYXovRGVza3RvcC9wcm9qZWN0cy9uZXh0Ym5iL2NvbXBvbmVudHMvTG9naW5Nb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnlCLEFBRzZDLEFBYXBCLGNBQ0QsYUFDYSxLQWRkLFlBQ0csU0FjSixNQWJBLEtBY1csTUFiVixZQUNBLElBYU0sUUFaQSxVQWFJLFFBWlAsY0FhSSxDQVpyQixrQkFhQSIsImZpbGUiOiIvVXNlcnMvdXJiYW5vYmF6L0Rlc2t0b3AvcHJvamVjdHMvbmV4dGJuYi9jb21wb25lbnRzL0xvZ2luTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBwcm9wcyA9PiAoXG4gIDw+XG4gICAgPGgyPkxvZyBpbjwvaDI+XG4gICAgPGRpdj5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtldmVudCA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJMb2cgaW4hXCIpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgLz5cbiAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgPGJ1dHRvbj5Mb2cgaW48L2J1dHRvbj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldD97XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9eygpID0+IHByb3BzLnNob3dTaWdudXAoKX0+XG4gICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTAsIDk1KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAgICAgICBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4gICAgICAgIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/urbanobaz/Desktop/projects/nextbnb/components/LoginModal.js */"))));

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/urbanobaz/Desktop/projects/nextbnb/components/Modal.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx("div", {
  className: "jsx-1287455508" + " " + 'nav-container',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  onClick: () => props.close(),
  className: "jsx-1287455508" + " " + 'modal-background',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-1287455508" + " " + 'modal',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1287455508",
  __self: undefined
}, ".modal-background{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.3);}.modal{position:absolute;left:50%;top:50%;width:calc(100vw - 4em);max-width:32em;max-height:calc(100vh - 4em);overflow:auto;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:1em;border-radius:0.2em;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cmJhbm9iYXovRGVza3RvcC9wcm9qZWN0cy9uZXh0Ym5iL2NvbXBvbmVudHMvTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3VCLEFBR3dCLEFBU0csZUFSWixHQVNHLEdBUkgsTUFTRSxDQVJHLE9BU2EsSUFSWixZQUNrQixRQVFmLGVBQ2MsSUFSL0IseUJBU2dCLGNBQ2tCLHlHQUNwQixZQUNRLG9CQUNILGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvdXJiYW5vYmF6L0Rlc2t0b3AvcHJvamVjdHMvbmV4dGJuYi9jb21wb25lbnRzL01vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWNvbnRhaW5lcic+XG4gICAgPGRpdlxuICAgIGNsYXNzTmFtZT0nbW9kYWwtYmFja2dyb3VuZCdcbiAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jbG9zZSgpfT48L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbCc+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIH1cblxuICAgICAgLm1vZGFsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDRlbSk7XG4gICAgICAgIG1heC13aWR0aDogMzJlbTtcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDRlbSk7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=/Users/urbanobaz/Desktop/projects/nextbnb/components/Modal.js */")));

/***/ }),

/***/ "./components/RegistrationModal.js":
/*!*****************************************!*\
  !*** ./components/RegistrationModal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/urbanobaz/Desktop/projects/nextbnb/components/RegistrationModal.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: passwordconfirmation,
    1: setPasswordconfirmation
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Sign up"), __jsx("div", {
    className: "jsx-1336024677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("form", {
    onSubmit: async event => {
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/auth/register", {
        email,
        password,
        passwordconfirmation
      });
      console.log(response);
      event.preventDefault();
    },
    className: "jsx-1336024677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("input", {
    id: "email",
    type: "email",
    placeholder: "Email address",
    onChange: event => setEmail(event.target.value),
    className: "jsx-1336024677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("input", {
    id: "password",
    type: "password",
    placeholder: "Password",
    onChange: event => setPassword(event.target.value),
    className: "jsx-1336024677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("input", {
    id: "passwordconfirmation",
    type: "password",
    placeholder: "Enter password again",
    onChange: event => setPasswordconfirmation(event.target.value),
    className: "jsx-1336024677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("button", {
    className: "jsx-1336024677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Sign up"), __jsx("p", {
    className: "jsx-1336024677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Already have an account?", " ", __jsx("a", {
    href: "#",
    onClick: () => props.showLogin(),
    className: "jsx-1336024677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Log in"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1336024677",
    __self: undefined
  }, "button{background-color:rgb(255,90,95);color:white;font-size:13px;width:100%;border:none;height:40px;border-radius:4px;cursor:pointer;}input[type=\"text\"],input[type=\"email\"],input[type=\"password\"]{display:block;padding:20px;font-size:20px !important;width:100%;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cmJhbm9iYXovRGVza3RvcC9wcm9qZWN0cy9uZXh0Ym5iL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0QyQixBQUcrQyxBQWFwQixjQUNELGFBQ2EsS0FkZCxZQUNHLFNBY0osTUFiQSxLQWNXLE1BYlYsWUFDQSxJQWFNLFFBWkEsVUFhSSxRQVpQLGNBYUksQ0FackIsa0JBYUEiLCJmaWxlIjoiL1VzZXJzL3VyYmFub2Jhei9EZXNrdG9wL3Byb2plY3RzL25leHRibmIvY29tcG9uZW50cy9SZWdpc3RyYXRpb25Nb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkY29uZmlybWF0aW9uLCBzZXRQYXNzd29yZGNvbmZpcm1hdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+U2lnbiB1cDwvaDI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG9uU3VibWl0PXthc3luYyBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2F1dGgvcmVnaXN0ZXJcIiwge1xuICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgIHBhc3N3b3JkY29uZmlybWF0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkIGFnYWluXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRQYXNzd29yZGNvbmZpcm1hdGlvbihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbj5TaWduIHVwPC9idXR0b24+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHByb3BzLnNob3dMb2dpbigpfT5cbiAgICAgICAgICAgICAgTG9nIGluXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTAsIDk1KTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAgICAgICAgIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbiAgICAgICAgICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/urbanobaz/Desktop/projects/nextbnb/components/RegistrationModal.js */")));
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-day-picker/lib/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-day-picker/lib/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/houses.json":
/*!***************************!*\
  !*** ./pages/houses.json ***!
  \***************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1288\",\"picture\":\"../static/img/houses/1.jpg\",\"type\":\"Entire house\",\"town\":\"Ostuni\",\"title\":\"Beautiful flat in Ostuni!\",\"price\":\"50.00\",\"rating\":4.93,\"reviewsCount\":198,\"superhost\":true,\"description\":\"Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi).<br>Trullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view.<br> It's the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches.<br> You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums.<br>    Prices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity.\",\"guests\":4,\"bedrooms\":1,\"beds\":2,\"baths\":1,\"amenities\":{\"wifi\":true,\"kitchen\":true,\"heating\":true,\"freeParking\":true},\"entirePlace\":true,\"reviews\":[{\"user\":\"Radhika\",\"date\":\"August 2019\",\"avatar\":\"https://a0.muscache.com/im/users/34403074/profile_pic/1432859567/original.jpg?aki_policy=profile_x_medium\",\"comment\":\"We had an excellent stay at the trullo - everything was perfect, starting with Anna’s generosity to meet us in town so we wouldn’t lose our way, to the beautiful setting of the trullo, to the fresh eggs and tomatoes for our use, to Anna’s tips and suggestions for local\"}]},{\"id\":\"2101\",\"picture\":\"../static/img/houses/2.jpg\",\"type\":\"Entire house\",\"town\":\"Isla Mujeres\",\"title\":\"The World Famous Seashell House ~ Casa Caracol\",\"price\":\"70.00\",\"rating\":4.77,\"reviewsCount\":246}]");

/***/ }),

/***/ "./pages/houses/[id].js":
/*!******************************!*\
  !*** ./pages/houses/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_DateRangePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/DateRangePicker */ "./components/DateRangePicker.js");
/* harmony import */ var _houses_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../houses.json */ "./pages/houses.json");
var _houses_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../houses.json */ "./pages/houses.json", 1);
var _jsxFileName = "/Users/urbanobaz/Desktop/projects/nextbnb/pages/houses/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const calcNumberOfNightsBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate); // clone

  const end = new Date(endDate); // clone

  let dayCount = 0;

  while (end > start) {
    dayCount++;
    start.setDate(start.getDate() + 1);
  }

  return dayCount;
};

const House = props => {
  const {
    0: numberOfNightsBetweenDates,
    1: setNumberOfNightsBetweenDates
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: dateChosen,
    1: setDateChosen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const setShowLoginModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreActions"])(actions => actions.modals.setShowLoginModal);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: __jsx("div", {
      className: "jsx-3497459092" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, __jsx("title", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, props.house.title)), __jsx("article", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, __jsx("img", {
      src: props.house.picture,
      width: "100%",
      alt: "House picture",
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }), __jsx("p", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, props.house.type, " - ", props.house.town), __jsx("p", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, props.house.title), __jsx("p", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, props.house.rating, " (", props.house.reviewsCount, ")")), __jsx("aside", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, __jsx("h2", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, "Add dates for prices"), __jsx(_components_DateRangePicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      datesChanged: (startDate, endDate) => {
        setNumberOfNightsBetweenDates(calcNumberOfNightsBetweenDates(startDate, endDate));
        setDateChosen(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }), dateChosen && __jsx("div", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, __jsx("h2", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, "Price per night"), __jsx("p", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }, "$", props.house.price), __jsx("h2", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, "Total price for booking"), __jsx("p", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, "$", (numberOfNightsBetweenDates * props.house.price).toFixed(2)), __jsx("button", {
      onClick: () => {
        setShowLoginModal();
      },
      className: "jsx-3497459092" + " " + "reserve",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, "Reserve"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3497459092",
      __self: undefined
    }, ".container.jsx-3497459092{display:grid;grid-template-columns:60% 40%;grid-gap:30px;}aside.jsx-3497459092{border:1px solid #ccc;padding:20px;}button.jsx-3497459092{background-color:rgb(255,90,95);color:white;font-size:13px;width:100%;border:none;height:40px;border-radius:4px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cmJhbm9iYXovRGVza3RvcC9wcm9qZWN0cy9uZXh0Ym5iL3BhZ2VzL2hvdXNlcy9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFc0IsQUFHNEIsQUFNUyxBQUtZLGFBVkosU0FNakIsVUFLRCxHQUpkLFFBTmdCLENBV0MsYUFWakIsRUFXYSxXQUNDLFlBQ0EsWUFDTSxrQkFDSCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvdXJiYW5vYmF6L0Rlc2t0b3AvcHJvamVjdHMvbmV4dGJuYi9wYWdlcy9ob3VzZXMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdG9yZUFjdGlvbnMgfSBmcm9tIFwiZWFzeS1wZWFzeVwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IERhdGVSYW5nZVBpY2tlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9EYXRlUmFuZ2VQaWNrZXJcIjtcblxuaW1wb3J0IGhvdXNlcyBmcm9tIFwiLi4vaG91c2VzLmpzb25cIjtcblxuY29uc3QgY2FsY051bWJlck9mTmlnaHRzQmV0d2VlbkRhdGVzID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgPT4ge1xuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7IC8vIGNsb25lXG4gIGNvbnN0IGVuZCA9IG5ldyBEYXRlKGVuZERhdGUpOyAvLyBjbG9uZVxuICBsZXQgZGF5Q291bnQgPSAwO1xuXG4gIHdoaWxlIChlbmQgPiBzdGFydCkge1xuICAgIGRheUNvdW50Kys7XG4gICAgc3RhcnQuc2V0RGF0ZShzdGFydC5nZXREYXRlKCkgKyAxKTtcbiAgfVxuXG4gIHJldHVybiBkYXlDb3VudDtcbn07XG5cbmNvbnN0IEhvdXNlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbbnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMsIHNldE51bWJlck9mTmlnaHRzQmV0d2VlbkRhdGVzXSA9IHVzZVN0YXRlKFxuICAgIDBcbiAgKTtcbiAgY29uc3QgW2RhdGVDaG9zZW4sIHNldERhdGVDaG9zZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNldFNob3dMb2dpbk1vZGFsID0gdXNlU3RvcmVBY3Rpb25zKFxuICAgIGFjdGlvbnMgPT4gYWN0aW9ucy5tb2RhbHMuc2V0U2hvd0xvZ2luTW9kYWxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIGNvbnRlbnQ9e1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPntwcm9wcy5ob3VzZS50aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5ob3VzZS5waWN0dXJlfSB3aWR0aD1cIjEwMCVcIiBhbHQ9XCJIb3VzZSBwaWN0dXJlXCIgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7cHJvcHMuaG91c2UudHlwZX0gLSB7cHJvcHMuaG91c2UudG93bn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPntwcm9wcy5ob3VzZS50aXRsZX08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3Byb3BzLmhvdXNlLnJhdGluZ30gKHtwcm9wcy5ob3VzZS5yZXZpZXdzQ291bnR9KVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8aDI+QWRkIGRhdGVzIGZvciBwcmljZXM8L2gyPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBpY2tlclxuICAgICAgICAgICAgICBkYXRlc0NoYW5nZWQ9eyhzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzZXROdW1iZXJPZk5pZ2h0c0JldHdlZW5EYXRlcyhcbiAgICAgICAgICAgICAgICAgIGNhbGNOdW1iZXJPZk5pZ2h0c0JldHdlZW5EYXRlcyhzdGFydERhdGUsIGVuZERhdGUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZXREYXRlQ2hvc2VuKHRydWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtkYXRlQ2hvc2VuICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+UHJpY2UgcGVyIG5pZ2h0PC9oMj5cbiAgICAgICAgICAgICAgICA8cD4ke3Byb3BzLmhvdXNlLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8aDI+VG90YWwgcHJpY2UgZm9yIGJvb2tpbmc8L2gyPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgJHsobnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMgKiBwcm9wcy5ob3VzZS5wcmljZSkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzZXJ2ZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dMb2dpbk1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIFJlc2VydmVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYXNpZGU+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXNpZGUge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA5MCwgOTUpO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIC8+XG4gICk7XG59O1xuXG5Ib3VzZS5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5O1xuXG4gIHJldHVybiB7XG4gICAgaG91c2U6IGhvdXNlcy5maWx0ZXIoaG91c2UgPT4gaG91c2UuaWQgPT09IGlkKVswXVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG91c2U7XG4iXX0= */\n/*@ sourceURL=/Users/urbanobaz/Desktop/projects/nextbnb/pages/houses/[id].js */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  });
};

House.getInitialProps = ({
  query
}) => {
  const {
    id
  } = query;
  return {
    house: _houses_json__WEBPACK_IMPORTED_MODULE_6__.filter(house => house.id === id)[0]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (House);

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/houses/[id].js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/urbanobaz/Desktop/projects/nextbnb/pages/houses/[id].js */"./pages/houses/[id].js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "date-fns/format":
/*!**********************************!*\
  !*** external "date-fns/format" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "date-fns/parse":
/*!*********************************!*\
  !*** external "date-fns/parse" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/parse");

/***/ }),

/***/ "easy-peasy":
/*!*****************************!*\
  !*** external "easy-peasy" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("easy-peasy");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-day-picker":
/*!***********************************!*\
  !*** external "react-day-picker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-day-picker");

/***/ }),

/***/ "react-day-picker/DayPickerInput":
/*!**************************************************!*\
  !*** external "react-day-picker/DayPickerInput" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-day-picker/DayPickerInput");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map