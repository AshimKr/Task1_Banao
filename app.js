const express = require('express');
require('./src/db/conn');
const regnData = require("./src/model/model");
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello");
});


app.post('/signup', async (req, res) => {
    try {
        const value = req.body;
        regnData.create(value, (error, rest) => {
            if (error) {
                res.send(error);
                console.log(error);
            }
            res.send(rest);
            console.log(rest);
        })
    } catch (e) {
        console.log(e);
    }
});


app.post('/login', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const dbName = await regnData.find({ username, password })

        console.log(typeof dbName);

        res.send(dbName);
        console.log(dbName);
    } catch (e) {
        res.send(e);
        console.log(e);
    }
})


app.post('/forgetpassword',async (req,res)=>{
    try {
        const username = req.body.username;
        const email = req.body.email;
        const newPassword = req.body.newPassword;

        const srcData = await regnData.findOneAndUpdate({ username, email },{$set: {"password": newPassword}},
        { 
            new: true
        });
        if(!srcData){
            res.send("invalid credintial");
        }else{
            res.send(srcData)
        }
        console.log(srcData);


    } catch (e) {
        console.log(e);
        res.send(e);
    }
})







app.listen(4500, () => {
    console.log('listing in port 4500');
})
