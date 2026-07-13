// ✅ 1. LOAD ENV VARIABLES FIRST (VERY IMPORTANT)
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

// ✅ 2. IMPORTS
import express from 'express';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import { dbConnection } from './database/db.js';
import userRouter from './routes/user.routes.js';
import messageRouter from './routes/message.routes.js';

// ✅ 3. INITIALIZE APP
const app = express();



// ✅ 5. MIDDLEWARES

app.use(cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "./temp/"
    })
);

// ✅ Serve static files
app.use("/uploads", express.static("uploads"));

// ✅ 6. ROUTES
app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", messageRouter);

// ✅ 7. DATABASE CONNECTION
dbConnection();

// ✅ 8. EXPORT
export default app;