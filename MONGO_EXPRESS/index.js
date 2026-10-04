const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const method_override = require("method-override")
// EJS setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); //pass data by post request
app.use(method_override("-method"));

// MongoDB connection
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();

  console.log(chats);

  res.render("index.ejs", { chats });
});

//new route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//Create route
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newchat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newchat
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      (console, log(err));
    });
  res.redirect("/chats");
});

// Edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

//update route
app.put("/chats/:id", async (req,res) => {
  let { id } = req.params;
  let { new_msg } = req.body;
  let updated_chat = await Chat.findByIdAndUpdate(
    id,
    { msg: new_msg },
    { runValidators: true, new: true },
  );
  console.log(updated_chat);
  res.redirect("/chats");
});

// Root route
app.get("/", (req, res) => {
  res.send("root is working");
});

// Start server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
