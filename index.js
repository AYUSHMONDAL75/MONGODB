const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
const userschema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
const user = mongoose.model("user", userschema);

// //multiple data insert in mongodb
// user
//   .insertMany([
//     { name: "Ayush", email: "ayush@gmail.com,age:20" },
//     { name: "sonu", email: "sonu@gmail.com,age:20" },
//     { name: "ram", email: "ramgmail.com,age:22" },
//   ])
//   .then((res) => {
//     console.log(res);
//   });
// //insert
// const user1 = new user({
//   name: "adam",
//   email: "adam@gmail.com",
//   age: 48,
// });
// const user2 = new user({
//   name: "bob",
//   email: "bob@gmail.com",
//   age: 48,
// });

// //save data in mongodb
// user1.save();
// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // find data
// user
//   .find({ age: { $gt: 47 } })
//   .then((res) => {
//     console.log(res.name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //update
// user
//   .updateOne({ name: "Ayush mondal" }, {age: 21})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// delete
user.deleteMany({ age: { $lt: 20 } }).then((res) => {
  console.log(res);
});
