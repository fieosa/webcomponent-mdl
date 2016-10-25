/**
 * Implementation of templating syntax for jsx.
 *
 * To support tag nesting syntax:
 *   examples:
 *     <p>
 *       <div></div>
 *       <span><span/>
 *     </p>
 *
 *    1. Recursively call processChildren which the 'children' parameter is an instance of n-dimensional array.
 *       The above example is an array of [[div], [span]] as the children of <p> tag.
 *
 * To support {this.children} syntax:
 *    1. In processChildren, detect the type of this.children which is an instance of HTMLCollection.
 *    2. Note that HTMLCollection is a list of HTMLElement extends from Object.
 *
 * To support {this.childNodes} syntax:
 *    1. In processChildren, detect the type of this.childNodes which is an instance of NodeList.
 *    2. Note that NodeList is a list of Node extends from Object.
 *
 * To support customizing attributes:
 *    example:
 *      for (var attrName in attributes) {
 *        attributeHookFunction(ele, attrName, attrValue);
 *      }
 *
 *    1. Mutate element through attributeHookFunction which passed to this module.
 *
 */


function processChildren(ele, children) {
  if (children && children.constructor === Array) {
    for(var i = 0; i < children.length; i++) {
      // When looping {this.children} or {this.childNodes}, remove itself
      if (children[i] && children[i].parentNode) {
        children[i].remove();
      }
      processChildren(ele, children[i]);
    }
  } else if (children instanceof Node) {
    ele.appendChild(children);
  } else if (children) {
    ele.appendChild(document.createTextNode(children));
  }
}

export default function createJsxdom(attributeHookFunction) {
  return function jsxdom(tag, attributes, ...children) {
    let ele = tag instanceof Node ? tag : document.createElement(tag);
    // set attr
    for (var attrName in attributes) {
      if (attributeHookFunction && attributeHookFunction(ele, children, attrName, attributes[attrName])) {
        continue;
      }
      if (attrName in ele) {
        ele[attrName] = attributes[attrName];
      } else {
        ele.setAttribute(attrName, attributes[attrName]);
      }
    }
    // set children
    processChildren(ele, children);
    return ele;
  }
};
