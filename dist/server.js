require("source-map-support").install();
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

/***/ "./src/constants/StaticConstants.js":
/*!******************************************!*\
  !*** ./src/constants/StaticConstants.js ***!
  \******************************************/
/*! exports provided: NOT_FOUND_ERROR, PRODUCT_DATA_FETCH_ERROR, CATEGORY_DATA_FETCH_ERROR, PRODUCT_NOT_FOUND, PRODUCT_ID_INVALID, PRODUCT_ID_MISSING, CATEGORY_NOT_FOUND, CATEGORY_ID_INVALID, CATEGORY_ID_MISSING, USER_NOT_FOUND, USER_ID_INVALID, USER_ID_MISSING, UNABLE_TO_FETCH_PRODUCT_RESPONSE, UNABLE_TO_FETCH_PRODUCTS_RESPONSE, USER_DELETED_SUCCESSFULLY, PRODUCT_DELETED_SUCCESSFULLY, CATEGORY_DELETED_SUCCESSFULLY, ERROR_DELETING_USER, ERROR_DELETING_PRODUCT, ERROR_DELETING_CATEGORY, USER_ADDED_SUCCESSFULLY, PRODUCT_ADDED_SUCCESSFULLY, CATEGORY_ADDED_SUCCESSFULLY, ERROR_ADDING_USER, ERROR_ADDING_PRODUCT, ERROR_ADDING_CATEGORY, ERROR_UPDATING_PRODUCT, ERROR_UPDATING_CATEGORY, ERROR_UPDATING_USER, PRODUCT_UPDATED_SUCCESSFULLY, CATEGORY_UPDATED_SUCCESSFULLY, USER_UPDATED_SUCCESSFULLY, QRCODE_GENERATION_ERROR, PRODUCT_HISTORY_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_FOUND_ERROR\", function() { return NOT_FOUND_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_DATA_FETCH_ERROR\", function() { return PRODUCT_DATA_FETCH_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_DATA_FETCH_ERROR\", function() { return CATEGORY_DATA_FETCH_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_NOT_FOUND\", function() { return PRODUCT_NOT_FOUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_ID_INVALID\", function() { return PRODUCT_ID_INVALID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_ID_MISSING\", function() { return PRODUCT_ID_MISSING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_NOT_FOUND\", function() { return CATEGORY_NOT_FOUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_ID_INVALID\", function() { return CATEGORY_ID_INVALID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_ID_MISSING\", function() { return CATEGORY_ID_MISSING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_NOT_FOUND\", function() { return USER_NOT_FOUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_ID_INVALID\", function() { return USER_ID_INVALID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_ID_MISSING\", function() { return USER_ID_MISSING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNABLE_TO_FETCH_PRODUCT_RESPONSE\", function() { return UNABLE_TO_FETCH_PRODUCT_RESPONSE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNABLE_TO_FETCH_PRODUCTS_RESPONSE\", function() { return UNABLE_TO_FETCH_PRODUCTS_RESPONSE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_DELETED_SUCCESSFULLY\", function() { return USER_DELETED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_DELETED_SUCCESSFULLY\", function() { return PRODUCT_DELETED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_DELETED_SUCCESSFULLY\", function() { return CATEGORY_DELETED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_DELETING_USER\", function() { return ERROR_DELETING_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_DELETING_PRODUCT\", function() { return ERROR_DELETING_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_DELETING_CATEGORY\", function() { return ERROR_DELETING_CATEGORY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_ADDED_SUCCESSFULLY\", function() { return USER_ADDED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_ADDED_SUCCESSFULLY\", function() { return PRODUCT_ADDED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_ADDED_SUCCESSFULLY\", function() { return CATEGORY_ADDED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_ADDING_USER\", function() { return ERROR_ADDING_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_ADDING_PRODUCT\", function() { return ERROR_ADDING_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_ADDING_CATEGORY\", function() { return ERROR_ADDING_CATEGORY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_UPDATING_PRODUCT\", function() { return ERROR_UPDATING_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_UPDATING_CATEGORY\", function() { return ERROR_UPDATING_CATEGORY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_UPDATING_USER\", function() { return ERROR_UPDATING_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_UPDATED_SUCCESSFULLY\", function() { return PRODUCT_UPDATED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_UPDATED_SUCCESSFULLY\", function() { return CATEGORY_UPDATED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_UPDATED_SUCCESSFULLY\", function() { return USER_UPDATED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QRCODE_GENERATION_ERROR\", function() { return QRCODE_GENERATION_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_HISTORY_TYPES\", function() { return PRODUCT_HISTORY_TYPES; });\nvar NOT_FOUND_ERROR = 'Invalid Api call: Api not found';\nvar PRODUCT_DATA_FETCH_ERROR = 'Could not fetch Products data';\nvar CATEGORY_DATA_FETCH_ERROR = 'Could not fetch Category data';\nvar PRODUCT_NOT_FOUND = 'Product Id Missing';\nvar PRODUCT_ID_INVALID = 'Invalid Product Id Format';\nvar PRODUCT_ID_MISSING = 'Product Not Found';\nvar CATEGORY_NOT_FOUND = 'Category Id Missing';\nvar CATEGORY_ID_INVALID = 'Invalid Category Id Format';\nvar CATEGORY_ID_MISSING = 'Category Not Found';\nvar USER_NOT_FOUND = 'User Id Missing';\nvar USER_ID_INVALID = 'Invalid User Id Format';\nvar USER_ID_MISSING = 'User Not Found';\nvar UNABLE_TO_FETCH_PRODUCT_RESPONSE = 'Unable to fetch product Response';\nvar UNABLE_TO_FETCH_PRODUCTS_RESPONSE = 'Unable to fetch products Response';\nvar USER_DELETED_SUCCESSFULLY = 'User Deleted Successfully';\nvar PRODUCT_DELETED_SUCCESSFULLY = 'Product Deleted Successfully';\nvar CATEGORY_DELETED_SUCCESSFULLY = 'Category Deleted Successfully';\nvar ERROR_DELETING_USER = 'Error in deleting User';\nvar ERROR_DELETING_PRODUCT = 'Error in deleting Product';\nvar ERROR_DELETING_CATEGORY = 'Error in deleting Category';\nvar USER_ADDED_SUCCESSFULLY = 'User Deleted Successfully';\nvar PRODUCT_ADDED_SUCCESSFULLY = 'Product Deleted Successfully';\nvar CATEGORY_ADDED_SUCCESSFULLY = 'Category Deleted Successfully';\nvar ERROR_ADDING_USER = 'Error in adding User';\nvar ERROR_ADDING_PRODUCT = 'Error in adding User Product';\nvar ERROR_ADDING_CATEGORY = 'Error in adding User Category';\nvar ERROR_UPDATING_PRODUCT = 'Error in updating Product';\nvar ERROR_UPDATING_CATEGORY = 'Error in updating Category';\nvar ERROR_UPDATING_USER = 'Error in updating User';\nvar PRODUCT_UPDATED_SUCCESSFULLY = 'Product Updated Successfully';\nvar CATEGORY_UPDATED_SUCCESSFULLY = 'Category Updated Successfully';\nvar USER_UPDATED_SUCCESSFULLY = 'User Updated Successfully';\nvar QRCODE_GENERATION_ERROR = 'QR code generation error';\nvar PRODUCT_HISTORY_TYPES = {\n  CREATED: 'Product created',\n  QUANTITY_UPDATED: 'Quantity Updated'\n};\n\n//# sourceURL=webpack:///./src/constants/StaticConstants.js?");

/***/ }),

