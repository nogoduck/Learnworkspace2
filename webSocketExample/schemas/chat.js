const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
//ref에 사용한 스키마는 몽구스가 합칠 수 있다.
const chatSchema = new Schema({
  room: {
    type: ObjectId,
    required: true,
    ref: "Room",
  },
  user: {
    type: String,
    required: true,
  },
  chat: String,
  gif: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", chatSchema);
