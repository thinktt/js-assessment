if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
   argsAsArray : function(fn, arr) {
      //I got it to pass but doing this:
      //return fn(arr[0], arr[1], arr[2]); (WRONG)
      //need to use Function.prototype.apply();
      return fn.apply(null, arr);
   },

   speak : function(fn, obj) {
      //seems to be same thing that was used in 
      //objedcts assesment. See, I'm learning...
      return fn.call(obj);
   },

   functionFunction : function(str) {
      var funcFucnc = function(str2) {
         return str + ', ' + str2;
      };

      return funcFucnc;

   },

   makeClosures : function(arr, fn) {
      //maybe not the best pattern??
      var funcs = [], 
          funcFactory,
          i;
      
      funcFactory = function(x, fn) {
         return function () {
           return  fn(x);
         };
      };

      for(i=0; i<arr.length; i++){
         funcs[i] = funcFactory(arr[i], fn);
      }

      return funcs;
   },

   partial : function(fn, str1, str2) {
      var partialFunc = function(punctuation) {
         return fn(str1, str2, punctuation);
      };

      return partialFunc; 

   },

   useArguments : function(a, b, c , d) {
      var sum = 0;
      if(a) sum = sum + a; 
      if(b) sum = sum + b; 
      if(c) sum = sum + c; 
      if(d) sum = sum + d;
      return sum; 

   },

   callIt : function(fn, a, b, c) {
      //stack overflow for this one, then MDN spec
      //I did not know this fn.length, and I also learned 
      //about the arguments object, very cool...

      if(fn.length === 2) fn(a, b);
      if(fn.length === 3) fn(a, b, c);
   },

   partialUsingArguments : function(fn, a, b, c) {
      //creative... but is this what they want??
      var x, y, z, partialInner;
      
      x = a || null;
      y = b || null;
      z = c || null; 

      partialInner = function(a, b, c) {
         if(arguments.length === 1) {
            z = a;
         } else if(arguments.length === 2) {
            y = a;
            z = b;
         } else if(arguments.length === 3) {
            x = a;
            y = b;
            z = c;
         }
         return fn(x, y, z);
      };

      return partialInner; 
   },

   curryIt : function(fn) {
      console.log(fn);
   }
  };
});
