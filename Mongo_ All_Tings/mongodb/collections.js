db = db.getSiblingDB("college");

// document
db.student.insertOne({ name: "adam", marks: 79 });

// collection
db.createCollection("teacher");
printjson(db.getCollectionNames());
