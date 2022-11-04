const express= require('express');
const app= express();


app.get('/user-list',(req,res)=>{
    let result={
        id:1,
        name:'Emp list'
    }
    res.status(200).json(result);
})

app.get('/user-details',(req,res)=>{
    let result={
        id:1,
        name:'Emp details'
    }
    res.status(200).json(result);
})



app.listen(4002,()=>{
    console.log("listining at prot 4000");
})
