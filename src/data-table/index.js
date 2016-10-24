import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
  makeShadow
} from '../utils';

class MaterialTable extends BaseCustomElement {

  createdCallback() {
    this._table = this.getElementsByTagName('table')[0];
    let th = this._table.getElementsByTagName('th');
    let td = this._table.getElementsByTagName('td');
    this._table.classList.add('mdl-data-table', 'mdl-js-data-table');
    th[0].classList.add('mdl-data-table__cell--non-numeric');
    for (let i = 0; i < td.length; i++) {
      td[i].classList.add('mdl-data-table__cell--non-numeric');
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'shadow') makeShadow(this._table, oldVal, newVal);
    this._table.classList.toggle('mdl-data-table--selectable', this.selectable);
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialTable),
  [
    { propName: 'shadow', propType: Number },
    { propName: 'selectable', propType: Boolean },
  ]
)
