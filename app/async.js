if (typeof define !== 'function') { var define = require('amdefine')(module); }
var globey;

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

    },

    manipulateRemoteData : function(url) {

    	$.getJSON(url, function(data){
    		globey = data.people; 
    	});

    }
  };
});
