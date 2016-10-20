import { mdlUpgrade, reflectPropertiesToAttributes } from '../utils';

class MaterialTextfield extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-textfield',  'mdl-js-textfield');
  }


  attributeChangedCallback(attrName, oldVal, newVal) {
    const {
      classList,
      label,
      floatingLabel,
      expandable,
      childNodes,
      children,
    } = this;
    classList.toggle('mdl-textfield--floating-label', floatingLabel);
    classList.toggle('mdl-textfield--expandable', expandable);
    <this style="color: red;">
      {/* TODO: support this syntax */}
      {/* {this.childNodes} */}
      I am a text.<br/>
      {label}
      <p onclick={() => console.log(this)} style="font-size: inherite;">
      {/* TODO: support this syntax */}
      {/* {this.children} */}
      ooohh
      </p>
    </this>
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialTextfield),
  [
    { propName: 'disabled', propType: Boolean },
    { propName: 'error', propType: String },
    { propName: 'expandable', propType: Boolean },
    { propName: 'expandableIcon', propType: String },
    { propName: 'floatingLabel', propType: Boolean },
    { propName: 'inputClassName', propType: String },
    { propName: 'label', propType: String },
    { propName: 'maxRows', propType: Number },
    { propName: 'pattern', propType: String },
    { propName: 'required', propType: Boolean },
    { propName: 'rows', propType: Number },
    { propName: 'value', propType: String }
  ]
)
