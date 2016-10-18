function processChildren(ele, children) {
  if (children.constructor === Array) {
    for(var i = 0; i < children.length; i++) {
      processChildren(ele, children[i]);
    }
  } else if (children.constructor === String) {
    ele.appendChild(document.createTextNode(children));
  } else if (children && children.nodeName) {
    ele.appendChild(children);
  } else {
    console.error('Ignore jsx type: ', children, typeof children);
  }
}

export function jsxdom(tag, attributes, ...children) {
  let ele = tag.nodeName ? tag : document.createElement(tag);
  // set attr
  for (var attrName in attributes) {
    ele.setAttribute(attrName, attributes[attrName]);
  }
  // set children
  processChildren(ele, children);
  return ele;
}

window.jsxdom = jsxdom;
window['jsxdom'] = jsxdom;
