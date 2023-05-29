const mongoose = require('mongoose');
const url="mongodb+srv://jay:Rih8m8gGa6KKainx@cluster0.p3xusmt.mongodb.net/";
mongoose.connect(url,{
    useNewUrlParser:true,
}).then((result)=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})

module.exports=mongoose;