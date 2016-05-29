'use-strict';

module.exports = function*(obj) {
   for (let key of Object.keys(obj)) {
     yield [key, obj[key]];
   }
}
