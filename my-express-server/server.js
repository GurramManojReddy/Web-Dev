const express=require("express");
const app=express();
app.get("/",function(req,res){
  res.send("Hello jackass");
});
app.get("/contact",function(req,res){
  res.send("Contact me at:81060874770;my mail id:gurrammanojreddy850@gmail.com");
});
app.get("/about",function(req,res){
  res.send("I am Gurram Manoj Redy.I am doing my degree in IIt kharaghpur.I am in Electrical Department");
});
app.listen(3000,function(){console.log("started the server");});
