db = db.getSiblingDB("college");

db.student.insertOne({
  _id: ObjectId(),
  name: "adam",
  marks: NumberInt(79),
  fees: NumberDecimal("1500.50"),
  isActive: true,
  joinedOn: new Date(),
  subjects: ["math", "science"],
  address: { city: "Delhi", pin: 110001 },
});

db.student.find().forEach(printjson);
