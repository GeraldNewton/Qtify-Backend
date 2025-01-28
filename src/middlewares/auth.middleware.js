import { clerkClient } from "@clerk/express";

export const protectRoute=async(req,res,next)=>{
    if(!req.auth.userId)
    return res.status(401).json({message:"Unauthorized - you must be logged in"})
    
    next();
}

export const requireAdmin=async(req,res,next)=>{
    try{
        const currUser=await clerkClient.users.getUser(req.auth.userId);
        const isAdmin=process.env.ADMIN_EMAIL===currUser.primaryEmailAddress?.emailAddress;
        if(!isAdmin)
        return res.status(403).json({message:"Unauthorized - -you must be an Admin"})
        next()
    }catch(e){
        console.log("error in requireAdmin",e)
        next(e);
    }
}