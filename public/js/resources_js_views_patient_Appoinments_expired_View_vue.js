"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_patient_Appoinments_expired_View_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=script&lang=js& ***!
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
  name: 'PendingviewProfile',
  components: {
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tiles: _components_Tiles__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      formData: {
        appoinment_id: '',
        fullname: "",
        email: '',
        contact_no: '',
        gender: '',
        appoinment_date: "",
        timeslot: "",
        symptoms: "",
        disease: "",
        extra_note: "",
        patient_id: ""
      },
      invalidFileds: {
        symptoms: "",
        disease: ""
      },
      invalidPrescription: [{
        drug: "",
        strength: "",
        type: "",
        frequency: ""
      }],
      reports: {
        radiology_report: "",
        laboratory_report: ""
      },
      Prescription: [{
        rowNumber: 0,
        drug: "",
        strength: "",
        type: "",
        frequency: ""
      }],
      rowNumber: 0
    };
  },
  methods: {
    addNewPrescription: function addNewPrescription() {
      if (this.rowNumber == 9) {
        this.$buefy.toast.open({
          message: 'Cannot Add more than 10 rows',
          type: 'is-danger',
          queue: false
        });
      } else if (this.validatePrescription()) {
        this.rowNumber++;
        this.Prescription.push({
          rowNumber: this.rowNumber,
          drug: '',
          strength: '',
          type: '',
          frequency: ''
        });
        this.invalidPrescription.push({
          rowNumber: this.rowNumber,
          drug: '',
          strength: '',
          type: '',
          frequency: ''
        });
      }
    },
    validatePrescription: function validatePrescription() {
      var isError = true;
      if (this.Prescription[this.rowNumber].drug == '') {
        this.invalidPrescription[this.rowNumber].drug = 'This field cannot be empty';
        isError = false;
      }
      if (this.Prescription[this.rowNumber].strength == '') {
        this.invalidPrescription[this.rowNumber].strength = 'This field cannot be empty';
        isError = false;
      }
      if (this.Prescription[this.rowNumber].type == '') {
        this.invalidPrescription[this.rowNumber].type = 'This field cannot be empty';
        isError = false;
      }
      if (this.Prescription[this.rowNumber].frequency == '') {
        this.invalidPrescription[this.rowNumber].frequency = 'This field cannot be empty';
        isError = false;
      }
      return isError;
    },
    resetInvalidPresctiption: function resetInvalidPresctiption(key) {
      this.invalidPrescription[this.rowNumber][key] = '';
    },
    resetinvalidstatus: function resetinvalidstatus(key) {
      this.invalidFileds[key] = '';
    },
    removePrescription: function removePrescription() {
      if (this.rowNumber != 0) {
        this.Prescription.splice(this.rowNumber, 1);
        this.rowNumber--;
      }
    },
    getData: function getData() {
      var _this = this;
      this.isLoading = true;
      axios.post('/doctor/viewAppoinment', {
        appoinment_id: this.formData.appoinment_id
      }).then(function (r) {
        _this.isLoading = false;
        console.log(r.data.data);
        _this.formData.patient_id = r.data.data.user_id;
        _this.formData.fullname = r.data.data.user_fullname;
        _this.formData.email = r.data.data.user_email;
        _this.formData.contact_no = r.data.data.user_contact_no;
        _this.formData.gender = r.data.data.user_gender;
        _this.formData.appoinment_date = r.data.data.selected_timeslot;
        _this.formData.timeslot = r.data.data.selected_start_time + " to " + r.data.data.selected_end_time;
      })["catch"](function (err) {
        _this.isLoading = false;
        _this.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    submitForm: function submitForm() {
      var _this2 = this;
      this.isLoading = true;
      var formData = new FormData();
      formData.append('patient_id', this.formData.patient_id);
      formData.append('appoinment_id', this.formData.appoinment_id);
      formData.append('symptoms', this.formData.symptoms);
      formData.append('disease', this.formData.disease);
      formData.append('extra_note', this.formData.extra_note);
      formData.append('medical_transcription', JSON.stringify(this.reports));
      formData.append('prescription', JSON.stringify(this.Prescription));
      axios.post('/doctor/addMedicalDiagnostic', formData).then(function (r) {
        _this2.isLoading = false;
        _this2.$buefy.toast.open({
          message: r.data.message,
          type: 'is-success',
          queue: false
        });
        _this2.$router.push({
          name: 'doctor.appoinments'
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
    validateAndSubmit: function validateAndSubmit() {
      if (this.validateData()) {
        this.submitForm();
      }
    },
    validateData: function validateData() {
      var isError = true;
      if (this.formData.symptoms == '') {
        this.invalidFileds.symptoms = "Symptoms cannot be empty";
        isError = false;
      }
      if (this.formData.disease == '') {
        this.invalidFileds.disease = "Disease cannot be empty";
        isError = false;
      }
      if (this.validatePrescription() == false) {
        isError = false;
      }
      return isError;
    }
  },
  mounted: function mounted() {
    console.log(this.$route.params.id);
    this.formData.appoinment_id = this.$route.params.id;
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.flex-container[data-v-6d9f1da5]{\n  justify-content: flex-end;\n}\n\n\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_6d9f1da5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_6d9f1da5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_6d9f1da5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/views/patient/Appoinments/expired/View.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/patient/Appoinments/expired/View.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_vue_vue_type_template_id_6d9f1da5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=6d9f1da5&scoped=true& */ "./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=template&id=6d9f1da5&scoped=true&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=script&lang=js&");
/* harmony import */ var _View_vue_vue_type_style_index_0_id_6d9f1da5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css& */ "./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_6d9f1da5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _View_vue_vue_type_template_id_6d9f1da5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6d9f1da5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/patient/Appoinments/expired/View.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_6d9f1da5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=style&index=0&id=6d9f1da5&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=template&id=6d9f1da5&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=template&id=6d9f1da5&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_6d9f1da5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_6d9f1da5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_6d9f1da5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=template&id=6d9f1da5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=template&id=6d9f1da5&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=template&id=6d9f1da5&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/patient/Appoinments/expired/View.vue?vue&type=template&id=6d9f1da5&scoped=true& ***!
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
              attrs: { slot: "right", to: "/pendinglist/index" },
              slot: "right",
            },
            [_vm._v("\n      Appoinment List\n    ")]
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
                    title: "Patient's Details",
                    icon: "account-tie",
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
                          value: _vm.formData.fullname,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "fullname", $$v)
                          },
                          expression: "formData.fullname",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Email", horizontal: "" } },
                    [
                      _c("b-input", {
                        attrs: { disabled: "" },
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
                    { attrs: { label: "Contact No", horizontal: "" } },
                    [
                      _c("b-input", {
                        attrs: { disabled: "" },
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
                    { attrs: { label: "Gender", horizontal: "" } },
                    [
                      _c("b-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.formData.gender,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "gender", $$v)
                          },
                          expression: "formData.gender",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Appoinment Date", horizontal: "" } },
                    [
                      _c("b-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.formData.appoinment_date,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "appoinment_date", $$v)
                          },
                          expression: "formData.appoinment_date",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Time Slot", horizontal: "" } },
                    [
                      _c("b-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.formData.timeslot,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "timeslot", $$v)
                          },
                          expression: "formData.timeslot",
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
                  attrs: { title: "Patient's Diagnostic", icon: "medical-bag" },
                },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        horizontal: "",
                        type:
                          _vm.invalidFileds.symptoms == "" ? "" : "is-danger",
                        message: _vm.invalidFileds.symptoms,
                      },
                    },
                    [
                      _c("template", { slot: "label" }, [
                        _vm._v("Symptoms"),
                        _c("span", { staticClass: "has-text-danger" }, [
                          _vm._v("*"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("b-input", {
                        attrs: { type: "textarea" },
                        on: {
                          input: function ($event) {
                            return _vm.resetinvalidstatus("symptoms")
                          },
                        },
                        model: {
                          value: _vm.formData.symptoms,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "symptoms", $$v)
                          },
                          expression: "formData.symptoms",
                        },
                      }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        horizontal: "",
                        type:
                          _vm.invalidFileds.disease == "" ? "" : "is-danger",
                        message: _vm.invalidFileds.disease,
                      },
                    },
                    [
                      _c("template", { slot: "label" }, [
                        _vm._v("Patient's disease"),
                        _c("span", { staticClass: "has-text-danger" }, [
                          _vm._v("*"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("b-input", {
                        on: {
                          input: function ($event) {
                            return _vm.resetinvalidstatus("disease")
                          },
                        },
                        model: {
                          value: _vm.formData.disease,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "disease", $$v)
                          },
                          expression: "formData.disease",
                        },
                      }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Extra Note", horizontal: "" } },
                    [
                      _c("b-input", {
                        attrs: { type: "textarea" },
                        model: {
                          value: _vm.formData.extra_note,
                          callback: function ($$v) {
                            _vm.$set(_vm.formData, "extra_note", $$v)
                          },
                          expression: "formData.extra_note",
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
                  attrs: {
                    title: "Patient's Prescription",
                    icon: "medical-bag",
                  },
                },
                [
                  _c(
                    "b-table",
                    {
                      attrs: {
                        striped: true,
                        hoverable: true,
                        "default-sort": "name",
                        data: _vm.Prescription,
                        striped: "",
                        hoverable: "",
                      },
                    },
                    [
                      _c("b-table-column", {
                        attrs: { label: "Drug/Medication" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (props) {
                              return [
                                _c(
                                  "b-field",
                                  {
                                    attrs: {
                                      type:
                                        _vm.invalidPrescription[
                                          props.row.rowNumber
                                        ].drug == ""
                                          ? ""
                                          : "is-danger",
                                      message:
                                        _vm.invalidPrescription[
                                          props.row.rowNumber
                                        ].drug,
                                    },
                                  },
                                  [
                                    _c("b-input", {
                                      on: {
                                        input: function ($event) {
                                          return _vm.resetInvalidPresctiption(
                                            "drug"
                                          )
                                        },
                                      },
                                      model: {
                                        value:
                                          _vm.Prescription[props.row.rowNumber]
                                            .drug,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.Prescription[
                                              props.row.rowNumber
                                            ],
                                            "drug",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "Prescription[props.row.rowNumber].drug",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("b-table-column", {
                        attrs: { label: "Strength" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (props) {
                              return [
                                _c(
                                  "b-field",
                                  {
                                    attrs: {
                                      type:
                                        _vm.invalidPrescription[
                                          props.row.rowNumber
                                        ].strength == ""
                                          ? ""
                                          : "is-danger",
                                      message:
                                        _vm.invalidPrescription[
                                          props.row.rowNumber
                                        ].strength,
                                    },
                                  },
                                  [
                                    _c("b-input", {
                                      on: {
                                        input: function ($event) {
                                          return _vm.resetInvalidPresctiption(
                                            "strength"
                                          )
                                        },
                                      },
                                      model: {
                                        value:
                                          _vm.Prescription[props.row.rowNumber]
                                            .strength,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.Prescription[
                                              props.row.rowNumber
                                            ],
                                            "strength",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "Prescription[props.row.rowNumber].strength",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("b-table-column", {
                        attrs: { label: "Type" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (props) {
                              return [
                                _c(
                                  "b-field",
                                  {
                                    attrs: {
                                      type:
                                        _vm.invalidPrescription[
                                          props.row.rowNumber
                                        ].type == ""
                                          ? ""
                                          : "is-danger",
                                      message:
                                        _vm.invalidPrescription[
                                          props.row.rowNumber
                                        ].type,
                                    },
                                  },
                                  [
                                    _c(
                                      "b-select",
                                      {
                                        on: {
                                          input: function ($event) {
                                            return _vm.resetInvalidPresctiption(
                                              "type"
                                            )
                                          },
                                        },
                                        model: {
                                          value:
                                            _vm.Prescription[
                                              props.row.rowNumber
                                            ].type,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.Prescription[
                                                props.row.rowNumber
                                              ],
                                              "type",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "Prescription[props.row.rowNumber].type",
                                        },
                                      },
                                      [
                                        _c(
                                          "option",
                                          { attrs: { value: "Daily" } },
                                          [_vm._v("Tablet")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "Twice" } },
                                          [_vm._v("Syrup")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "Twice" } },
                                          [_vm._v("Inhaler")]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("b-table-column", {
                        attrs: { label: "Frequency" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (props) {
                              return [
                                _c(
                                  "b-field",
                                  {
                                    attrs: {
                                      type:
                                        _vm.invalidPrescription[
                                          props.row.rowNumber
                                        ].frequency == ""
                                          ? ""
                                          : "is-danger",
                                      message:
                                        _vm.invalidPrescription[
                                          props.row.rowNumber
                                        ].frequency,
                                    },
                                  },
                                  [
                                    _c(
                                      "b-select",
                                      {
                                        on: {
                                          input: function ($event) {
                                            return _vm.resetInvalidPresctiption(
                                              "frequency"
                                            )
                                          },
                                        },
                                        model: {
                                          value:
                                            _vm.Prescription[
                                              props.row.rowNumber
                                            ].frequency,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.Prescription[
                                                props.row.rowNumber
                                              ],
                                              "frequency",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "Prescription[props.row.rowNumber].frequency",
                                        },
                                      },
                                      [
                                        _c(
                                          "option",
                                          { attrs: { value: "Daily" } },
                                          [_vm._v("Daily")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "Twice" } },
                                          [_vm._v("Twice a day")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "Threetimes" } },
                                          [_vm._v("Three times a day")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          {
                                            attrs: {
                                              value: "Four times a day",
                                            },
                                          },
                                          [_vm._v("Four times a day")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "Every bedtime" } },
                                          [_vm._v("Every bedtime")]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        { attrs: { label: "Add / Remove" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { size: "is-small", type: "is-primary" },
                              on: {
                                click: function ($event) {
                                  return _vm.addNewPrescription()
                                },
                              },
                            },
                            [
                              _c("b-icon", {
                                attrs: {
                                  icon: "plus",
                                  "custom-size": "default",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { size: "is-small", type: "is-danger" },
                              on: {
                                click: function ($event) {
                                  return _vm.removePrescription()
                                },
                              },
                            },
                            [
                              _c("b-icon", {
                                attrs: {
                                  icon: "minus",
                                  "custom-size": "default",
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
                  attrs: {
                    title: "Medical Transcription Reports",
                    icon: "file-document-edit-outline",
                  },
                },
                [
                  _c(
                    "b-field",
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { "true-value": "Yes", "false-value": "No" },
                          model: {
                            value: _vm.reports.radiology_report,
                            callback: function ($$v) {
                              _vm.$set(_vm.reports, "radiology_report", $$v)
                            },
                            expression: "reports.radiology_report",
                          },
                        },
                        [_vm._v("Radiology Report")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    [
                      _c(
                        "b-checkbox",
                        {
                          attrs: { "true-value": "Yes", "false-value": "No" },
                          model: {
                            value: _vm.reports.plaboratory_report,
                            callback: function ($$v) {
                              _vm.$set(_vm.reports, "plaboratory_report", $$v)
                            },
                            expression: "reports.plaboratory_report",
                          },
                        },
                        [_vm._v("Laboratory Reports")]
                      ),
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
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { type: "is-success" },
                          on: {
                            click: function ($event) {
                              return _vm.validateAndSubmit()
                            },
                          },
                        },
                        [_vm._v("Mark As Completed")]
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