const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookScema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const book = mongoose.model("book", bookScema);

// let book1 = new book({
//   title: "Mathematics XII",
//   author: "RD Sharma",
//   price: 1200,
// });

//save

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//update
book
  .findByIdAndUpdate("6a74bc9ec35a8a2bc424b6e4", { price: 1400 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
