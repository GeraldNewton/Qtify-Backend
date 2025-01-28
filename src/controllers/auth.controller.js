import {User} from "../models/user.model.js"

export const authCallback=async(req,res,next)=>{
    try{
        const {id,firstName,lastName,imageUrl}=req.body;
        const user=await User.findOne({clerkId:id})
        if(!user){
            await User.create({
                clerkId:id,
                fullName:`${firstName || ""} ${lastName || ""}`.trim(),
                imageUrl
            })
        }
        res.status(200).json({sucess:true})
    }catch(e){
        console.log("Error in Auth callBack",e);
        next(e);
    }
}