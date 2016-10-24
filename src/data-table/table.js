import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
  makeShadow
} from '../utils';

export class Table extends BaseCustomElement {

  createdCallback(children) {
    let table = this.getElementsByTagName('table');
    let th = this.getElementsByTagName('th');
    let td = this.getElementsByTagName('td');
    table[0].classList = ['mdl-data-table mdl-js-data-table'];
    th[0].classList = ['mdl-data-table__cell--non-numeric'];
    for (let i = 0; i < td.length; i++) {
      td[i].classList = ['mdl-data-table__cell--non-numeric'];
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'shadow') makeShadow(this, oldVal, newVal);
    this.classList.toggle('mdl-data-table--selectable', this.selectable);
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(Table),
  [
    { propName: 'shadow', propType: Number },
    { propName: 'selectable', propType: Boolean },
  ]
)