/***/ "./src/database/config.js":
/*!********************************!*\
  !*** ./src/database/config.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var dbName = 'inventory_management';\nvar mongoURI = \"mongodb+srv://micky007:micky007@inventorymanagement-2z5en.mongodb.net/\".concat(dbName, \"?retryWrites=true\");\nvar mongoPort = '27017';\nvar dbConfig = {\n  conStr: mongoURI,\n  mongoPort: mongoPort\n};\nmodule.exports = dbConfig;\n\n//# sourceURL=webpack:///./src/database/config.js?");

/***/ }),

/***/ "./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/database/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _dbConfig$conStr = _config__WEBPACK_IMPORTED_MODULE_1___default.a.conStr,\n      conStr = _dbConfig$conStr === void 0 ? '' : _dbConfig$conStr;\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(conStr, {\n    useNewUrlParser: true\n  });\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('connected', function () {\n    console.log(\"DB connection Successful congrats\"); // eslint-disable-line\n  });\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('error', function (err) {\n    console.log('DB connection Failed..', err); // eslint-disable-line\n  });\n});\n\n//# sourceURL=webpack:///./src/database/index.js?");

/***/ }),

/***/ "./src/database/models/categories.model.js":
/*!*************************************************!*\
  !*** ./src/database/models/categories.model.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar categoriesSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  _id: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,\n  userId: String,\n  categoryId: String,\n  categoryName: String\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('categories', categoriesSchema, 'categories'));\n\n//# sourceURL=webpack:///./src/database/models/categories.model.js?");

/***/ }),

