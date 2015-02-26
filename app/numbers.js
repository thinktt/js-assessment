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

    //variation on SO finds and MDN ref
    multiply: function(a, b) {
        var countDecimals, aDecLength, bDecLength, exp, powOfTen, product;

        countDecimals = function(num) { 
            var decPart, decLength; 
            //converts number into a string then caoture the decimal part
            decPart = num.toString(10).match(/\.(.*)/);
            //if something was captured  get it's lenght otherwise length is 0
            if(decPart) decLength = decPart[1].length;
                else decLength = 0; 

            return decLength; 
        };

        aDecLength = countDecimals(a);
        bDecLength = countDecimals(b);
        //find the longest decimal lengh to use as power of ten exponent
        exp = aDecLength > bDecLength ? aDecLength : bDecLength;
        powOfTen = Math.pow(10, exp);
        a = powOfTen * a;
        b = powOfTen * b;
        product = (a*b)/(powOfTen * powOfTen);

        return product; 
    }
  };
});

