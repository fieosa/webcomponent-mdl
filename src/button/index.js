export default class MaterialButton extends HTMLElement {

  constructor() {
    super();
    this.addEventListener('mousedown', this._onclick.bind(this));
  }

  _onclick(e) {
    var href = this.getAttribute('href');
    var target = this.getAttribute('target');
    if (href) {
      window.open(href, target);
      e.preventDefault();
    }
  }

  static get observedAttributes() {
    return ['ripple', 'raised', 'colored', 'primary', 'accent'];
  }

  get ripple() {
    return this.hasAttribute('ripple');
  }

  set ripple(val) {
    if (val) {
      this.setAttribute('ripple', '');
    } else {
      this.removeAttribute('ripple');
    }
  }

  get raised() {
    return this.hasAttribute('raised');
  }

  set raised(val) {
    if (val) {
      this.setAttribute('raised', '');
    } else {
      this.removeAttribute('raised');
    }
  }

  get colored() {
    return this.hasAttribute('colored');
  }

  set colored(val) {
    if (val) {
      this.setAttribute('colored', '');
    } else {
      this.removeAttribute('colored');
    }
  }

  get primary() {
    return this.hasAttribute('primary');
  }

  set primary(val) {
    if (val) {
      this.setAttribute('primary', '');
    } else {
      this.removeAttribute('primary');
    }
  }

  get accent() {
    return this.hasAttribute('accent');
  }

  set accent(val) {
    if (val) {
      this.setAttribute('accent', '');
    } else {
      this.removeAttribute('accent');
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-button');
    this.classList.toggle('mdl-js-button');
    this.classList.toggle('mdl-js-ripple-effect', this.ripple);
    this.classList.toggle('mdl-button--raised', this.raised);
    this.classList.toggle('mdl-button--colored', this.colored);
    this.classList.toggle('mdl-button--primary', this.primary);
    this.classList.toggle('mdl-button--accent', this.accent);
  }

}
