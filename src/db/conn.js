const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/regRegnApi',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(console.log("database Connected")).catch((e)=>{
    console.log("something is wrong in DB connection");
    console.log(e);
})