db = db.getSiblingDB("college");

db.student.drop();
db.student.insertMany([
  { name: "adam", marks: 79, city: "Delhi" },
  { name: "bob", marks: 65, city: "Mumbai" },
  { name: "eve", marks: 82, city: "Delhi" },
]);

// updateOne
db.student.updateOne({ name: "adam" }, { $set: { marks: 99 } });

// updateOne with options
db.student.updateOne(
  { name: "zed" },
  { $set: { marks: 50 } },
  { upsert: true }
);

// updateMany
db.student.updateMany({ city: "Delhi" }, { $set: { city: "Delhi NCR" } });

// replaceOne
db.student.replaceOne({ name: "bob" }, { name: "bobby", marks: 70 });

db.student.find().forEach(printjson);
