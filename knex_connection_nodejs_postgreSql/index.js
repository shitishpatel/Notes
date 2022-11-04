const express = require('express');
const knex = require('./db/db');
const app =express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Api is working....');
});


app.get('/users',(req,res)=>{
    knex.select().from('users').then((users)=>{
        res.send(users);
    });
    // knex.raw('select * from users').then((users)=>{
    //     res.send(users.rows);
    // });
});


app.post('/users',(req,res)=>{
    knex('users').insert({
        // id:req.body.id,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
    }).then(()=>{
        knex.select().from('users').then((users)=>{
            res.send(users);
        });
    });

    // knex.raw('insert into users (first_name,last_name) values(?,?)',['first','last'] ).then(()=>{
    //     knex.select().from('users').then((users)=>{
    //                 res.send(users);
    //             });
    // });
});

app.put('/users/:id',(req,res) =>{
    const id=req.params.id;
    knex('users').where('id',req.params.id).update({first_name:req.body.first_name,last_name:req.body.last_name}).then(()=>{
        
        knex.select().from('users').then((users)=>{
            res.send(users);
        });
    });
});


app.delete('/users/:id',(req,res)=>{
    const id=req.params.id;
    knex('users').where('id',req.params.id).del().then(()=>{
        knex.select().from('users').then((users)=>{
            res.send(users);
        });
    });
});



app.listen('5000', ()=>{
    console.log('server started at port 5000');
});
