import {Song} from "../models/song.model.js"

export const getAllSongs=async(req,res,next)=>{
    try{
        // -1 descending order
        // 1 ascending order
        const songs=await Song.find().sort({createdAt:-1});
        res.status(200).json(songs);
    }catch(e){
        console.log("error in getAllSongs",e);
        next(e);
    }
}

export const getFeaturedSongs=async(req,res,next)=>{
    try{
        const songs=await Song.aggregate([
            {
                $sample:{size:6}
            },
            {
                $project:{
                    _id:1,
                    title:1,
                    artist:1,
                    imageUrl:1,
                    audioUrl:1,
                }
            }
        ])
        res.status(200).json(songs)

    }catch(e){
        console.log("error in getFeaturedSongs",e);
        next(e);
    }
}

export const getMadeForYouSongs=async(req,res,next)=>{
    try{
        const songs=await Song.aggregate([
            {
                $sample:{size:4}
            },
            {
                $project:{
                    _id:1,
                    title:1,
                    artist:1,
                    imageUrl:1,
                    audioUrl:1,
                }
            }
        ])
        res.status(200).json(songs)

    }catch(e){
        console.log("error in getMadeForYouSongs",e);
        next(e);
    }
}

export const getTrendingSongs=async(req,res,next)=>{
    const songs=await Song.aggregate([
        {
            $sample:{size:4}
        },
        {
            $project:{
                _id:1,
                title:1,
                artist:1,
                imageUrl:1,
                audioUrl:1,
            }
        }
    ])
    res.status(200).json(songs)
    try{

    }catch(e){
        console.log("error in getTrendingSongs",e);
        next(e);
    }
}