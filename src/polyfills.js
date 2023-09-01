// Object.startsWith
const objectToValuesPolyfill = (object) => {
  return Object.keys(object).map(key => object[key]);
};
Object.values = Object.values || objectToValuesPolyfill;

// Object.startsWith
if (!String.prototype.startsWith) {
  // eslint-disable-next-line
  Object.defineProperty(String.prototype, 'startsWith', {
      value: function(search, rawPos) {
          var pos = rawPos > 0 ? rawPos|0 : 0;
          return this.substring(pos, pos + search.length) === search;
      }
  });
}