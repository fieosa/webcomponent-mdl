import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade
} from '../utils';

class CardTitle extends BaseCustomElement {


  createdCallback(children) {
    this.classList.add('mdl-card__title');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-card--expand', this.expand);
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(CardTitle), [
    { propName: 'expand', propType: Boolean },
  ]
)
