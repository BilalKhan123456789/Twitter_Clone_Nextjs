import { NextResponse } from "next/server";
import mongoose from "mongoose";

import { dbconnect } from "../../../config/db";
import { signupusers } from "../../../config/Models/SignupSchema";


export async function GET(request,content){

const data1 =content.params.id
// console.log(data1)


 await mongoose.connect(dbconnect).then(async(res)=>{
    console.log("get api connect")

 })

const f ={_id:data1}
 const data = await signupusers.findOne(f)

    return NextResponse.json({
data:data,
status:true,
message:"Get Api"
    
    })
}



export async function PUT(request,content){

const data = await request.json()

const id = content.params.id


await mongoose.connect(dbconnect).then((res)=>{
    console.log("put api connected")
})


const obj = {_id:id}

const filter = await  signupusers.findOneAndUpdate( obj,data)



return NextResponse.json({
    data:filter,
    status:true,
    message:"data Updated"
})



}

