export function isArrayLike(item) {
  return (
    Array.isArray(item) ||
      (!!item && item.length && item.length > 0)
  );
}

function processChildren(dom, children) {
  if (typeof children === 'string') {
    dom.appendChild(document.createTextNode(children));
  } else if (isArrayLike(children)) {
    for(var i = 0; i < children.length; i++) {
      processChildren(dom, children[i]);
    }
  } else if (children.nodeName) {
    dom.appendChild(children);
  } else {
    console.log('Wrong jsx type: ', children, typeof children);
  }
}

export function jsxdom(tag, attributes, ...children) {
  function mutateElement(ele) {
    for (var attrName in attributes) {
      ele.setAttribute(attrName, attributes[attrName]);
    }
    processChildren(ele, children);
    return ele;
  }
  if (tag.nodeName) {
    if (children && children.length > 0) {
      tag.innerHTML = '';
    }
    return mutateElement(tag);
  } else {
    return mutateElement(document.createElement(tag));
  }
}

window.jsxdom = jsxdom;
window['jsxdom'] = jsxdom;
