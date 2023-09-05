import mongoose from "mongoose";


const postSchema = mongoose.Schema({

title:String,
date:String,
post:String,

})

if(mongoose.models["User_Posts"]){

    delete mongoose.models["User_Posts"]

}




export const userPost = mongoose.model("User_Posts",postSchema)