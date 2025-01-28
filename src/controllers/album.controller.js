import { Album } from "../models/album.model.js";
import {Song} from "../models/song.model.js"

export const getAllAlbums=async(req,res,next)=>{
    try{
        const albums=await Album.find();
        res.status(200).json(albums);

    }catch(e){
        console.log("error in getAllAlbums",e);
        next(e);
    }

}

export const getAlbumById=async(req,res,next)=>{
    try{
        const {albumId}=req.params;
        const album=await Album.findById(albumId).populate("songs");
        if(!album)
        return res.status(404).json({message:"album not found"});
        res.status(200).json(album);
    }catch(e){
        console.log("error in getAlbumById",e);
        next(e);
    }
}