const express= require('express');
const path=require('path');
const app=express();

app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'./resource'))        //for Resource folder..

app.get('/',(req,res)=>{
    let params={
        name:"Shitish patel",
        id:2,
        blogs:[
            'node','ejs','pm2'
        ]
    }
    res.render('home',params)
})

// app.get('/data',(req,res)=>{
//     let params={
//         name:"Shitish patel",
//         id:2,
//         blogs:[
//             'node','ejs','pm2'
//         ]
//     }
//     res.render('home',params)
// })


app.listen(3001);
