import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade
} from '../utils';

class CardActions extends BaseCustomElement {


  createdCallback(children) {
    this.classList.add('mdl-card__actions');
  }


  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-card--border', this.border);
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(CardActions), [
    { propName: 'border', propType: Boolean },
  ]
)
