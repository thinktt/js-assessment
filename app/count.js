if (typeof define !== 'function') { var define = require('amdefine')(module); }

var nums = [1,2,3,4]; 

define(function () {
  return {
    count : function (start, end) {
    	var i, count, interval;  

			i=start;
			//nums = [start];

			count = function(){
				i++;
				//nums.push(i);
				console.log(nums);
				if(i>end) clearInterval(interval);
			};

			interval = setInterval(count, 100);
    }
  };
});