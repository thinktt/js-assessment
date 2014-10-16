if (typeof define !== 'function') { var define = require('amdefine')(module); }


var  createModule = function(str1, str2) {
	var sayIt,
			mod = {};

	mod.greeting = str1;
	mod.name = str2; 

	mod.sayIt = function () {
		return mod.greeting + ', ' + mod.name;
	};

	return mod;
};

define(function() {
  return {createModule: createModule};
});


var testMod = createModule('Howdy', 'Bob');

console.log(testMod.sayIt());
console.log(testMod.greeting);
console.log(testMod.name);


testMod.greeting = 'Yo';
testMod.name = 'Adrian';

console.log(testMod.sayIt());
console.log(testMod.greeting);
console.log(testMod.name);