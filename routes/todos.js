const router = require("express").Router()
// const Todo = require("../models/todo")
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');


router.post("/add/todo",(req,res)=>{

    const todo = req.body.todo;
    // console.log(todo)
    const newTodo = new Todo({todo})

    newTodo.save().then(()=>{
        console.log("Todo Added: "+todo)
        console.log(newTodo._id)
        res.redirect("/")
    }).catch((err)=> console.log(err))

})

.get('/delete/todo/_:id', (req, res) => {
    Todo.findByIdAndRemove(req.params._id,(err, doc) => {
        if (!err) {
            res.redirect('/');
        }
        else { console.log('Error :' + err); }
    });
});

module.exports = router;  