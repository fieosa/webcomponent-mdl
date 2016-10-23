import { BaseCustomElement, reflectPropertiesToAttributes, mdlUpgrade } from '../utils';

class MaterialProgress extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-progress', 'mdl-js-progress');
  }

  attributeChangedCallback() {
    this.classList.toggle('mdl-progress__indeterminate', this.indeterminate);
    this.updateProgress();
  }

  updateProgress() {
    if (this.MaterialProgress) {
      this.MaterialProgress.setProgress(this.progress);
      this.MaterialProgress.setBuffer(this.buffer);
    }
  }

  connectedCallback() {
    this.updateProgress();
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialProgress),
  [
    { propName: 'buffer', propType: Number },
    { propName: 'indeterminate', propType: Boolean },
    { propName: 'progress', propType: Number },
  ]
)
