/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components */ \"./src/components/index.js\");\n/* harmony import */ var _src_data_recipes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/data/recipes.json */ \"./src/data/recipes.json\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/server/index.js\";\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst PORT = process.env.PORT || 4000; // const PORT = 4000\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('./build'));\napp.get('/*', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src_components__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n    recipes: _src_data_recipes_json__WEBPACK_IMPORTED_MODULE_4__,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 45\n    }\n  }));\n});\napp.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));\n\n//# sourceURL=webpack://ch12_1.git/./server/index.js?");

/***/ }),

/***/ "./src/components/AddColorForm.js":
/*!****************************************!*\
  !*** ./src/components/AddColorForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddColorForm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.js\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/AddColorForm.js\";\n\n\nfunction AddColorForm() {\n  const [titleProps, resetTitle] = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useInput)('');\n  const [colorProps, resetColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useInput)('#000000');\n  const {\n    addColor\n  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useColors)();\n\n  const submit = event => {\n    event.preventDefault();\n    addColor(titleProps.value, colorProps.value);\n    resetTitle();\n    resetColor();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: submit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", Object.assign({}, titleProps, {\n    type: \"text\",\n    placeholder: \"color title...\",\n    required: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", Object.assign({}, colorProps, {\n    type: \"color\",\n    required: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"ADD\"));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/AddColorForm.js?");

/***/ }),

/***/ "./src/components/AdvancedGitHubUser.js":
/*!**********************************************!*\
  !*** ./src/components/AdvancedGitHubUser.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AdvancedGitHubUser)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fetch */ \"./src/components/Fetch.js\");\n/* harmony import */ var _UseRepositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UseRepositories */ \"./src/components/UseRepositories.js\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/AdvancedGitHubUser.js\";\n\n\n\nfunction AdvancedGitHubUser(_ref) {\n  let {\n    login\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Fetch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    uri: `https://api.github.com/users/${login}`,\n    renderSuccess: UserDetails,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 10\n    }\n  });\n}\n\nfunction UserDetails(_ref2) {\n  let {\n    data\n  } = _ref2;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: data.avatar_url,\n    alt: data.login,\n    style: {\n      width: 200\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, data.login), data.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 23\n    }\n  }, data.name), data.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 27\n    }\n  }, data.location)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UseRepositories__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    login: data.login,\n    selectedRepo: \"ch8_1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/AdvancedGitHubUser.js?");

/***/ }),

/***/ "./src/components/Color.js":
/*!*********************************!*\
  !*** ./src/components/Color.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Color)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StarRating */ \"./src/components/StarRating.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/Color.js\";\n\n\n\n\n\nfunction Color(_ref) {\n  let {\n    id,\n    title,\n    color,\n    rating\n  } = _ref;\n  let navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();\n  const {\n    rateColor,\n    removeColor\n  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useColors)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: () => removeColor(id),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTrash, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      height: 50,\n      background: color\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: () => {\n      navigate(`/${id}`);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"go to ColorDetails\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StarRating__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    selectedStars: rating,\n    onRate: newRating => rateColor(id, newRating),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/Color.js?");

/***/ }),

/***/ "./src/components/ColorDetails.js":
/*!****************************************!*\
  !*** ./src/components/ColorDetails.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ColorDetails)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.js\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/ColorDetails.js\";\n\n\n\nfunction ColorDetails() {\n  let {\n    id\n  } = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n  console.log(`id: ${id}`);\n  let {\n    colors\n  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useColors)();\n  let foundColor = colors.find(color => color.id === id);\n  console.log(foundColor);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: foundColor.color,\n      height: 100,\n      width: 100\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, foundColor.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, foundColor.color));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/ColorDetails.js?");

/***/ }),

/***/ "./src/components/ColorList.js":
/*!*************************************!*\
  !*** ./src/components/ColorList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ColorList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Color */ \"./src/components/Color.js\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/ColorList.js\";\n\n\n\nfunction ColorList() {\n  const {\n    colors\n  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useColors)();\n\n  if (!colors.length) {\n    console.log(`colors.length: ${colors.length}`);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 12\n      }\n    }, \"\\uD45C\\uC2DC\\uD560 \\uC0C9\\uC774 \\uC5C6\\uC2B5\\uB2C8\\uB2E4.\");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, colors.map(color => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object.assign({\n    key: color.id\n  }, color, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }))));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/ColorList.js?");

/***/ }),

