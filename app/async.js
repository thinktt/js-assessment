/*globals Promise:true*/
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var promise; 
    	promise = new Promise(function(resolve, reject){
    		resolve(value);
    	}); 
    	return promise; 

    },

    manipulateRemoteData : function(url) {
    	var names = [], promise;
    	promise = new Promise(function(resolve, reject) {
	    	$.getJSON(url, function(data){
	    		$.each(data.people, function (key, value) {
	    			names.push(value.name);
	    		});
	    		resolve(names.sort());

	    	});

    	});

    	return promise; 
    }
  };
});
