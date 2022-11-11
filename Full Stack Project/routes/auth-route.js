const router=require('express').Router();
const client=require('../models/user');
const bycrpyt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth=require('../middleware/check-auth');



router.post('/signup',(req,res)=>{
    bycrpyt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.json({success:false,message:"Hashing issue"})
        }else{
            const user = req.body;
            let insertQuery = `insert into shitish(id,name,password,email) 
                            values('${user.id}','${user.name}', '${hash}','${user.email}')`

            client.query(insertQuery, (err, result)=>{
                if(!err){
                    res.json({success:true,message:"Accout has been created"})
                }
                else{ res.json({success:false,message:err}) }
            })
            client.end;
        }
    })
})

router.post('/login',(req,res)=>{
    client.query((`Select * from shitish where id=${req.body.id}`)).then((result) => {
        let ids=result.rows[0].id;
        console.log(ids)
        const user=result.rows[0].password;
        bycrpyt.compare(req.body.password,user,(err,ret)=>{
            if(ret){
                const payload={
                    id:ids,
                    // password:user.password
                }
                const token = jwt.sign(payload,"my_secret_key");
                return res.json({success:true, token:token, message:"Login successful"})
            }else{
                return res.json({success:false,message:"password do not match"})
            }
        })
    }).catch((err) => {
        res.json({success:false,message:"Auth failed"})
    });

})


router.get('/users', (req, res)=>{

            client.query(`Select * from shitish`, (err, result)=>{
                if(!err){
                    res.send(result.rows);
                }
            });
            client.end;
    })

 


    router.delete('/users/:id', (req, res)=> {
        let insertQuery = `delete from shitish where id=${req.params.id}`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Deletion was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    })


    router.put('/users/:id', (req, res)=> {
        let user = req.body;
        let updateQuery = `update shitish
                           set id = '${user.id}',
                           name = '${user.name}',
                           password = '${user.password}',
                           email = '${user.email}'
                           where id = ${user.id}`
                           
    
        client.query(updateQuery, (err, result)=>{
            if(!err){
                res.send('Update was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    })

    router.get('/users/:id', (req, res)=>{
        client.query(`Select * from shitish where id=${req.params.id}`, (err, result)=>{
            if(!err){
                res.send(result.rows);
            }
        });
        client.end;
    })



router.get('/profile',checkAuth,(req,res)=>{
    const userid=req.userData.id;
    client.query((`Select * from shitish where id=${userid}`)).then((result) => {
        res.json({success:true,message:result.rows})
    }).catch((err) => {
        res.json({success:false,message:"Auth failed"})
    });
})


module.exports=router
