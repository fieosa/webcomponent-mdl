import { default as MaterialButton } from './material-button';
import { reflectPropertiesToAttributes } from '../utils';

class MaterialIconButton extends MaterialButton {

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback();
    <this>
      <mdl-icon>{this.name}</mdl-icon>
      {/* TODO: support this syntax */}
      {/* {this.children} */}
    </this>
  }

}

export default reflectPropertiesToAttributes(MaterialIconButton, [
  { propName: 'name', propType: String },
])
