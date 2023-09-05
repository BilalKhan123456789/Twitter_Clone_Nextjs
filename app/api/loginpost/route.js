import {NextResponse} from "next/server"
import mongoose from "mongoose"
import {dbconnect} from '../../config/db'
import {signupusers} from '../../config/Models/SignupSchema'



export async function POST(request){


    const data = await request.json()


await mongoose.connect(dbconnect).then(async(res)=>{
    console.log("login Post connect")
})


console.log(data)


const filter = await signupusers.findOne(data)


if(filter!=null){
    return NextResponse.json({
        data:filter,
        status:true,
        message:"working"
    
    })
}else{
    return NextResponse.json({
        message:"please enter correct Details",
        status:false
    
    })
}










}