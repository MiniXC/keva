'use-strict';

module.exports = function*(obj) {
   for (let key of Object.keys(obj)) {
     if(obj.hasOwnProperty(key)) {
       yield [key, obj[key]];
     }
   }
}
