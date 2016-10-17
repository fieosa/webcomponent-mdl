/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialButton = exports.MaterialButton = function (_HTMLButtonElement) {
	  _inherits(MaterialButton, _HTMLButtonElement);
	
	  function MaterialButton() {
	    _classCallCheck(this, MaterialButton);
	
	    return _possibleConstructorReturn(this, (MaterialButton.__proto__ || Object.getPrototypeOf(MaterialButton)).call(this));
	  }
	
	  _createClass(MaterialButton, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-button', 'mdl-js-button');
	      this.addEventListener('click', this._onclick.bind(this));
	    }
	  }, {
	    key: '_onclick',
	    value: function _onclick(e) {
	      var href = this.getAttribute('href');
	      var target = this.getAttribute('target');
	      if (href) {
	        window.open(href, target);
	      }
	      e.preventDefault();
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('mdl-js-ripple-effect', this.ripple);
	      this.classList.toggle('mdl-button--raised', this.raised);
	      this.classList.toggle('mdl-button--colored', this.colored);
	      this.classList.toggle('mdl-button--primary', this.primary);
	      this.classList.toggle('mdl-button--accent', this.accent);
	    }
	  }, {
	    key: 'ripple',
	    get: function get() {
	      return this.hasAttribute('ripple');
	    },
	    set: function set(val) {
	      if (val) {
	        this.setAttribute('ripple', '');
	      } else {
	        this.removeAttribute('ripple');
	      }
	    }
	  }, {
	    key: 'raised',
	    get: function get() {
	      return this.hasAttribute('raised');
	    },
	    set: function set(val) {
	      if (val) {
	        this.setAttribute('raised', '');
	      } else {
	        this.removeAttribute('raised');
	      }
	    }
	  }, {
	    key: 'colored',
	    get: function get() {
	      return this.hasAttribute('colored');
	    },
	    set: function set(val) {
	      if (val) {
	        this.setAttribute('colored', '');
	      } else {
	        this.removeAttribute('colored');
	      }
	    }
	  }, {
	    key: 'primary',
	    get: function get() {
	      return this.hasAttribute('primary');
	    },
	    set: function set(val) {
	      if (val) {
	        this.setAttribute('primary', '');
	      } else {
	        this.removeAttribute('primary');
	      }
	    }
	  }, {
	    key: 'accent',
	    get: function get() {
	      return this.hasAttribute('accent');
	    },
	    set: function set(val) {
	      if (val) {
	        this.setAttribute('accent', '');
	      } else {
	        this.removeAttribute('accent');
	      }
	    }
	  }], [{
	    key: 'observedAttributes',
	    get: function get() {
	      return ['ripple', 'raised', 'colored', 'primary', 'accent'];
	    }
	  }]);
	
	  return MaterialButton;
	}(HTMLButtonElement);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialIcon = function (_HTMLElement) {
	  _inherits(MaterialIcon, _HTMLElement);
	
	  function MaterialIcon() {
	    _classCallCheck(this, MaterialIcon);
	
	    return _possibleConstructorReturn(this, (MaterialIcon.__proto__ || Object.getPrototypeOf(MaterialIcon)).call(this));
	  }
	
	  _createClass(MaterialIcon, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('material-icons');
	    }
	  }]);
	
	  return MaterialIcon;
	}(HTMLElement);
	
	exports.default = MaterialIcon;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialBadge = function (_HTMLElement) {
	  _inherits(MaterialBadge, _HTMLElement);
	
	  function MaterialBadge() {
	    _classCallCheck(this, MaterialBadge);
	
	    var _this = _possibleConstructorReturn(this, (MaterialBadge.__proto__ || Object.getPrototypeOf(MaterialBadge)).call(this));
	
	    _this.classList.add('mdl-badge');
	    return _this;
	  }
	
	  _createClass(MaterialBadge, [{
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('mdl-badge--overlap', this.overlap);
	      this.classList.toggle('mdl-badge--no-background', this.noBackground);
	      if (attrName === 'text') {
	        this.setAttribute('data-badge', newVal);
	      }
	    }
	  }, {
	    key: 'text',
	    get: function get() {
	      return this.getAttribute('text');
	    },
	    set: function set(val) {
	      this.setAttribute('text', val);
	      this.setAttribute('data-badge', val);
	    }
	  }, {
	    key: 'overlap',
	    get: function get() {
	      return this.hasAttribute('overlap');
	    },
	    set: function set(val) {
	      if (val) {
	        this.setAttribute('overlap', '');
	      } else {
	        this.removeAttribute('overlap');
	      }
	    }
	  }, {
	    key: 'noBackground',
	    get: function get() {
	      return this.hasAttribute('noBackground');
	    },
	    set: function set(val) {
	      if (val) {
	        this.setAttribute('noBackground', '');
	      } else {
	        this.removeAttribute('noBackground');
	      }
	    }
	  }], [{
	    key: 'observedAttributes',
	    get: function get() {
	      return ['text', 'overlap', 'noBackground'];
	    }
	  }]);
	
	  return MaterialBadge;
	}(HTMLElement);
	
	exports.default = MaterialBadge;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _materialButton = __webpack_require__(1);
	
	Object.defineProperty(exports, 'MaterialButton', {
	  enumerable: true,
	  get: function get() {
	    return _materialButton.MaterialButton;
	  }
	});
	
	var _materialIconButton = __webpack_require__(5);
	
	Object.defineProperty(exports, 'MaterialIconButton', {
	  enumerable: true,
	  get: function get() {
	    return _materialIconButton.MaterialIconButton;
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MaterialIconButton = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _materialButton = __webpack_require__(1);
	
	var _icon = __webpack_require__(2);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialIconButton = exports.MaterialIconButton = function (_MaterialButton) {
	  _inherits(MaterialIconButton, _MaterialButton);
	
	  function MaterialIconButton() {
	    _classCallCheck(this, MaterialIconButton);
	
	    return _possibleConstructorReturn(this, (MaterialIconButton.__proto__ || Object.getPrototypeOf(MaterialIconButton)).call(this));
	  }
	
	  _createClass(MaterialIconButton, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      _get(MaterialIconButton.prototype.__proto__ || Object.getPrototypeOf(MaterialIconButton.prototype), 'connectedCallback', this).call(this);
	      this.classList.add('mdl-button--icon');
	      if (this.name) {
	        this.innerHTML = '<mdl-icon>' + this.getAttribute('name') + '</mdl-icon>';
	      }
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      _get(MaterialIconButton.prototype.__proto__ || Object.getPrototypeOf(MaterialIconButton.prototype), 'attributeChangedCallback', this).call(this);
	      console.log(this.getAttribute('name'));
	    }
	  }, {
	    key: 'name',
	    get: function get() {
	      return this.hasAttribute('name');
	    },
	    set: function set(val) {
	      if (val) {
	        this.setAttribute('name', val);
	      } else {
	        this.removeAttribute('name');
	      }
	    }
	  }]);

	  return MaterialIconButton;
	}(_materialButton.MaterialButton);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utils = __webpack_require__(7);
	
	var _badge = __webpack_require__(3);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _button = __webpack_require__(4);
	
	var _icon = __webpack_require__(2);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	customElements.define('mdl-badge', _badge2.default);
	
	customElements.define('mdl-button', _button.MaterialButton);
	
	customElements.define('mdl-icon-button', _button.MaterialIconButton);
	
	customElements.define('mdl-icon', _icon2.default);

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mdlComponentUpgrade = mdlComponentUpgrade;
	function mdlComponentUpgrade(Component) {
	    var _connectedCallback = Component.prototype.connectedCallback;
	    var _disconnectedCallback = Component.prototype.disconnectedCallback;
	
	    Component.prototype.connectedCallback = function () {
	        window.componentHandler.upgradeElement(this);
	        if (_connectedCallback) {
	            console.log('decorator connectedCallback');
	            return _connectedCallback.bind(this)();
	        }
	    };
	
	    Component.prototype.disconnectedCallback = function () {
	        window.componentHandler.downgradeElements(this);
	        if (_disconnectedCallback) {
	            return _disconnectedCallback.bind(this)();
	        }
	    };
	
	    return Component;
	}

/***/ }
/******/ ]);
//# sourceMappingURL=webcomponent-mdl.js.map