const express = require("express")
require('./db/conn')
const app = express()
const bodyParser = require("body-parser")

const mySchema = require('./db/Myschema')

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser())

// post api
app.post('/v1/tasks',(req,res)=>{
    try {
        const result = new mySchema(req.body)
	    result.save();
	    res.json(result); 
        // res.send(result)
    } catch (error) {
        res.send(error)
    }    
});

// posy many api

app.post('/v1/tasks',(req,res)=>{
    try {
        const result = new mySchema.insertMany(req.body)
	    result.save();
	    res.json(result); 
        // res.send(result)
    } catch (error) {
        res.send(error)
    }    
});

// get api 
app.get("/v1/tasks", async (req,res)=>{
    try{
        let id = req.params.id;
        const result = await mySchema.find();
        res.status(201).json({
            error: "There is no task at that id",
            result
        });
    }catch(err){
        res.status(404).json({
            status:"Failed",
            message:err.message
        })
    }
})

// delete api
app.delete('v1/tasks/:id' , async (req ,res)=>{
    try{
        const id = req.params.id;
        const deleteTask = await Student.mySchema(req.params.id)
        if(!req.params.id){
            return res.status(400).send()
        }
        res.send(deleteTask)
    }catch(e){
        res.status(404).send(e)
    }
})

// edit api

app.patch('v1/tasks/:id' , async (req ,res) =>{
    try{
        const _id = req.params.id;
        const updateStudents = await Student.mySchema(_id , req.body ,{
            new : true
        });
        res.send(updateStudents);
    }catch(e){
        res.status(404).send(e)
    }
})

app.listen(3000 , ()=>{console.log("this server is fire on 3000")})