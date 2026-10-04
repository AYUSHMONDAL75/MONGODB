const mongoose = require("mongoose");

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// find all
User.find()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// find with condition
User.find({ age: { $gte: 47 } })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// find one
User.findOne({ age: { $gt: 47 } })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
