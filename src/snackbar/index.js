import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
} from '../utils';

class MaterialSnackbar extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-snackbar', 'mdl-js-snackbar');
    <this aria-hidden>
      <div class="mdl-snackbar__text"></div>
      <button class="mdl-snackbar__action" type="button"></button>
    </this>
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (this.MaterialSnackbar && this.active) {
      this.MaterialSnackbar.showSnackbar({
        message: this.message,
        timeout: this.timeout,
        actionHandler: () => eval(this.onaction),
        actionText: this.actionText,
      });
      setTimeout(() => {this.active = false;}, this.timeout);
    }
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialSnackbar),
  [
    { propName: 'message', propType: String },
    { propName: 'actionText', propType: String },
    { propName: 'active', propType: Boolean },
    { propName: 'onaction', propType: Function },
    { propName: 'timeout', propType: Number },
  ]
)
