const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/",function(req,res){
  var num1=Number(req.body.Weight);
  var num2=Number(req.body.Height);
  var BMI=num1/(num2*num2);
  res.send("Your BMI is "+BMI);;
});
app.listen(3000,function(){
  console.log("server is started");
});
