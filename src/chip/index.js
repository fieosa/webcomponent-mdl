import { BaseCustomElement, basicClassCreator, reflectPropertiesToAttributes } from '../utils';

class Chip extends BaseCustomElement {

  createdCallback(children) {
    this.classList.add('mdl-chip');
  }

  connectedCallback() {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].nodeName === 'MDL-CHIP-CONTACT') {
        this.classList.add('mdl-chip--contact');
        break;
      }
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-chip--deletable', this.deletable);
  }

}

export const MaterialChip = reflectPropertiesToAttributes(
  Chip,
  [
    { propName: 'deletable', propType: Boolean },
  ]
)

export const MaterialChipContact = basicClassCreator('mdl-chip__contact');
export const MaterialChipText = basicClassCreator('mdl-chip__text');
export const MaterialChipAction = basicClassCreator('mdl-chip__action');
