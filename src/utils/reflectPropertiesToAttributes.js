function defineProperties(target, descriptor) {
  descriptor.enumerable = descriptor.enumerable || false;
  descriptor.configurable = true;
  if ("value" in descriptor) descriptor.writable = true;
  Object.defineProperty(target, descriptor.key, descriptor);
}

export default function reflectPropertiesToAttributes(Constructor, props) {
  var observedAttris = [];

  class NewConstructor extends Constructor {
    static get observedAttributes() {
      return observedAttris;
    }
  }

  for (let i = 0; i < props.length; i++) {
    let propName = props[i].propName;
    let attrName = props[i].attrName || propName;
    observedAttris.push(propName);
    let descriptor = {
      key: propName,
      get: function get() {
        return !props[i].propType ? this.hasAttribute(propName) : this.getAttribute(propName);
      },
      set: function set(val) {
        this.setAttribute(propName, val);
        this.setAttribute(attrName, val);
      }
    };
    defineProperties(NewConstructor.prototype, descriptor);
  }

  return NewConstructor;
}
