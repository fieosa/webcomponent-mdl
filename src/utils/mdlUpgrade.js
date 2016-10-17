export default function mdlUpgrade(Constructor) {

  class NewConstructor extends Constructor {

    connectedCallback() {
      window.componentHandler.upgradeElement(this);
      if (super.connectedCallback) {
        return super.connectedCallback();
      }
    };

    disconnectedCallback() {
      window.componentHandler.downgradeElements(this);
      if (super.disconnectedCallback) {
        return super.disconnectedCallback();
      }
    };

  }

  return NewConstructor;
}
