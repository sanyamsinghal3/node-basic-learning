import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true,
            unique:true,
            lowercase:true
        },
        email:{
            type: String,
            required:true,
            unique:true,
            lowercase:true
        },
        isActive:Boolean,
        password:{
            type:String,
            required:[true,"password is required"],
        }
    },{timestamps:true}
);
// in schema we can pass second parameter in schema that is timestamp for creatAt and UpdaredAt
export const User = mongoose.model("User",userSchema); 
// 1st paramter is modelName and 2nd is schemaName
// database name table name will be users


