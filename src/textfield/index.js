import { BaseCustomElement, reflectPropertiesToAttributes, mdlUpgrade } from '../utils';

class MaterialTextfield extends BaseCustomElement {

  createdCallback(children) {
    this.classList.add('mdl-textfield',  'mdl-js-textfield');
    this._inputTag = !!this.rows || +this.maxrows > 1 ? 'textarea' : 'input';
    const customId = this.id || `textfield-${this.label.replace(/[^a-z0-9]/gi, '')}`;
    this._input = <this._inputTag id={customId} class="mdl-textfield__input"/>
    this._labelContainer = <label class="mdl-textfield__label"></label>;
    this._errorContainer = <span class="mdl-textfield__error"></span>;
    this._expandableIconContainer = <i class="material-icons">{this.expandableIcon}</i>;
    if (this.expandable) {
      <this id="">
        <label class="mdl-button mdl-js-button mdl-button--icon" for={customId}>
          {this._expandableIconContainer}
        </label>
        <div class="mdl-textfield__expandable-holder">
          {this._input}
          {this._labelContainer}
          {this._errorContainer}
        </div>
        {children}
      </this>
    } else {
      <this>
        {this._input}
        {this._labelContainer}
        {this._errorContainer}
        {children}
      </this>
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-textfield--floating-label', this.floatingLabel);
    this.classList.toggle('mdl-textfield--expandable', this.expandable);
    this._input.disabled = this.disabled;
    this._input.maxrows = this.maxrows;
    if (!!this.pattern) this._input.pattern = this.pattern;
    this._input.required = this.required;
    this._input.rows = this.rows;
    this._input.value = this.value;
    this._labelContainer.textContent = this.label;
    this._errorContainer.textContent = this.error;
    this._expandableIconContainer.textContent = this.expandableIcon;
    if (this.MaterialTextfield) {
      if (attrName === 'required' ||
          attrName === 'pattern' ||
          attrName === 'error') {
        this.MaterialTextfield.checkValidity();
      }
      if (attrName === 'disabled') {
        this.MaterialTextfield.checkDisabled();
      }
      if (attrName === 'value' && this._input !== document.activeElement) {
        this.MaterialTextfield.change(this.value);
      }
    }
    this.classList.toggle('is-invalid', this.error && !this.pattern)
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
    { propName: 'label', propType: String },
    { propName: 'maxrows', propType: Number },
    { propName: 'pattern', propType: String },
    { propName: 'required', propType: Boolean },
    { propName: 'rows', propType: Number },
    { propName: 'value', propType: String }
  ]
)
