// This is the constructor function for new movie objects (uses a spec object to initialize)
function movie(spec) {
	
	// Define private object properties, if any (for example a variable monitoring the status of the movie download)
	var status = 'started downloading';
	
	// Define public object properties (if not present on the spec object, will default to undefined)
	var name = spec.name,
	    director = spec.director,
	    cast = spec.cast;
	
	// Define methods with privileged access to private properties, for example:
	var displayStatus = function() {
	    return status;
	};
	var changeStatus = function() {
	    return status = 'finished downloading';
	};
	
	// Return object
	return {
	    name: name,
	    director: director,
	    cast: cast,
	    displayStatus: displayStatus,
	    changeStatus: changeStatus
	};
	
}

// Defining a new movie using the constructor function is straightforward
var newMovie = movie({
	name: 'Jerry McGuire',
	director: 'Cameron Crowe',
	cast: [
		'Tom Cruise',
		'Renée Zellweger',
		'Cuba Gooding Jr.',
		'...'
	]
});

// Now define some useful helper methods (just to give an example) that we can apply to our newly created object
var helper = {
	
	displayInfo: function() {
		for(var prop in this) {
			if(typeof this[prop] === 'function') continue;
			console.log(prop + ': ' + this[prop] + "\n");
		}
		return this; // Handy if we want to chain additional functions or methods
	}
	
};

// Finally we define a "parent object" and a method that we want our movie object to "inherit"
var digitalContent = {
	
	// The method could take (for example) user info and check he or she is allowed to enjoy the digital content
	digitalRightsManagement: function(user) {

		// Call to external API (omitted for brevity...)
		
		// If user is authorized add a property to the object to clear viewing
		if (user) return this.copyright = 'cleared';

	}
	
};

console.log(newMovie.status); // Displays undefined (property is private)
console.log(newMovie.displayStatus()); // Displays the private property value
console.log(newMovie.changeStatus()); // Displays updated private property value
console.log(helper.displayInfo.call(newMovie)); // Enumerates object properties (excl. methods)

digitalContent.digitalRightsManagement.call(newMovie, true); // Apply method from "parent object"
console.log(newMovie.copyright); // Outputs 'cleared'