/***/ "./src/database/models/products.model.js":
/*!***********************************************!*\
  !*** ./src/database/models/products.model.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar productsSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  _id: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,\n  userId: String,\n  productId: String,\n  categoryId: String,\n  productName: String,\n  productDescription: String,\n  productUnitPrice: Number,\n  productQuantity: Number,\n  history: Array,\n  qRcode: String\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('products', productsSchema, 'products'));\n\n//# sourceURL=webpack:///./src/database/models/products.model.js?");

/***/ }),

/***/ "./src/database/models/users.model.js":
/*!********************************************!*\
  !*** ./src/database/models/users.model.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar usersSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  _id: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,\n  userId: String,\n  name: String,\n  gender: String,\n  age: Number,\n  email: String,\n  address: String\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('users', usersSchema, 'users'));\n\n//# sourceURL=webpack:///./src/database/models/users.model.js?");

/***/ }),

/***/ "./src/httpServer/config.js":
/*!**********************************!*\
  !*** ./src/httpServer/config.js ***!
  \**********************************/
/*! exports provided: port */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"port\", function() { return port; });\n// Skipping default export as we can have multiple caonfig variable later\n// eslint-disable-next-line import/prefer-default-export\nvar port = process.env.PORT || 3000;\n\n//# sourceURL=webpack:///./src/httpServer/config.js?");

/***/ }),

/***/ "./src/httpServer/index.js":
/*!*********************************!*\
  !*** ./src/httpServer/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/httpServer/config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  var server = Object(http__WEBPACK_IMPORTED_MODULE_0__[\"createServer\"])(app);\n  server.listen(_config__WEBPACK_IMPORTED_MODULE_1__[\"port\"], function () {\n    console.log('Inventory Management Server Started on port: ', _config__WEBPACK_IMPORTED_MODULE_1__[\"port\"]); // eslint-disable-line\n  });\n});\n\n//# sourceURL=webpack:///./src/httpServer/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_robots_txt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-robots-txt */ \"express-robots-txt\");\n/* harmony import */ var express_robots_txt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_robots_txt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./database */ \"./src/database/index.js\");\n/* harmony import */ var _middlewares_errorHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/errorHandler */ \"./src/middlewares/errorHandler.js\");\n/* harmony import */ var _middlewares_notFoundError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/notFoundError */ \"./src/middlewares/notFoundError.js\");\n/* harmony import */ var _httpServer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./httpServer */ \"./src/httpServer/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar Users = _routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Users,\n    Categories = _routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Categories,\n    Products = _routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Products,\n    Product = _routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Product,\n    Qrcodelist = _routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Qrcodelist;\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nObject(_database__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\napp.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()('dev'));\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  extended: false\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());\napp.use(express_robots_txt__WEBPACK_IMPORTED_MODULE_4___default()({\n  UserAgent: '*',\n  Disallow: '/'\n}));\napp.use('/users', Users);\napp.use('/categories', Categories);\napp.use('/product', Product);\napp.use('/products', Products);\napp.use('/qrcodelist', Qrcodelist);\napp.use(_middlewares_notFoundError__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use(_middlewares_errorHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nObject(_httpServer__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/middlewares/errorHandler.js":
/*!*****************************************!*\
  !*** ./src/middlewares/errorHandler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (error, req, res, next) {\n  res.status(error.status || 500);\n  res.json({\n    message: error.message\n  });\n  next();\n});\n\n//# sourceURL=webpack:///./src/middlewares/errorHandler.js?");

/***/ }),

/***/ "./src/middlewares/notFoundError.js":
/*!******************************************!*\
  !*** ./src/middlewares/notFoundError.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res, next) {\n  next(Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"createError\"])(404, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_1__[\"NOT_FOUND_ERROR\"]));\n});\n\n//# sourceURL=webpack:///./src/middlewares/notFoundError.js?");

/***/ }),

