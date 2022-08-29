const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const request=require("request");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});
app.post("/",function(req,res){
  console.log(req.body.fname);
  console.log(req.body.lname);
  console.log(req.body.email);
  res.send("Thanks for signing up")
})
app.listen(3000,function(){
  console.log("server is started");
});
