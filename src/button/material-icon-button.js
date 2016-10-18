import { default as MaterialButton } from './material-button';
import { reflectPropertiesToAttributes } from '../utils';

class MaterialIconButton extends MaterialButton {

  constructor() {
    super();
    this.classList.add('mdl-button--icon');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback.apply(this, arguments);
    var children = this.children && this.children.length > 0 ? this.children : this.innerHTML;
    <this>
      <mdl-icon>{this.name}</mdl-icon>
    </this>
  }

}

export default reflectPropertiesToAttributes(MaterialIconButton, [
  { propName: 'name', propType: String },
])