/***/ "./src/routes/categories.js":
/*!**********************************!*\
  !*** ./src/routes/categories.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ \"uniqid\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _database_models_categories_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/models/categories.model */ \"./src/database/models/categories.model.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/:userId?', function (req, res, next) {\n  var _req$params = req.params;\n  _req$params = _req$params === void 0 ? {} : _req$params;\n  var _req$params$userId = _req$params.userId,\n      userId = _req$params$userId === void 0 ? -1 : _req$params$userId;\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ID_MISSING\"]));\n  }\n\n  _database_models_categories_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({\n    userId: userId\n  }, {\n    _id: 0\n  }).exec().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_NOT_FOUND\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ID_INVALID\"]));\n  });\n});\nrouter[\"delete\"]('/', function (req, res, next) {\n  var _req$body = req.body,\n      _req$body$userId = _req$body.userId,\n      userId = _req$body$userId === void 0 ? '' : _req$body$userId,\n      _req$body$categoryId = _req$body.categoryId,\n      categoryId = _req$body$categoryId === void 0 ? '' : _req$body$categoryId;\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  if (categoryId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"CATEGORY_ID_MISSING\"]));\n    return;\n  }\n\n  _database_models_categories_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteOne({\n    userId: userId,\n    categoryId: categoryId\n  }, function (err) {\n    if (err) next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_DELETING_CATEGORY\"]));\n    res.status(200).send({\n      message: _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"CATEGORY_DELETED_SUCCESSFULLY\"]\n    });\n  });\n});\nrouter.post('/:userId?', function (req, res, next) {\n  var _req$params2 = req.params;\n  _req$params2 = _req$params2 === void 0 ? {} : _req$params2;\n  var _req$params2$userId = _req$params2.userId,\n      userId = _req$params2$userId === void 0 ? -1 : _req$params2$userId,\n      _req$body$categoryNam = req.body.categoryName,\n      categoryName = _req$body$categoryNam === void 0 ? '' : _req$body$categoryNam;\n  var newCategory = new _database_models_categories_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    _id: new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId(),\n    categoryId: uniqid__WEBPACK_IMPORTED_MODULE_2___default.a.time(),\n    userId: userId,\n    categoryName: categoryName\n  });\n  newCategory.save().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"CATEGORY_ADDED_SUCCESSFULLY\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_ADDING_CATEGORY\"]));\n  });\n});\nrouter.put('/:userId?/:categoryId?', function (req, res, next) {\n  var _req$params3 = req.params;\n  _req$params3 = _req$params3 === void 0 ? {} : _req$params3;\n  var _req$params3$userId = _req$params3.userId,\n      userId = _req$params3$userId === void 0 ? -1 : _req$params3$userId,\n      _req$params3$category = _req$params3.categoryId,\n      categoryId = _req$params3$category === void 0 ? -1 : _req$params3$category,\n      _req$body$categoryNam2 = req.body.categoryName,\n      categoryName = _req$body$categoryNam2 === void 0 ? '' : _req$body$categoryNam2;\n  var detailsToUpdate = {};\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  if (categoryId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"CATEGORY_ID_MISSING\"]));\n    return;\n  }\n\n  if (categoryName !== -1) {\n    detailsToUpdate = _objectSpread({}, detailsToUpdate, {\n      categoryName: categoryName\n    });\n  }\n\n  _database_models_categories_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].update({\n    userId: userId,\n    categoryId: categoryId\n  }, _objectSpread({}, detailsToUpdate), function (err) {\n    if (err) {\n      next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_UPDATING_CATEGORY\"]));\n    }\n\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"CATEGORY_UPDATED_SUCCESSFULLY\"]));\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/categories.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./src/routes/users.js\");\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories */ \"./src/routes/categories.js\");\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ \"./src/routes/products.js\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product */ \"./src/routes/product.js\");\n/* harmony import */ var _qrcodelist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qrcodelist */ \"./src/routes/qrcodelist.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Users: _users__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Categories: _categories__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Products: _products__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Product: _product__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  Qrcodelist: _qrcodelist__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/product.js":
