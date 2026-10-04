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

// insert one
const user1 = new User({ name: "Adam", email: "adam@gmail.com", age: 48 });
const user2 = new User({ name: "Bob", email: "bob@gmail.com", age: 50 });

user1.save(); // to save in DB
user2
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// insert multiple data
User.insertMany([
  { name: "Tony", email: "tony@gmail.com", age: 50 },
  { name: "Bruce", email: "bruce@gmail.com", age: 47 },
])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