/***/ "./src/components/Fetch.js":
/*!*********************************!*\
  !*** ./src/components/Fetch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fetch)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.js\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/Fetch.js\";\n\n\nfunction Fetch(_ref) {\n  let {\n    uri,\n    renderSuccess,\n    loadingFallback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 21\n      }\n    }, \"loading...\"),\n    renderError = error => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"pre\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 28\n      }\n    }, JSON.stringify(error, null, 2))\n  } = _ref;\n  const {\n    loading,\n    data,\n    error\n  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useFetch)(uri);\n  if (loading) return loadingFallback;\n  if (error) return renderError(error);\n  if (data) return renderSuccess({\n    data\n  });\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/Fetch.js?");

/***/ }),

/***/ "./src/components/GitHubUser.js":
/*!**************************************!*\
  !*** ./src/components/GitHubUser.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GitHubUser)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/GitHubUser.js\";\n\n\nconst loadJSON = key => key && JSON.parse(localStorage.getItem(key));\n\nconst saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));\n\nfunction GitHubUser(_ref) {\n  let {\n    login\n  } = _ref;\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(loadJSON(`user:${login}`));\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!data) return;\n    const {\n      name,\n      avatar_url,\n      location\n    } = data;\n    saveJSON(`user:${login}`, {\n      name,\n      avatar_url,\n      location\n    });\n  }, [data]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!data) return;\n    setLoading(true);\n    fetch(`https://api.github.com/users/${login}`).then(res => res.json()).then(setData).then(() => setLoading(false)).catch(setError);\n  }, [login]);\n\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 12\n      }\n    }, \"loading\");\n  }\n\n  if (error) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"pre\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 12\n      }\n    }, JSON.stringify(error, null, 2));\n  }\n\n  if (!data) return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: data.avatar_url,\n    alt: data.login,\n    style: {\n      width: 200\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, data.login), data.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 23\n    }\n  }, data.name), data.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 27\n    }\n  }, data.location)));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/GitHubUser.js?");

/***/ }),

/***/ "./src/components/Ingredient.js":
/*!**************************************!*\
  !*** ./src/components/Ingredient.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ingredient)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/Ingredient.js\";\n\nfunction Ingredient(_ref) {\n  let {\n    amount,\n    measurement,\n    name\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, amount, \" \", measurement, \" \", name);\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/Ingredient.js?");

/***/ }),

/***/ "./src/components/IngredientsList.js":
/*!*******************************************!*\
  !*** ./src/components/IngredientsList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IngredientsList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Ingredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ingredient */ \"./src/components/Ingredient.js\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/IngredientsList.js\";\n\n\nfunction IngredientsList(_ref) {\n  let {\n    list\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"ingredients\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, list.map((ingredient, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ingredient__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object.assign({\n    key: i\n  }, ingredient, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }))));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/IngredientsList.js?");

/***/ }),

/***/ "./src/components/Instructions.js":
/*!****************************************!*\
  !*** ./src/components/Instructions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Instructions)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/Instructions.js\";\n\nfunction Instructions(_ref) {\n  let {\n    title,\n    steps\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    className: \"instructions\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, title), steps.map((s, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    key: i,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, s)));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/Instructions.js?");

/***/ }),

/***/ "./src/components/List.js":
/*!********************************!*\
  !*** ./src/components/List.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List),\n/* harmony export */   \"tahoe_peaks\": () => (/* binding */ tahoe_peaks)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/List.js\";\n\nconst tahoe_peaks = [{\n  name: 'Freel Peak',\n  elevation: 10891\n}, {\n  name: 'Monument Peak',\n  elevation: 10067\n}, {\n  name: 'Pyramid Peak',\n  elevation: 9983\n}, {\n  name: 'Mt. Tallac',\n  elevation: 9735\n}];\nfunction List(_ref) {\n  let {\n    data = [],\n    renderEmpty,\n    renderItem\n  } = _ref;\n  if (!data.length) return renderEmpty;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 10\n    }\n  }, data.map(renderItem));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/List.js?");

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recipe */ \"./src/components/Recipe.js\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/Menu.js\";\n\n\n\nfunction Menu(_ref) {\n  let {\n    recipes\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"\\uB9DB\\uC788\\uB294 \\uC870\\uB9AC\\uBC95\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"recipes\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, recipes.map((recipe, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object.assign({\n    key: i\n  }, recipe, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  })))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://ch12_1.git/./src/components/Menu.js?");

/***/ }),

