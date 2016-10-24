export default function mdlUpgrade(Constructor) {

  class NewConstructor extends Constructor {

    connectedCallback() {
      // super.connectedCallback();
      window.componentHandler.upgradeElement(this);
    };

    disconnectedCallback() {
      super.disconnectedCallback();
      window.componentHandler.downgradeElements(this);
    };

  }

  return NewConstructor;
}
