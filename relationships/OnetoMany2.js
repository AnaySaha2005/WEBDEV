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
const OrderSchema = mongoose.Schema({
  item: String,
  price: Number,
});
const order = mongoose.model("order", OrderSchema);
const addOrder = async () => {
  let res = await order.insertMany([
    { item: "samosa", price: 12 },
    { item: "chips", price: 10 },
    { item: "chocolate", price: 20 },
  ]);
  console.log(res);
};
// addOrder();
const CostomerSchema = mongoose.Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "order",
    },
  ],
});
const costomer = mongoose.model("costomer", CostomerSchema);
const addCostomer = async () => {
  let c1 = new costomer({
    name: "Anay Saha",
  });
  let order1 = await order.findOne({ item: "chips" });
  let order2 = await order.findOne({ item: "chocolate" });
  c1.orders.push(order1);
  c1.orders.push(order2);
  await c1.save().then((res) => {
    console.log(res);
  });
};
const addcost=async()=>{
  const newcostomer=new costomer({
    name:"Shrija",
  })
  const neworder=new order({
    item:"Pizza",
    price:250
  })
  newcostomer.orders.push(neworder);
 await neworder.save();
 await newcostomer.save();
}
const delte=(cost)=>{
  costomer.findOne({name:cost}).then(async(res)=>{
    console.log(res);
    let orders=res.orders;
     orders.forEach((or)=>{
      order.findByIdAndDelete(or);
    });
    await costomer.deleteOne({name:cost}).then((res)=>{console.log(res)})
  })
  
}
 