/***/ "./src/components/Recipe.js":
/*!**********************************!*\
  !*** ./src/components/Recipe.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _IngredientsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IngredientsList */ \"./src/components/IngredientsList.js\");\n/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instructions */ \"./src/components/Instructions.js\");\n/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StarRating */ \"./src/components/StarRating.js\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/Recipe.js\";\n\n\n\n\n\nfunction Recipe(_ref) {\n  let {\n    name,\n    ingredients,\n    steps\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    id: name.toLowerCase().replace(/ /g, '-'),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StarRating__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IngredientsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    list: ingredients,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Instructions__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"\\uC870\\uB9AC \\uC808\\uCC28\",\n    steps: steps,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recipe);\n\n//# sourceURL=webpack://ch12_1.git/./src/components/Recipe.js?");

/***/ }),

/***/ "./src/components/RepoMenu.js":
/*!************************************!*\
  !*** ./src/components/RepoMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RepoMenu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _RespositoryReadme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RespositoryReadme */ \"./src/components/RespositoryReadme.js\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/RepoMenu.js\";\n\n\n\nfunction RepoMenu(_ref) {\n  let {\n    repositories,\n    selected,\n    login\n  } = _ref;\n  const [{\n    name\n  }, previous, next] = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useIterator)(repositories, selected ? repositories.findIndex(repo => repo.name === selected) : null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!name) return;\n  }, [name]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: previous,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"<\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: next,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, \">\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RespositoryReadme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    login: login,\n    repo: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/RepoMenu.js?");

/***/ }),

/***/ "./src/components/RespositoryReadme.js":
/*!*********************************************!*\
  !*** ./src/components/RespositoryReadme.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RepositoryReadme)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/RespositoryReadme.js\";\n\n\nfunction RepositoryReadme(_ref) {\n  let {\n    repo,\n    login\n  } = _ref;\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [markdown, setMarkdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const loadReadme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (login, repo) => {\n    setLoading(true);\n    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;\n    const {\n      download_url\n    } = await fetch(uri).then(res => res.json());\n    const markdown = await fetch(download_url).then(res => res.text());\n    setMarkdown(markdown);\n    setLoading(false);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!repo || !login) return;\n    loadReadme(login, repo).catch(setError);\n  }, [repo]);\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, JSON.stringify(error, null, 2));\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 10\n    }\n  }, markdown);\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/RespositoryReadme.js?");

/***/ }),

/***/ "./src/components/Star.js":
/*!********************************!*\
  !*** ./src/components/Star.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Star)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/Star.js\";\n\n\nfunction Star(_ref) {\n  let {\n    selected = false,\n    onSelect = f => f\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaStar, {\n    color: selected ? 'red' : 'grey',\n    onClick: onSelect,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/Star.js?");

/***/ }),

/***/ "./src/components/StarRating.js":
/*!**************************************!*\
  !*** ./src/components/StarRating.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StarRating)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Star__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Star */ \"./src/components/Star.js\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/StarRating.js\";\n\n\n\nconst createArray = length => [...Array(length)];\n\nfunction StarRating(_ref) {\n  let {\n    style = {},\n    selectedStars = 0,\n    totalStars = 5,\n    onRate = f => f\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      padding: '5px',\n      ...style\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, createArray(totalStars).map((noUsed, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Star__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    key: i,\n    selected: selectedStars > i,\n    onSelect: () => onRate(i + 1),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, selectedStars, \" / \", totalStars));\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/StarRating.js?");

/***/ }),

