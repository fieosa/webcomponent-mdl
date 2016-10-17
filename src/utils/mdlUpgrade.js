export default function mdlUpgrade(Constructor) {
  const _connectedCallback = Constructor.prototype.connectedCallback;
  const _disconnectedCallback = Constructor.prototype.disconnectedCallback;

  Constructor.prototype.connectedCallback = function() {
    window.componentHandler.upgradeElement(this);
    if (_connectedCallback) {
      return _connectedCallback.bind(this)();
    }
  };

  Constructor.prototype.disconnectedCallback = function() {
    window.componentHandler.downgradeElements(this);
    if (_disconnectedCallback) {
      return _disconnectedCallback.bind(this)();
    }
  };

  return Constructor;
}
