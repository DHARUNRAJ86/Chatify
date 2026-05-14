import {catchAsyncError} from '../middlewares/catchAsyncError.middleware.js'

export const getAllUsers = catchAsyncError(async(req,res,next)=>{
    const user = req.user;
    const filteredUsers = await User.find({_id:{$ne:user._id}});
})
export const getMessages = catchAsyncError(async(req,res,next)=>{})
export const sendMessage = catchAsyncError(async(req,res,next)=>{})