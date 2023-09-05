import mongoose from "mongoose";

const signupSchema =mongoose.Schema ({


    fname:String,
    lname:String,
    email:String,
    password:String,
    city:String,
    dob:String

})



if(mongoose.models["SignUpUsers"]){

    delete mongoose.models["SignUpUsers"]

}


export const signupusers = mongoose.model("SignUpUsers",signupSchema)
