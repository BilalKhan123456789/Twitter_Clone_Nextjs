import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {dbconnect} from '../../config/db'
import { userPost } from "../../config/Models/UsersPost";


export async function POST(request,content){

    const data = await request.json()


    await mongoose.connect(dbconnect).then((res)=>{
        console.log("twitter Post connect")
    })

    const res = userPost(data)



    if(res!=""){
    
        const filter = await res.save()


        return NextResponse.json({
            data:filter,
            status:true,
            message:"Successfully Post Uploaded"

            })
        

    }else{
        return NextResponse.json({
            data:[],
            status:false,
            message:"No Post Uploaded"
            })
    }


 


}




export async function GET(){


await mongoose.connect(dbconnect).then((res)=>{
    console.log("get User Post")
})


const data =await userPost.find()


if(data==null){

    return NextResponse.json({
        data:{},
        status:false,
        message:"No data get"
    })

}else{
    return NextResponse.json({
        data:data,
        status:true,
        message:"finally Data get"
    })
}



}