/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var canvas = void 0;

var errorMessages = exports.errorMessages = { BOUNDS: 'Input must be above 1', NAN: 'Input must be a number' };
var errors = { BOUNDS: new Error(errorMessages.BOUNDS), NAN: new Error(errorMessages.NAN) };

var setCanvas = exports.setCanvas = function setCanvas(_canvas) {
  canvas = _canvas;
};

var construct = exports.construct = function construct(number) {
  if (number <= 1) {
    throw errors.BOUNDS;
  } else if (typeof number !== 'number') {
    throw errors.NAN;
  }

  var array = [];
  array[0] = number;
  for (var i = 1;; i++) {
    var lastNum = array[i - 1];
    if (lastNum === 1) {
      break;
    } else if (lastNum % 2 === 0) {
      array[i] = lastNum / 2;
    } else {
      array[i] = lastNum * 3 + 1;
    }
  }
  return array;
};

var findMax = exports.findMax = function findMax(array) {
  var max = 1;
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
};

var draw = exports.draw = function draw(numArray) {
  var max = findMax(numArray);
  var pointsArray = [];
  var widthDivision = canvas.width / numArray.length;
  var heightDivision = canvas.height / max;
  var ctx = canvas.getContext('2d');
  var firstNum = numArray[0];
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.moveTo(0, canvas.height - firstNum * heightDivision);
  pointsArray.push({ x: 0, y: canvas.height - firstNum * heightDivision });
  console.log('numArray.length', numArray.length);
  for (var i = 0; i <= numArray.length - 1; i++) {
    console.log(numArray[i], i, (i + 1) * widthDivision, canvas.width);
    var x = (i + 1) * widthDivision;

    var y = canvas.height - numArray[i] * heightDivision;
    ctx.lineTo(x, y);
    pointsArray.push({ x: x, y: y });
  }
  ctx.lineTo(canvas.width, canvas.height);

  ctx.lineWidth = 3;
  ctx.strokeStyle = 'blue';
  ctx.stroke();

  return { canvas: canvas, pointsArray: pointsArray };
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _collatz_grapher = __webpack_require__(0);

var collatz = _interopRequireWildcard(_collatz_grapher);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log('really extra farts');
var canvas = document.getElementById('myCanvas');
canvas.width = 900;
canvas.height = 500;

collatz.setCanvas(canvas);
var arr = collatz.construct(14);
var drawData = collatz.draw(arr);

canvas.addEventListener('mousemove', function (e) {
  var xOffset = canvas.getBoundingClientRect().left;
  var yOffset = canvas.getBoundingClientRect().top;
  var x = e.clientX - xOffset;
  var y = e.clientY - yOffset;

  var numPoints = drawData.pointsArray.length;
  var width = canvas.width;
  var widthDivision = width / numPoints;

  console.log(Math.ceil((x + widthDivision / 2) / widthDivision));
});

console.log(canvas.getBoundingClientRect());

/***/ })
/******/ ]);