const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
  app.get("/", (req, res) => res.send("Hello World"));
  app.listen(port, () => console.log(`app listening on port ${port}!`));
}
const userSchema = mongoose.Schema({
  username: String,
  addresses: [
    {
      location: String,
      city: String,
    },
  ],
});
const user = mongoose.model("user", userSchema);
const addUsers = async () => {
  let user1 = new user({
    username: "Sherlock",
    addresses: [
      {
        location: "221B Baker Street",
        city: "London",
      },
    ],
  });
  user1.addresses.push({
    location: "P32 WallStreet",
    city: "London",
  });
  await user1.save().then((res) => {
    console.log(res);
  });
};
addUsers();
