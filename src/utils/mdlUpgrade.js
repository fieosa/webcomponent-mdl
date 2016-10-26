export default function mdlUpgrade(Constructor) {

  class NewConstructor extends Constructor {

    connectedCallback() {
      window.componentHandler.upgradeElement(this);
      super.connectedCallback();
    };

    disconnectedCallback() {
      window.componentHandler.downgradeElements(this);
      super.disconnectedCallback();
    };

  }

  return NewConstructor;
}
