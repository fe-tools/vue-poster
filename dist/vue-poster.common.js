'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var script = Vue.extend({
    name: 'vue-poster-loading',
    props: {
        color: String,
        backgroundColor: String
    }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "v-poster-loading",
      style: { backgroundColor: _vm.backgroundColor }
    },
    [
      _c("div", {
        staticClass: "v-poster-loading__icon",
        style: { color: _vm.color }
      })
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-ac6a49dc_0", { source: "\n.v-poster-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.v-poster-loading__icon {\n  color: #bdbdbd;\n}\n.v-poster-loading__icon,\n.v-poster-loading__icon:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 16px;\n  height: 16px;\n  border: 2px solid currentColor;\n  border-top-color: transparent;\n  border-radius: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-animation: VPosterLoading 0.4s linear infinite;\n          animation: VPosterLoading 0.4s linear infinite;\n}\n@-webkit-keyframes VPosterLoading {\n0% { -webkit-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg);\n}\n100% { -webkit-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg);\n}\n}\n@keyframes VPosterLoading {\n0% { -webkit-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg);\n}\n100% { -webkit-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg);\n}\n}\n", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var PosterLoading = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

var Event = /** @class */ (function () {
    function Event() {
        this.events = {};
    }
    Event.prototype.on = function (eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    };
    Event.prototype.emit = function (eventName) {
        var payload = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            payload[_i - 1] = arguments[_i];
        }
        var listeners = this.events[eventName] || [];
        listeners.forEach(function (listener) {
            listener.apply(null, payload);
        });
    };
    return Event;
}());
var event = new Event();

var canvasElement = document.createElement('canvas');
var canvasContext = canvasElement.getContext('2d');
// Get after setCanvasProperty
var canvasRatio = 1;
var setCanvasProperty = function (configs) {
    var _a = configs.width, width = _a === void 0 ? 300 : _a, _b = configs.height, height = _b === void 0 ? 300 : _b, _c = configs.ratio, ratio = _c === void 0 ? 1 : _c, backgroundColor = configs.backgroundColor;
    canvasRatio = ratio;
    canvasElement.width = width * canvasRatio;
    canvasElement.height = height * canvasRatio;
    canvasContext.scale(canvasRatio, canvasRatio);
    if (typeof backgroundColor === 'string') {
        canvasContext.fillStyle = backgroundColor;
        canvasContext.fillRect(0, 0, width * canvasRatio, height * canvasRatio);
    }
};
var canvasToDataURL = function (type, quality) {
    return canvasElement.toDataURL(type === 'png' ? 'image/png' : 'image/jpeg', quality || 1);
};

function imageLoader(src, cors) {
    var image = new Image();
    if (cors) {
        image.crossOrigin = 'anonymous';
    }
    return new Promise(function (resolve) {
        image.onload = function () { return resolve(image); };
        image.onerror = function () { return console.warn("[vue-poster]: Failed to load image at " + src); };
        image.src = src;
    });
}
var drwaImage = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var width, height, _a, offsetX, _b, offsetY, src, _c, cors, image, currentWidth, currentHeight;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                width = config.width, height = config.height, _a = config.offsetX, offsetX = _a === void 0 ? 0 : _a, _b = config.offsetY, offsetY = _b === void 0 ? 0 : _b, src = config.src, _c = config.cors, cors = _c === void 0 ? false : _c;
                return [4 /*yield*/, imageLoader(src, cors)];
            case 1:
                image = _d.sent();
                currentWidth = width || (image.width / canvasRatio);
                currentHeight = height || (image.height / canvasRatio);
                canvasContext.drawImage(image, offsetX, offsetY, currentWidth, currentHeight);
                return [2 /*return*/, new Promise(function (resolve) { return resolve(); })];
        }
    });
}); };

var drwaText = function (config) {
    var _a = config.offsetX, offsetX = _a === void 0 ? 0 : _a, _b = config.offsetY, offsetY = _b === void 0 ? 0 : _b, text = config.text, _c = config.color, color = _c === void 0 ? 'black' : _c, _d = config.font, font = _d === void 0 ? 'normal 400 14px sans-serif' : _d;
    canvasContext.fillStyle = color;
    canvasContext.font = font;
    canvasContext.textBaseline = 'top';
    canvasContext.fillText(text, offsetX, offsetY);
    return new Promise(function (resolve) { return resolve(); });
};

