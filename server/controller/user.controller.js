import {catchAsyncError} from '../middlewares/catchAsyncError.middleware.js'


export const signup = catchAsyncError(async(req,res,next)=>{})
export const signin = catchAsyncError(async(req,res,next)=>{})
export const signout = catchAsyncError(async(req,res,next)=>{})
export const getUser = catchAsyncError(async(req,res,next)=>{})
export const updateProfile = catchAsyncError(async(req,res,next)=>{})