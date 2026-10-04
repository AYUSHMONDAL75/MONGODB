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

// updateOne
User.updateOne({ name: "Adam" }, { age: 49 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

// updateMany
User.updateMany({ age: { $gt: 45 } }, { age: 45 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

// findOneAndUpdate
User.findOneAndUpdate({ name: "Tony" }, { age: 60 }, { new: true })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
