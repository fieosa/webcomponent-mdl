export default function reflectPropertiesToAttributes(Constructor, props) {
  for (var i = 0; i < props.length; i++) {
    let propName = props[i].propName;
    let attrName = props[i].attrName || propName;
    let propType = props[i].propType;
    let descriptor = {
      key: propName,
      get: function get() {
        if (!propType) {
          return this.hasAttribute(propName);
        } else {
          return this.getAttribute(propName);
        }
      },
      set: function set(val) {
        this.setAttribute(propName, val);
        this.setAttribute(attrName, val);
      },
      configurable: true,
    };
    Object.defineProperty(Constructor.prototype, descriptor.key, descriptor);
  }
  return Constructor;
}
