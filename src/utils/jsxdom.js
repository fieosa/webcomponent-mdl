function processChildren(ele, child) {
  if (typeof child === 'string') {
    ele.appendChild(document.createTextNode(child));
  } else if (child && child.nodeName) {
    ele.appendChild(child);
  } else {
    console.error('Ignore jsx type: ', child, typeof children);
  }
}

export function jsxdom(tag, attributes, ...children) {
  let ele = tag.nodeName ? tag : document.createElement(tag);
  // set attr
  for (var attrName in attributes) {
    ele.setAttribute(attrName, attributes[attrName]);
  }
  // set children
  for(var i = 0; i < children.length; i++) {
    processChildren(ele, children[i]);
  }
  return ele;
}

window.jsxdom = jsxdom;
window['jsxdom'] = jsxdom;
