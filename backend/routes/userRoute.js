const express = require('express');
const Model=require('../models/users')
const router=express();


// user registration 

router.post("/register",async (req, res) => {
   
    try {
      // Create a new user
      const { name, email, password } = req.body;
      const user = new Model({ name, email, password });
      await user.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
     res.status(400).json(error)
    }
  }
  )

  module.exports=router;