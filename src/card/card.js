import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
  makeShadow
} from '../utils';

class Card extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-card');

  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'shadow') makeShadow(this, oldVal, newVal);
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(Card), [
    { propName: 'shadow', propType: Number },
  ]
)