/***/ "./src/components/UseRepositories.js":
/*!*******************************************!*\
  !*** ./src/components/UseRepositories.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserRepositories)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fetch */ \"./src/components/Fetch.js\");\n/* harmony import */ var _RepoMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RepoMenu */ \"./src/components/RepoMenu.js\");\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/components/UseRepositories.js\";\n\n\n\nfunction UserRepositories(_ref) {\n  let {\n    login,\n    selectedRepo\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Fetch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    uri: `https://api.github.com/users/${login}/repos`,\n    renderSuccess: _ref2 => {\n      let {\n        data\n      } = _ref2;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RepoMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        repositories: data,\n        selected: selectedRepo,\n        login: login,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 36\n        }\n      });\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  });\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/components/UseRepositories.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddColorForm\": () => (/* reexport safe */ _AddColorForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"AdvancedGitHubUser\": () => (/* reexport safe */ _AdvancedGitHubUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"ColorDetails\": () => (/* reexport safe */ _ColorDetails__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   \"ColorList\": () => (/* reexport safe */ _ColorList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Fetch\": () => (/* reexport safe */ _Fetch__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"GitHubUser\": () => (/* reexport safe */ _GitHubUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"List\": () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_4__.List),\n/* harmony export */   \"Menu\": () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   \"RepoMenu\": () => (/* reexport safe */ _RepoMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"RepositoryReadme\": () => (/* reexport safe */ _RespositoryReadme__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   \"UserRepositories\": () => (/* reexport safe */ _UseRepositories__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"tahoe_peaks\": () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_4__.tahoe_peaks)\n/* harmony export */ });\n/* harmony import */ var _AddColorForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddColorForm */ \"./src/components/AddColorForm.js\");\n/* harmony import */ var _ColorList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorList */ \"./src/components/ColorList.js\");\n/* harmony import */ var _GitHubUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GitHubUser */ \"./src/components/GitHubUser.js\");\n/* harmony import */ var _AdvancedGitHubUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdvancedGitHubUser */ \"./src/components/AdvancedGitHubUser.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List */ \"./src/components/List.js\");\n/* harmony import */ var _Fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fetch */ \"./src/components/Fetch.js\");\n/* harmony import */ var _RepoMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RepoMenu */ \"./src/components/RepoMenu.js\");\n/* harmony import */ var _UseRepositories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UseRepositories */ \"./src/components/UseRepositories.js\");\n/* harmony import */ var _RespositoryReadme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RespositoryReadme */ \"./src/components/RespositoryReadme.js\");\n/* harmony import */ var _ColorDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ColorDetails */ \"./src/components/ColorDetails.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Menu */ \"./src/components/Menu.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://ch12_1.git/./src/components/index.js?");

/***/ }),

/***/ "./src/hooks/color-hooks.js":
/*!**********************************!*\
  !*** ./src/hooks/color-hooks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorProvider\": () => (/* binding */ ColorProvider),\n/* harmony export */   \"useColors\": () => (/* binding */ useColors)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_color_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/color-data.json */ \"./src/data/color-data.json\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jinsangyoo/Desktop/Project/ch12_1.git/src/hooks/color-hooks.js\";\n\n\n\nconst ColorContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst useColors = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ColorContext);\nfunction ColorProvider(_ref) {\n  let {\n    children\n  } = _ref;\n  const [colors, setColors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_data_color_data_json__WEBPACK_IMPORTED_MODULE_1__.colors);\n\n  const addColor = (title, color) => setColors([...colors, {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n    rating: 0,\n    title,\n    color\n  }]);\n\n  const rateColor = (id, rating) => setColors(colors.map(color => color.id === id ? { ...color,\n    rating\n  } : color));\n\n  const removeColor = id => setColors(colors.filter(color => color.id !== id));\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ColorContext.Provider, {\n    value: {\n      colors,\n      addColor,\n      removeColor,\n      rateColor\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/hooks/color-hooks.js?");

/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorProvider\": () => (/* reexport safe */ _color_hooks__WEBPACK_IMPORTED_MODULE_1__.ColorProvider),\n/* harmony export */   \"useAnyKeyToRender\": () => (/* reexport safe */ _useAnyKeyToRender__WEBPACK_IMPORTED_MODULE_2__.useAnyKeyToRender),\n/* harmony export */   \"useColors\": () => (/* reexport safe */ _color_hooks__WEBPACK_IMPORTED_MODULE_1__.useColors),\n/* harmony export */   \"useFetch\": () => (/* reexport safe */ _useFetch__WEBPACK_IMPORTED_MODULE_3__.useFetch),\n/* harmony export */   \"useInput\": () => (/* reexport safe */ _useInput__WEBPACK_IMPORTED_MODULE_0__.useInput),\n/* harmony export */   \"useIterator\": () => (/* reexport safe */ _useIterator__WEBPACK_IMPORTED_MODULE_4__.useIterator)\n/* harmony export */ });\n/* harmony import */ var _useInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useInput */ \"./src/hooks/useInput.js\");\n/* harmony import */ var _color_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-hooks */ \"./src/hooks/color-hooks.js\");\n/* harmony import */ var _useAnyKeyToRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAnyKeyToRender */ \"./src/hooks/useAnyKeyToRender.js\");\n/* harmony import */ var _useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useFetch */ \"./src/hooks/useFetch.js\");\n/* harmony import */ var _useIterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useIterator */ \"./src/hooks/useIterator.js\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://ch12_1.git/./src/hooks/index.js?");

/***/ }),

/***/ "./src/hooks/useAnyKeyToRender.js":
/*!****************************************!*\
  !*** ./src/hooks/useAnyKeyToRender.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAnyKeyToRender\": () => (/* binding */ useAnyKeyToRender)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useAnyKeyToRender = () => {\n  const [, forceRender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    window.addEventListener('keydown', forceRender);\n    return () => window.removeEventListener('keydown', forceRender);\n  }, []);\n};\n\n//# sourceURL=webpack://ch12_1.git/./src/hooks/useAnyKeyToRender.js?");

