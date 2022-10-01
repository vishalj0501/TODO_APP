const todo = require("../models/todo");

const router= require("express").Router()

router.get("/",async(req,res)=>{

    const allTodos = await todo.find();

    // res.send("Working")
    
    res.render("index" , {todo: allTodos})
})

module.exports= router;