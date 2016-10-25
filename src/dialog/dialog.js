import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialDialog extends BaseCustomElement {

  createdCallback(children) {
    this._dialog = <dialog>{children}</dialog>;
    this._dialog.classList.add('mdl-dialog');
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
