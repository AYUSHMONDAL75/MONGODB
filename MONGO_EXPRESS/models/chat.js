const express = require("express");
const { default: mongoose } = require("mongoose");
const chatschema = new mongoose.Schema({
  from: {
    type: String,
    require: true,
  },
  to: {
    type: String,
  },
  msg: {
    type: String,
    maxlength: 50,
  },
  created_at: {
    type: Date,
    require: true,
  },
});
const chat = mongoose.model("chat", chatschema);
module.exports = chat;