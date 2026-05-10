import jwt from "jsonwebtoken";
import {User} from '../models/user.mode.js';
import {catchAsyncError} from './catchAsyncError.middleware.js';


export const isAuthenticated = catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({
            success:false,
            message:"User is not authenticated. Please sign in."
        })
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    if(!decoded){
        return res.status(500).json({
            success:false,
            message:"Token verification failes. Please sign in again.."
        })
    }
    const user = await User.findById(decoded.id);
    req.user=user;
    next();
})