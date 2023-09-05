import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { dbconnect } from "../../config/db";
import { signupusers } from "../../config/Models/SignupSchema";

export async function POST(request) {

const allData = await request.json()

  await mongoose.connect(dbconnect).then(async (res) => {
    console.log("Post api connected");
  });


  const check = await signupusers.findOne({email:allData.email})
console.log(check)
  

if(check==null){
  
      const filter = signupusers(allData);
      console.log(filter,"if condition working")



    const data1 = await filter.save();

    return NextResponse.json({
      data: data1,
      status: true,
      message: "Successfully Signup",
    });
    
  }else{
    return NextResponse.json({
        data:[],
        status:false,
        message:"user already registered"
    })
  }

 
}
