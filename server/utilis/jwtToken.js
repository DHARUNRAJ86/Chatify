import jwt from "jsonwebtoken";

export const generateToken = async (user, message, statusCode, res) => {
    // ✅ Create token
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE || "7d",
        }
    );

    // ✅ Send cookie + response
    return res
        .status(statusCode)
        .cookie("token", token, {
            httpOnly: true,

            // ⏱ cookie expiry
            maxAge: (process.env.COOKIE_EXPIRE || 7) * 24 * 60 * 60 * 1000,

            // 🔥 VERY IMPORTANT FIXES
            sameSite: "lax",     // ✅ allow cross-origin (localhost:5173 → 5000)
            secure: false        // ✅ must be false for localhost (no HTTPS)
        })
        .json({
            success: true,
            message,
            token,
            user   // ✅ optional but useful (frontend can use directly)
        });
};