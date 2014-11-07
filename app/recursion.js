if (typeof define !== 'function') { var define = require('amdefine')(module); }

//stack overflow for how to have a function within an object call itself

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var i, files = [];

    	if(dirName) {
    		return this.getDirFiles(data, dirName);
    	}

    	for(i=0; i < data.files.length; i++) {
    		if(typeof data.files[i] === 'string') {
    			files.push(data.files[i]);
    		} else {
    			files = files.concat(this.listFiles(data.files[i]));
    		}
    	}
    	return files;
    },

    getDirFiles: function(data, dirName) {
    	var i, files;
    	if(data.dir === dirName) {
    		return this.listFiles(data);
    	}

    	for(i=0; i < data.files.length; i++) {
    		if(typeof data.files[i] === 'object') {
    			return this.getDirFiles(data.files[i], dirName);
    		}
    	}
    },

    permute: function(arr) {
			
			function getPermutation(list) {
				var arr = list.slice();
				var permutations;
				var permsList = [];
				var current; 
				var i, j;

				if(list.length === 1) return [arr];

				for(i=0; i<list.length; i++) { 
					current = list[i];
					arr = list.slice();
					arr.splice(i,1);

					permutations = getPermutation(arr); 
					for(j=0; j<permutations.length; j++) {
						permutations[j].unshift(current);
						permsList.push(permutations[j]);
					}
				}
				return permsList;
			}
    	
    	return getPermutation(arr);
    }
  };
});
