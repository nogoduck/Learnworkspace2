const mongoose = require("mongoose");

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = process.env;
const MONGO_URL = `mongodb+srv://${MONGO_ID}:${MONGO_PASSWORD}@table0.zotlh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connect = () => {
  //배포상태가 아니면(개발)
  if (NODE_ENV !== "production") {
    //몽고DB Query log
    mongoose.set("debug", true);
  }

  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("MongoDB 연결 완료");
    })
    .catch((err) => {
      console.log("MongoDB 연결 실패 ", err);
    });
};
