const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/todolistDB");
const itemsSchema={
  name:String
};
const Item=mongoose.model("Item",itemsSchema);
const listsSchema={
  name:String,listitems : [itemsSchema]
};
const List=mongoose.model("List",listsSchema);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
const item1 =new Item({name:"Buy Food"});
const item2 =new Item({name:"Cook Food"});
const item3 =new Item({name:"Eat Food"});
const item=[item1,item2,item3];
app.get("/",function(req,res){
Item.find({},function(err,foundItems){
  if(foundItems.length===0){
    Item.insertMany(item,function(err){if(err){console.log(err);}else {console.log("success");}});
    res.redirect("/");
  }else{
  res.render("list",{KindofDaay:"Today",NewListItem:foundItems});}
});

});
app.get("/:customlistname",function(req,res){
  const customlistname=req.params.customlistname;
  List.findOne({name:customlistname},function(err,foundlist){
    if(!err){if(!foundlist){  const list=new List({
        name:customlistname,listitems:item
      });
      list.save();
    res.redirect("/"+customlistname);}else {
        res.render("list",{KindofDaay:foundlist.name,NewListItem:foundlist.items})
      }}
  })

});


app.post("/",function(req,res){
  var value=req.body.newItem;
 const item=new Item({name:value});
 item.save();
  res.redirect("/");
})
app.post("/delete",function(req,res){
  Item.findByIdAndRemove(req.body.checkbox,function(err){});
  res.redirect("/");
});



app.listen(3000,function(){
  console.log("server is started");
});
