const mongoose = require("mongoose");
// var autoIncrement = require('mongoose-auto-increment'); 

const myschem = new mongoose.Schema({ 
    
   payload : [
    {
    id: {type : Number},
    productID : {type : Number},
    quantity : {type : Number}
    }
    ]
})

// counter schema

// const counterSchema ={
//     id:{
//         type:String
//     },
//     seq:{
//         type:Number
//     }
// }

// const counterModel = mongoose.model("counter" , counterSchema)

const myModel = mongoose.model("myModel" , myschem )

module.exports = myModel

