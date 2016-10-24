import { default as MaterialButton } from './material-button';
import { reflectPropertiesToAttributes, mdlUpgrade } from '../utils';

class MaterialIconButton extends MaterialButton {

  createdCallback() {
    super.createdCallback();
    this.classList.add('mdl-button--icon');
    <this>
      <mdl-icon>{this.name}</mdl-icon>
    </this>
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback();
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialIconButton), [
  { propName: 'name', propType: String },
])
