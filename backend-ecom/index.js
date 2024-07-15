const express = require("express")
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const routes = require("./src/routes");
const bodyParser = require("body-parser");



const app = express()
const port = process.env.PORT || 3001
dotenv.config()
app.use(bodyParser.json())
routes(app);



mongoose.connect(`mongodb+srv://huytruong:huytruong0502@cluster0.dfnidce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
    console.log('connect Db success')
})
.catch((err)=>{
    console.log(err)
})



app.listen(port,() =>{
    console.log('server is runing in port', +port);
})