if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	console.log(data.files);
    	console.log(dirName);

    },

    permute: function(arr) {

    }
  };
});
