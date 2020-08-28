//jshint esversion:8
const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const {MongoClient}=require("mongodb");
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){

  async function createListing(client, newListing){
      const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
      console.log(`New listing created with the following id: ${result.insertedId}`);
  }
  async function main(){
    const uri="mongodb+srv://vijay:vijay@6326@cluster0.lvpby.mongodb.net/sampledb?retryWrites=true&w=majority";
    const client=new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology: true});

      try {
          await client.connect();
          await  createListing(client,
                  {
                    firstname:req.body.fname,
                    lastname : req.body.lname,
                    email : req.body.email
                  }
              );
          res.sendFile(__dirname+"/sucess.html");


      } catch (e) {
          console.error(e);
          res.sendFile(__dirname+"/failure.html");
      } finally {
          await client.close();
      }
  }
  main().catch(console.error);
});
app.post("/",function(req,res){
  res.redirect("/");
});
app.listen("5000",function(){
  console.log("get in touch");
});
