//jshint eeversion : 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require('https');
const { url } = require("inspector");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    const first=req.body.first;
    const last= req.body.last;
    const mail=req.body.mail;
    
    const url = "https://us21.api.mailchimp.com/3.0/lists/80664fdd74"
    var data={
        members:[
            {
                email_address: mail,
                status : "subscribed",
                merge_fields:{
                    FNAME:first,
                    LNAME:last
                }
            }
        ]
    }
    var jsond = JSON.stringify(data);
    
    const options={
        method:"POST",
        auth:"likith:ad65b53a009e1614a51b496f681d4268-us21"
    }

    const request = https.request(url,options,function(response){
        if(response.statusCode === 200){
            res.send("Successfully Subscribed")
        }
        else{
            res.send("There was an error");
        }
        
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsond);
    request.end();
})

app.listen(3000,function(){
    console.log("Server is started at port 3000");
})

//API key= 
// ad65b53a009e1614a51b496f681d4268-us21

//list id= 
// 80664fdd74