'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = {
  name: 'VueDoughnutProgress',
  props: {
    // Doughnut Properties
    'size': Number,
    'color': String,
    'thickness': Number,
    'percent': Number,
    // Text Properties
    'text': String,
    'fontSize': Number,
    'bold': Boolean
  },
  computed: {
    r: function r() {
      return this.size / 2 - 2;
    },
    dashoffset: function dashoffset() {
      return this.dasharray - this.dasharray * this.percent / 100;
    },
    dasharray: function dasharray() {
      return 2 * Math.PI * this.r;
    }
  }
};var _hoisted_1 = {
  class: "vue-doughnut-progress"
};
var _hoisted_2 = ["width", "height"];
var _hoisted_3 = ["cx", "cy", "r"];
var _hoisted_4 = ["cx", "cy", "r"];
var _hoisted_5 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [(vue.openBlock(), vue.createElementBlock("svg", {
    width: $props.size,
    height: $props.size
  }, [vue.createElementVNode("circle", {
    cx: $props.size / 2,
    cy: $props.size / 2,
    r: $options.r,
    style: vue.normalizeStyle({
      'stroke-width': $props.thickness
    })
  }, null, 12, _hoisted_3), vue.createElementVNode("circle", {
    cx: $props.size / 2,
    cy: $props.size / 2,
    r: $options.r,
    style: vue.normalizeStyle({
      'stroke-dashoffset': $options.dashoffset,
      'stroke-dasharray': $options.dasharray,
      'stroke-width': $props.thickness,
      'stroke': $props.color
    })
  }, null, 12, _hoisted_4)], 8, _hoisted_2)), vue.createElementVNode("span", {
    style: vue.normalizeStyle({
      'font-weight': $props.bold ? 'bold' : 'normal',
      'font-size': $props.fontSize + 'px'
    }),
    innerHTML: $props.text
  }, null, 12, _hoisted_5)]);
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = "\n.vue-doughnut-progress {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n  -webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.vue-doughnut-progress svg {\n  -webkit-transform: rotate(-90deg);    \n    transform: rotate(-90deg);\n  overflow: initial;\n}\n.vue-doughnut-progress span {\n  position: absolute;\n  font-family: Ubuntu;\n}\n.vue-doughnut-progress circle{\n  fill:none;\n}\n.vue-doughnut-progress circle:nth-child(1){\n  stroke: lightgray;\n}\n.vue-doughnut-progress circle:nth-child(2){\n  position: relative;\n  z-index: 1;    \n  -webkit-transition: stroke-dashoffset 1s;    \n  transition: stroke-dashoffset 1s;\n  stroke-linecap: round;\n}\n";
styleInject(css_248z);script.render = render;// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('VueDoughnutProgress', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;