/***/ }),

/***/ "./src/hooks/useFetch.js":
/*!*******************************!*\
  !*** ./src/hooks/useFetch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useFetch\": () => (/* binding */ useFetch)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useFetch(uri) {\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!uri) return;\n    fetch(uri).then(data => data.json()).then(setData).then(() => setLoading(false)).catch(setError);\n  }, [uri]);\n  return {\n    loading,\n    data,\n    error\n  };\n}\n\n//# sourceURL=webpack://ch12_1.git/./src/hooks/useFetch.js?");

/***/ }),

/***/ "./src/hooks/useInput.js":
/*!*******************************!*\
  !*** ./src/hooks/useInput.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useInput\": () => (/* binding */ useInput)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useInput = initialValue => {\n  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);\n  return [{\n    value,\n    onChange: e => setValue(e.target.value)\n  }, () => setValue(initialValue)];\n};\n\n//# sourceURL=webpack://ch12_1.git/./src/hooks/useInput.js?");

/***/ }),

/***/ "./src/hooks/useIterator.js":
/*!**********************************!*\
  !*** ./src/hooks/useIterator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIterator\": () => (/* binding */ useIterator)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useIterator = function () {\n  let items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  let initialIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  const [i, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialIndex);\n  const prev = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    if (i === 0) return setIndex(items.length - 1);\n    setIndex(i - 1);\n  }, [i, items.length]);\n  const next = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    if (i === items.length - 1) return setIndex(0);\n    setIndex(i + 1);\n  }, [i, items.length]);\n  const item = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => items[i], [i, items]);\n  return [item || items[0], prev, next];\n};\n\n//# sourceURL=webpack://ch12_1.git/./src/hooks/useIterator.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "./src/data/color-data.json":
/*!**********************************!*\
  !*** ./src/data/color-data.json ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"colors\":[{\"id\":\"01\",\"title\":\"해질녘 바다\",\"color\":\"#00c4e2\",\"rating\":5},{\"id\":\"83\",\"title\":\"잔디\",\"color\":\"#26ac56\",\"rating\":3},{\"id\":\"a1\",\"title\":\"밝은 빨강\",\"color\":\"#ff0000\",\"rating\":0}]}');\n\n//# sourceURL=webpack://ch12_1.git/./src/data/color-data.json?");

/***/ }),

/***/ "./src/data/recipes.json":
/*!*******************************!*\
  !*** ./src/data/recipes.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"name\":\"구운 연어\",\"ingredients\":[{\"name\":\"연어\",\"amount\":500,\"measurement\":\"그램\"},{\"name\":\"잣\",\"amount\":1,\"measurement\":\"컵\"},{\"name\":\"버터 상추\",\"amount\":2,\"measurement\":\"컵\"},{\"name\":\"옐로 스쿼시(Yellow Squash, 호박의 한 종류)\",\"amount\":1,\"measurement\":\"개\"},{\"name\":\"올리브 오일\",\"amount\":0.5,\"measurement\":\"컵\"},{\"name\":\"마늘\",\"amount\":3,\"measurement\":\"쪽\"}],\"steps\":[\"오븐을 350도로 예열한다.\",\"유리 베이킹 그릇에 올리브 오일을 두른다.\",\"연어, 마늘, 잣을 그릇에 담는다.\",\"오븐에서 15분간 익힌다.\",\"옐로 스쿼시를 추가하고 다시 30분간 오븐에서 익힌다.\",\"오븐에서 그릇을 꺼내서 15분간 식힌 다음에 상추를 곁들여서 내놓는다.\"]},{\"name\":\"생선 타코\",\"ingredients\":[{\"name\":\"흰살 생선\",\"amount\":500,\"measurement\":\"그램\"},{\"name\":\"치즈\",\"amount\":1,\"measurement\":\"컵\"},{\"name\":\"아이스버그 상추\",\"amount\":2,\"measurement\":\"컵\"},{\"name\":\"토마토\",\"amount\":2,\"measurement\":\"개(큰 것)\"},{\"name\":\"또띠야\",\"amount\":3,\"measurement\":\"개\"}],\"steps\":[\"생선을 그릴에 익힌다.\",\"또띠야 3장 위에 생선을 얹는다.\",\"또띠야에 얹은 생선 위에 상추, 토마토, 치즈를 얹는다.\"]}]');\n\n//# sourceURL=webpack://ch12_1.git/./src/data/recipes.json?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;