/*!*******************************!*\
  !*** ./src/routes/product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ \"uniqid\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrcode */ \"qrcode\");\n/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _database_models_products_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database/models/products.model */ \"./src/database/models/products.model.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n // import JsBarcode from 'jsbarcode'\n// import Canvas from 'canvas'\n\n\n\n\nvar CREATED = _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"PRODUCT_HISTORY_TYPES\"].CREATED,\n    QUANTITY_UPDATED = _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"PRODUCT_HISTORY_TYPES\"].QUANTITY_UPDATED;\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/:userId?/:categoryId?/:productId?', function (req, res, next) {\n  var _req$params = req.params;\n  _req$params = _req$params === void 0 ? {} : _req$params;\n  var _req$params$userId = _req$params.userId,\n      userId = _req$params$userId === void 0 ? -1 : _req$params$userId,\n      _req$params$categoryI = _req$params.categoryId,\n      categoryId = _req$params$categoryI === void 0 ? -1 : _req$params$categoryI,\n      _req$params$productId = _req$params.productId,\n      productId = _req$params$productId === void 0 ? -1 : _req$params$productId;\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  if (categoryId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"CATEGORY_ID_MISSING\"]));\n    return;\n  }\n\n  if (productId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"PRODUCT_ID_MISSING\"]));\n    return;\n  }\n\n  _database_models_products_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].find({\n    userId: userId,\n    categoryId: categoryId,\n    productId: productId\n  }, {\n    _id: 0\n  }).exec().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"PRODUCT_NOT_FOUND\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"UNABLE_TO_FETCH_PRODUCT_RESPONSE\"]));\n  });\n});\nrouter[\"delete\"]('/:userId?/:categoryId?/:productId?', function (req, res, next) {\n  var _req$params2 = req.params;\n  _req$params2 = _req$params2 === void 0 ? {} : _req$params2;\n  var _req$params2$userId = _req$params2.userId,\n      userId = _req$params2$userId === void 0 ? -1 : _req$params2$userId,\n      _req$params2$category = _req$params2.categoryId,\n      categoryId = _req$params2$category === void 0 ? -1 : _req$params2$category,\n      _req$params2$productI = _req$params2.productId,\n      productId = _req$params2$productI === void 0 ? -1 : _req$params2$productI;\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  if (categoryId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"CATEGORY_ID_MISSING\"]));\n    return;\n  }\n\n  if (productId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"PRODUCT_ID_MISSING\"]));\n    return;\n  }\n\n  _database_models_products_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deleteOne({\n    userId: userId,\n    categoryId: categoryId,\n    productId: productId\n  }, function (err) {\n    if (err) next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"ERROR_DELETING_PRODUCT\"]));\n    res.status(200).send({\n      message: _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"PRODUCT_DELETED_SUCCESSFULLY\"]\n    });\n  });\n});\n\nvar saveProduct = function saveProduct(qRcode, productId, cureentActivity, req, res, next) {\n  var _req$params3 = req.params;\n  _req$params3 = _req$params3 === void 0 ? {} : _req$params3;\n  var _req$params3$userId = _req$params3.userId,\n      userId = _req$params3$userId === void 0 ? -1 : _req$params3$userId,\n      _req$params3$category = _req$params3.categoryId,\n      categoryId = _req$params3$category === void 0 ? -1 : _req$params3$category,\n      _req$body = req.body,\n      _req$body$productName = _req$body.productName,\n      productName = _req$body$productName === void 0 ? '' : _req$body$productName,\n      _req$body$productDesc = _req$body.productDescription,\n      productDescription = _req$body$productDesc === void 0 ? '' : _req$body$productDesc,\n      _req$body$productUnit = _req$body.productUnitPrice,\n      productUnitPrice = _req$body$productUnit === void 0 ? 0 : _req$body$productUnit,\n      _req$body$productNewQ = _req$body.productNewQuantity,\n      productNewQuantity = _req$body$productNewQ === void 0 ? 0 : _req$body$productNewQ;\n  var newProduct = new _database_models_products_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n    _id: new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId(),\n    productId: productId,\n    userId: userId,\n    categoryId: categoryId,\n    productName: productName,\n    productDescription: productDescription,\n    productUnitPrice: productUnitPrice,\n    productQuantity: productNewQuantity,\n    history: cureentActivity,\n    qRcode: qRcode\n  });\n  newProduct.save().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"PRODUCT_ADDED_SUCCESSFULLY\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"ERROR_ADDING_PRODUCT\"]));\n  });\n};\n\nvar generateQRandAddProduct =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(data, productId, cureentActivity, req, res, next) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.t0 = saveProduct;\n            _context.next = 4;\n            return qrcode__WEBPACK_IMPORTED_MODULE_3___default.a.toDataURL(data);\n\n          case 4:\n            _context.t1 = _context.sent;\n            _context.t2 = productId;\n            _context.t3 = cureentActivity;\n            _context.t4 = req;\n            _context.t5 = res;\n            _context.t6 = next;\n            return _context.abrupt(\"return\", (0, _context.t0)(_context.t1, _context.t2, _context.t3, _context.t4, _context.t5, _context.t6));\n\n          case 13:\n            _context.prev = 13;\n            _context.t7 = _context[\"catch\"](0);\n            next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"QRCODE_GENERATION_ERROR\"]));\n            return _context.abrupt(\"return\", -1);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 13]]);\n  }));\n\n  return function generateQRandAddProduct(_x, _x2, _x3, _x4, _x5, _x6) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nrouter.post('/:userId?/:categoryId?', function (req, res, next) {\n  var _req$params4 = req.params;\n  _req$params4 = _req$params4 === void 0 ? {} : _req$params4;\n  var _req$params4$userId = _req$params4.userId,\n      userId = _req$params4$userId === void 0 ? -1 : _req$params4$userId,\n      _req$params4$category = _req$params4.categoryId,\n      categoryId = _req$params4$category === void 0 ? -1 : _req$params4$category,\n      _req$body2 = req.body,\n      _req$body2$productNam = _req$body2.productName,\n      productName = _req$body2$productNam === void 0 ? '' : _req$body2$productNam,\n      _req$body2$productDes = _req$body2.productDescription,\n      productDescription = _req$body2$productDes === void 0 ? '' : _req$body2$productDes,\n      _req$body2$productQua = _req$body2.productQuantity,\n      productQuantity = _req$body2$productQua === void 0 ? 0 : _req$body2$productQua,\n      _req$body2$productNew = _req$body2.productNewQuantity,\n      productNewQuantity = _req$body2$productNew === void 0 ? 0 : _req$body2$productNew;\n  var cureentActivity = [{\n    date: Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"currentDateIst\"])(),\n    type: CREATED,\n    message: 'Product Added succesfully in system'\n  }];\n\n  if (productQuantity !== productNewQuantity) {\n    cureentActivity = [].concat(_toConsumableArray(cureentActivity), [{\n      date: Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"currentDateIst\"])(),\n      type: QUANTITY_UPDATED,\n      oldValue: productQuantity,\n      updatedValue: productNewQuantity,\n      message: \"quantity updated from \".concat(productQuantity, \" to \").concat(productNewQuantity)\n    }]);\n  }\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  if (categoryId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"CATEGORY_ID_MISSING\"]));\n    return;\n  }\n\n  var productId = uniqid__WEBPACK_IMPORTED_MODULE_2___default.a.time();\n  generateQRandAddProduct(JSON.stringify({\n    productId: productId,\n    userId: userId,\n    categoryId: categoryId,\n    productName: productName,\n    productDescription: productDescription\n  }), productId, cureentActivity, req, res, next);\n});\nrouter.put('/:userId?/:categoryId?/:productId?', function (req, res, next) {\n  var _req$params5 = req.params;\n  _req$params5 = _req$params5 === void 0 ? {} : _req$params5;\n  var _req$params5$userId = _req$params5.userId,\n      userId = _req$params5$userId === void 0 ? -1 : _req$params5$userId,\n      _req$params5$category = _req$params5.categoryId,\n      categoryId = _req$params5$category === void 0 ? -1 : _req$params5$category,\n      _req$params5$productI = _req$params5.productId,\n      productId = _req$params5$productI === void 0 ? -1 : _req$params5$productI,\n      _req$body3 = req.body,\n      _req$body3$productNam = _req$body3.productName,\n      productName = _req$body3$productNam === void 0 ? -1 : _req$body3$productNam,\n      _req$body3$productDes = _req$body3.productDescription,\n      productDescription = _req$body3$productDes === void 0 ? -1 : _req$body3$productDes,\n      _req$body3$productUni = _req$body3.productUnitPrice,\n      productUnitPrice = _req$body3$productUni === void 0 ? -1 : _req$body3$productUni,\n      _req$body3$productQua = _req$body3.productQuantity,\n      productQuantity = _req$body3$productQua === void 0 ? 0 : _req$body3$productQua,\n      _req$body3$productNew = _req$body3.productNewQuantity,\n      productNewQuantity = _req$body3$productNew === void 0 ? 0 : _req$body3$productNew;\n  var cureentActivity = [];\n\n  if (productQuantity !== productNewQuantity) {\n    cureentActivity = [{\n      date: Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"currentDateIst\"])(),\n      type: QUANTITY_UPDATED,\n      oldValue: productQuantity,\n      updatedValue: productNewQuantity,\n      message: \"quantity updated from \".concat(productQuantity, \" to \").concat(productNewQuantity)\n    }];\n  }\n\n  var detailsToUpdate = {};\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  if (categoryId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"CATEGORY_ID_MISSING\"]));\n    return;\n  }\n\n  if (productId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"PRODUCT_ID_MISSING\"]));\n    return;\n  }\n\n  detailsToUpdate = _objectSpread({}, detailsToUpdate, {\n    $push: {\n      history: cureentActivity\n    }\n  });\n\n  if (productName !== -1) {\n    detailsToUpdate = _objectSpread({}, detailsToUpdate, {\n      productName: productName\n    });\n  }\n\n  if (productDescription !== -1) {\n    detailsToUpdate = _objectSpread({}, detailsToUpdate, {\n      productDescription: productDescription\n    });\n  }\n\n  if (productUnitPrice !== -1) {\n    detailsToUpdate = _objectSpread({}, detailsToUpdate, {\n      productUnitPrice: productUnitPrice\n    });\n  }\n\n  if (productQuantity !== -1) {\n    detailsToUpdate = _objectSpread({}, detailsToUpdate, {\n      productQuantity: productNewQuantity\n    });\n  }\n\n  _database_models_products_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].update({\n    userId: userId,\n    categoryId: categoryId,\n    productId: productId\n  }, _objectSpread({}, detailsToUpdate), function (err) {\n    if (err) {\n      next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"ERROR_UPDATING_PRODUCT\"]));\n    }\n\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_6__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_7__[\"PRODUCT_UPDATED_SUCCESSFULLY\"]));\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/product.js?");

