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

	module.exports = __webpack_require__(10);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reflectPropertiesToAttributes = __webpack_require__(29);
	
	Object.defineProperty(exports, 'reflectPropertiesToAttributes', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_reflectPropertiesToAttributes).default;
	  }
	});
	
	var _mdlUpgrade = __webpack_require__(28);
	
	Object.defineProperty(exports, 'mdlUpgrade', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_mdlUpgrade).default;
	  }
	});
	
	var _makeShadow = __webpack_require__(27);
	
	Object.defineProperty(exports, 'makeShadow', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_makeShadow).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialButton = function (_HTMLElement) {
	  _inherits(MaterialButton, _HTMLElement);
	
	  function MaterialButton() {
	    _classCallCheck(this, MaterialButton);
	
	    var _this = _possibleConstructorReturn(this, (MaterialButton.__proto__ || Object.getPrototypeOf(MaterialButton)).call(this));
	
	    _this.classList.add('mdl-button', 'mdl-js-button');
	    _this.addEventListener('click', _this._onclick.bind(_this));
	    return _this;
	  }
	
	  _createClass(MaterialButton, [{
	    key: '_onclick',
	    value: function _onclick() {
	      var href = this.getAttribute('href');
	      var target = this.getAttribute('target');
	      if (href) {
	        window.open(href, target);
	      }
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
	  }]);
	
	  return MaterialButton;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(MaterialButton, [{ propName: 'ripple' }, { propName: 'raised' }, { propName: 'colored' }, { propName: 'primary' }, { propName: 'accent' }]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialBadge = function (_HTMLElement) {
	  _inherits(MaterialBadge, _HTMLElement);
	
	  function MaterialBadge() {
	    _classCallCheck(this, MaterialBadge);
	
	    return _possibleConstructorReturn(this, (MaterialBadge.__proto__ || Object.getPrototypeOf(MaterialBadge)).apply(this, arguments));
	  }
	
	  _createClass(MaterialBadge, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-badge');
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('mdl-badge--overlap', this.overlap);
	      this.classList.toggle('mdl-badge--no-background', this.noBackground);
	      if (attrName === 'text') {
	        this.setAttribute('data-badge', newVal);
	      }
	    }
	  }]);
	
	  return MaterialBadge;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(MaterialBadge, [{ propName: 'text', attrName: 'data-badge', propType: String }, { propName: 'overlap' }, { propName: 'noBackground' }]);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _materialButton = __webpack_require__(2);
	
	Object.defineProperty(exports, 'MaterialButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_materialButton).default;
	  }
	});
	
	var _materialIconButton = __webpack_require__(5);
	
	Object.defineProperty(exports, 'MaterialIconButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_materialIconButton).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _materialButton = __webpack_require__(2);
	
	var _materialButton2 = _interopRequireDefault(_materialButton);
	
	var _utils = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialIconButton = function (_MaterialButton) {
	  _inherits(MaterialIconButton, _MaterialButton);
	
	  function MaterialIconButton() {
	    _classCallCheck(this, MaterialIconButton);
	
	    return _possibleConstructorReturn(this, (MaterialIconButton.__proto__ || Object.getPrototypeOf(MaterialIconButton)).call(this));
	  }
	
	  _createClass(MaterialIconButton, [{
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      _get(MaterialIconButton.prototype.__proto__ || Object.getPrototypeOf(MaterialIconButton.prototype), 'attributeChangedCallback', this).call(this);
	      jsxdom(
	        this,
	        null,
	        jsxdom(
	          'mdl-icon',
	          null,
	          this.name
	        )
	      );
	    }
	  }]);
	
	  return MaterialIconButton;
	}(_materialButton2.default);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(MaterialIconButton, [{ propName: 'name', propType: String }]);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Cell = function (_HTMLElement) {
	  _inherits(Cell, _HTMLElement);
	
	  function Cell() {
	    _classCallCheck(this, Cell);
	
	    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
	  }
	
	  _createClass(Cell, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-cell');
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('mdl-cell--' + this.col + '-col', this.col);
	      this.classList.toggle('mdl-cell--' + this.phone + '-col-phone', this.phone);
	      this.classList.toggle('mdl-cell--' + this.tablet + '-col-tablet', this.tablet);
	      this.classList.toggle('mdl-cell--' + this.align, this.align);
	      this.classList.toggle('mdl-cell--' + this.offset + '-offset', this.offset);
	      this.classList.toggle('mdl-cell--' + this.offsetdesktop + '-offset-desktop', this.offsetdesktop);
	      this.classList.toggle('mdl-cell--' + this.offsettablet + '-offset-tablet', this.offsettablet);
	      this.classList.toggle('mdl-cell--' + this.offsetphone + '-offset-phone', this.offsetphone);
	      this.classList.toggle('mdl-cell--hide-desktop', this.hidedesktop);
	      this.classList.toggle('mdl-cell--hide-phone', this.hidephone);
	      this.classList.toggle('mdl-cell--hide-tablet', this.hidetablet);
	      if (attrName === 'shadow') (0, _utils.makeShadow)(this, oldVal, newVal);
	    }
	  }]);
	
	  return Cell;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(Cell, [{ propName: 'align', propType: String }, // ['top', 'middle', 'bottom', 'stretch']
	{ propName: 'col', propType: Number }, { propName: 'phone', propType: Number }, { propName: 'tablet', propType: Number }, { propName: 'offset', propType: Number }, { propName: 'offsetdesktop', propType: Number }, { propName: 'offsettablet', propType: Number }, { propName: 'offsetphone', propType: Number }, { propName: 'hidedesktop', propType: Boolean }, { propName: 'hidephone', propType: Boolean }, { propName: 'hidetablet', propType: Boolean }, { propName: 'shadow', propType: Number }]);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Grid = function (_HTMLElement) {
	  _inherits(Grid, _HTMLElement);
	
	  function Grid() {
	    _classCallCheck(this, Grid);
	
	    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
	  }
	
	  _createClass(Grid, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-grid');
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('mdl-grid--no-spacing', this.noSpacing);
	      if (attrName === 'shadow') (0, _utils.makeShadow)(this, oldVal, newVal);
	    }
	  }]);
	
	  return Grid;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(Grid, [{ propName: 'noSpacing', propType: Boolean }, { propName: 'shadow', propType: Number }]);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Grid = __webpack_require__(7);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Grid).default;
	  }
	});
	Object.defineProperty(exports, 'Grid', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Grid).default;
	  }
	});
	
	var _Cell = __webpack_require__(6);
	
	Object.defineProperty(exports, 'Cell', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Cell).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialIcon = function (_HTMLElement) {
	  _inherits(MaterialIcon, _HTMLElement);
	
	  function MaterialIcon() {
	    _classCallCheck(this, MaterialIcon);
	
	    var _this = _possibleConstructorReturn(this, (MaterialIcon.__proto__ || Object.getPrototypeOf(MaterialIcon)).call(this));
	
	    _this.classList.add('material-icons');
	    return _this;
	  }
	
	  return MaterialIcon;
	}(HTMLElement);
	
	exports.default = MaterialIcon;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(26);
	
	var _badge = __webpack_require__(3);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _button = __webpack_require__(4);
	
	var _icon = __webpack_require__(9);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _tooltip = __webpack_require__(25);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _textfield = __webpack_require__(24);
	
	var _textfield2 = _interopRequireDefault(_textfield);
	
	var _grid = __webpack_require__(8);
	
	var _grid2 = _interopRequireDefault(_grid);
	
	var _layout = __webpack_require__(15);
	
	var _tabs = __webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	customElements.define('mdl-badge', _badge2.default);
	
	customElements.define('mdl-button', _button.MaterialButton);
	customElements.define('mdl-icon-button', _button.MaterialIconButton);
	
	customElements.define('mdl-icon', _icon2.default);
	
	customElements.define('mdl-tooltip', _tooltip2.default);
	
	customElements.define('mdl-textfield', _textfield2.default);
	
	customElements.define('mdl-grid', _grid2.default);
	customElements.define('mdl-cell', _grid.Cell);
	
	customElements.define('mdl-layout', _layout.Layout);
	customElements.define('mdl-drawer', _layout.Drawer);
	customElements.define('mdl-navigation', _layout.Navigation);
	customElements.define('mdl-content', _layout.Content);
	customElements.define('mdl-header', _layout.Header);
	customElements.define('mdl-spacer', _layout.Spacer);
	customElements.define('mdl-header-row', _layout.HeaderRow);
	
	customElements.define('mdl-tabs', _tabs.Tabs);
	customElements.define('mdl-tab-bar', _tabs.TabBar);
	customElements.define('mdl-tab', _tabs.Tab);
	customElements.define('mdl-tab-panel', _tabs.TabPanel);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Content = function (_HTMLElement) {
	  _inherits(Content, _HTMLElement);
	
	  function Content() {
	    _classCallCheck(this, Content);
	
	    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
	  }
	
	  _createClass(Content, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-layout__content');
	    }
	  }]);
	
	  return Content;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(Content, []);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Drawer = function (_HTMLElement) {
	  _inherits(Drawer, _HTMLElement);
	
	  function Drawer() {
	    _classCallCheck(this, Drawer);
	
	    return _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
	  }
	
	  _createClass(Drawer, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-layout__drawer');
	    }
	  }]);
	
	  return Drawer;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(Drawer, []);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderRow = function (_HTMLElement) {
	  _inherits(HeaderRow, _HTMLElement);
	
	  function HeaderRow() {
	    _classCallCheck(this, HeaderRow);
	
	    return _possibleConstructorReturn(this, (HeaderRow.__proto__ || Object.getPrototypeOf(HeaderRow)).apply(this, arguments));
	  }
	
	  _createClass(HeaderRow, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-layout__header-row');
	    }
	  }]);
	
	  return HeaderRow;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(HeaderRow, []);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_HTMLElement) {
	  _inherits(Header, _HTMLElement);
	
	  function Header() {
	    _classCallCheck(this, Header);
	
	    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	  }
	
	  _createClass(Header, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-layout__layout__header');
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('mdl-layout__header--scroll', this.scroll);
	      this.classList.toggle('mdl-layout__header--seamed', this.seamed);
	      this.classList.toggle('mdl-layout__header--transparent', this.transparent);
	      this.classList.toggle('mdl-layout__header--waterfall', this.waterfall);
	      this.classList.toggle('mdl-layout__header--waterfall-hide-top', this.hidetop);
	    }
	  }]);
	
	  return Header;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(Header, [{ propName: 'scroll', propType: Boolean }, { propName: 'seamed', propType: Boolean }, { propName: 'title', propType: String }, { propName: 'transparent', propType: String }, { propName: 'waterfall', propType: String }, { propName: 'hidetop', propType: String }]);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _layout = __webpack_require__(16);
	
	Object.defineProperty(exports, 'Layout', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_layout).default;
	  }
	});
	
	var _drawer = __webpack_require__(12);
	
	Object.defineProperty(exports, 'Drawer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_drawer).default;
	  }
	});
	
	var _content = __webpack_require__(11);
	
	Object.defineProperty(exports, 'Content', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_content).default;
	  }
	});
	
	var _header = __webpack_require__(14);
	
	Object.defineProperty(exports, 'Header', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_header).default;
	  }
	});
	
	var _headerRow = __webpack_require__(13);
	
	Object.defineProperty(exports, 'HeaderRow', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_headerRow).default;
	  }
	});
	
	var _navigation = __webpack_require__(17);
	
	Object.defineProperty(exports, 'Navigation', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_navigation).default;
	  }
	});
	
	var _spacer = __webpack_require__(18);
	
	Object.defineProperty(exports, 'Spacer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_spacer).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Layout = function (_HTMLElement) {
	  _inherits(Layout, _HTMLElement);
	
	  function Layout() {
	    _classCallCheck(this, Layout);
	
	    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
	  }
	
	  _createClass(Layout, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-layout', 'mdl-js-layout');
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('mdl-layout--fixed-drawer', this.fixeddrawer);
	      this.classList.toggle('mdl-layout--fixed-header', this.fixedheader);
	      this.classList.toggle('mdl-layout--fixed-tabs', this.fixedtabs);
	    }
	  }]);
	
	  return Layout;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(Layout, [{ propName: 'fixeddrawer', propType: Boolean }, { propName: 'fixedheader', propType: Boolean }, { propName: 'fixedtabs', propType: Boolean }]);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Navigation = function (_HTMLElement) {
	  _inherits(Navigation, _HTMLElement);
	
	  function Navigation() {
	    _classCallCheck(this, Navigation);
	
	    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
	  }
	
	  _createClass(Navigation, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-navigation');
	      for (var i = 0; i < this.children.length; i++) {
	        this.children[i].classList.add("mdl-navigation__link");
	      }
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('mdl-layout--large-screen-only', this.largescreen);
	    }
	  }]);
	
	  return Navigation;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(Navigation, [{ propName: 'largescreen', propType: Boolean }]);

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Spacer = function (_HTMLElement) {
	  _inherits(Spacer, _HTMLElement);
	
	  function Spacer() {
	    _classCallCheck(this, Spacer);
	
	    return _possibleConstructorReturn(this, (Spacer.__proto__ || Object.getPrototypeOf(Spacer)).apply(this, arguments));
	  }
	
	  _createClass(Spacer, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-layout-spacer');
	    }
	  }]);
	
	  return Spacer;
	}(HTMLElement);
	
	exports.default = Spacer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tabs = __webpack_require__(23);
	
	Object.defineProperty(exports, 'Tabs', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tabs).default;
	  }
	});
	
	var _tabBar = __webpack_require__(20);
	
	Object.defineProperty(exports, 'TabBar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tabBar).default;
	  }
	});
	
	var _tab = __webpack_require__(22);
	
	Object.defineProperty(exports, 'Tab', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tab).default;
	  }
	});
	
	var _tabPanel = __webpack_require__(21);
	
	Object.defineProperty(exports, 'TabPanel', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tabPanel).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabBar = function (_HTMLElement) {
	  _inherits(TabBar, _HTMLElement);
	
	  function TabBar() {
	    _classCallCheck(this, TabBar);
	
	    return _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
	  }
	
	  _createClass(TabBar, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      if (!this.cssPrefix) {
	        if (this.parentNode.nodeName === 'MDL-HEADER') {
	          this.classList.add('mdl-layout__tab-bar');
	        } else {
	          this.classList.add('mdl-tabs__tab-bar');
	        }
	      }
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.remove('${oldVal}__tab-bar');
	      this.classList.add('${newVal}__tab-bar');
	    }
	  }]);
	
	  return TabBar;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(TabBar, [{ propName: 'cssPrefix', propType: String }]);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabPanel = function (_HTMLElement) {
	  _inherits(TabPanel, _HTMLElement);
	
	  function TabPanel() {
	    _classCallCheck(this, TabPanel);
	
	    return _possibleConstructorReturn(this, (TabPanel.__proto__ || Object.getPrototypeOf(TabPanel)).apply(this, arguments));
	  }
	
	  _createClass(TabPanel, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-tabs__panel');
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('is-active', this.active);
	    }
	  }]);
	
	  return TabPanel;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(TabPanel, [{ propName: 'active', propType: Boolean }]);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabBar = function (_HTMLElement) {
	  _inherits(TabBar, _HTMLElement);
	
	  function TabBar() {
	    _classCallCheck(this, TabBar);
	
	    return _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
	  }
	
	  _createClass(TabBar, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-tabs__tab');
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('is-active', this.active);
	      jsxdom(this, { style: 'cursor: pointer;' });
	    }
	  }]);
	
	  return TabBar;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(TabBar, [{ propName: 'active', propType: Boolean }, { propName: 'href', propType: String }]);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tabs = function (_HTMLElement) {
	  _inherits(Tabs, _HTMLElement);
	
	  function Tabs() {
	    _classCallCheck(this, Tabs);
	
	    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
	  }
	
	  _createClass(Tabs, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-tabs', 'mdl-js-tabs');
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('mdl-js-ripple-effect', this.ripple);
	    }
	  }]);
	
	  return Tabs;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)(Tabs, [{ propName: 'activetab', propType: Number }, { propName: 'ripple', propType: Boolean }]);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialTextfield = function (_HTMLElement) {
	  _inherits(MaterialTextfield, _HTMLElement);
	
	  function MaterialTextfield() {
	    _classCallCheck(this, MaterialTextfield);
	
	    return _possibleConstructorReturn(this, (MaterialTextfield.__proto__ || Object.getPrototypeOf(MaterialTextfield)).apply(this, arguments));
	  }
	
	  _createClass(MaterialTextfield, [{
	    key: 'connectedCallback',
	    value: function connectedCallback() {
	      this.classList.add('mdl-textfield', 'mdl-js-textfield');
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('mdl-textfield--floating-label', this.floatingLabel);
	      this.classList.toggle('mdl-textfield--expandable', this.expandable);
	      jsxdom(
	        this,
	        { style: 'color: red;' },
	        'I am a text.',
	        jsxdom('br', null),
	        this.label,
	        jsxdom(
	          'p',
	          { style: 'font-size: inherite;' },
	          'ooohh'
	        )
	      );
	    }
	  }]);
	
	  return MaterialTextfield;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)((0, _utils.mdlUpgrade)(MaterialTextfield), [{ propName: 'disabled', propType: Boolean }, { propName: 'error', propType: String }, { propName: 'expandable', propType: Boolean }, { propName: 'expandableIcon', propType: String }, { propName: 'floatingLabel', propType: Boolean }, { propName: 'inputClassName', propType: String }, { propName: 'label', propType: String }, { propName: 'maxRows', propType: Number }, { propName: 'pattern', propType: String }, { propName: 'required', propType: Boolean }, { propName: 'rows', propType: Number }, { propName: 'value', propType: String }]);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialTooltip = function (_HTMLElement) {
	  _inherits(MaterialTooltip, _HTMLElement);
	
	  function MaterialTooltip() {
	    _classCallCheck(this, MaterialTooltip);
	
	    var _this = _possibleConstructorReturn(this, (MaterialTooltip.__proto__ || Object.getPrototypeOf(MaterialTooltip)).call(this));
	
	    _this.classList.add('mdl-tooltip');
	    return _this;
	  }
	
	  _createClass(MaterialTooltip, [{
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldVal, newVal) {
	      this.classList.toggle('mdl-tooltip--large', this.large);
	      if (attrName === 'position') {
	        oldVal && this.classList.remove('mdl-tooltip--' + oldVal);
	        newVal && this.classList.add('mdl-tooltip--' + newVal);
	      }
	    }
	  }]);
	
	  return MaterialTooltip;
	}(HTMLElement);
	
	exports.default = (0, _utils.reflectPropertiesToAttributes)((0, _utils.mdlUpgrade)(MaterialTooltip), [{ propName: 'name', propType: String }]);

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.jsxdom = jsxdom;
	function processChildren(ele, children) {
	  if (children.constructor === Array) {
	    for (var i = 0; i < children.length; i++) {
	      processChildren(ele, children[i]);
	    }
	  } else if (children.constructor === String) {
	    ele.appendChild(document.createTextNode(children));
	  } else if (children && children.nodeName) {
	    ele.appendChild(children);
	  } else {
	    console.error('Ignore jsx type: ', children, typeof children === 'undefined' ? 'undefined' : _typeof(children));
	  }
	}
	
	function jsxdom(tag, attributes) {
	  var ele = tag.nodeName ? tag : document.createElement(tag);
	  // set attr
	  for (var attrName in attributes) {
	    ele.setAttribute(attrName, attributes[attrName]);
	  }
	  // set children
	
	  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    children[_key - 2] = arguments[_key];
	  }
	
	  processChildren(ele, children);
	  return ele;
	}
	
	window.jsxdom = jsxdom;
	window['jsxdom'] = jsxdom;

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = makeShadow;
	function makeShadow(element, oldVal, newVal) {
	  var values = [2, 3, 4, 6, 8, 16, 24];
	  var ov = parseInt(oldVal);
	  var nv = parseInt(newVal);
	  if (values.indexOf(ov) !== -1) element.classList.remove("mdl-shadow--" + ov + "dp");
	  if (values.indexOf(nv) !== -1) element.classList.add("mdl-shadow--" + nv + "dp");
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	exports.default = mdlUpgrade;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function mdlUpgrade(Constructor) {
	  var NewConstructor = function (_Constructor) {
	    _inherits(NewConstructor, _Constructor);
	
	    function NewConstructor() {
	      _classCallCheck(this, NewConstructor);
	
	      return _possibleConstructorReturn(this, (NewConstructor.__proto__ || Object.getPrototypeOf(NewConstructor)).apply(this, arguments));
	    }
	
	    _createClass(NewConstructor, [{
	      key: "connectedCallback",
	      value: function connectedCallback() {
	        window.componentHandler.upgradeElement(this);
	        if (_get(NewConstructor.prototype.__proto__ || Object.getPrototypeOf(NewConstructor.prototype), "connectedCallback", this)) {
	          return _get(NewConstructor.prototype.__proto__ || Object.getPrototypeOf(NewConstructor.prototype), "connectedCallback", this).call(this);
	        }
	      }
	    }, {
	      key: "disconnectedCallback",
	      value: function disconnectedCallback() {
	        window.componentHandler.downgradeElements(this);
	        if (_get(NewConstructor.prototype.__proto__ || Object.getPrototypeOf(NewConstructor.prototype), "disconnectedCallback", this)) {
	          return _get(NewConstructor.prototype.__proto__ || Object.getPrototypeOf(NewConstructor.prototype), "disconnectedCallback", this).call(this);
	        }
	      }
	    }]);
	
	    return NewConstructor;
	  }(Constructor);
	
	  return NewConstructor;
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = reflectPropertiesToAttributes;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function defineProperties(target, descriptor) {
	  descriptor.enumerable = descriptor.enumerable || false;
	  descriptor.configurable = true;
	  if ("value" in descriptor) descriptor.writable = true;
	  Object.defineProperty(target, descriptor.key, descriptor);
	}
	
	function reflectPropertiesToAttributes(Constructor, props) {
	  var observedAttris = [];
	
	  var NewConstructor = function (_Constructor) {
	    _inherits(NewConstructor, _Constructor);
	
	    function NewConstructor() {
	      _classCallCheck(this, NewConstructor);
	
	      return _possibleConstructorReturn(this, (NewConstructor.__proto__ || Object.getPrototypeOf(NewConstructor)).apply(this, arguments));
	    }
	
	    _createClass(NewConstructor, null, [{
	      key: "observedAttributes",
	      get: function get() {
	        return observedAttris;
	      }
	    }]);
	
	    return NewConstructor;
	  }(Constructor);
	
	  var _loop = function _loop(i) {
	    var propName = props[i].propName;
	    var attrName = props[i].attrName || propName;
	    observedAttris.push(propName);
	    var descriptor = {
	      key: propName,
	      get: function get() {
	        return !props[i].propType || props[i].propType === Boolean ? this.hasAttribute(propName) : this.getAttribute(propName);
	      },
	      set: function set(val) {
	        this.setAttribute(propName, val);
	        this.setAttribute(attrName, val);
	      }
	    };
	    defineProperties(NewConstructor.prototype, descriptor);
	  };
	
	  for (var i = 0; i < props.length; i++) {
	    _loop(i);
	  }
	
	  return NewConstructor;
	}

/***/ }
/******/ ]);
//# sourceMappingURL=webcomponent-mdl.js.map
