import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialDialogActions extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-dialog__actions');
  }

  attributeChangedCallback() {
    this.classList.toggle('mdl-dialog__actions--full-width', this.fullWidth);
  }

}

export default reflectPropertiesToAttributes(
  MaterialDialogActions,
  [
    { propName: 'fullWidth', propType: Boolean },
  ]
);
