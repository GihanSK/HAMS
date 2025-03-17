"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_doctor_MyProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_TitleBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/TitleBar */ "./resources/js/components/TitleBar.vue");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");
/* harmony import */ var _components_Tiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Tiles */ "./resources/js/components/Tiles.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  name: 'DoctorProfile',
  components: {
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tiles: _components_Tiles__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)(['isNavBarVisible', 'isAsideMobileExpanded', 'userId'])),
  data: function data() {
    return {
      isLoading: false,
      formCardTitle: "Profile Informations",
      formData: {
        doctor_id: '',
        first_name: '',
        last_name: '',
        email: '',
        contact_no: '',
        gender: '',
        experience: '',
        profile_img: [],
        profile_img_path: '',
        medical_license: [],
        medical_license_path: '',
        profile_status: '',
        comment: '',
        doctor_type: '',
        doctor_fee: ''
      },
      Doctortypes: [],
      isprofileImageUpdate: false,
      isMedicalProfileUpdate: false,
      invalidFileds: {
        doctor_id: '',
        first_name: '',
        last_name: '',
        email: '',
        contact_no: '',
        gender: '',
        experience: '',
        profile_img: '',
        medical_license: '',
        doctor_fee: ''
      }
    };
  },
  methods: {
    getDoctorTypes: function getDoctorTypes() {
      var _this = this;
      axios.get('/doctor/doctorTypes').then(function (r) {
        _this.isLoading = false;
        _this.Doctortypes = r.data;
      })["catch"](function (err) {
        _this.isLoading = false;
        _this.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    getData: function getData() {
      var _this2 = this;
      this.isLoading = true;
      axios.post('/doctor/getProfileData', {
        doctor_id: this.userId
      }).then(function (r) {
        _this2.isLoading = false;
        _this2.formData.first_name = r.data.data[0].first_name;
        _this2.formData.last_name = r.data.data[0].last_name;
        _this2.formData.email = r.data.data[0].email;
        _this2.formData.contact_no = r.data.data[0].contact_no;
        _this2.formData.age = r.data.data[0].age;
        _this2.formData.gender = r.data.data[0].gender;
        _this2.formData.experience_status = r.data.data[0].experience_status;
        _this2.formData.experience = r.data.data[0].experience;
        _this2.formData.profile_img_status = r.data.data[0].profile_img_status;
        _this2.formData.medical_license_status = r.data.data[0].medical_license_status;
        _this2.formData.profile_status = r.data.data[0].status;
        _this2.formData.profile_img = r.data.data[0].profile_img;
        _this2.formData.profile_img_path = r.data.data[0].profile_img;
        _this2.formData.medical_license = r.data.data[0].medical_license_doc;
        _this2.formData.medical_license_path = r.data.data[0].medical_license_doc;
        _this2.formData.comment = r.data.data[0].comment;
        _this2.formData.doctor_type = r.data.data[0].doctor_type;
      })["catch"](function (err) {
        _this2.isLoading = false;
        _this2.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    resetInvalidStatus: function resetInvalidStatus(key) {
      this.invalidFileds[key] = '';
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
      if (this.formData.experience == '' || this.formData.experience == null) {
        this.invalidFileds.experience = 'This field cannot left blank';
        formIsValid = false;
      }
      if (this.formData.profile_img == null) {
        this.invalidFileds.profile_img = 'This field cannot left blank';
        formIsValid = false;
      }
      if (this.formData.medical_license == null) {
        this.invalidFileds.medical_license = 'This field cannot left blank';
        formIsValid = false;
      }
      if (this.formData.doctor_fee == null) {
        this.invalidFileds.doctor_fee = 'This field cannot left blank';
        formIsValid = false;
      } else if (this.formData.doctor_fee < 2000) {
        this.invalidFileds.doctor_fee = "Doctor's fee should be more than LKR.2000";
        formIsValid = false;
      }
      return formIsValid;
    },
    validateAndSubmit: function validateAndSubmit() {
      if (this.validateForm()) {
        this.submitForm();
      }
    },
    submitForm: function submitForm() {
      var _this3 = this;
      this.isLoading = true;
      var formData = new FormData();
      formData.append('doctor_id', this.userId);
      formData.append('first_name', this.formData.first_name);
      formData.append('last_name', this.formData.last_name);
      formData.append('email', this.formData.email);
      formData.append('contact_no', this.formData.contact_no);
      formData.append('gender', this.formData.gender);
      formData.append('experience', this.formData.experience);
      formData.append('profile_img', this.formData.profile_img);
      formData.append('medical_license', this.formData.medical_license);
      formData.append('doctor_type', this.formData.doctor_type);
      formData.append('doctor_fee', this.formData.doctor_fee);
      if (this.isprofileImageUpdate) {
        formData.append('profile_img_updated', this.isprofileImageUpdate);
      }
      if (this.isMedicalProfileUpdate) {
        formData.append('medical_license_updated', this.isMedicalProfileUpdate);
      }
      axios.post('/doctor/updateProfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (r) {
        _this3.isLoading = false;
        if (r.data.success == true) {
          _this3.$buefy.toast.open({
            message: r.data.message,
            type: 'is-success',
            queue: false
          });
          _this3.$router.push({
            name: 'home'
          });
        } else {
          _this3.$buefy.toast.open({
            message: r.data.message,
            type: 'is-danger',
            queue: false
          });
          _this3.$router.push({
            name: 'home'
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
    }
  },
  mounted: function mounted() {
    this.getDoctorTypes();
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.flex-container[data-v-2f115fcc]{\r\n  justify-content: flex-end;\n}\r\n\r\n\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_style_index_0_id_2f115fcc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_style_index_0_id_2f115fcc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_style_index_0_id_2f115fcc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/views/doctor/MyProfile.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/doctor/MyProfile.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyProfile_vue_vue_type_template_id_2f115fcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyProfile.vue?vue&type=template&id=2f115fcc&scoped=true& */ "./resources/js/views/doctor/MyProfile.vue?vue&type=template&id=2f115fcc&scoped=true&");
/* harmony import */ var _MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/doctor/MyProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _MyProfile_vue_vue_type_style_index_0_id_2f115fcc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css& */ "./resources/js/views/doctor/MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyProfile_vue_vue_type_template_id_2f115fcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyProfile_vue_vue_type_template_id_2f115fcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2f115fcc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/doctor/MyProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/doctor/MyProfile.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/doctor/MyProfile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/doctor/MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/doctor/MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_style_index_0_id_2f115fcc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=style&index=0&id=2f115fcc&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/doctor/MyProfile.vue?vue&type=template&id=2f115fcc&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/doctor/MyProfile.vue?vue&type=template&id=2f115fcc&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_template_id_2f115fcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_template_id_2f115fcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_template_id_2f115fcc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyProfile.vue?vue&type=template&id=2f115fcc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=template&id=2f115fcc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=template&id=2f115fcc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/doctor/MyProfile.vue?vue&type=template&id=2f115fcc&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("hero-bar", [_vm._v("\n    My Profile\n  ")]),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section is-main-section" },
        [
          _vm.formData.profile_status == "pending" &&
          _vm.formData.experience_status == 1 &&
          _vm.formData.profile_img_status == 1 &&
          _vm.formData.medical_license_status == 1
            ? _c(
                "b-message",
                {
                  attrs: {
                    title: "Message",
                    type: "is-warning",
                    "aria-close-label": "Close message",
                  },
                },
                [
                  _vm._v(
                    "\n          You cannot manage your Routine untill the admin will apprve your account\n      "
                  ),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.formData.profile_status == "rejected"
            ? _c(
                "b-message",
                {
                  attrs: {
                    title: "Warning",
                    type: "is-danger",
                    "aria-close-label": "Close message",
                  },
                },
                [
                  _vm._v("\n          Your profile is rejected by admin "),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [
                    _vm._v("Reason : " + _vm._s(_vm.formData.comment)),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
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
                        "div",
                        { staticClass: "block" },
                        [
                          _c(
                            "b-radio",
                            {
                              attrs: { name: "gender", "native-value": "Male" },
                              on: {
                                input: function ($event) {
                                  return _vm.resetInvalidStatus("gender")
                                },
                              },
                              model: {
                                value: _vm.formData.gender,
                                callback: function ($$v) {
                                  _vm.$set(_vm.formData, "gender", $$v)
                                },
                                expression: "formData.gender",
                              },
                            },
                            [
                              _vm._v(
                                "\n                   Male\n              "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-radio",
                            {
                              attrs: {
                                name: "gender",
                                "native-value": "Female",
                              },
                              on: {
                                input: function ($event) {
                                  return _vm.resetInvalidStatus("gender")
                                },
                              },
                              model: {
                                value: _vm.formData.gender,
                                callback: function ($$v) {
                                  _vm.$set(_vm.formData, "gender", $$v)
                                },
                                expression: "formData.gender",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  Female\n              "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Select Type", horizontal: "" } },
                    [
                      _c(
                        "b-select",
                        {
                          model: {
                            value: _vm.formData.doctor_type,
                            callback: function ($$v) {
                              _vm.$set(_vm.formData, "doctor_type", $$v)
                            },
                            expression: "formData.doctor_type",
                          },
                        },
                        _vm._l(_vm.Doctortypes, function (option) {
                          return _c(
                            "option",
                            {
                              key: option.id,
                              domProps: { value: option.name },
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(option.name) +
                                  "\n                "
                              ),
                            ]
                          )
                        }),
                        0
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        label: "Experience",
                        horizontal: "",
                        type:
                          _vm.invalidFileds.experience == "" ? "" : "is-danger",
                        message: _vm.invalidFileds.experience,
                      },
                    },
                    [
                      _c("b-input", {
                        attrs: { type: "textarea" },
                        on: {
                          input: function ($event) {
                            return _vm.resetInvalidStatus("experience")
                          },
                        },
                        model: {
                          value: _vm.formData.experience,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "experience", $$v)
                          },
                          expression: "formData.experience",
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
                        label: "Doctor Fee",
                        horizontal: "",
                        type:
                          _vm.invalidFileds.doctor_fee == "" ? "" : "is-danger",
                        message: _vm.invalidFileds.doctor_fee,
                      },
                    },
                    [
                      _c("b-input", {
                        on: {
                          input: function ($event) {
                            return _vm.resetInvalidStatus("doctor_fee")
                          },
                        },
                        model: {
                          value: _vm.formData.doctor_fee,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "doctor_fee", $$v)
                          },
                          expression: "formData.doctor_fee",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "tiles",
            [
              _c(
                "card-component",
                {
                  staticClass: "tile is-child",
                  attrs: { title: "Upload Proof", icon: "upload" },
                },
                [
                  _vm.formData.profile_img_status == 1
                    ? _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Updated Cover Image",
                            horizontal: "",
                          },
                        },
                        [
                          _c("img", {
                            staticStyle: {
                              border: "1px solid rgb(176, 176, 176)",
                              "border-radius": "10px",
                            },
                            attrs: {
                              src: "/storage/" + _vm.formData.profile_img_path,
                              width: "200",
                              alt: "",
                            },
                          }),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.formData.profile_img_status == 1
                    ? _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Update Cover Image?",
                            horizontal: "",
                          },
                        },
                        [
                          _c("b-switch", {
                            model: {
                              value: _vm.isprofileImageUpdate,
                              callback: function ($$v) {
                                _vm.isprofileImageUpdate = $$v
                              },
                              expression: "isprofileImageUpdate",
                            },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isprofileImageUpdate
                    ? _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Cover Image",
                            horizontal: "",
                            type:
                              _vm.invalidFileds.profile_img == ""
                                ? ""
                                : "is-danger",
                            message: _vm.invalidFileds.profile_img,
                          },
                        },
                        [
                          _c(
                            "b-field",
                            {
                              staticClass: "file is-primary",
                              class: { "has-name": !!_vm.formData.profile_img },
                            },
                            [
                              _c(
                                "b-upload",
                                {
                                  staticClass: "file-label",
                                  attrs: { multiple: false },
                                  on: {
                                    input: function ($event) {
                                      return _vm.resetInvalidStatus(
                                        "profile_img"
                                      )
                                    },
                                  },
                                  model: {
                                    value: _vm.formData.profile_img,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.formData, "profile_img", $$v)
                                    },
                                    expression: "formData.profile_img",
                                  },
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "file-cta" },
                                    [
                                      _c("b-icon", {
                                        staticClass: "file-icon",
                                        attrs: { icon: "upload" },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "file-label" },
                                        [_vm._v("Click to upload")]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.formData.profile_img != null
                                    ? _c("span", { staticClass: "file-name" }, [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(
                                              _vm.formData.profile_img.name
                                            ) +
                                            "\n                "
                                        ),
                                      ])
                                    : _vm._e(),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.formData.profile_img_status == 0
                    ? _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Cover Image",
                            horizontal: "",
                            type:
                              _vm.invalidFileds.profile_img == ""
                                ? ""
                                : "is-danger",
                            message: _vm.invalidFileds.profile_img,
                          },
                        },
                        [
                          _c(
                            "b-field",
                            {
                              staticClass: "file is-primary",
                              class: { "has-name": !!_vm.formData.profile_img },
                            },
                            [
                              _c(
                                "b-upload",
                                {
                                  staticClass: "file-label",
                                  attrs: { multiple: false },
                                  on: {
                                    input: function ($event) {
                                      return _vm.resetInvalidStatus(
                                        "profile_img"
                                      )
                                    },
                                  },
                                  model: {
                                    value: _vm.formData.profile_img,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.formData, "profile_img", $$v)
                                    },
                                    expression: "formData.profile_img",
                                  },
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "file-cta" },
                                    [
                                      _c("b-icon", {
                                        staticClass: "file-icon",
                                        attrs: { icon: "upload" },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "file-label" },
                                        [_vm._v("Click to upload")]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.formData.profile_img != null
                                    ? _c("span", { staticClass: "file-name" }, [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(
                                              _vm.formData.profile_img.name
                                            ) +
                                            "\n                "
                                        ),
                                      ])
                                    : _vm._e(),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.formData.medical_license_status == 1
                    ? _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Updated Nedical License Image",
                            horizontal: "",
                          },
                        },
                        [
                          _c("img", {
                            staticStyle: {
                              border: "1px solid rgb(176, 176, 176)",
                              "border-radius": "10px",
                            },
                            attrs: {
                              src:
                                "/storage/" + _vm.formData.medical_license_path,
                              width: "500",
                              alt: "",
                            },
                          }),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.formData.medical_license_status == 1
                    ? _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Update Medical License?",
                            horizontal: "",
                          },
                        },
                        [
                          _c("b-switch", {
                            model: {
                              value: _vm.isMedicalProfileUpdate,
                              callback: function ($$v) {
                                _vm.isMedicalProfileUpdate = $$v
                              },
                              expression: "isMedicalProfileUpdate",
                            },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isMedicalProfileUpdate
                    ? _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Medical License",
                            horizontal: "",
                            type:
                              _vm.invalidFileds.medical_license == ""
                                ? ""
                                : "is-danger",
                            message: _vm.invalidFileds.medical_license,
                          },
                        },
                        [
                          _c(
                            "b-field",
                            {
                              staticClass: "file is-primary",
                              class: {
                                "has-name": !!_vm.formData.medical_license,
                              },
                            },
                            [
                              _c(
                                "b-upload",
                                {
                                  staticClass: "file-label",
                                  attrs: { multiple: false },
                                  on: {
                                    input: function ($event) {
                                      return _vm.resetInvalidStatus(
                                        "medical_license"
                                      )
                                    },
                                  },
                                  model: {
                                    value: _vm.formData.medical_license,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.formData,
                                        "medical_license",
                                        $$v
                                      )
                                    },
                                    expression: "formData.medical_license",
                                  },
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "file-cta" },
                                    [
                                      _c("b-icon", {
                                        staticClass: "file-icon",
                                        attrs: { icon: "upload" },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "file-label" },
                                        [_vm._v("Click to upload")]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.formData.medical_license != null
                                    ? _c("span", { staticClass: "file-name" }, [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(
                                              _vm.formData.medical_license.name
                                            ) +
                                            "\n                "
                                        ),
                                      ])
                                    : _vm._e(),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.formData.medical_license_status == 0
                    ? _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Medical License",
                            horizontal: "",
                            type:
                              _vm.invalidFileds.medical_license == ""
                                ? ""
                                : "is-danger",
                            message: _vm.invalidFileds.medical_license,
                          },
                        },
                        [
                          _c(
                            "b-field",
                            {
                              staticClass: "file is-primary",
                              class: {
                                "has-name": !!_vm.formData.medical_license,
                              },
                            },
                            [
                              _c(
                                "b-upload",
                                {
                                  staticClass: "file-label",
                                  attrs: { multiple: false },
                                  on: {
                                    input: function ($event) {
                                      return _vm.resetInvalidStatus(
                                        "medical_license"
                                      )
                                    },
                                  },
                                  model: {
                                    value: _vm.formData.medical_license,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.formData,
                                        "medical_license",
                                        $$v
                                      )
                                    },
                                    expression: "formData.medical_license",
                                  },
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "file-cta" },
                                    [
                                      _c("b-icon", {
                                        staticClass: "file-icon",
                                        attrs: { icon: "upload" },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "file-label" },
                                        [_vm._v("Click to upload")]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.formData.medical_license != null
                                    ? _c("span", { staticClass: "file-name" }, [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(
                                              _vm.formData.medical_license.name
                                            ) +
                                            "\n                "
                                        ),
                                      ])
                                    : _vm._e(),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
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
                          attrs: { loading: _vm.isLoading, type: "is-success" },
                          on: {
                            click: function ($event) {
                              return _vm.validateAndSubmit()
                            },
                          },
                        },
                        [_vm._v("Update Profile")]
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