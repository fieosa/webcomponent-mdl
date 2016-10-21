import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade
} from '../utils';

class CardTitle extends BaseCustomElement {


  createdCallback() {
    this.classList.add('mdl-card__title');
    <this>
      {this.childNodes.map(ele => {
        return <h2 class="mdl-card__title-text">{ele}</h2>
      })}
    </this>
  }


  attributeChangedCallback(attrName, oldVal, newVal) {
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(CardTitle), [
  ]
)
