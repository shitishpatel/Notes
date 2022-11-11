const express =  require('express');
const bodyParser = require("body-parser");
const app =  express();
const cors=require('cors');


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(cors());

const port = process.env.port || 8000;
const authRoute=require('./routes/auth-route');

app.use('/auth',authRoute);

app.get('/',(req,res)=>{
    res.send("Shitish")
})


app.listen(port, () => {
    console.log("server is connect:" , port)
})
