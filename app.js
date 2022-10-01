const express = require("express")
const app = express()
const mongoose= require("mongoose")

mongoose.connect("mongodb://localhost/todos",{
    useNewUrlParser: true
},(err)=>{
    if(!err){ console.log('Mongo Connected')}
    else { console.log('Error in DB Connection: '+err)}
}
)
app.use(express.urlencoded({ extended:true }))
app.use(express.static("public"))

app.set("view engine" ,"ejs")


app.use(require("./routes/index"))
app.use(require("./routes/todos"))


app.listen(5500, ()=>console.log("Started on port 3000"))