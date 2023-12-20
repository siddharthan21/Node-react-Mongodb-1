import mongoose from 'mongoose'
mongoose.connect("mongodb://localhost:27017/to-do-list").then(()=>{
    console.log("Connected");
}).catch(()=>{
    console.log("falied")
})

const newShema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    work:[
        
    ]
})

const con = mongoose.model("do",newShema)

// module.exports = con
export default con
