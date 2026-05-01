import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import fileUpload from 'express-fileupload';
import cors from 'cors';
import {dbConnection} from './database/db.js'

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"./temp/"
    })
)

dbConnection();

export default app;


