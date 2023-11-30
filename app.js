const express=require('express');
const mongoose=require('mongoose');
const router= require("./routes/movie-routes");
const routers= require("./routes/review-routes");
const cors = require("cors");
const app=express();


//Middlewares
app.use(express.json());
app.use(cors());
app.use("/movie",router)
app.use("/review",routers)

mongoose.connect("mongodb+srv://admin:Kanishika23@cluster0.sjcpv5s.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("Connected to Database"))
 .then(()=>{
    app.listen(5000);
 })
 .catch((err)=> console.log(err));
