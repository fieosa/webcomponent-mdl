import {default as defineProperty} from './defineProperty';
import {default as changeNamingStyleTo} from './changeNamingStyle';

export default function reflectPropertiesToAttributes(Constructor, props=[]) {
  let observedAttrs = [];

  class NewConstructor extends Constructor {
    static get observedAttributes() {
      return observedAttrs;
    }
  }

  props.forEach((prop) => {
    let propName = changeNamingStyleTo(prop.propName, 'camel');
    let attrName = changeNamingStyleTo(prop.attrName || propName, 'dash');
    let propType = prop.propType;
    if (propName !== attrName) {
      observedAttrs.push(propName);
    }
    observedAttrs.push(attrName);
    let descriptor = {
      key: propName,
      get: function get() {
        return !propType || propType === Boolean ? this.hasAttribute(attrName) : this.getAttribute(attrName);
      },
      set: function set(val) {
        if ((!propType || propType === Boolean) && !val) {
          this.removeAttribute(propName);
          this.removeAttribute(attrName);
          return;
        }
        this.setAttribute(propName, val);
        this.setAttribute(attrName, val);
      }
    };
    defineProperty(NewConstructor.prototype, descriptor);
  });

  return NewConstructor;
}
