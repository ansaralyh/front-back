
const express = require('express');
const app = express();
const PORT = 4000;
const connectToDb = require('./config/connectDb');
const bodyParser = require('body-parser');

const index = require('./routes/index.route')

connectToDb();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/",index)


app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`)
})  
