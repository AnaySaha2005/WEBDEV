const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Bookshelf');
}
const bookSchema=new mongoose.Schema({
    book:{
        type:String,
        required:true,
        maxLength:20,
    },
    author:{
        type:String,
        default:"",
    },
    price:{
        type:Number,
        min:100
    }
});
const book=mongoose.model("book",bookSchema);
const book1=new book({
    book:"Rings",
    author:"idk",
    price:"10"
})
book1.save().then((res)=>{
    console.log(res)
})
book.findByIdAndUpdate('6626154900e5c900e2ff2251',{price:50},{runValidators:true})