class MaterialBadge extends HTMLElement {

  constructor() {
    super();
    this.classList.add('mdl-badge');
  }

  static get observedAttributes() {
    return ['text', 'overlap', 'noBackground'];
  }

  get text() {
    return this.getAttribute('text');
  }

  set text(val) {
    this.setAttribute('text', val);
    this.setAttribute('data-badge', val);
  }

  get overlap() {
    return this.hasAttribute('overlap');
  }

  set overlap(val) {
    if (val) {
      this.setAttribute('overlap', '');
    } else {
      this.removeAttribute('overlap');
    }
  }

  get noBackground() {
    return this.hasAttribute('noBackground');
  }

  set noBackground(val) {
    if (val) {
      this.setAttribute('noBackground', '');
    } else {
      this.removeAttribute('noBackground');
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-badge--overlap', this.overlap);
    this.classList.toggle('mdl-badge--no-background', this.noBackground);
    if (attrName === 'text') {
      this.setAttribute('data-badge', newVal);
    }
  }

}

customElements.define('mdl-badge', MaterialBadge);
