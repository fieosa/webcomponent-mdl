function processChildren(dom, children) {
  if (typeof children === 'string') {
    dom.appendChild(document.createTextNode(children));
  } else if (Array.isArray(children)) {
    children.forEach(function(i) {
      processChildren(dom, i);
    });
  } else if (children) {
    dom.appendChild(children);
  }
}

function jsxdom(tagName, attributes, ...children) {
  function mutateElement(ele) {
    for (var attrName in attributes) {
      ele.setAttribute(attrName, attributes[attrName]);
    }
    processChildren(ele, children);
    return ele;
  }
  return mutateElement(tagName.tagName ? tagName : document.createElement(tagName));
}

jsxdom.Component = function(Constructor) {
  class NewConstructor extends Constructor {
    attributeChangedCallback() {
      if (super.attributeChangedCallback) {
        this.innerHTML = '';
        return super.attributeChangedCallback.apply(this, arguments);
      }
    }
  }
  return NewConstructor;
}

export default jsxdom;
