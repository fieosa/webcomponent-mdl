import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialDialog extends BaseCustomElement {

  createdCallback() {
    this._dialog = <dialog></dialog>;
    this._dialog.classList.add('mdl-dialog');
  }

  connectedCallback() {
    const children = this.getChildren();
    for (let i = 0; i < children.length; i++) {
      this._dialog.appendChild(children[i]);
    }
    this.innerHTML = '';
    this.appendChild(this._dialog);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this._dialog[attrName] = newVal;
  }

}

export default reflectPropertiesToAttributes(
  MaterialDialog,
  [
    { propName: 'open', propType: Boolean },
  ]
);
