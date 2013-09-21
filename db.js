var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://localhost:7474');

//to make a node
var tank = db.createNode({name: 'Tank'}),
	hark = db.createNode({name: 'Hark'}),
	osca = db.createNode({name: 'OSCA'});

tank.createRelationshipFrom(osca, 'subsumes', function(err, relationship) {
	console.log(err, relationship);
});

hark.createRelationshipFrom(osca, 'subsumes', function(err, relationship) {
	console.log(err, relationship);
});

var nodes = [tank, hark, osca];

for (var i = nodes.length - 1; i >= 0; i--) {
	nodes[i].save(function (err, node) {    // ...this is what actually persists.
	    if (err) {
	        console.err('Error saving new node to database:', err);
	    } else {
	        console.log('Node saved to database with id:', node.id);
	    }
	});
};