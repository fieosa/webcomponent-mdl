import { BaseCustomElement, basicClassCreator, reflectPropertiesToAttributes } from '../utils';

class Chip extends BaseCustomElement {

  createdCallback(children) {
    this.classList.add('mdl-chip');
    const hasContact = children.some((ele, index) => {
      return ele.nodeName === 'MDL-CHIP-CONTACT';
    });
    if (hasContact) {
      this.classList.add('mdl-chip--contact');
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
