db = db.getSiblingDB("college");

// insertOne
db.student.insertOne({ name: "adam", marks: 79 });

// show collections
printjson(db.getCollectionNames());

db.student.find().forEach(printjson);

// insertMany (array of documents)
db.student.insertMany([
  { name: "bob", marks: 65 },
  { name: "eve", city: "Delhi" },
]);

db.student.find().forEach(printjson);
