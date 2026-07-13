import {catchAsyncError} from '../middlewares/catchAsyncError.middleware.js'
import {User} from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {generateToken} from '../utilis/jwtToken.js'
import path from 'path';
import fs from 'fs';
export const signup = catchAsyncError(async(req,res,next)=>{

    const {fullName,email,password} = req.body;
    if(!fullName || !email || !password){
        return res.status(400).json({
            success:false,
            message:"Please provide all required fields"
        })
    }
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(!emailRegex.test(email)){
    return res.status(400).json({
        success:false,
        message:"Invalid email format",
    })
   }

   if(password.length < 8){
    return res.status(400).json({
        success:false,
        message:"Password must be at least 8 characters long."
    })
   }

   const isEmailAlreadyUsed = await User.findOne({email});
   if(isEmailAlreadyUsed){
    return res.status(400).json({
        success:false,
        message:"Email is already registered. Please choose a different email."
    })
   }

   const hashedPassword = await bcrypt.hash(password,10);

   const user = await User.create({
    fullName,
    email,
    password:hashedPassword,
    avatar:{
        public_id:"",
        url:"",
    }
   });

    generateToken(user,"User registered successfully",201,res);
})

export const signin = catchAsyncError(async(req,res,next)=>{
          const {email,password} = req.body;
          if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please provide email and password",
            })
          }
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           if(!emailRegex.test(email)){
           return res.status(400).json({
           success:false,
           message:"Invalid email format",
           })
          } 
          const user = await User.findOne({email});
          if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found with this email. Please register",
            })
          }
          const isPasswordMatched = await bcrypt.compare(password,user.password);
          if(!isPasswordMatched){
             return res.status(400).json({
                success:false,
                message:"Incorrect password. Please try again"
             })
          }
          generateToken(user,"User logged in successfully",200,res);
})

export const signout = catchAsyncError(async(req,res,next)=>{
    res.status(200).cookie("token","",{
        httpOnly:true,
        maxAge:0,
        sameSite:"strict",
        secure:process.env.NODE_ENV === "development" ? true : false,
      }).json({
        success:true,
        message:"User logged out successfully",
        
      })
})

export const getUser = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user._id);
    res.status(200).json({
        success:true,
        user,
    })
})

export const updateProfile = catchAsyncError(async(req,res,next)=>{
    const { fullName, email } = req.body;

const trimmedName = fullName?.trim();
const trimmedEmail = email?.trim();

if (!trimmedName || !trimmedEmail) {
    return res.status(400).json({
        success: false,
        message: "Full name and email can't be empty."
    });
}
    const avatar = req?.files?.avatar;
    let avatarUrl = "";
    if(avatar){
        try{
            const uploadDir = path.join(process.cwd(), 'uploads', 'avatars');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            
            // Delete old avatar if it exists (assuming it was locally stored)
            const oldAvatarUrl = req.user?.avatar?.url;
            if(oldAvatarUrl && oldAvatarUrl.includes('/uploads/avatars/')){
                const oldAvatarPath = path.join(process.cwd(), oldAvatarUrl.split(process.env.FRONTEND_URL)[1] || oldAvatarUrl.replace('http://localhost:5000', '')); // basic extraction
                if (fs.existsSync(oldAvatarPath)) {
                    fs.unlinkSync(oldAvatarPath);
                }
            }

            const fileName = `${Date.now()}-${avatar.name}`;
            const uploadPath = path.join(uploadDir, fileName);
            await avatar.mv(uploadPath);
            avatarUrl = `http://localhost:5000/uploads/avatars/${fileName}`;
            
        }catch(error){
            console.error("Error uploading avatar locally:",error);
            return res.status(500).json({
                success:false,
                message:"Failed to upload avatar. Please try again later."
            });
        }
    }

    let data ={
        fullName: trimmedName,
         email: trimmedEmail,
    }
    if(avatarUrl){
        data.avatar ={
            public_id: "",
            url: avatarUrl,
        }
    }

    let user = await User.findByIdAndUpdate(req.user._id,data,{
       returnDocument: "after",
        runValidators:true,
    })
    res.status(200).json({
        success:true,
        message:"Profile updated successfully",
        user,
    })
})
