if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	//No problemo
  return {
    or : function(a, b) {
    	return a || b;

    },

    and : function(a, b) {
    	return a && b;

    }
  };
});
