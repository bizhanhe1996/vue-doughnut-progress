import { openBlock, createElementBlock, createElementVNode, normalizeStyle } from 'vue';

var script = {
  name: 'VueDoughnutProgress',
  props: {
    // Doughnut Properties
    'radius': Number,
    'color': String,
    'thickness': Number,
    'percent': Number,
    'text': Object
  },
  computed: {
    dashoffset() {
      return this.dasharray - this.dasharray * this.percent / 100;
    },

    dasharray() {
      return 2 * Math.PI * this.radius;
    }

  }
};

const _hoisted_1 = {
  class: "vue-doughnut-progress"
};
const _hoisted_2 = ["width", "height"];
const _hoisted_3 = ["cx", "cy", "r"];
const _hoisted_4 = ["cx", "cy", "r"];
const _hoisted_5 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createElementBlock("svg", {
    width: $props.radius * 2,
    height: $props.radius * 2
  }, [createElementVNode("circle", {
    cx: $props.radius,
    cy: $props.radius,
    r: $props.radius,
    style: normalizeStyle({
      'stroke-width': $props.thickness
    })
  }, null, 12, _hoisted_3), createElementVNode("circle", {
    cx: $props.radius,
    cy: $props.radius,
    r: $props.radius,
    style: normalizeStyle({
      'stroke-dashoffset': $options.dashoffset,
      'stroke-dasharray': $options.dasharray,
      'stroke-width': $props.thickness,
      'stroke': $props.color
    })
  }, null, 12, _hoisted_4)], 8, _hoisted_2)), createElementVNode("span", {
    style: normalizeStyle({
      'font-weight': $props.text.bold ? 'bold' : 'normal',
      'font-size': $props.text.size + 'px'
    }),
    innerHTML: $props.text.text
  }, null, 12, _hoisted_5)]);
}

function styleInject(css, ref) {
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
}

var css_248z = "\n.vue-doughnut-progress {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n  -webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.vue-doughnut-progress svg {\n  -webkit-transform: rotate(-90deg);    \n    transform: rotate(-90deg);\n  overflow: initial;\n}\n.vue-doughnut-progress span {\n  position: absolute;\n  font-family: Ubuntu;\n}\n.vue-doughnut-progress circle{\n  fill:none;\n}\n.vue-doughnut-progress circle:nth-child(1){\n  stroke: lightgray;\n}\n.vue-doughnut-progress circle:nth-child(2){\n  position: relative;\n  z-index: 1;    \n  -webkit-transition: stroke-dashoffset 1s;    \n  transition: stroke-dashoffset 1s;\n  stroke-linecap: round;\n}\n";
styleInject(css_248z);

script.render = render;

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('VueDoughnutProgress', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export { entry_esm as default };
