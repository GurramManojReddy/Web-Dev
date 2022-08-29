const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true});

const fruitSchema=new mongoose.Schema({
  name:{type:String,required:true},rating:Number,review:String
});
const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
  name:"Apple",
  rating:8,
  review:"Good"
});

const peopleSchema = new mongoose.Schema({
  name:String,age:Number,marital_status:String
});
const People = mongoose.model("People",peopleSchema);
const people= new People({
  name:"john",age:18,marital_status:"No"
});

// fruit.save();
// people.save();
Fruit.deleteOne({name:"b59698ef4477d1aa380100"},function(err){if(err){console.log(err);}else {console.log("Document Successfully updated");}});
Fruit.find(function(err,fruits){
  if(err){console.log(err);}
  else {
fruits.forEach(function(fruit){console.log(fruit.name);});
  }
});
