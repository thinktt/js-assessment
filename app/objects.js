if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	//had to look this up... interesting...
	//call method...
  return {
    alterContext : function(fn, obj) {

    return fn.call(obj);

    },

    alterObjects : function(constructor, greeting) {
    	//HA! figured this one out on my lonesome
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	//MDN spec.. Stack Overflow
			var ownNames = Object.getOwnPropertyNames(obj),
					i, ownArr = [];

			for(i=0; i<ownNames.length; i++){
    		ownArr.push(ownNames[i] + ': ' + obj[ownNames[i]]);
			}
			
    	return ownArr;
    }
  };
});
