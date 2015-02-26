if (typeof define !== 'function') { var define = require('amdefine')(module); }

//var nums = []; 

define(function () {
  return {
    count : function (start, end) {
    	var i, count, interval, cancel;  

			i=start;
			console.log(i);

			count = function(){
				i++;
				console.log(i);
				if(i>=end) cancel();
			};

			cancel = function() {
				clearInterval(interval);
			};

			interval = setInterval(count, 100);

			return {cancel: cancel};
    }
  };
});