db = db.getSiblingDB("college");

db.student.drop();
db.student.insertMany([
  { name: "adam", marks: 79 },
  { name: "bob", marks: 65 },
  { name: "eve", marks: 55 },
  { name: "farah", marks: 88 },
]);

// deleteOne
db.student.deleteOne({ name: "adam" });

// deleteMany
db.student.deleteMany({ marks: { $lt: 60 } });

db.student.find().forEach(printjson);

// drop database
db.dropDatabase();
