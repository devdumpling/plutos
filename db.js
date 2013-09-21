var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://localhost:7474');

//to make a node
var node = db.createNode({name: 'TANK'});     // instantaneous, but...
node.save(function (err, node) {    // ...this is what actually persists.
    if (err) {
        console.err('Error saving new node to database:', err);
    } else {
        console.log('Node saved to database with id:', node.id);
    }
});
