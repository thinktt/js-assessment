if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    //SO and MDN help
    valueAtBit: function(num, bit) {
        --bit; 
        return ( ((1 << bit) & num)  >> bit);
    },

    //MDN reference
    base10: function(str) {
        return parseInt(str, 2);

    },

    //SO help
    convertToBinary: function(num) {
        return ('000000000' + num.toString(2)).substr(-8);

    },

    multiply: function(a, b) {

    }
  };
});