/***/ }),

/***/ "./src/routes/products.js":
/*!********************************!*\
  !*** ./src/routes/products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database_models_products_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/models/products.model */ \"./src/database/models/products.model.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/:userId?/:categoryId?', function (req, res, next) {\n  var _req$params = req.params;\n  _req$params = _req$params === void 0 ? {} : _req$params;\n  var _req$params$categoryI = _req$params.categoryId,\n      categoryId = _req$params$categoryI === void 0 ? -1 : _req$params$categoryI,\n      _req$params$userId = _req$params.userId,\n      userId = _req$params$userId === void 0 ? -1 : _req$params$userId;\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  if (categoryId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"CATEGORY_ID_MISSING\"]));\n    return;\n  }\n\n  _database_models_products_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n    userId: userId,\n    categoryId: categoryId\n  }, {\n    _id: 0\n  }).exec().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"PRODUCT_NOT_FOUND\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"UNABLE_TO_FETCH_PRODUCTS_RESPONSE\"]));\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/products.js?");

/***/ }),

/***/ "./src/routes/qrcodelist.js":
/*!**********************************!*\
  !*** ./src/routes/qrcodelist.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database_models_products_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/models/products.model */ \"./src/database/models/products.model.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nvar createHtmlResponseForQr = function createHtmlResponseForQr(res, dataResponse) {\n  dataResponse.map(function (_ref) {\n    var productName = _ref.productName,\n        qRcode = _ref.qRcode;\n    return res.write(\"<div><div>\".concat(productName, \"</div><img height=\\\"50px\\\" width=\\\"50px\\\" src=\\\"\").concat(qRcode, \"\\\" /></div>\"));\n  });\n};\n\nrouter.get('/:userId?/:categoryId?', function (req, res, next) {\n  var _req$params = req.params;\n  _req$params = _req$params === void 0 ? {} : _req$params;\n  var _req$params$categoryI = _req$params.categoryId,\n      categoryId = _req$params$categoryI === void 0 ? -1 : _req$params$categoryI,\n      _req$params$userId = _req$params.userId,\n      userId = _req$params$userId === void 0 ? -1 : _req$params$userId;\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  if (categoryId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"CATEGORY_ID_MISSING\"]));\n    return;\n  }\n\n  _database_models_products_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n    userId: userId,\n    categoryId: categoryId\n  }, {\n    _id: 0,\n    productName: 1,\n    qRcode: 1\n  }).exec().then(function (dataResponse) {\n    if (dataResponse) res.status(200).send(createHtmlResponseForQr(res, dataResponse));else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"PRODUCT_NOT_FOUND\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"UNABLE_TO_FETCH_PRODUCTS_RESPONSE\"]));\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/qrcodelist.js?");

