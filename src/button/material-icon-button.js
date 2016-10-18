import { default as MaterialButton } from './material-button';
import { reflectPropertiesToAttributes } from '../utils';

class MaterialIconButton extends MaterialButton {

  constructor() {
    super();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback();
    var abc = [1, 2].map(v => <span id={v}>test</span>);
    <this>
      {abc}
      <mdl-icon>{this.name}</mdl-icon>
    </this>
  }

}

export default reflectPropertiesToAttributes(MaterialIconButton, [
  { propName: 'name', propType: String },
])
