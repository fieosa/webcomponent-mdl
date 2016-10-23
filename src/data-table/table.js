import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
  makeShadow
} from '../utils';

class Table extends BaseCustomElement {

  createdCallback(children) {
    this.classList.add('mdl-data-table', 'mdl-js-data-table');
    console.log(this.prototype);
  }

  disconnectedCallback() {
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-data-table--selectable', this.selectable);
    if (attrName === 'shadow') makeShadow(this, oldVal, newVal);
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(Table),
  [
    { propName: 'shadow', propType: Number },
    { propName: 'selectable', propType: Boolean },
  ]
)