/***/ }),

/***/ "./src/routes/users.js":
/*!*****************************!*\
  !*** ./src/routes/users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ \"uniqid\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _database_models_users_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/models/users.model */ \"./src/database/models/users.model.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', function (req, res, next) {\n  _database_models_users_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({}, {\n    _id: 0\n  }).exec().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_NOT_FOUND\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ID_INVALID\"]));\n  });\n});\nrouter[\"delete\"]('/:userId?', function (req, res, next) {\n  var _req$params = req.params;\n  _req$params = _req$params === void 0 ? {} : _req$params;\n  var _req$params$userId = _req$params.userId,\n      userId = _req$params$userId === void 0 ? -1 : _req$params$userId;\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  _database_models_users_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteOne({\n    userId: userId\n  }, function (err) {\n    if (err) next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_DELETING_USER\"]));\n    res.status(200).send({\n      message: _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_DELETED_SUCCESSFULLY\"]\n    });\n  });\n});\nrouter.post('/', function (req, res, next) {\n  var _req$body = req.body,\n      _req$body$name = _req$body.name,\n      name = _req$body$name === void 0 ? -1 : _req$body$name,\n      _req$body$gender = _req$body.gender,\n      gender = _req$body$gender === void 0 ? -1 : _req$body$gender,\n      _req$body$age = _req$body.age,\n      age = _req$body$age === void 0 ? -1 : _req$body$age,\n      _req$body$email = _req$body.email,\n      email = _req$body$email === void 0 ? -1 : _req$body$email,\n      _req$body$address = _req$body.address,\n      address = _req$body$address === void 0 ? -1 : _req$body$address;\n  var newUser = new _database_models_users_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    _id: new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId(),\n    userId: uniqid__WEBPACK_IMPORTED_MODULE_2___default.a.time(),\n    name: name,\n    gender: gender,\n    age: age,\n    email: email,\n    address: address\n  });\n  newUser.save().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ADDED_SUCCESSFULLY\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_ADDING_USER\"]));\n  });\n});\nrouter.put('/:userId?', function (req, res, next) {\n  var _req$params2 = req.params;\n  _req$params2 = _req$params2 === void 0 ? {} : _req$params2;\n  var _req$params2$userId = _req$params2.userId,\n      userId = _req$params2$userId === void 0 ? -1 : _req$params2$userId,\n      _req$body2 = req.body,\n      _req$body2$name = _req$body2.name,\n      name = _req$body2$name === void 0 ? -1 : _req$body2$name,\n      _req$body2$gender = _req$body2.gender,\n      gender = _req$body2$gender === void 0 ? -1 : _req$body2$gender,\n      _req$body2$age = _req$body2.age,\n      age = _req$body2$age === void 0 ? -1 : _req$body2$age,\n      _req$body2$email = _req$body2.email,\n      email = _req$body2$email === void 0 ? -1 : _req$body2$email,\n      _req$body2$address = _req$body2.address,\n      address = _req$body2$address === void 0 ? -1 : _req$body2$address;\n  var detailsToUpdate = {};\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  if (name !== -1) {\n    detailsToUpdate = _objectSpread({}, detailsToUpdate, {\n      name: name\n    });\n  }\n\n  if (gender !== -1) {\n    detailsToUpdate = _objectSpread({}, detailsToUpdate, {\n      gender: gender\n    });\n  }\n\n  if (age !== -1) {\n    detailsToUpdate = _objectSpread({}, detailsToUpdate, {\n      age: age\n    });\n  }\n\n  if (email !== -1) {\n    detailsToUpdate = _objectSpread({}, detailsToUpdate, {\n      email: email\n    });\n  }\n\n  if (address !== -1) {\n    detailsToUpdate = _objectSpread({}, detailsToUpdate, {\n      address: address\n    });\n  }\n\n  _database_models_users_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].update({\n    userId: userId\n  }, _objectSpread({}, detailsToUpdate), function (err) {\n    if (err) {\n      next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_UPDATING_USER\"]));\n    }\n\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_UPDATED_SUCCESSFULLY\"]));\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/users.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: createError, currentDateIst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createError\", function() { return createError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentDateIst\", function() { return currentDateIst; });\n// skipping default export as we can have multiple utility function later\n// eslint-disable-next-line import/prefer-default-export\nvar createError = function createError(status, errMsg) {\n  var error = new Error(errMsg);\n  error.status = status;\n  return error;\n};\nvar currentDateIst = function currentDateIst() {\n  var indiaTime = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Kolkata'\n  });\n  indiaTime = new Date(indiaTime);\n  return indiaTime;\n};\n\n//# sourceURL=webpack:///./src/utilities.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-robots-txt":
/*!*************************************!*\
  !*** external "express-robots-txt" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-robots-txt\");\n\n//# sourceURL=webpack:///external_%22express-robots-txt%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "qrcode":
/*!*************************!*\
  !*** external "qrcode" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"qrcode\");\n\n//# sourceURL=webpack:///external_%22qrcode%22?");

/***/ }),

/***/ "uniqid":
/*!*************************!*\
  !*** external "uniqid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uniqid\");\n\n//# sourceURL=webpack:///external_%22uniqid%22?");

/***/ })

/******/ });