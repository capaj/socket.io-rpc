var traverse = require('traverse');

var a = {
	b: {
		c: function() {
			console.log("b.c");
		},
		d: function() {
			console.log("b.d");
		}
	},
	c: function() {
		console.log("c");
	},
	d: function() {
		console.log("d");
	}
};

var b = function() {

};

//var r = traverse(a).get('b'.split('.'));
traverse(b).map(function (el){
    console.log("el", this.isLeaf, el);

})
//console.log("b", traverse(b));