var script$1 = Vue.extend({
    name: 'vue-poster',
    props: {
        posterClass: String,
        width: Number,
        height: Number,
        ratio: Number,
        type: String,
        quality: Number,
        backgroundColor: String
    },
    data: function () {
        return {
            isPosterDrwaCompleted: false,
            elements: [],
            imageDate: ''
        };
    },
    components: {
        Loading: PosterLoading
    },
    beforeMount: function () {
        var _this = this;
        event.on('mounted', function (element) { return _this.elements.push(element); });
    },
    mounted: function () {
        return __awaiter(this, void 0, void 0, function () {
            var index, element, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setCanvasProperty({
                            width: this.width,
                            height: this.height,
                            ratio: this.ratio,
                            backgroundColor: this.backgroundColor
                        });
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < this.elements.length)) return [3 /*break*/, 6];
                        element = this.elements[index];
                        if (!(element.type === 'image')) return [3 /*break*/, 3];
                        return [4 /*yield*/, drwaImage({
                                src: element.vm.src,
                                offsetX: element.vm.offsetX,
                                offsetY: element.vm.offsetY,
                                width: element.vm.width,
                                height: element.vm.height,
                                cors: element.vm.cors
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        if (!(element.type === 'text')) return [3 /*break*/, 5];
                        text = element.vm.$slots.default[0].text || '';
                        return [4 /*yield*/, drwaText({
                                offsetX: element.vm.offsetX,
                                offsetY: element.vm.offsetY,
                                color: element.vm.color,
                                text: text.trim(),
                                font: element.vm.font
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        index++;
                        return [3 /*break*/, 1];
                    case 6:
                        this.imageDate = canvasToDataURL(this.type, this.quality);
                        this.isPosterDrwaCompleted = true;
                        return [2 /*return*/];
                }
            });
        });
    }
});

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "v-poster-wrapper" },
    [
      _vm.isPosterDrwaCompleted
        ? _c("img", { class: _vm.posterClass, attrs: { src: _vm.imageDate } })
        : _vm._t("loading", [_c("Loading")]),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-9080ab4a_0", { source: "\n.v-poster-wrapper {\n  position: relative;\n  display: flex;\n}\n", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var Poster = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    browser,
    undefined
  );

var PluginMixin = function (element) {
    return {
        mounted: function () {
            event.emit('mounted', {
                type: element,
                vm: this
            });
        },
        destroyed: function () {
            event.emit('unmounted', {
                type: element,
                vm: this
            });
        }
    };
};

var script$2 = Vue.extend({
    name: 'vue-poster-image',
    mixins: [PluginMixin('image')],
    props: {
        width: Number,
        height: Number,
        offsetY: Number,
        offsetX: Number,
        src: String,
        cors: {
            type: Boolean,
            default: false
        }
    },
    render: function (h) {
        return h();
    }
});

/* script */
const __vue_script__$2 = script$2;

/* template */

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PosterImage = normalizeComponent_1(
    {},
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

var script$3 = Vue.extend({
    name: 'vue-poster-text',
    mixins: [
        PluginMixin('text')
    ],
    props: {
        width: Number,
        height: Number,
        offsetY: Number,
        offsetX: Number,
        color: String,
        font: String
    },
    render: function (h) {
        return h();
    }
});

/* script */
const __vue_script__$3 = script$3;

/* template */

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PosterText = normalizeComponent_1(
    {},
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

if (typeof window !== 'undefined' && window.Vue) {
    Vue.component('poster', Poster);
    Vue.component('poster-image', PosterImage);
    Vue.component('poster-text', PosterText);
    Vue.component('poster-loading', PosterLoading);
}

exports.Poster = Poster;
exports.PosterImage = PosterImage;
exports.PosterLoading = PosterLoading;
exports.PosterText = PosterText;
