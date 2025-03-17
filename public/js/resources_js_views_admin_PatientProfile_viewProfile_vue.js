"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_PatientProfile_viewProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_TitleBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/TitleBar */ "./resources/js/components/TitleBar.vue");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");
/* harmony import */ var _components_Tiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Tiles */ "./resources/js/components/Tiles.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PendingviewProfile',
  components: {
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tiles: _components_Tiles__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return _defineProperty({
      isLoading: false,
      formCardTitle: "View Patient's Profile",
      showApproveModal: false,
      showRejectModal: false,
      comment: "",
      invalidFileds: {
        comment: ''
      },
      Doctortypes: [],
      formData: {
        user_id: '',
        first_name: '',
        last_name: '',
        name: '',
        email: '',
        contact_no: '',
        age: '',
        gender: '',
        created_at: ''
      },
      oldData: {
        user_id: '',
        first_name: '',
        last_name: '',
        name: '',
        email: '',
        contact_no: '',
        age: '',
        gender: '',
        created_at: ''
      }
    }, "invalidFileds", {
      first_name: '',
      last_name: '',
      email: '',
      contact_no: '',
      gender: ''
    });
  },
  methods: {
    getData: function getData() {
      var _this = this;
      this.isLoading = true;
      axios.post('/admin/ShowProfile', {
        user_id: this.formData.user_id
      }).then(function (r) {
        _this.isLoading = false;
        console.log(r.data);
        _this.formData.user_id = r.data.id;
        _this.formData.name = r.data.name;
        _this.formData.first_name = r.data.first_name;
        _this.formData.last_name = r.data.last_name;
        _this.formData.email = r.data.email;
        _this.formData.contact_no = r.data.contact_no;
        _this.formData.gender = r.data.gender;
        _this.formData.created_at = _this.formatDate(r.data.created_at);
        _this.oldData.first_name = r.data.first_name;
        _this.oldData.last_name = r.data.last_name;
        _this.oldData.email = r.data.email;
        _this.oldData.contact_no = r.data.contact_no;
        _this.oldData.gender = r.data.gender;
      })["catch"](function (err) {
        _this.isLoading = false;
        _this.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    validateAndSubmit: function validateAndSubmit() {
      if (this.validateForm()) {
        this.submitForm();
      }
    },
    submitForm: function submitForm() {
      var _this2 = this;
      this.isLoading = true;
      var formdata = new FormData();
      formdata.append('patient_id', this.formData.user_id);
      formdata.append('first_name', this.formData.first_name);
      formdata.append('last_name', this.formData.last_name);
      formdata.append('email', this.formData.email);
      formdata.append('contact_no', this.formData.contact_no);
      formdata.append('gender', this.formData.gender);
      axios.post('/admin/updatePatient', formdata).then(function (r) {
        _this2.isLoading = false;
        _this2.$buefy.toast.open({
          message: r.data.message,
          type: 'is-success',
          queue: false
        });
      })["catch"](function (err) {
        _this2.isLoading = false;
        _this2.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    validateForm: function validateForm() {
      var formIsValid = true;
      if (this.formData.first_name == '' || this.formData.first_name == null) {
        this.invalidFileds.first_name = 'This field cannot left blank';
        formIsValid = false;
      }
      if (this.formData.last_name == '' || this.formData.last_name == null) {
        this.invalidFileds.last_name = 'This field cannot left blank';
        formIsValid = false;
      }
      if (this.formData.email == '' || this.formData.email == null) {
        this.invalidFileds.email = 'This field cannot left blank';
        formIsValid = false;
      }
      if (this.formData.contact_no == '' || this.formData.contact_no == null) {
        this.invalidFileds.contact_no = 'This field cannot left blank';
        formIsValid = false;
      }
      if (this.formData.gender == '' || this.formData.gender == null) {
        this.invalidFileds.gender = 'This field cannot left blank';
        formIsValid = false;
      }
      return formIsValid;
    },
    resetInvalidStatus: function resetInvalidStatus(key) {
      this.invalidFileds[key] = '';
    },
    approveprofile: function approveprofile() {
      var _this3 = this;
      axios.post('/admin/approveProfile', {
        doctor_id: this.formData.doctor_id
      }).then(function (r) {
        _this3.showApproveModal = false;
        if (r.data.success == true) {
          _this3.$buefy.toast.open({
            message: r.data.message,
            type: 'is-success',
            queue: false
          });
          _this3.$router.push({
            name: 'pending.index'
          });
        } else {
          _this3.$buefy.toast.open({
            message: r.data.message,
            type: 'is-danger',
            queue: false
          });
        }
      })["catch"](function (err) {
        _this3.isLoading = false;
        _this3.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    openRejectModal: function openRejectModal() {
      this.showRejectModal = true;
      this.comment = '';
    },
    formatDate: function formatDate(value) {
      var day = new Date(value);
      var date = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
      return date;
    },
    rejectProfile: function rejectProfile() {
      var _this4 = this;
      this.isLoading = true;
      if (this.comment == '') {
        this.invalidFileds.comment = 'Comment is required';
        this.isLoading = false;
      } else {
        axios.post('/admin/rejectProfile', {
          doctor_id: this.formData.doctor_id,
          comment: this.comment
        }).then(function (r) {
          _this4.isLoading = false;
          _this4.showRejectModal = false;
          if (r.data.success == true) {
            _this4.$buefy.toast.open({
              message: r.data.message,
              type: 'is-success',
              queue: false
            });
            _this4.$router.push({
              name: 'pending.index'
            });
          } else {
            _this4.$buefy.toast.open({
              message: r.data.message,
              type: 'is-danger',
              queue: false
            });
          }
        })["catch"](function (err) {
          _this4.isLoading = false;
          _this4.$buefy.toast.open({
            message: "Error: ".concat(err.message),
            type: 'is-danger',
            queue: false
          });
        });
      }
    }
  },
  mounted: function mounted() {
    console.log(this.$route.params.id);
    this.formData.user_id = this.$route.params.id;
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.flex-container[data-v-1bcac9f8]{\r\n  justify-content: flex-end;\n}\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProfile_vue_vue_type_style_index_0_id_1bcac9f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProfile_vue_vue_type_style_index_0_id_1bcac9f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProfile_vue_vue_type_style_index_0_id_1bcac9f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/views/admin/PatientProfile/viewProfile.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/admin/PatientProfile/viewProfile.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _viewProfile_vue_vue_type_template_id_1bcac9f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewProfile.vue?vue&type=template&id=1bcac9f8&scoped=true& */ "./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=template&id=1bcac9f8&scoped=true&");
/* harmony import */ var _viewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _viewProfile_vue_vue_type_style_index_0_id_1bcac9f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css& */ "./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _viewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viewProfile_vue_vue_type_template_id_1bcac9f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _viewProfile_vue_vue_type_template_id_1bcac9f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1bcac9f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/PatientProfile/viewProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProfile_vue_vue_type_style_index_0_id_1bcac9f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=style&index=0&id=1bcac9f8&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=template&id=1bcac9f8&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=template&id=1bcac9f8&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProfile_vue_vue_type_template_id_1bcac9f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProfile_vue_vue_type_template_id_1bcac9f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewProfile_vue_vue_type_template_id_1bcac9f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewProfile.vue?vue&type=template&id=1bcac9f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=template&id=1bcac9f8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=template&id=1bcac9f8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/PatientProfile/viewProfile.vue?vue&type=template&id=1bcac9f8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "hero-bar",
        [
          _vm._v("\n    View Profile\n    "),
          _c(
            "router-link",
            {
              staticClass: "button",
              attrs: { slot: "right", to: "/admin/userList" },
              slot: "right",
            },
            [_vm._v("\n      Patient's Profiles\n    ")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section is-main-section" },
        [
          _c(
            "tiles",
            [
              _c(
                "card-component",
                {
                  staticClass: "tile is-child",
                  attrs: {
                    loading: _vm.isLoading,
                    title: _vm.formCardTitle,
                    icon: "account-edit",
                  },
                },
                [
                  _c(
                    "b-field",
                    { attrs: { label: "Full Name", horizontal: "" } },
                    [
                      _c("b-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.formData.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "name", $$v)
                          },
                          expression: "formData.name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        label: "First Name",
                        horizontal: "",
                        type:
                          _vm.invalidFileds.first_name == "" ? "" : "is-danger",
                        message: _vm.invalidFileds.first_name,
                      },
                    },
                    [
                      _c("b-input", {
                        on: {
                          input: function ($event) {
                            return _vm.resetInvalidStatus("first_name")
                          },
                        },
                        model: {
                          value: _vm.formData.first_name,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "first_name", $$v)
                          },
                          expression: "formData.first_name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        label: "Last Name",
                        horizontal: "",
                        type:
                          _vm.invalidFileds.last_name == "" ? "" : "is-danger",
                        message: _vm.invalidFileds.last_name,
                      },
                    },
                    [
                      _c("b-input", {
                        on: {
                          input: function ($event) {
                            return _vm.resetInvalidStatus("last_name")
                          },
                        },
                        model: {
                          value: _vm.formData.last_name,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "last_name", $$v)
                          },
                          expression: "formData.last_name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        label: "Email",
                        horizontal: "",
                        type: _vm.invalidFileds.email == "" ? "" : "is-danger",
                        message: _vm.invalidFileds.email,
                      },
                    },
                    [
                      _c("b-input", {
                        on: {
                          input: function ($event) {
                            return _vm.resetInvalidStatus("email")
                          },
                        },
                        model: {
                          value: _vm.formData.email,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "email", $$v)
                          },
                          expression: "formData.email",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        label: "Contact No",
                        horizontal: "",
                        type:
                          _vm.invalidFileds.contact_no == "" ? "" : "is-danger",
                        message: _vm.invalidFileds.contact_no,
                      },
                    },
                    [
                      _c("b-input", {
                        on: {
                          input: function ($event) {
                            return _vm.resetInvalidStatus("contact_no")
                          },
                        },
                        model: {
                          value: _vm.formData.contact_no,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "contact_no", $$v)
                          },
                          expression: "formData.contact_no",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        label: "Gender",
                        horizontal: "",
                        type: _vm.invalidFileds.gender == "" ? "" : "is-danger",
                        message: _vm.invalidFileds.gender,
                      },
                    },
                    [
                      _c(
                        "b-select",
                        {
                          model: {
                            value: _vm.formData.gender,
                            callback: function ($$v) {
                              _vm.$set(_vm.formData, "gender", $$v)
                            },
                            expression: "formData.gender",
                          },
                        },
                        [
                          _c("option", { attrs: { value: "Male" } }, [
                            _vm._v("Male"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Female" } }, [
                            _vm._v("Female"),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Created At", horizontal: "" } },
                    [
                      _c("b-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.formData.created_at,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "created_at", $$v)
                          },
                          expression: "formData.created_at",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: {
                        display: "flex",
                        "justify-content": "flex-end",
                      },
                    },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "is-primary mr-3",
                          attrs: { loading: _vm.isLoading },
                          on: {
                            click: function ($event) {
                              return _vm.validateAndSubmit()
                            },
                          },
                        },
                        [_vm._v("Update")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticStyle: { "margin-right": "10px" },
                          attrs: { type: "is-dark" },
                          on: {
                            click: function ($event) {
                              return _vm.$router.go(-1)
                            },
                          },
                        },
                        [_vm._v("Cancel")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);