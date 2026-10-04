const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allchats = [
  {
    from: "Ayush",
    to: "Sonu",
    msg: "i am a boy",
    created_at: new Date(),
  },
  {
    from: "Ram",
    to: "Shayam",
    msg: "please send me your notes",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "Neha",
    msg: "will you go to college",
    created_at: new Date(),
  },
  {
    from: "Rohit",
    to: "Arghya",
    msg: "Whta are you doing",
    created_at: new Date(),
  },
  {
    from: "Ayushi",
    to: "Sanu",
    msg: "don't message me",
    created_at: new Date(),
  },

];
chat.insertMany(allchats);
