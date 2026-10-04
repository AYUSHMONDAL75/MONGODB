db = db.getSiblingDB("college");

db.student.drop();
db.student.insertMany([
  { name: "adam", marks: 79, city: "Delhi" },
  { name: "bob", marks: 65, city: "Mumbai" },
  { name: "eve", marks: 82, city: "Delhi" },
  { name: "farah", marks: 88, city: "Pune" },
]);

// returns everything
db.student.find().forEach(printjson);

// for all values
db.student.find({ city: "Delhi" }).forEach(printjson);

// for one value
printjson(db.student.findOne({ city: "Delhi" }));
