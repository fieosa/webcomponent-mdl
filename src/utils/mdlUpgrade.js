export default function mdlUpgrade(Constructor) {

  class NewConstructor extends Constructor {

    connectedCallback() {
      window.componentHandler.upgradeElement(this);
      return super.connectedCallback();
    };

    disconnectedCallback() {
      window.componentHandler.downgradeElements(this);
      return super.disconnectedCallback();
    };

  }

  return NewConstructor;
}
