const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const { Schema } = mongoose;
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
  app.get("/", (req, res) => res.send("Hello World"));
  app.listen(port, () => console.log(`app listening on port ${port}!`));
}
const userSchema = new Schema({
  name: String,
  email: String,
});
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});
const user = mongoose.model("user", userSchema);
const post = mongoose.model("post", postSchema);
const addData = async () => {
  let u1 = new user({
    username: "Anay Saha",
    email: "1234@gmail.com",
  });
  let p1 = new post({
    content: "Hello",
    likes: 7,
  });
  p1.user = u1;
  await u1.save();
  await p1.save();
};
addData();

