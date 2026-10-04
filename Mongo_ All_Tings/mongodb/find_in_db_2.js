db = db.getSiblingDB("college");

db.student.drop();
db.student.insertMany([
  { name: "adam", marks: 79, city: "Delhi" },
  { name: "bob", marks: 65, city: "Mumbai" },
  { name: "eve", marks: 82, city: "Delhi" },
  { name: "farah", marks: 88, city: "Pune" },
]);

// find students where marks > 75
db.student.find({ marks: { $gt: 75 } }).forEach(printjson);

// find students who live in Delhi or Mumbai
db.student.find({ city: { $in: ["Delhi", "Mumbai"] } }).forEach(printjson);

// find students who scored > 75 or live in Delhi
db.student
  .find({ $or: [{ marks: { $gt: 75 } }, { city: "Delhi" }] })
  .forEach(printjson);
