import jwt from 'jsonwebtoken'


export const generateToken = async (user,message,statusCode) =>{
      const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE,
      })
}