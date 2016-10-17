export default function mdlUpgrade(Component) {		
    const _connectedCallback = Component.prototype.connectedCallback;
    const _disconnectedCallback = Component.prototype.disconnectedCallback;

    Component.prototype.connectedCallback = function() {
        window.componentHandler.upgradeElement(this);
        if (_connectedCallback) {
          console.log('decorator connectedCallback');
          return _connectedCallback.bind(this)();
        }
    };

    Component.prototype.disconnectedCallback = function() {
        window.componentHandler.downgradeElements(this);
        if (_disconnectedCallback) {
          return _disconnectedCallback.bind(this)();
        }
    };

    return Component;
}
