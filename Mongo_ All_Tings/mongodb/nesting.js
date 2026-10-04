db = db.getSiblingDB("college");

db.student.drop();
db.student.insertOne({
  _id: ObjectId(),
  name: "farah",
  performance: { marks: 88, grade: "A" },
});

db.student.find().forEach(printjson);

// find in nested document
printjson(db.student.findOne({ "performance.grade": "A" }));
db.student.find({ "performance.marks": { $gt: 80 } }).forEach(printjson);
