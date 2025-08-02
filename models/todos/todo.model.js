import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User" // user model which name use in export user model.
    },
    subToods:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]
},{timestamps:true});

export const Todo=mongoose.model('Todo,todoSchema');
