const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;
app.use(express.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});


const navbar = require('./routes/frontend/navbar')
app.use(navbar,(err,res)=>{
    if(err){
        console.log(err)
    }
})