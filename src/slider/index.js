import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
} from '../utils';

class MaterialSlider extends BaseCustomElement {

  createdCallback() {
    this._input = <input class="mdl-slider mdl-js-slider" type="range"/>;
    <this>
      <this._input onchange={this._onChange.bind(this)} />
    </this>
  }

  _onChange(e) {
    this.value = e.target.value;
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this._input[attrName] = newVal;
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialSlider),
  [
    { propName: 'max', propType: Number },
    { propName: 'min', propType: Number },
    { propName: 'value', propType: Number },
  ]
)
