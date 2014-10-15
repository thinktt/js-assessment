if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var i = 0, 
            sum = 0;    
        for(i=0; i<arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        console.log(arr, item);
        while(arr.indexOf(item)) {
         arr.splice(arr.indexOf(item), 1);
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
