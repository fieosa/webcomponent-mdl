export default function map(callbackfn, thisArg) {
  var keys = Object.keys(this),
    result = new Array(this.length);
  keys.forEach(function(key) {
    if (key >= 0 && this.hasOwnProperty(key)) {
      result[key] = callbackfn.call(thisArg, this[key], key, this);
    }
  }, this);
  return result;
}
