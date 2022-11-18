const axios = require('axios');
const client=require('../database/databasepg');
const logger=require('../winston/logger');
const knex=require('../database/db');
var sample = {};


sample.getApplications = function (req) {
    return new Promise((resolve, reject) => {
        resolve("applications fetched");
    });
}


sample.getToken = function (ctx) {
    return axios.post("http://localhost:4000/api/login",{
                id:ctx.params.id,
                name:ctx.params.name,
            }).then((result) => {
                console.log(result.data);
                return result.data;
            }).catch((err) => { 
            });
}

sample.getDataStudent=function(ctx){
    return new Promise((resolve, reject) => {
        client.query(`Select * from student`,(err,res)=>{
            if(!err){
                resolve(res.rows);
                client.end;
            }else{
                reject(err.message);
                client.end;
            } 
        })
    });
}

sample.getDataTeacher=function(ctx){
    return new Promise((resolve, reject) => {
        client.query(`Select * from teacher`,(err,res)=>{
            if(!err){
                resolve(res.rows);
                client.end;
            }else{
                reject(err.message);
                client.end;
            }     
        })
    });
}

sample.addData=function(ctx){
    return new Promise((resolve, reject) => {
     const user = ctx.params;
        // console.log(user);
    let insertQuery = `insert into student(id, first_name, last_name, email,address,password) 
                       values(${user.id}, '${user.first_name}', '${user.last_name}', '${user.email}', '${user.address}', '${user.password}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            resolve('Insertion was successful')
        }
        else{ reject(err.message) }
    })
    client.end;
    });
    
}

sample.deleteData=function(ctx){
    return new Promise((resolve, reject) => {
        let insertQuery = `delete from student where id=${ctx.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            resolve('Deletion was successful')
        }
        else{ reject(err.message) }
    })
    client.end;
    });
}

sample.updateData=function(ctx){
    return new Promise((resolve, reject) => {
        let user = ctx.params;
    let updateQuery = `update student set 
                        id = '${user.id}',
                       first_name = '${user.first_name}',
                       last_name = '${user.last_name}',
                       email = '${user.email}',
                       address = '${user.address}',
                       password = '${user.password}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            resolve('Update was successful')
        }
        else{ reject(err.message) }
    })
    client.end;
    });
}


sample.getStudentById=function(ctx){
    return new Promise((resolve, reject) => {
        client.query(`Select * from student where id=${ctx.params.id}`, (err, result)=>{
            if(!err){
                logger.customerLogger.log('info',"student data by id");
                resolve(result.rows);
            }else{
                logger.customerLogger.log('error',"Error .......");
                reject(err.message);
            }
        });
        client.end;
    });
}


sample.addTeacherknex=function(ctx){
    return new Promise((resolve, reject) => {
        knex('teacher').insert({
            // id:req.body.id,
            first_name:ctx.params.first_name,
            last_name:ctx.params.last_name,
        }).then(()=>{
            knex.select().from('teacher').then((teacher)=>{
                logger.customerLogger.log('info',"add New employee");
                resolve("add New employee");
            }).catch((err) => { 
                logger.customerLogger.log('error',"Error .......");
                reject(err);
            });
        });
    });
}

sample.teacherDataknex=function(ctx){
    return new Promise((resolve, reject) => {
        knex.select().from('teacher').then((teacher)=>{
            logger.customerLogger.log('info',"teacher data .......");
            resolve(teacher);
            
        }).catch((err) => { 
            logger.customerLogger.log('error',"Error .......");
            reject(err);
        });
    });
}






module.exports = sample;
