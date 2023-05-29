const express = require('express');
const cors = require('cors');
const userRouter=require("./routes/userRoute")
const app=express();



// Middleware
app.use(express.json());
app.use(cors());

// routes 
app.use("/user",userRouter)

app.listen(5000,()=>{
    console.log('server is running');   
})