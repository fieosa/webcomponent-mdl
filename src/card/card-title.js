import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade
} from '../utils';

class CardTitle extends BaseCustomElement {


  createdCallback(children) {
    this.classList.add('mdl-card__title');
    <this>
      {children.map(ele => {
        if (ele.nodeType === 3) {
          return <h2 class="mdl-card__title-text">{ele}</h2>
        } else {
          return ele;
        }
      })}
    </this>
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
