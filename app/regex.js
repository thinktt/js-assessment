if (typeof define !== 'function') { var define = require('amdefine')(module); }
//use regex pal as always
define(function() {
  return {
    containsNumber : function(str) {
        return /[0-9]/.test(str);

    },

    containsRepeatingLetter : function(str) {
        //used Stack Overflow
        return /([a-zA-Z])\1+/.test(str);

    },

    endsWithVowel : function(str) {
        return /[aeiouAEIOU]$/.test(str);
    },

    captureThreeNumbers : function(str) {
        //MDN spec
        var first3Nums =  /\d{3}/.exec(str) || false;
        if(first3Nums) first3Nums = first3Nums[0];
        return first3Nums;
    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
