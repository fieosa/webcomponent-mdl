import { mdlUpgrade, reflectPropertiesToAttributes } from '../utils';

class MaterialTextfield extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-textfield',  'mdl-js-textfield');
  }


  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-textfield--floating-label', this.floatingLabel);
    this.classList.toggle('mdl-textfield--expandable', this.expandable);
    <this style="color: red;">
      I am a text.<br/>
      {this.label}
      <p onclick={() => console.log(this)} style="font-size: inherite;">
      ooohh
      </p>
    </this>
  }

}

export default reflectPropertiesToAttributes(mdlUpgrade(MaterialTextfield),
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
