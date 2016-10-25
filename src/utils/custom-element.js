/**
 * Creates a base custom element class.
 *
 * @param {!Window} win The window in which to register the custom element.
 * @return {!Function}
 */
function createBaseCustomElementClass(win) {
  if (win.BaseCustomElementClass) {
    return win.BaseCustomElementClass;
  }
  const htmlElement = win.HTMLElement;
  /** @abstract @extends {HTMLElement} */
  class BaseCustomElement extends htmlElement {
    /**
     * @see https://github.com/WebReflection/document-register-element#v1-caveat
     * @suppress {checkTypes}
     */
    constructor(self) {
      self = super(self);
      self.createdCallback(self.getChildren());
      return self;
    }

    /**
     * Called when elements is created. Sets instance vars since there is no
     * constructor.
     * @this {!Element}
     */
    createdCallback() {
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
    }

    /**
     * Called when the element is first connected to the DOM. Calls
     * {@link firstAttachedCallback} if this is the first attachment.
     * @final @this {!Element}
     */
    connectedCallback() {
    }

    /** The Custom Elements V0 sibling to `connectedCallback`. */
    attachedCallback() {
      this.connectedCallback();
    }

    /**
     * Called when the element is disconnected from the DOM.
     * @final @this {!Element}
     */
    disconnectedCallback() {
    }

    /** The Custom Elements V0 sibling to `disconnectedCallback`. */
    detachedCallback() {
      this.disconnectedCallback();
    }

    getChildren() {
      return [].slice.call(this.childNodes);
    }
  }

  win.BaseCustomElementClass = BaseCustomElement;
  return win.BaseCustomElementClass;
}

export const BaseCustomElement = createBaseCustomElementClass(window);

/**
 * Registers a new custom element with its implementation class.
 * @param {!Window} win The window in which to register the elements.
 * @param {string} name Name of the custom element
 * @param {function(new:./base-element.BaseElement, !Element)} implementationClass
 */
export function registerElement(win, name, implementationClass, option) {
  const supportsCustomElementsV1 = 'customElements' in win;
  if (supportsCustomElementsV1) {
    win['customElements'].define(name, implementationClass, option);
  } else {
    win.document.registerElement(name, {
      prototype: klass.prototype,
    });
  }
}
