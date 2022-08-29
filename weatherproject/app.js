const express = require("express");
const app = express();
const https = require("https");
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
const query=req.body.CityName;
const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=e79387d7992ae0d959647c1a1fdd742f&units=metric";
https.get(url, function(response) {
  console.log(response.statusCode);
  response.on("data", function(data) {
    const weatherData = JSON.parse(data);
    console.log(weatherData);
    const temp=weatherData.main.temp;
    const view=weatherData.weather[0].description;
    const icon=weatherData.weather[0].icon;
    const imageurl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
    res.write("the temperature is "+temp+" and it looks like "+view);
    res.write("<img src="+imageurl+">");
    res.send();
  });
});

});



app.listen(3000, function() {
  console.log("server is stated");
})
