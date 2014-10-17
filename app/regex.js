if (typeof define !== 'function') { var define = require('amdefine')(module); }
//used regex pal to help find most of these
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
        //MDN spec to find exec()
        var first3Nums =  /\d{3}/.exec(str) || false;
        if(first3Nums) first3Nums = first3Nums[0];
        return first3Nums;
    },

    matchesPattern : function(str) {
        var isMatch = /^[\d]{3}-[\d]{3}-[\d]{4}$/.test(str);
        return isMatch;
    },
    isUSD : function(str) {
        return /^\$(?:[\d]{1,3})(,[\d]{3})*(\.[\d]{2})?$/.test(str);

    }
  };
});
