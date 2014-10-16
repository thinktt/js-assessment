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
        //used MDN spec
        while(arr.indexOf(item) !== -1) {
         arr.splice(arr.indexOf(item), 1);
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        //used MDN spec (well used it above?)
        while(arr.indexOf(item) !== -1) {
         arr.splice(arr.indexOf(item), 1);
        }
        return arr;

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;


    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        //looked up MDN spec
        arr.unshift(item); 
        return arr;  

    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr; 
    },

    count : function(arr, item) {
        var i, numOf =0; 
        for (i=0; i<arr.length; i++) {
            if(arr[i] === item) numOf++;
        }
        return numOf;
    },

    duplicates : function(arr) {
        var i, testNum,
            dups = [],
            isDup  = false;

        while(arr.length > 0) {
            isDup = false;
            testNum = arr.shift();
            //noticded... this should cauese problem splice 
            //reduces lenght! still somehow it's passing...
            //i-- should fi it...
            for (i=0; i<arr.length; i++) {
                if(arr[i] === testNum) {
                    isDup = true;
                    arr.splice(i, 1);
                    i--;
                }
            }
            if(isDup) dups.push(testNum);
        }

        return dups;
    },

    square : function(arr) {
        var i;
        for(i=0; i<arr.length; i++) {
            arr[i] = arr[i] * arr[i];
        }
        return arr; 

    },

    findAllOccurrences : function(arr, target) {
        var i, indexesOfItem = [];
        for(i=0; i<arr.length; i++) {
            if(arr[i] === target) indexesOfItem.push(i);
        }        
        return indexesOfItem;
    }
  };
});
